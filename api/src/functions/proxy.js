const { app } = require('@azure/functions');
const crypto = require('node:crypto');

// ───────────────────────── Config ─────────────────────────
const REPO = process.env.GITHUB_REPO || 'heisenberg-alt/build-2026';
const BRANCH = process.env.GITHUB_BRANCH || 'main';
const RELEASE_TAG = 'latest-decks';

// Only these files may be committed through the proxy.
const ALLOWED_FILES = new Set([
  'build-2026-customer-deck-business.md',
  'build-2026-customer-deck-mixed.md',
  'build-2026-ai-customer-deck.md',
]);
const MAX_CONTENT_BYTES = 1024 * 1024; // 1 MB — deck markdown is ~50 KB

// ───────────────────────── Helpers ─────────────────────────
function passcodeOk(supplied) {
  const expected = process.env.EDITOR_PASSCODE || '';
  if (!expected || typeof supplied !== 'string') return false;
  // Timing-safe comparison over fixed-length digests
  const a = crypto.createHash('sha256').update(supplied).digest();
  const b = crypto.createHash('sha256').update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

async function gh(path, init = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_PAT}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'build-2026-deck-proxy',
      ...(init.headers || {}),
    },
  });
  return res;
}

function json(status, body) {
  return { status, jsonBody: body };
}

const unauthorized = () => json(401, { error: 'Invalid or missing passcode' });

// ───────────────────────── POST /api/commit ─────────────────────────
// Body: { passcode, file, content } → { sha }
app.http('commit', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    let body;
    try { body = await request.json(); } catch { return json(400, { error: 'Invalid JSON body' }); }
    if (!passcodeOk(body.passcode)) return unauthorized();

    const file = String(body.file || '');
    if (!ALLOWED_FILES.has(file)) return json(400, { error: `File not allowed: ${file}` });
    const content = String(body.content || '');
    if (!content.trim()) return json(400, { error: 'Empty content' });
    if (Buffer.byteLength(content, 'utf8') > MAX_CONTENT_BYTES) return json(413, { error: 'Content too large' });

    // Get current blob SHA (file should exist; 404 → create)
    let sha;
    const cur = await gh(`/repos/${REPO}/contents/${file}?ref=${BRANCH}`);
    if (cur.ok) sha = (await cur.json()).sha;
    else if (cur.status !== 404) return json(502, { error: `GitHub read failed (${cur.status})` });

    const put = await gh(`/repos/${REPO}/contents/${file}`, {
      method: 'PUT',
      body: JSON.stringify({
        message: `Edit ${file} via deck editor (proxy)`,
        content: Buffer.from(content, 'utf8').toString('base64'),
        branch: BRANCH,
        ...(sha ? { sha } : {}),
      }),
    });
    if (!put.ok) {
      const detail = await put.json().catch(() => ({}));
      context.error('Commit failed', put.status, detail.message);
      return json(502, { error: `GitHub commit failed (${put.status}): ${detail.message || ''}` });
    }
    const out = await put.json();
    return json(200, { sha: out.commit.sha });
  },
});

// ───────────────────────── GET /api/build-status ─────────────────────────
// Query: passcode, sha → { found, status, conclusion, html_url }
app.http('build-status', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (request) => {
    const passcode = request.query.get('passcode');
    if (!passcodeOk(passcode)) return unauthorized();
    const sha = request.query.get('sha') || '';
    if (!/^[0-9a-f]{7,40}$/i.test(sha)) return json(400, { error: 'Invalid sha' });

    const res = await gh(`/repos/${REPO}/actions/runs?head_sha=${sha}&per_page=5`);
    if (!res.ok) return json(502, { error: `GitHub API error (${res.status})` });
    const runs = (await res.json()).workflow_runs || [];
    if (runs.length === 0) return json(200, { found: false });
    const run = runs[0];
    return json(200, {
      found: true,
      status: run.status,
      conclusion: run.conclusion,
      html_url: run.html_url,
    });
  },
});

// ───────────────────────── GET /api/pptx ─────────────────────────
// Query: passcode, file (the .md name) → streams the matching PPTX from the latest-decks release
app.http('pptx', {
  methods: ['GET'],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    const passcode = request.query.get('passcode');
    if (!passcodeOk(passcode)) return unauthorized();
    const file = String(request.query.get('file') || '');
    if (!ALLOWED_FILES.has(file)) return json(400, { error: `File not allowed: ${file}` });
    const assetName = file.replace(/\.md$/, '.pptx');

    const rel = await gh(`/repos/${REPO}/releases/tags/${RELEASE_TAG}`);
    if (!rel.ok) return json(502, { error: `Release lookup failed (${rel.status})` });
    const asset = ((await rel.json()).assets || []).find(a => a.name === assetName);
    if (!asset) return json(404, { error: `No built PPTX named ${assetName} on the ${RELEASE_TAG} release` });

    const bin = await gh(`/repos/${REPO}/releases/assets/${asset.id}`, {
      headers: { Accept: 'application/octet-stream' },
    });
    if (!bin.ok) {
      context.error('Asset download failed', bin.status);
      return json(502, { error: `Asset download failed (${bin.status})` });
    }
    return {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': `attachment; filename="${assetName}"`,
      },
      body: Buffer.from(await bin.arrayBuffer()),
    };
  },
});
