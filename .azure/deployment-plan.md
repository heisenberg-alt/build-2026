# Deployment Plan — Build 2026 Deck Editor Commit Proxy

> Status: DRAFT — awaiting user approval

## Goal
Let a few trusted people (no GitHub accounts) use the deck editor's "Commit & build PPTX" and
"Download PPTX" features. An Azure Function holds a repo-scoped GitHub PAT server-side; users
authenticate with a shared passcode instead of a token.

## Mode
MODIFY — existing static site (GitHub Pages) + NEW serverless API project in `api/`.

## Architecture
- **Azure Functions (Flex Consumption, Node.js 22)** — single HTTP-triggered function `deck-proxy`
  - `POST /api/commit` — body: `{ passcode, file, content }` → validates passcode + allowlisted file,
    commits via GitHub Contents API using PAT from app settings, returns commit SHA
  - `GET /api/build-status?sha=...&passcode=...` — polls Actions run status for that SHA
  - `GET /api/pptx?file=...&passcode=...` — streams/redirects the PPTX asset from `latest-decks` release
- **Secrets**: `GITHUB_PAT`, `EDITOR_PASSCODE` as Function App settings (Key Vault optional later)
- **CORS**: allow `https://heisenberg-alt.github.io` + localhost for testing
- **editor.html**: add proxy mode — if a proxy URL is configured, prompt for passcode instead of PAT

## Steps
- [ ] 1. Scaffold `api/` Azure Functions project (Node 22, v4 programming model)
- [ ] 2. Implement commit / build-status / pptx endpoints
- [ ] 3. Bicep infra (`infra/`) — Flex Consumption plan, storage, app insights, managed identity
- [ ] 4. azure.yaml for azd
- [ ] 5. Update editor.html to support proxy + passcode flow
- [ ] 6. Validate (azure-validate)
- [ ] 7. Deploy (azure-deploy), set GITHUB_PAT + EDITOR_PASSCODE app settings
- [ ] 8. Test end-to-end from editor

## Azure Context
- Subscription: TBD (ask user)
- Location: TBD (ask user)
- Environment name: TBD
