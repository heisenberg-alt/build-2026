---
marp: true
theme: default
paginate: true
size: 16:9
backgroundColor: '#f5f6fa'
color: '#1a1f36'
style: |
  :root {
    /* Surfaces — light, warm-cool off-white like microsoft.com */
    --bg:#f5f6fa; --bg-2:#eef0f7;
    --surface:#ffffff; --surface-2:#fafbfd;
    --border:rgba(20,30,60,0.10); --border-2:rgba(20,30,60,0.22);
    --shadow-sm:0 1px 2px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04);
    --shadow-md:0 6px 18px -8px rgba(15,23,42,0.18), 0 2px 6px rgba(15,23,42,0.06);
    --shadow-lg:0 24px 60px -24px rgba(15,23,42,0.28), 0 6px 16px -6px rgba(15,23,42,0.10);

    /* Ink */
    --text:#1a1f36; --text-dim:#4a5070; --text-mute:#7a8099;

    /* Microsoft brand */
    --ms-blue:#0078D4; --ms-blue-deep:#003E92;
    --ms-purple:#5C2D91; --ms-purple-2:#8661C5;
    --ms-teal:#008575; --ms-teal-2:#00B294;
    --ms-cyan:#00A4EF; --ms-cyan-2:#50E6FF;
    --ms-orange:#F25022; --ms-yellow:#FFB900; --ms-green:#7FBA00;

    /* Lens accents */
    --ai:var(--ms-purple); --ai-2:var(--ms-purple-2);
    --data:var(--ms-teal); --data-2:var(--ms-teal-2);
    --infra:var(--ms-blue); --infra-2:var(--ms-cyan);
  }
  section {
    font-family:'Segoe UI Variable','Segoe UI','Inter',system-ui,-apple-system,Helvetica,Arial,sans-serif;
    background:var(--bg); color:var(--text);
    padding:46px 62px 54px 62px; font-size:18px; line-height:1.44;
    position:relative; overflow:hidden;
  }
  section::before {
    content:""; position:absolute; top:0; left:0; right:0; height:5px;
    background:linear-gradient(90deg,var(--ms-orange) 0%,var(--ms-yellow) 25%,var(--ms-green) 50%,var(--ms-cyan) 75%,var(--ms-purple) 100%);
  }
  section.ai::before    { background:linear-gradient(90deg,var(--ms-purple),var(--ms-purple-2)); }
  section.data::before  { background:linear-gradient(90deg,var(--ms-teal),var(--ms-teal-2)); }
  section.infra::before { background:linear-gradient(90deg,var(--ms-blue),var(--ms-cyan)); }

  h1 { color:var(--text); font-weight:700; letter-spacing:-0.025em; font-size:1.85em; margin:0 0 8px 0; }
  h2 { color:var(--text); font-weight:500; font-size:1.22em; margin:0 0 12px 0; letter-spacing:-0.01em; color:var(--text-dim); }
  h3 { color:var(--ms-blue); font-weight:700; font-size:0.74em; margin:0 0 6px 0; letter-spacing:0.12em; text-transform:uppercase; }
  h4 { color:var(--text); font-weight:600; font-size:0.94em; margin:0 0 4px 0; letter-spacing:-0.005em; }
  p  { color:var(--text-dim); margin:5px 0; }
  strong { color:var(--text); font-weight:600; }
  em { color:var(--ms-purple); font-style:normal; font-weight:600; }
  code {
    background:rgba(0,120,212,0.08); color:var(--ms-blue-deep);
    border:1px solid rgba(0,120,212,0.20); padding:1px 6px; border-radius:5px;
    font-size:0.85em; font-family:'Cascadia Code','JetBrains Mono','Consolas',monospace;
  }
  blockquote {
    border:1px solid var(--border); border-left:4px solid var(--ms-purple);
    background:linear-gradient(90deg,rgba(92,45,145,0.06),rgba(92,45,145,0.01));
    padding:12px 18px; margin:12px 0; color:var(--text); border-radius:10px;
    box-shadow:var(--shadow-sm);
  }
  blockquote p { color:var(--text); margin:0; }
  table { width:100%; border-collapse:collapse; font-size:0.82em; margin:8px 0;
    background:var(--surface); border-radius:10px; overflow:hidden;
    box-shadow:var(--shadow-sm); border:1px solid var(--border); }
  th, td { border-bottom:1px solid var(--border); padding:10px 12px; text-align:left; color:var(--text-dim); }
  th { color:var(--text); font-weight:600; background:rgba(0,120,212,0.05); letter-spacing:0.02em; }
  td strong { color:var(--text); }
  tr:last-child td { border-bottom:none; }

  /* ─── COVER ─────────────────────────────────────────── */
  section.cover {
    background:
      radial-gradient(900px 540px at 88% -5%,rgba(92,45,145,0.22),transparent 60%),
      radial-gradient(800px 480px at -5% 105%,rgba(0,164,239,0.18),transparent 60%),
      radial-gradient(600px 360px at 60% 95%,rgba(242,80,34,0.10),transparent 60%),
      var(--bg);
  }
  section.cover h1 {
    font-size:3.3em; line-height:1.0; letter-spacing:-0.04em;
    background:linear-gradient(120deg,#0078D4 0%,#5C2D91 50%,#F25022 100%);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
    margin-bottom:14px;
  }
  section.cover h2 { color:var(--text-dim); font-weight:500; font-size:1.3em; }
  section.cover h3 { color:var(--ms-purple); }

  /* ─── LENS DIVIDER ──────────────────────────────────── */
  section.lens {
    background:
      radial-gradient(1100px 700px at 88% 25%,var(--glow,rgba(92,45,145,0.18)),transparent 60%),
      radial-gradient(700px 500px at 5% 105%,rgba(0,120,212,0.10),transparent 60%),
      var(--bg);
  }
  section.lens.ai    { --glow:rgba(92,45,145,0.20); }
  section.lens.data  { --glow:rgba(0,178,148,0.20); }
  section.lens.infra { --glow:rgba(0,120,212,0.20); }
  section.lens .lens-num {
    position:absolute; right:54px; top:8px;
    font-size:18em; font-weight:900; line-height:0.85; letter-spacing:-0.08em;
    color:var(--lens-c,#5C2D91); opacity:0.07;
  }
  section.lens.data  .lens-num { color:var(--ms-teal); }
  section.lens.infra .lens-num { color:var(--ms-blue); }
  section.lens h1 {
    font-size:3.7em; letter-spacing:-0.04em; line-height:1.0; margin-top:56px;
    background:linear-gradient(120deg,var(--text) 0%,var(--lens-c,#5C2D91) 100%);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
  }
  section.lens.ai    h1 { --lens-c:#5C2D91; }
  section.lens.data  h1 { --lens-c:#008575; }
  section.lens.infra h1 { --lens-c:#0078D4; }
  section.lens h2 { color:var(--text-dim); font-weight:500; font-size:1.32em; max-width:74%; }
  section.lens .stat-row { display:flex; gap:36px; margin-top:30px; }
  section.lens .stat-row > div b {
    display:block; font-size:2.8em; font-weight:800; line-height:1; letter-spacing:-0.035em;
    background:linear-gradient(135deg,var(--text),var(--lens-c,#5C2D91));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
  }
  section.lens.data  .stat-row > div b { background:linear-gradient(135deg,var(--text),#008575); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  section.lens.infra .stat-row > div b { background:linear-gradient(135deg,var(--text),#0078D4); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  section.lens .stat-row > div span {
    color:var(--text-mute); font-size:0.72em;
    letter-spacing:0.10em; text-transform:uppercase; font-weight:600;
  }

  /* ─── HERO SPREAD ───────────────────────────────────── */
  section.hero-spread {
    padding:0; display:grid; grid-template-columns:46% 54%;
    background:var(--bg);
  }
  section.hero-spread .hero-img {
    width:100%; height:100%; min-height:720px;
    background-size:cover; background-position:center;
    position:relative;
  }
  section.hero-spread .hero-img::after {
    content:""; position:absolute; inset:0;
    background:linear-gradient(90deg,transparent 60%,var(--bg) 100%);
  }
  section.hero-spread .hero-content {
    padding:56px 56px 52px 46px; display:flex; flex-direction:column; justify-content:center;
    background:
      radial-gradient(700px 500px at 95% 0%,var(--hero-glow,rgba(92,45,145,0.14)),transparent 70%),
      var(--bg);
  }
  section.hero-spread.ai    .hero-content { --hero-glow:rgba(92,45,145,0.16); }
  section.hero-spread.data  .hero-content { --hero-glow:rgba(0,178,148,0.16); }
  section.hero-spread.infra .hero-content { --hero-glow:rgba(0,120,212,0.18); }
  section.hero-spread h1 {
    font-size:2.55em; line-height:1.02; letter-spacing:-0.035em;
    background:linear-gradient(120deg,var(--text) 0%,var(--hero-text,#5C2D91) 100%);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
  }
  section.hero-spread.ai    { --hero-text:#5C2D91; }
  section.hero-spread.data  { --hero-text:#008575; }
  section.hero-spread.infra { --hero-text:#0078D4; }
  section.hero-spread h1 + p { color:var(--text-dim); font-size:1.02em; margin-top:6px; }
  section.hero-spread .hero-facts {
    margin-top:18px; display:grid; grid-template-columns:1fr 1fr; gap:10px;
  }
  section.hero-spread .hero-facts > div {
    background:var(--surface); border:1px solid var(--border);
    border-radius:10px; padding:12px 14px; box-shadow:var(--shadow-sm);
  }
  section.hero-spread .hero-facts b {
    display:block; color:var(--text); font-size:1.05em; letter-spacing:-0.01em;
  }
  section.hero-spread .hero-facts span {
    color:var(--text-mute); font-size:0.80em;
  }
  section.hero-spread .hero-link {
    margin-top:18px; padding-top:12px; border-top:1px dashed var(--border);
    font-family:'Cascadia Code','JetBrains Mono','Consolas',monospace;
    font-size:0.76em; color:var(--text-mute);
  }
  section.hero-spread .hero-link::before { content:"↗ "; color:var(--ms-blue); font-weight:700; }

  /* ─── PILL ──────────────────────────────────────────── */
  .pill {
    display:inline-block; padding:5px 13px; border-radius:999px;
    background:var(--surface); border:1px solid var(--border-2);
    color:var(--text); font-size:0.62em; font-weight:700;
    letter-spacing:0.14em; text-transform:uppercase; margin-bottom:12px;
    box-shadow:var(--shadow-sm);
  }
  .pill.ai    { color:#FFF; border-color:transparent; background:linear-gradient(135deg,#5C2D91,#8661C5); }
  .pill.data  { color:#FFF; border-color:transparent; background:linear-gradient(135deg,#008575,#00B294); }
  .pill.infra { color:#FFF; border-color:transparent; background:linear-gradient(135deg,#0078D4,#00A4EF); }
  .pill.brand { color:#FFF; border-color:transparent; background:linear-gradient(135deg,#0078D4,#5C2D91); }
  .pill.tdm   { color:#FFF; border-color:transparent; background:linear-gradient(135deg,#F25022,#FFB900); }

  /* ─── TILES ─────────────────────────────────────────── */
  .tiles { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:6px; }
  .tiles.three { grid-template-columns:1fr 1fr 1fr; }
  .tiles.four  { grid-template-columns:1fr 1fr 1fr 1fr; }
  .tile {
    background:var(--surface);
    border:1px solid var(--border);
    border-radius:14px; padding:14px 16px;
    position:relative; display:flex; flex-direction:column;
    box-shadow:var(--shadow-sm);
    transition:box-shadow .2s;
  }
  .tile.media { padding:0 0 12px 0; overflow:hidden; }
  .tile.media .thumb {
    width:100%; height:130px; object-fit:cover; object-position:center 35%;
    display:block; border-bottom:1px solid var(--border);
  }
  .tile.media .body { padding:12px 16px 0 16px; flex:1; }
  .tile h4 { color:var(--text); margin:0 0 4px 0; font-size:0.95em; letter-spacing:-0.01em; line-height:1.2; }
  .tile p  { color:var(--text-dim); margin:0; font-size:0.80em; line-height:1.38; }
  .tile.accent-ai      { border-top:3px solid var(--ms-purple); }
  .tile.accent-data    { border-top:3px solid var(--ms-teal); }
  .tile.accent-infra   { border-top:3px solid var(--ms-blue); }
  .tile.accent-windows { border-top:3px solid var(--ms-blue); }
  .tile.accent-quantum { border-top:3px solid var(--ms-yellow); }
  .tile.accent-storage { border-top:3px solid var(--ms-orange); }
  .tile.glow { box-shadow:var(--shadow-md); }
  .tile.glow.accent-ai    { border-top-color:var(--ms-purple); box-shadow:var(--shadow-md),0 0 0 1px rgba(92,45,145,0.10); }
  .tile.glow.accent-data  { border-top-color:var(--ms-teal);   box-shadow:var(--shadow-md),0 0 0 1px rgba(0,133,117,0.10); }
  .tile.glow.accent-infra { border-top-color:var(--ms-blue);   box-shadow:var(--shadow-md),0 0 0 1px rgba(0,120,212,0.10); }

  .tile .link {
    margin-top:auto; padding-top:8px;
    font-family:'Cascadia Code','JetBrains Mono','Consolas',monospace; font-size:0.60em;
    color:var(--text-mute); border-top:1px dashed var(--border);
    word-break:break-all; letter-spacing:0.02em;
  }
  .tile.media .link { margin:8px 16px 0 16px; }
  .tile .link::before { content:"↗ "; color:var(--ms-blue); font-weight:700; }

  /* ─── WHY CALLOUT ───────────────────────────────────── */
  .why {
    margin-top:12px; padding:11px 16px;
    border:1px solid var(--border); border-left:4px solid var(--ms-purple);
    background:linear-gradient(90deg,rgba(92,45,145,0.06),rgba(92,45,145,0));
    border-radius:8px;
    color:var(--text); font-size:0.82em;
    box-shadow:var(--shadow-sm);
  }
  .why b { color:var(--ms-purple); letter-spacing:0.10em; font-size:0.80em; text-transform:uppercase; margin-right:6px; font-weight:700; }

  /* ─── LANE ──────────────────────────────────────────── */
  .lane { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; margin-top:6px; }
  .lane > div {
    background:var(--surface);
    border:1px solid var(--border); border-radius:14px; padding:18px 20px;
    position:relative; box-shadow:var(--shadow-sm);
  }
  .lane > div.l-ai    { border-top:4px solid var(--ms-purple); --lane-c:#5C2D91; }
  .lane > div.l-data  { border-top:4px solid var(--ms-teal);   --lane-c:#008575; }
  .lane > div.l-infra { border-top:4px solid var(--ms-blue);   --lane-c:#0078D4; }
  .lane h3 { color:var(--text); font-size:0.66em; letter-spacing:0.14em; text-transform:uppercase;
    margin:0 0 8px 0; opacity:0.95; }
  .lane h3 .dot { display:inline-block; width:10px; height:10px; border-radius:999px;
    margin-right:8px; vertical-align:middle; }
  .lane .ai-dot    { background:var(--ms-purple); box-shadow:0 0 10px rgba(92,45,145,0.50); }
  .lane .data-dot  { background:var(--ms-teal);   box-shadow:0 0 10px rgba(0,133,117,0.50); }
  .lane .infra-dot { background:var(--ms-blue);   box-shadow:0 0 10px rgba(0,120,212,0.50); }
  .lane h4 { font-size:1.05em; color:var(--text); margin:0 0 6px 0; letter-spacing:-0.01em; }
  .lane p  { color:var(--text-dim); margin:0; font-size:0.80em; }
  .lane .count { font-size:2.8em; font-weight:800; letter-spacing:-0.04em; line-height:1;
    background:linear-gradient(135deg,var(--text),var(--lane-c,#5C2D91));
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
    display:block; margin-bottom:4px; }

  /* ─── DIAGRAM ───────────────────────────────────────── */
  .diagram {
    margin-top:8px; background:var(--surface);
    border:1px solid var(--border); border-radius:14px;
    padding:18px 22px; display:flex; justify-content:center;
    box-shadow:var(--shadow-sm);
  }
  .diagram svg { width:100%; max-width:1100px; height:auto; }

  /* ─── SCOREBOARD ────────────────────────────────────── */
  .scoreboard {
    display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:14px;
  }
  .scoreboard > div {
    background:var(--surface);
    border:1px solid var(--border); border-radius:16px;
    padding:22px 20px; position:relative; overflow:hidden;
    box-shadow:var(--shadow-md);
  }
  .scoreboard > div::after {
    content:""; position:absolute; right:-30px; top:-30px; width:130px; height:130px;
    background:radial-gradient(circle,var(--sc,rgba(92,45,145,0.18)),transparent 70%);
    border-radius:50%;
  }
  .scoreboard > div.s-ai    { --sc:rgba(92,45,145,0.18); border-top:4px solid var(--ms-purple); }
  .scoreboard > div.s-data  { --sc:rgba(0,178,148,0.18); border-top:4px solid var(--ms-teal); }
  .scoreboard > div.s-infra { --sc:rgba(0,120,212,0.20); border-top:4px solid var(--ms-blue); }
  .scoreboard > div.s-brand { --sc:rgba(242,80,34,0.18); border-top:4px solid var(--ms-orange); }
  .scoreboard b {
    display:block; font-size:3.0em; line-height:1; font-weight:800; letter-spacing:-0.04em;
    background:linear-gradient(135deg,#0078D4,#5C2D91 60%,#F25022);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
    margin-bottom:8px;
  }
  .scoreboard > div.s-ai    b { background:linear-gradient(135deg,#5C2D91,#8661C5); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  .scoreboard > div.s-data  b { background:linear-gradient(135deg,#008575,#00B294); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  .scoreboard > div.s-infra b { background:linear-gradient(135deg,#0078D4,#00A4EF); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  .scoreboard > div.s-brand b { background:linear-gradient(135deg,#F25022,#FFB900); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
  .scoreboard h5 { color:var(--text); font-size:0.90em; margin:0 0 4px 0; font-weight:600; letter-spacing:-0.005em; }
  .scoreboard p  { color:var(--text-dim); font-size:0.74em; margin:0; line-height:1.36; }

  /* ─── PULLQUOTE ─────────────────────────────────────── */
  section.pullquote {
    background:
      radial-gradient(900px 600px at 88% 18%,rgba(92,45,145,0.16),transparent 60%),
      radial-gradient(700px 500px at 10% 105%,rgba(0,120,212,0.12),transparent 60%),
      var(--bg);
    padding:60px 80px;
  }
  section.pullquote .quotemark {
    font-family:Georgia,'Times New Roman',serif; font-size:16em; line-height:0.7;
    color:rgba(92,45,145,0.14);
    position:absolute; left:50px; top:20px;
  }
  section.pullquote h1 {
    font-size:2.9em; line-height:1.10; letter-spacing:-0.025em; margin-top:60px;
    background:linear-gradient(120deg,var(--text) 0%,#5C2D91 100%);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
    max-width:1000px; font-weight:700;
  }
  section.pullquote .attrib {
    margin-top:24px; color:var(--text-dim); font-size:1.0em; letter-spacing:0.04em;
  }
  section.pullquote .attrib b { color:var(--text); }
  section.pullquote .annot {
    margin-top:28px; max-width:780px; color:var(--text);
    font-size:0.94em; line-height:1.5;
    border-left:4px solid var(--ms-purple); padding-left:18px;
  }

  /* ─── SIGIL ─────────────────────────────────────────── */
  .sigil {
    display:flex; align-items:center; gap:14px;
    margin-bottom:10px;
  }
  .sigil .glyph {
    width:54px; height:54px; border-radius:14px;
    display:flex; align-items:center; justify-content:center;
    font-family:'Cascadia Code','JetBrains Mono',monospace; font-weight:800;
    font-size:1.4em; color:#FFF;
    background:linear-gradient(135deg,#5C2D91,#0078D4);
    box-shadow:var(--shadow-md);
  }
  .sigil .name { color:var(--text); font-weight:700; font-size:1.05em; letter-spacing:-0.01em; }
  .sigil .sub  { color:var(--text-mute); font-size:0.70em; letter-spacing:0.10em; text-transform:uppercase; font-weight:600; }

  footer { color:var(--text-mute); font-size:0.7em; }
  section::after { color:var(--text-mute) !important; font-size:0.7em; }
---

<!-- _class: cover -->
<!-- _paginate: false -->

<span class="pill brand">Microsoft Build 2026 · Customer briefing</span>

# Microsoft Build 2026
## A new system for software
### What it means for <strong>Contoso Ltd</strong>

San Francisco · June 2–3, 2026 · curated for the conversation you actually want to have

A guided tour through every Build 2026 announcement — across three lenses: <strong style="color:#5C2D91">AI</strong> · <strong style="color:#008575">Data</strong> · <strong style="color:#0078D4">Infrastructure</strong>.

<div class="scoreboard">
<div class="s-ai"><b>17</b><h5>AI announcements</h5><p>Models · Foundry · agents · standards</p></div>
<div class="s-data"><b>4</b><h5>Data announcements</h5><p>One foundation for AI apps</p></div>
<div class="s-infra"><b>9</b><h5>Infra announcements</h5><p>Silicon · devices · frontier · storage</p></div>
<div class="s-brand"><b>30+</b><h5>Total moves</h5><p>One coherent system</p></div>
</div>

<!--
Presenter: {{PRESENTER}}  ·  Date: {{DATE}}
Use the scoreboard as the open. Promise the lens structure (AI · Data · Infra).
-->

---

<!-- _class: pullquote -->

<span class="quotemark">"</span>

# The system running AI matters more than any single model.

<div class="attrib"><b>Satya Nadella</b> · Build 2026 keynote · day-one opening</div>

<div class="annot">
The whole keynote was a system-design argument. The model isn't the product anymore — the platform around it is: <strong>the runtime, the memory plane, the data layer, the silicon, and the governance contracts.</strong> That's the through-line for the next 20 slides.
</div>

---

# What Contoso Ltd cares about → where Build 2026 lands

| Your priority | Where Build 2026 shows up | Tile to look at first |
|---|---|---|
| <strong>{{PRIORITY_1}}</strong> | Microsoft Foundry · MAI models · Foundry IQ · Autopilots | <em>AI lens</em> — slides 5–11 |
| <strong>{{PRIORITY_2}}</strong> | Azure HorizonDB · Cosmos DB agentic toolkits · GPU Fabric DW | <em>Data lens</em> — slides 13–15 |
| <strong>{{PRIORITY_3}}</strong> | Cobalt 200 · Rayfin · Confidential Live Migration · Windows AI | <em>Infra lens</em> — slides 17–20 |

> Adapt this slide live: drop priorities in, point at the matching lens. The deck is built to be re-cut without breaking flow.

---

# Build 2026 through three lenses

<div class="lane">
<div class="l-ai">
<h3><span class="dot ai-dot"></span>AI lens</h3>
<span class="count">17</span>
<h4>Models · Foundry · Agents · Standards</h4>
<p>7 MAI models, Microsoft Foundry (IQ · Web IQ · Agents · Models · Deploy · Optimization Loop), Autopilots, Scout, Discovery GA, ACS, ASSERT, OpenClaw, Frontier Tuning, Solara.</p>
</div>
<div class="l-data">
<h3><span class="dot data-dot"></span>Data lens</h3>
<span class="count">4</span>
<h4>One foundation for AI apps</h4>
<p>HorizonDB, Cosmos DB agentic toolkits, GPU-accelerated Fabric DW, Fabric + Databases blueprint.</p>
</div>
<div class="l-infra">
<h3><span class="dot infra-dot"></span>Infra lens</h3>
<span class="count">9</span>
<h4>Compute · Devices · Frontier · Storage</h4>
<p>Cobalt 200, Rayfin, Confidential Live Migration, Windows dev platform, GitHub Copilot app, Surface RTX Spark, Majorana 2, Managed File Shares GA, Azure Files on macOS.</p>
</div>
</div>

> One coherent system. Each lens is a movement; we walk all three.

---

<!-- _class: lens ai -->

<span class="pill ai">Lens 1 of 3</span>
<span class="lens-num">01</span>

# The AI lens
## Models · the platform that runs them · the agents already in production · and the open standards that make all of it portable.

<div class="stat-row">
<div><b>7</b><span>New MAI models</span></div>
<div><b>6</b><span>Foundry capabilities</span></div>
<div><b>3</b><span>Open standards</span></div>
<div><b>17</b><span>AI announcements</span></div>
</div>

---

<!-- _class: hero-spread ai -->

<div class="hero-img" style="background-image:url('https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7107-scaled.jpg')"></div>
<div class="hero-content">

<span class="pill ai">AI · Models · Marquee</span>

# Seven MAI models — Microsoft's biggest first-party release

Reasoning. Voice. Transcription. Image. Code. Embeddings. Each in a standard tier <strong>and</strong> a Flash tier. One identity, one billing plane, one place to ship.

<div class="hero-facts">
<div><b>7 models</b><span>Across every primary modality</span></div>
<div><b>2 tiers each</b><span>Standard + Flash</span></div>
<div><b>Open catalog</b><span>OpenAI · Phi · Llama · Mistral · DeepSeek</span></div>
<div><b>Frontier Tuning</b><span>SFT · DPO · RFT, isolated weights</span></div>
</div>

<span class="hero-link">aka.ms/MAI-Build</span>
</div>

---

<!-- _class: ai -->

<span class="pill ai">AI · Platform — Microsoft Foundry stack</span>

# One platform · six capabilities · one governance contract

<div class="diagram">
<svg viewBox="0 0 1100 460" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g-ai-top" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#5C2D91"/>
      <stop offset="1" stop-color="#8661C5"/>
    </linearGradient>
    <linearGradient id="g-ai-mid" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8661C5" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#8661C5" stop-opacity="0.06"/>
    </linearGradient>
    <linearGradient id="g-data-mid" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#00B294" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#00B294" stop-opacity="0.06"/>
    </linearGradient>
    <linearGradient id="g-infra-row" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0078D4" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#00A4EF" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect x="80" y="60" width="780" height="72" rx="14" fill="url(#g-ai-top)"/>
  <text x="100" y="92" fill="#fff" font-family="Segoe UI,Inter,sans-serif" font-size="20" font-weight="700">Agents &amp; Apps</text>
  <text x="100" y="116" fill="#fff" font-family="Segoe UI,Inter,sans-serif" font-size="13" opacity="0.92">Foundry Agents · Autopilots · Scout · GitHub Copilot app · Discovery · Solara</text>
  <rect x="80" y="146" width="385" height="86" rx="14" fill="url(#g-ai-mid)" stroke="#8661C5" stroke-width="1"/>
  <text x="100" y="178" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="18" font-weight="700">Foundry IQ · Web IQ</text>
  <text x="100" y="200" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">Enterprise + web grounding</text>
  <text x="100" y="218" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">Security-trimmed · hybrid retrieval · eval harness</text>
  <rect x="475" y="146" width="385" height="86" rx="14" fill="url(#g-data-mid)" stroke="#00B294" stroke-width="1"/>
  <text x="495" y="178" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="18" font-weight="700">Cosmos DB · agentic memory</text>
  <text x="495" y="200" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">Episodic + semantic primitives</text>
  <text x="495" y="218" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">Per-user namespaces · global multi-write</text>
  <rect x="80" y="246" width="780" height="86" rx="14" fill="url(#g-infra-row)" stroke="#0078D4" stroke-width="1"/>
  <text x="100" y="278" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="18" font-weight="700">Foundry Models — catalog · evals · canary &amp; shadow deploys</text>
  <text x="100" y="300" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">MAI (7 models · standard + Flash) · OpenAI · Phi · Llama · Mistral · DeepSeek · Frontier Tuning</text>
  <text x="100" y="318" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">Side-by-side eval · cost · latency · quality dashboards · policy-gated promotion</text>
  <rect x="80" y="346" width="385" height="60" rx="14" fill="#ffffff" stroke="#d8dce8"/>
  <text x="100" y="372" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="15" font-weight="700">Foundry Deploy</text>
  <text x="100" y="392" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="11">Self-service quota · BYO containers · RBAC for agents</text>
  <rect x="475" y="346" width="385" height="60" rx="14" fill="#ffffff" stroke="#8661C5"/>
  <text x="495" y="372" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="15" font-weight="700">Agent Optimization Loop</text>
  <text x="495" y="392" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="11">Traces → graders → diffs → eval gate → promote</text>
  <rect x="900" y="60" width="170" height="346" rx="14" fill="#fafbfd" stroke="#d8dce8"/>
  <text x="985" y="84" fill="#5C2D91" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="2">GOVERNANCE</text>
  <rect x="920" y="100" width="130" height="62" rx="10" fill="#ffffff" stroke="#5C2D91"/>
  <text x="985" y="124" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="14" font-weight="700" text-anchor="middle">ACS</text>
  <text x="985" y="144" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="10" text-anchor="middle">Runtime control</text>
  <rect x="920" y="176" width="130" height="62" rx="10" fill="#ffffff" stroke="#5C2D91"/>
  <text x="985" y="200" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="14" font-weight="700" text-anchor="middle">ASSERT</text>
  <text x="985" y="220" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="10" text-anchor="middle">Executable evals</text>
  <rect x="920" y="252" width="130" height="62" rx="10" fill="#ffffff" stroke="#5C2D91"/>
  <text x="985" y="276" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="14" font-weight="700" text-anchor="middle">OpenClaw</text>
  <text x="985" y="296" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="10" text-anchor="middle">Local execution</text>
  <rect x="920" y="328" width="130" height="62" rx="10" fill="#ffffff" stroke="#0078D4"/>
  <text x="985" y="352" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="14" font-weight="700" text-anchor="middle">Entra ID</text>
  <text x="985" y="370" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="10" text-anchor="middle">Identity for agents</text>
  <rect x="80" y="420" width="780" height="28" rx="8" fill="#fafbfd" stroke="#d8dce8"/>
  <text x="470" y="439" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="11" text-anchor="middle" letter-spacing="3" font-weight="600">UNIFIED AUDIT · BILLING · TELEMETRY · POLICY</text>
</svg>
</div>

<div class="why"><b>The shift.</b> The hardest part of agents was never the model — it was the platform around it. Foundry now owns that surface end-to-end, with a single governance rail.</div>

---

<!-- _class: ai -->

<span class="pill ai">AI · Foundry capabilities · the six pieces</span>

# Each piece, in plain English

<div class="tiles three">
<div class="tile media accent-ai glow">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7197-1024x683.jpg" alt="Foundry IQ keynote">
<div class="body">
<h4>Foundry IQ</h4>
<p>Serverless retrieval across SharePoint, OneDrive, Confluence, Salesforce, DBs, web. Hybrid retrieval, security-trimmed to Entra ID, eval harness.</p>
</div>
<span class="link">aka.ms/FoundryIQ</span>
</div>
<div class="tile media accent-ai">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7053-scaled.jpg" alt="Web IQ keynote">
<div class="body">
<h4>Web IQ</h4>
<p>Industrial web grounding for any agent — low-latency, citation-rich, with built-in safety and provenance.</p>
</div>
<span class="link">aka.ms/nextgengrounding</span>
</div>
<div class="tile media accent-ai glow">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7003-scaled.jpg" alt="Foundry Agents keynote">
<div class="body">
<h4>Foundry Agents</h4>
<p>Hosted agent runtime. Autoscale, A2A + MCP, durable memory, sandboxed tools, identity, audit.</p>
</div>
<span class="link">aka.ms/BuildFoundryAgents</span>
</div>
<div class="tile accent-ai">
<h4>Foundry Models</h4>
<p>Side-by-side evals across providers. Canary + shadow deployments. Cost / latency / quality dashboards. <strong>Policy-gated promotion.</strong></p>
<span class="link">aka.ms/BuildFoundryModels</span>
</div>
<div class="tile accent-ai">
<h4>Foundry Deploy</h4>
<p>Self-service quota, expanded regions, <strong>bring-your-own-container</strong> hosted agents, RBAC across models &amp; agents.</p>
<span class="link">aka.ms/FoundryBuildNews</span>
</div>
<div class="tile accent-ai glow">
<h4>Agent Optimization Loop</h4>
<p>Traces → multi-objective graders → candidate diffs → eval gate → promoted improvements. <strong>The closed loop.</strong></p>
<span class="link">commandline.microsoft.com/the-agent-optimization-loop</span>
</div>
</div>

---

<!-- _class: ai -->

<span class="pill ai">AI · Agent Optimization Loop · the closed loop</span>

# Agents that don't just run — they improve

<div class="diagram">
<svg viewBox="0 0 1100 420" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="rg-core" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#8661C5" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#8661C5" stop-opacity="0.0"/>
    </radialGradient>
    <linearGradient id="lg-node" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fafbfd"/>
      <stop offset="1" stop-color="#f0e8fa"/>
    </linearGradient>
    <linearGradient id="lg-node-blue" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fafbfd"/>
      <stop offset="1" stop-color="#e1efff"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#5C2D91"/>
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#0078D4"/>
    </marker>
  </defs>
  <circle cx="550" cy="210" r="180" fill="url(#rg-core)"/>
  <circle cx="550" cy="210" r="82" fill="#ffffff" stroke="#5C2D91" stroke-width="2"/>
  <text x="550" y="200" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="16" font-weight="700" text-anchor="middle">Agent in</text>
  <text x="550" y="222" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="16" font-weight="700" text-anchor="middle">production</text>
  <text x="550" y="244" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="11" text-anchor="middle">(canary + shadow)</text>
  <g transform="translate(110,80)">
    <rect width="220" height="92" rx="14" fill="url(#lg-node)" stroke="#5C2D91"/>
    <text x="20" y="34" fill="#5C2D91" font-family="Segoe UI,Inter,sans-serif" font-size="10" font-weight="700" letter-spacing="2">1 · OBSERVE</text>
    <text x="20" y="58" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="18" font-weight="700">Traces &amp; telemetry</text>
    <text x="20" y="80" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">Every step · every tool · every cost</text>
  </g>
  <g transform="translate(770,80)">
    <rect width="220" height="92" rx="14" fill="url(#lg-node)" stroke="#5C2D91"/>
    <text x="20" y="34" fill="#5C2D91" font-family="Segoe UI,Inter,sans-serif" font-size="10" font-weight="700" letter-spacing="2">2 · JUDGE</text>
    <text x="20" y="58" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="18" font-weight="700">Multi-objective graders</text>
    <text x="20" y="80" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">LLM-as-judge + heuristic + ASSERT</text>
  </g>
  <g transform="translate(770,248)">
    <rect width="220" height="92" rx="14" fill="url(#lg-node)" stroke="#5C2D91"/>
    <text x="20" y="34" fill="#5C2D91" font-family="Segoe UI,Inter,sans-serif" font-size="10" font-weight="700" letter-spacing="2">3 · PROPOSE</text>
    <text x="20" y="58" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="18" font-weight="700">Candidate diffs</text>
    <text x="20" y="80" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">Prompt · tools · policy · model swap</text>
  </g>
  <g transform="translate(110,248)">
    <rect width="220" height="92" rx="14" fill="url(#lg-node-blue)" stroke="#0078D4"/>
    <text x="20" y="34" fill="#0078D4" font-family="Segoe UI,Inter,sans-serif" font-size="10" font-weight="700" letter-spacing="2">4 · GATE &amp; PROMOTE</text>
    <text x="20" y="58" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="18" font-weight="700">Eval gate (ASSERT)</text>
    <text x="20" y="80" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="12">Policy-gated · audited · rolled out</text>
  </g>
  <path d="M 330 126 Q 440 90 472 168" stroke="#5C2D91" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <path d="M 770 126 Q 700 130 628 168" stroke="#5C2D91" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <path d="M 880 172 L 880 248" stroke="#5C2D91" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <path d="M 770 294 Q 700 290 628 252" stroke="#5C2D91" stroke-width="2" fill="none" marker-end="url(#arrow)"/>
  <path d="M 472 252 Q 440 290 330 294" stroke="#0078D4" stroke-width="2" fill="none" marker-end="url(#arrow-blue)"/>
  <path d="M 220 248 L 220 172" stroke="#0078D4" stroke-width="2" fill="none" marker-end="url(#arrow-blue)"/>
</svg>
</div>

<div class="why"><b>The shift.</b> Agent quality stops being a manual prompt-tweaking exercise. <strong>Improvement becomes a pipeline</strong> — observable, gradable, audited, shippable.</div>

---

<!-- _class: ai -->

<span class="pill ai">AI · Agents in production · already shipping</span>

# From chat to autopilots

<div class="tiles four">
<div class="tile media accent-ai glow">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5127-1024x683.jpg" alt="Autopilots keynote">
<div class="body">
<h4>Autopilots</h4>
<p>Long-running, goal-driven agents across Outlook, Teams, GitHub, Windows — with HITL approvals via ACS.</p>
</div>
<span class="link">news.microsoft.com/build-2026</span>
</div>
<div class="tile media accent-ai glow">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A7304-scaled.jpg" alt="Microsoft Scout reveal">
<div class="body">
<h4>Microsoft Scout</h4>
<p>Always-on enterprise-secure personal agent. <strong>Per-user memory · org-controlled retention.</strong></p>
</div>
<span class="link">commandline.microsoft.com/project-lobster-openclaw-personal-ai-assistant-enterprise-secure</span>
</div>
<div class="tile media accent-ai">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A4903-1024x683.jpg" alt="Microsoft Discovery">
<div class="body">
<h4>Microsoft Discovery · GA</h4>
<p>Agentic R&amp;D platform. <strong>Mayo Clinic</strong> co-developing a frontier healthcare model on top of it.</p>
</div>
<span class="link">azure.microsoft.com/blog/announcing-microsoft-discovery-general-availability</span>
</div>
<div class="tile media accent-ai">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/GitHubCopilotApp_HomeView_Windows_wBackground-1024x549.jpg" alt="GitHub Copilot app">
<div class="body">
<h4>GitHub Copilot app</h4>
<p>Agent-native desktop. Workspace-aware, MCP tools, ACS-governed actions, OpenClaw local execution.</p>
</div>
<span class="link">github.blog/news-insights/product-news/github-copilot-app-the-agent-native-desktop-experience</span>
</div>
</div>

---

<!-- _class: ai -->

<span class="pill ai">AI · Open standards · governance you can carry</span>

# ACS · ASSERT · OpenClaw — three sigils, one promise

<div class="tiles three">
<div class="tile accent-ai glow">
<div class="sigil">
<div class="glyph">⌘</div>
<div><div class="name">ACS</div><div class="sub">Agent Control Spec</div></div>
</div>
<p>Agents declare <strong>capabilities, approvals, data boundaries, audit hooks</strong>. Any compliant runtime enforces uniformly.</p>
<p><em>Like OAuth — but for agent behavior.</em></p>
<span class="link">commandline.microsoft.com/agent-control-specification-runtime-governance</span>
</div>
<div class="tile accent-ai">
<div class="sigil">
<div class="glyph">≡</div>
<div><div class="name">ASSERT</div><div class="sub">Executable evals</div></div>
</div>
<p>Open-source. Natural-language behavior specs compile into deterministic, executable evals. Provider-agnostic graders.</p>
<p><em>Evals become a first-class artifact, versioned with the agent.</em></p>
<span class="link">commandline.microsoft.com/assert-written-intent-executable-evals</span>
</div>
<div class="tile accent-ai">
<div class="sigil">
<div class="glyph">◇</div>
<div><div class="name">OpenClaw</div><div class="sub">Safe local execution</div></div>
</div>
<p>Open spec + Windows runtime for safe local agent actions. Capability permissions, per-action sandbox, full audit.</p>
<p><em>The desktop becomes a governed agent host.</em></p>
<span class="link">news.microsoft.com/build-2026</span>
</div>
</div>

---

<!-- _class: lens data -->

<span class="pill data">Lens 2 of 3</span>
<span class="lens-num">02</span>

# The data lens
## OLTP, vector, agent memory, and analytics in one governed plane — and the GPU acceleration to make the analytics keep up.

<div class="stat-row">
<div><b>3 → 1</b><span>Systems collapsed</span></div>
<div><b>4</b><span>Data announcements</span></div>
<div><b>10×</b><span>Faster analytics</span></div>
</div>

---

<!-- _class: hero-spread data -->

<div class="hero-img" style="background-image:url('https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5164-1024x683.jpg')"></div>
<div class="hero-content">

<span class="pill data">Data · Marquee</span>

# Azure HorizonDB — Postgres, re-architected for AI

<strong>One engine</strong> for OLTP, vector search, agent memory, and analytical queries. Wire-compatible with the Postgres your team already knows. Serverless scale. <strong>OneLake-aware.</strong>

<div class="hero-facts">
<div><b>Postgres-wire compatible</b><span>Your psql, drivers, migrations work</span></div>
<div><b>4 workloads · 1 engine</b><span>OLTP · vector · memory · analytics</span></div>
<div><b>OneLake-aware</b><span>Lineage, RBAC, classification follow data</span></div>
<div><b>Serverless</b><span>Scale per workload, not per cluster</span></div>
</div>

<span class="hero-link">aka.ms/HorizonDB-Build-blog</span>
</div>

---

<!-- _class: data -->

<span class="pill data">Data · The collapse · before / after</span>

# What three systems become

<div class="diagram">
<svg viewBox="0 0 1100 360" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g-new-data" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#008575"/>
      <stop offset="1" stop-color="#00B294"/>
    </linearGradient>
    <linearGradient id="g-gpu" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FFB900" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#F25022" stop-opacity="0.10"/>
    </linearGradient>
    <marker id="ar2-mute" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#a5a9bd"/>
    </marker>
    <marker id="ar2-teal" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#008575"/>
    </marker>
  </defs>
  <text x="60" y="40" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" letter-spacing="3">BEFORE</text>
  <text x="60" y="64" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="20" font-weight="700">3 systems + glue code</text>
  <g transform="translate(60,90)">
    <rect width="160" height="60" rx="10" fill="#fafbfd" stroke="#d8dce8"/>
    <text x="80" y="32" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="14" font-weight="600" text-anchor="middle">OLTP database</text>
    <text x="80" y="48" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="10" text-anchor="middle">Postgres / SQL</text>
  </g>
  <g transform="translate(60,168)">
    <rect width="160" height="60" rx="10" fill="#fafbfd" stroke="#d8dce8"/>
    <text x="80" y="32" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="14" font-weight="600" text-anchor="middle">Vector store</text>
    <text x="80" y="48" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="10" text-anchor="middle">Standalone index</text>
  </g>
  <g transform="translate(60,246)">
    <rect width="160" height="60" rx="10" fill="#fafbfd" stroke="#d8dce8"/>
    <text x="80" y="32" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="14" font-weight="600" text-anchor="middle">Agent memory KV</text>
    <text x="80" y="48" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="10" text-anchor="middle">Bespoke service</text>
  </g>
  <path d="M 230 120 Q 290 140 350 200" stroke="#a5a9bd" stroke-width="1.5" fill="none" stroke-dasharray="4,4" marker-end="url(#ar2-mute)"/>
  <path d="M 230 198 Q 280 200 350 200" stroke="#a5a9bd" stroke-width="1.5" fill="none" stroke-dasharray="4,4" marker-end="url(#ar2-mute)"/>
  <path d="M 230 276 Q 300 260 350 220" stroke="#a5a9bd" stroke-width="1.5" fill="none" stroke-dasharray="4,4" marker-end="url(#ar2-mute)"/>
  <g transform="translate(260,180)">
    <text x="0" y="0" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-style="italic">sync jobs</text>
    <text x="0" y="14" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-style="italic">drift &amp; lag</text>
  </g>
  <g transform="translate(415,170)">
    <text x="0" y="0" fill="#008575" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" letter-spacing="3">COLLAPSE</text>
    <path d="M 0 20 L 90 20" stroke="#008575" stroke-width="3" fill="none" marker-end="url(#ar2-teal)"/>
  </g>
  <text x="560" y="40" fill="#008575" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" letter-spacing="3">AFTER (BUILD 2026)</text>
  <text x="560" y="64" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="20" font-weight="700">One engine + one analytics plane</text>
  <g transform="translate(560,90)">
    <rect width="490" height="148" rx="16" fill="url(#g-new-data)"/>
    <text x="245" y="40" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="22" font-weight="800" text-anchor="middle" letter-spacing="-0.5">Azure HorizonDB</text>
    <text x="245" y="62" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="12" text-anchor="middle" opacity="0.95">Postgres-wire compatible · serverless · OneLake-aware</text>
    <rect x="20" y="80" width="105" height="48" rx="8" fill="rgba(255,255,255,0.18)"/>
    <text x="73" y="100" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" text-anchor="middle">OLTP</text>
    <text x="73" y="118" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="9" text-anchor="middle" opacity="0.92">transactions</text>
    <rect x="135" y="80" width="105" height="48" rx="8" fill="rgba(255,255,255,0.18)"/>
    <text x="188" y="100" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" text-anchor="middle">Vector</text>
    <text x="188" y="118" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="9" text-anchor="middle" opacity="0.92">hybrid search</text>
    <rect x="250" y="80" width="105" height="48" rx="8" fill="rgba(255,255,255,0.18)"/>
    <text x="303" y="100" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" text-anchor="middle">Memory</text>
    <text x="303" y="118" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="9" text-anchor="middle" opacity="0.92">agent state</text>
    <rect x="365" y="80" width="105" height="48" rx="8" fill="rgba(255,255,255,0.18)"/>
    <text x="418" y="100" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" text-anchor="middle">Analytics</text>
    <text x="418" y="118" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="9" text-anchor="middle" opacity="0.92">in-engine</text>
  </g>
  <g transform="translate(560,256)">
    <rect width="490" height="64" rx="12" fill="url(#g-gpu)" stroke="#F25022"/>
    <text x="20" y="26" fill="#F25022" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" letter-spacing="2">GPU FABRIC DW</text>
    <text x="20" y="46" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="14" font-weight="600">Same SQL · transparent GPU offload · ~10× faster</text>
  </g>
</svg>
</div>

<div class="why"><b>Why it matters.</b> Most real agents need transactional + vector + memory + analytical data <em>in one place</em>. Build 2026 collapses three or four systems — plus their sync code — into one governed data plane.</div>

---

<!-- _class: data -->

<span class="pill data">Data · One foundation for AI apps</span>

# The four announcements, with the keynote moments

<div class="tiles four">
<div class="tile media accent-data glow">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5164-1024x683.jpg" alt="HorizonDB keynote">
<div class="body">
<h4>Azure HorizonDB</h4>
<p>Postgres re-architected for AI. OLTP + vector + memory + analytics in one wire-compatible engine.</p>
</div>
<span class="link">aka.ms/HorizonDB-Build-blog</span>
</div>
<div class="tile media accent-data glow">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5773-scaled.jpg" alt="Cosmos DB session">
<div class="body">
<h4>Cosmos DB agentic toolkits</h4>
<p>Episodic + semantic memory primitives. Vector + full-text hybrid. <strong>Global multi-write</strong> for distributed agents.</p>
</div>
<span class="link">aka.ms/build26/CosmosDBAgents</span>
</div>
<div class="tile media accent-data">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A6128-cropped-1024x683.jpg" alt="GPU Fabric DW">
<div class="body">
<h4>GPU-accelerated Fabric DW</h4>
<p>Transparent GPU offload for analytical queries and embeddings. <strong>Order-of-magnitude speedups.</strong></p>
</div>
<span class="link">aka.ms/GPUAcceleratedFabricDW</span>
</div>
<div class="tile media accent-data">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A6917-cropped-1024x563.jpg" alt="Fabric + Databases">
<div class="body">
<h4>Fabric + Databases blueprint</h4>
<p>Reference architectures + SDKs for agentic apps across Fabric, Cosmos, HorizonDB, SQL, MySQL, Postgres.</p>
</div>
<span class="link">aka.ms/Azure-Data-Build26</span>
</div>
</div>

---

<!-- _class: lens infra -->

<span class="pill infra">Lens 3 of 3</span>
<span class="lens-num">03</span>

# The infrastructure lens
## Silicon, dev velocity, devices, confidentiality, the frontier bets, and the storage foundation that changes the curve underneath every workload.

<div class="stat-row">
<div><b>50%</b><span>Cobalt 200 uplift</span></div>
<div><b>0</b><span>Downtime, confidential VMs</span></div>
<div><b>9</b><span>Infra + device announcements</span></div>
</div>

---

<!-- _class: hero-spread infra -->

<div class="hero-img" style="background-image:url('https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5567-1024x683.jpg')"></div>
<div class="hero-content">

<span class="pill infra">Infra · Marquee</span>

# Azure Cobalt 200 — silicon that pays for the agent era

2nd-gen Microsoft Arm. <strong>50% better performance</strong> across the services agents hammer hardest: orchestration, retrieval, memory I/O, tool dispatch. Significant watts-per-perf gains.

<div class="hero-facts">
<div><b>+50% perf</b><span>vs. previous gen, agent fan-out workloads</span></div>
<div><b>Watts/perf</b><span>Greener footprint at scale</span></div>
<div><b>Cloud-native</b><span>General, web, data, agentic tiers</span></div>
<div><b>Available now</b><span>In growing list of regions</span></div>
</div>

<span class="hero-link">aka.ms/Cobalt200VMs</span>
</div>

---

<!-- _class: infra -->

<span class="pill infra">Infra · The economics of agents · why CPU matters now</span>

# One request · many calls · CPU decides whether agents ship

<div class="diagram">
<svg viewBox="0 0 1100 320" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g-orch" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0078D4"/>
      <stop offset="1" stop-color="#00A4EF"/>
    </linearGradient>
    <marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#0078D4"/>
    </marker>
  </defs>
  <g transform="translate(40,130)">
    <rect width="140" height="64" rx="12" fill="#ffffff" stroke="#d8dce8"/>
    <text x="70" y="28" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="13" font-weight="700" text-anchor="middle">1 request</text>
    <text x="70" y="48" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="11" text-anchor="middle">from user</text>
  </g>
  <path d="M 184 162 L 244 162" stroke="#0078D4" stroke-width="2" marker-end="url(#ar3)"/>
  <g transform="translate(250,110)">
    <rect width="220" height="104" rx="14" fill="url(#g-orch)"/>
    <text x="110" y="34" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="2">CPU-BOUND</text>
    <text x="110" y="58" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="16" font-weight="700" text-anchor="middle">Agent orchestrator</text>
    <text x="110" y="78" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="11" text-anchor="middle" opacity="0.95">tool dispatch · routing</text>
    <text x="110" y="94" fill="#ffffff" font-family="Segoe UI,Inter,sans-serif" font-size="11" text-anchor="middle" opacity="0.95">auth · audit · memory I/O</text>
  </g>
  <g stroke="#0078D4" stroke-width="1.5" fill="none" opacity="0.7">
    <path d="M 470 130 Q 540 110 620 86" marker-end="url(#ar3)"/>
    <path d="M 470 145 Q 540 130 620 122" marker-end="url(#ar3)"/>
    <path d="M 470 160 Q 540 155 620 158" marker-end="url(#ar3)"/>
    <path d="M 470 175 Q 540 178 620 194" marker-end="url(#ar3)"/>
    <path d="M 470 190 Q 540 200 620 230" marker-end="url(#ar3)"/>
  </g>
  <g transform="translate(620,68)">
    <rect width="180" height="36" rx="8" fill="#f0e8fa" stroke="#5C2D91"/>
    <text x="14" y="23" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="12" font-weight="600">10–40 model calls</text>
  </g>
  <g transform="translate(620,108)">
    <rect width="180" height="36" rx="8" fill="#e0f5ee" stroke="#008575"/>
    <text x="14" y="23" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="12" font-weight="600">5–20 tool calls</text>
  </g>
  <g transform="translate(620,148)">
    <rect width="180" height="36" rx="8" fill="#e1efff" stroke="#0078D4"/>
    <text x="14" y="23" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="12" font-weight="600">Retrieval (IQ + Web IQ)</text>
  </g>
  <g transform="translate(620,188)">
    <rect width="180" height="36" rx="8" fill="#e1efff" stroke="#0078D4"/>
    <text x="14" y="23" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="12" font-weight="600">Memory reads &amp; writes</text>
  </g>
  <g transform="translate(620,228)">
    <rect width="180" height="36" rx="8" fill="#fafbfd" stroke="#d8dce8"/>
    <text x="14" y="23" fill="#7a8099" font-family="Segoe UI,Inter,sans-serif" font-size="12">Identity · audit · billing</text>
  </g>
  <g transform="translate(840,120)">
    <rect width="220" height="100" rx="14" fill="#e1efff" stroke="#0078D4" stroke-width="2"/>
    <text x="110" y="28" fill="#0078D4" font-family="Segoe UI,Inter,sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="2">WHERE COBALT 200 LIVES</text>
    <text x="110" y="56" fill="#1a1f36" font-family="Segoe UI,Inter,sans-serif" font-size="18" font-weight="700" text-anchor="middle">+50% perf</text>
    <text x="110" y="78" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="11" text-anchor="middle">Same agent · fewer VMs</text>
    <text x="110" y="92" fill="#4a5070" font-family="Segoe UI,Inter,sans-serif" font-size="11" text-anchor="middle">Better watts-per-call</text>
  </g>
</svg>
</div>

<div class="why"><b>The hidden cost.</b> Model bills get the headlines. The CPU tier underneath them — orchestration, retrieval, memory, auth — is where the bill actually compounds. <strong>Cobalt 200 changes that tier.</strong></div>

---

<!-- _class: infra -->

<span class="pill infra">Infra · Dev velocity</span>

# From spec to backend in minutes — and confidential at every step

<div class="tiles three">
<div class="tile media accent-infra glow">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/GitHubCopilotApp_PRView_Windows_wBackground-1024x618.jpg" alt="Rayfin">
<div class="body">
<h4>Rayfin</h4>
<p>Structured app spec in → APIs + DB + identity + queues + observability + CI/CD out. Native GitHub Copilot integration. <strong>The boring 80% disappears.</strong></p>
</div>
<span class="link">aka.ms/rayfin</span>
</div>
<div class="tile media accent-infra">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/GitHubCopilotApp_HomeView_Windows_wBackground-1024x549.jpg" alt="GitHub Copilot app">
<div class="body">
<h4>GitHub Copilot app</h4>
<p>The agent-native desktop. Workspace-aware, MCP tools, ACS-governed actions, OpenClaw local execution.</p>
</div>
<span class="link">github.com/features/copilot</span>
</div>
<div class="tile accent-infra glow">
<h4>Confidential Live Migration · Intel TDX</h4>
<p>Move running TDX confidential VMs <strong>without breaking the seal</strong>. Memory encrypted in transit. Attestation continuity. Zero downtime.</p>
<p><em>Removes the downtime tax on regulated workloads.</em></p>
<span class="link">techcommunity.microsoft.com/blog/azureconfidentialcomputingblog/announcing-confidential-live-migration-in-azure</span>
</div>
</div>

---

<!-- _class: infra -->

<span class="pill infra">Infra · Devices · Frontier · Storage</span>

# Where agents land — and what's underneath them

<div class="tiles three">
<div class="tile media accent-windows">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/Steven1-1900x1268.jpg" alt="Windows dev platform">
<div class="body">
<h4>Windows dev platform</h4>
<p>AI-native APIs for local models and NPUs. Improved Dev Drive. <strong>OpenClaw runtime in the OS.</strong></p>
</div>
<span class="link">blogs.windows.com/windowsdeveloper/?p=57809</span>
</div>
<div class="tile media accent-windows glow">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/Steven2-1024x683.jpg" alt="Surface RTX Spark Dev Box">
<div class="body">
<h4>Surface RTX Spark Dev Box</h4>
<p>NVIDIA RTX silicon. Generous unified memory. First-class WSL2. <strong>Run, fine-tune, ship — on-device.</strong></p>
</div>
<span class="link">microsoft.com/en-us/surface/devices/surface-rtx-spark-dev-box</span>
</div>
<div class="tile media accent-windows">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/Steven4-1024x683.jpg" alt="OpenClaw + Windows">
<div class="body">
<h4>OpenClaw + Windows</h4>
<p>Capability-based permissions, per-action sandbox, full audit trail. The desktop becomes a governed agent host.</p>
</div>
<span class="link">news.microsoft.com/build-2026</span>
</div>
<div class="tile media accent-quantum">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/Majorana-6-web-size_6.jpg" alt="Majorana 2">
<div class="body">
<h4>Majorana 2</h4>
<p>2nd-gen topological quantum chip. Higher-fidelity qubits, improved scaling. Integrated into Azure Quantum.</p>
</div>
<span class="link">aka.ms/AA10vjcq</span>
</div>
<div class="tile media accent-storage">
<img class="thumb" src="https://msftstories.thesourcemediaassets.com/sites/753/2026/06/8C7A5711-1024x683.jpg" alt="Managed File Shares GA">
<div class="body">
<h4>Managed File Shares · GA</h4>
<p>Per-share scaling, first-class Azure resource, higher IOPS. <strong>The storage-account ceiling is gone.</strong></p>
</div>
<span class="link">aka.ms/MFS/GA</span>
</div>
<div class="tile accent-storage">
<h4>Azure Files on macOS · Entra ID</h4>
<p>Native macOS SMB with Entra ID. Conditional access, MFA, per-user audit. <strong>No more shared-key access patterns.</strong></p>
<span class="link">aka.ms/azurefilesmacos</span>
</div>
</div>

---

<!-- _class: cover -->

<span class="pill brand">The scoreboard</span>

# By the numbers

<div class="scoreboard">
<div class="s-ai"><b>17</b><h5>AI announcements</h5><p>Models · platform · agents · standards</p></div>
<div class="s-data"><b>4</b><h5>Data announcements</h5><p>One foundation for AI apps</p></div>
<div class="s-infra"><b>9</b><h5>Infra announcements</h5><p>Silicon · devices · storage · quantum</p></div>
<div class="s-brand"><b>30+</b><h5>Total moves</h5><p>One coherent system</p></div>
</div>

<div class="scoreboard">
<div class="s-ai"><b>7</b><h5>MAI models</h5><p>Reasoning · voice · transcription · image · code · embed · ASR</p></div>
<div class="s-data"><b>3 → 1</b><h5>Systems collapsed</h5><p>OLTP + vector + memory → HorizonDB</p></div>
<div class="s-infra"><b>+50%</b><h5>Cobalt 200 uplift</h5><p>Where agent fan-out lives</p></div>
<div class="s-brand"><b>2</b><h5>Open standards</h5><p>ACS · OpenClaw — portable governance</p></div>
</div>

---

<!-- _class: cover -->

# Four pilots we can start in **30 days**

<div class="tiles">
<div class="tile accent-ai glow">
<h4>1 · Knowledge agent <span style="color:#5C2D91;font-size:0.70em;font-weight:700;letter-spacing:0.10em">— AI LENS</span></h4>
<p>Foundry IQ + MAI Thinking-1 + ACS manifest, security-trimmed to Entra ID.<br>
<strong>Outcome:</strong> grounded answers on top 20 questions, beats current bot on faithfulness + freshness.</p>
<span class="link">aka.ms/FoundryIQ · aka.ms/MAI-Build</span>
</div>
<div class="tile accent-data glow">
<h4>2 · Customer-support autopilot <span style="color:#008575;font-size:0.70em;font-weight:700;letter-spacing:0.10em">— DATA LENS</span></h4>
<p>Foundry Agents + Cosmos DB memory + Foundry IQ.<br>
<strong>Outcome:</strong> tier-1 deflection + CSAT lift, full audit trail, per-user memory namespace.</p>
<span class="link">aka.ms/BuildFoundryAgents · aka.ms/build26/CosmosDBAgents</span>
</div>
<div class="tile accent-infra glow">
<h4>3 · Developer productivity <span style="color:#0078D4;font-size:0.70em;font-weight:700;letter-spacing:0.10em">— INFRA LENS</span></h4>
<p>GitHub Copilot app + MAI Code-1-Flash + OpenClaw.<br>
<strong>Outcome:</strong> cycle-time drop on a chosen repo over four sprints.</p>
<span class="link">github.com/features/copilot · blogs.windows.com/windowsdeveloper</span>
</div>
<div class="tile accent-infra glow">
<h4>4 · Confidential workload migration <span style="color:#0078D4;font-size:0.70em;font-weight:700;letter-spacing:0.10em">— INFRA LENS</span></h4>
<p>Confidential VMs (Intel TDX) + Live Migration + Cobalt 200.<br>
<strong>Outcome:</strong> regulated workload runs confidential, zero downtime, cheaper at the CPU tier.</p>
<span class="link">aka.ms/Cobalt200VMs · techcommunity.microsoft.com — confidential-live-migration</span>
</div>
</div>

---

# A **30 / 60 / 90** path

<div class="tiles three">
<div class="tile accent-ai">
<h4>Days 0–30 · Stand up</h4>
<p>• Foundry project + Entra identity plane<br>
• Pick 1 of 4 pilots; assign owner<br>
• Scout pilot for the exec team<br>
• Baseline current bot/agent metrics<br>
• Draft ACS manifest for chosen agent</p>
</div>
<div class="tile accent-data">
<h4>Days 31–60 · Ship one</h4>
<p>• First autopilot in production with HITL<br>
• Foundry IQ index for chosen domain<br>
• Cost + latency dashboards live<br>
• Cosmos memory namespace per user<br>
• ASSERT eval suite gating promotions</p>
</div>
<div class="tile accent-infra">
<h4>Days 61–90 · Compound</h4>
<p>• Frontier Tuning candidate identified<br>
• Cobalt 200 portability assessment<br>
• Optimization Loop running on agent 1<br>
• HorizonDB POC scoped (if Postgres-heavy)<br>
• Next two autopilots scoped</p>
</div>
</div>

> Joint working session at day 30. Architecture deep-dive at day 45. Customer success review at day 90.

---

<!-- _class: cover -->

# Resources — every announcement, one click

<div class="tiles three">
<div class="tile accent-ai">
<h3>AI lens · 12 links</h3>
<p style="font-size:0.74em; line-height:1.5">
MAI models · <strong>aka.ms/MAI-Build</strong><br>
Foundry IQ · <strong>aka.ms/FoundryIQ</strong><br>
Web IQ · <strong>aka.ms/nextgengrounding</strong><br>
Foundry Agents · <strong>aka.ms/BuildFoundryAgents</strong><br>
Foundry Models · <strong>aka.ms/BuildFoundryModels</strong><br>
Foundry Deploy · <strong>aka.ms/FoundryBuildNews</strong><br>
Autopilots · <strong>news.microsoft.com/build-2026</strong><br>
Scout · <strong>commandline.microsoft.com/project-lobster-openclaw-personal-ai-assistant-enterprise-secure</strong><br>
Discovery GA · <strong>azure.microsoft.com/blog/announcing-microsoft-discovery-general-availability</strong><br>
ACS · <strong>commandline.microsoft.com/agent-control-specification-runtime-governance</strong><br>
ASSERT · <strong>commandline.microsoft.com/assert-written-intent-executable-evals</strong><br>
Optimization Loop · <strong>commandline.microsoft.com/the-agent-optimization-loop-and-how-we-built-it-in-foundry</strong>
</p>
</div>
<div class="tile accent-data">
<h3>Data lens · 4 links</h3>
<p style="font-size:0.74em; line-height:1.5">
HorizonDB · <strong>aka.ms/HorizonDB-Build-blog</strong><br>
Cosmos DB agentic toolkits · <strong>aka.ms/build26/CosmosDBAgents</strong><br>
GPU Fabric DW · <strong>aka.ms/GPUAcceleratedFabricDW</strong><br>
Fabric + Databases · <strong>aka.ms/Azure-Data-Build26</strong>
</p>
</div>
<div class="tile accent-infra">
<h3>Infrastructure lens · 9 links</h3>
<p style="font-size:0.74em; line-height:1.5">
Cobalt 200 · <strong>aka.ms/Cobalt200VMs</strong><br>
Rayfin · <strong>aka.ms/rayfin</strong><br>
Confidential Live Migration · <strong>techcommunity.microsoft.com — azure-confidential-live-migration</strong><br>
Windows dev platform · <strong>blogs.windows.com/windowsdeveloper/?p=57809</strong><br>
GitHub Copilot app · <strong>github.com/features/copilot</strong><br>
Surface RTX Spark · <strong>microsoft.com/en-us/surface/devices/surface-rtx-spark-dev-box</strong><br>
Majorana 2 · <strong>aka.ms/AA10vjcq</strong><br>
Managed File Shares GA · <strong>aka.ms/MFS/GA</strong><br>
Azure Files on macOS · <strong>aka.ms/azurefilesmacos</strong>
</p>
</div>
</div>

---

<!-- _class: cover -->
<!-- _paginate: false -->

<span class="pill brand">Let's build</span>

# Thank you

## {{PRESENTER}}
{{DATE}}

The live Build 2026 recap site lives in this workspace — every announcement, with deep links and imagery.

**Our ask.** Pick **one pilot** by Friday. Name an exec sponsor and a single technical owner. Block a **2-hour working session** with our team in the next two weeks.
