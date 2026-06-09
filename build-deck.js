// Microsoft Build 2026 — AI Announcements customer deck (PPTX builder)
// Usage: node build-deck.js
const pptxgen = require("pptxgenjs");

// ─────────────────────────── THEME ───────────────────────────
const COLOR = {
  deep:    "002050",  // Microsoft deep blue
  blue:    "0078D4",  // Microsoft blue
  accent:  "50E6FF",  // light cyan accent
  ink:     "1a1a1a",
  muted:   "5a6573",
  soft:    "F3F5F9",
  white:   "FFFFFF",
  rowAlt:  "F6F8FB",
  border:  "D7DEE8",
  warm:    "F25022",
  green:   "7FBA00",
  amber:   "FFB900",
};

const FONT = { head: "Segoe UI Semibold", body: "Segoe UI", light: "Segoe UI Light" };

const SLIDE_W = 13.333; // LAYOUT_WIDE
const SLIDE_H = 7.5;

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "Microsoft Build 2026 customer briefing";
pres.title  = "Microsoft Build 2026 — The AI Announcements";

// ─────────────────────────── MASTERS ───────────────────────────
pres.defineSlideMaster({
  title: "CONTENT",
  background: { color: COLOR.white },
  objects: [
    // top accent bar
    { rect: { x: 0, y: 0, w: SLIDE_W, h: 0.08, fill: { color: COLOR.blue } } },
    // footer divider
    { line: { x: 0.5, y: 7.18, w: 12.33, h: 0, line: { color: COLOR.border, width: 0.75 } } },
    // footer brand
    { text: {
      text: "Microsoft Build 2026  ·  AI Announcements  ·  Customer briefing",
      options: { x: 0.5, y: 7.22, w: 9, h: 0.25, fontSize: 9, fontFace: FONT.body, color: COLOR.muted }
    }},
    { text: {
      text: "San Francisco · June 2–3, 2026",
      options: { x: 9.5, y: 7.22, w: 3.33, h: 0.25, fontSize: 9, fontFace: FONT.body, color: COLOR.muted, align: "right" }
    }},
  ],
  slideNumber: { x: 12.85, y: 7.22, w: 0.4, h: 0.25, fontSize: 9, fontFace: FONT.body, color: COLOR.muted, align: "right" }
});

pres.defineSlideMaster({
  title: "LEAD",
  background: { color: COLOR.deep },
  objects: [
    // gradient simulated with overlapping rounded shapes
    { rect: { x: 0, y: 0, w: SLIDE_W, h: SLIDE_H, fill: { color: COLOR.deep } } },
    { rect: { x: 0, y: 0, w: SLIDE_W, h: SLIDE_H, fill: { color: COLOR.blue, transparency: 55 } } },
    { rect: { x: 0, y: 4.5,  w: SLIDE_W, h: 3,    fill: { color: COLOR.accent, transparency: 80 } } },
    { rect: { x: 0, y: 0, w: SLIDE_W, h: 0.08, fill: { color: COLOR.accent } } },
  ]
});

pres.defineSlideMaster({
  title: "DIVIDER",
  background: { color: COLOR.deep },
  objects: [
    { rect: { x: 0, y: 0, w: SLIDE_W, h: SLIDE_H, fill: { color: COLOR.deep } } },
    { rect: { x: 0, y: 0, w: SLIDE_W, h: SLIDE_H, fill: { color: COLOR.blue, transparency: 70 } } },
    { rect: { x: 0, y: 0, w: SLIDE_W, h: 0.08, fill: { color: COLOR.accent } } },
    { rect: { x: 0, y: 7.42, w: SLIDE_W, h: 0.08, fill: { color: COLOR.accent } } },
  ]
});

// ─────────────────────────── HELPERS ───────────────────────────
function addTitle(slide, title, eyebrow) {
  if (eyebrow) {
    slide.addText(eyebrow.toUpperCase(), {
      x: 0.5, y: 0.32, w: 12.3, h: 0.3,
      fontSize: 11, fontFace: FONT.head, color: COLOR.blue, bold: true, charSpacing: 4, margin: 0
    });
  }
  slide.addText(title, {
    x: 0.5, y: eyebrow ? 0.6 : 0.4, w: 12.3, h: 0.85,
    fontSize: 28, fontFace: FONT.head, color: COLOR.deep, bold: true, margin: 0
  });
  // blue underline accent — short bar, NOT a thin under-title line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: eyebrow ? 1.48 : 1.3, w: 0.6, h: 0.06, fill: { color: COLOR.blue }, line: { color: COLOR.blue }
  });
}

function addLead(slide, big, sub) {
  slide.addText(big, {
    x: 0.7, y: 1.6, w: 12, h: 2.5,
    fontSize: 60, fontFace: FONT.head, color: COLOR.white, bold: true, valign: "top", margin: 0
  });
  slide.addText(sub, {
    x: 0.7, y: 4.0, w: 12, h: 2.0,
    fontSize: 18, fontFace: FONT.body, color: COLOR.accent, valign: "top", margin: 0
  });
}

function addDivider(slide, num, label, sub) {
  slide.addText(`SECTION ${num}`, {
    x: 0.7, y: 2.3, w: 12, h: 0.5,
    fontSize: 14, fontFace: FONT.head, color: COLOR.accent, bold: true, charSpacing: 6, margin: 0
  });
  slide.addText(label, {
    x: 0.7, y: 2.8, w: 12, h: 1.6,
    fontSize: 54, fontFace: FONT.head, color: COLOR.white, bold: true, margin: 0
  });
  slide.addText(sub, {
    x: 0.7, y: 4.6, w: 12, h: 1.2,
    fontSize: 18, fontFace: FONT.body, color: COLOR.accent, margin: 0
  });
}

// Two-column "What it is / Why it matters / Start here" block
function addWhatWhyStart(slide, what, why, startHere, opts = {}) {
  const colW = 4.05;
  const colH = opts.h || 4.6;
  const baseY = opts.y || 1.85;
  const cols = [
    { x: 0.5,                label: "WHAT IT IS",      body: what,      bar: COLOR.blue },
    { x: 0.5 + colW + 0.15,  label: "WHY IT MATTERS",  body: why,       bar: COLOR.warm },
    { x: 0.5 + 2*(colW+0.15),label: "START HERE",      body: startHere, bar: COLOR.green },
  ];
  cols.forEach(c => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: baseY, w: colW, h: colH,
      fill: { color: COLOR.soft }, line: { color: COLOR.soft }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: baseY, w: colW, h: 0.08,
      fill: { color: c.bar }, line: { color: c.bar }
    });
    slide.addText(c.label, {
      x: c.x + 0.25, y: baseY + 0.2, w: colW - 0.5, h: 0.35,
      fontSize: 11, fontFace: FONT.head, color: c.bar, bold: true, charSpacing: 4, margin: 0
    });
    slide.addText(c.body, {
      x: c.x + 0.25, y: baseY + 0.6, w: colW - 0.5, h: colH - 0.8,
      fontSize: 13, fontFace: FONT.body, color: COLOR.ink, valign: "top", paraSpaceAfter: 6, margin: 0
    });
  });
}

// Generic 2x2 tile grid
function addTiles(slide, tiles, opts = {}) {
  const baseY = opts.y || 1.85;
  const h = opts.h || 4.6;
  const cols = 2, rows = Math.ceil(tiles.length / cols);
  const gap = 0.2;
  const tileW = (12.33 - gap) / 2;
  const tileH = (h - gap * (rows - 1)) / rows;
  tiles.forEach((t, i) => {
    const r = Math.floor(i / cols), c = i % cols;
    const x = 0.5 + c * (tileW + gap);
    const y = baseY + r * (tileH + gap);
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y, w: tileW, h: tileH,
      fill: { color: COLOR.soft }, line: { color: COLOR.soft }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 0.08, h: tileH,
      fill: { color: t.bar || COLOR.blue }, line: { color: t.bar || COLOR.blue }
    });
    slide.addText(t.head, {
      x: x + 0.3, y: y + 0.18, w: tileW - 0.5, h: 0.45,
      fontSize: 16, fontFace: FONT.head, color: COLOR.deep, bold: true, margin: 0
    });
    slide.addText(t.body, {
      x: x + 0.3, y: y + 0.7, w: tileW - 0.5, h: tileH - 0.85,
      fontSize: 13, fontFace: FONT.body, color: COLOR.ink, valign: "top", paraSpaceAfter: 4, margin: 0
    });
  });
}

// Styled table
function addStyledTable(slide, rows, opts = {}) {
  const x = opts.x ?? 0.5;
  const y = opts.y ?? 1.85;
  const w = opts.w ?? 12.33;
  const colW = opts.colW;
  const headerFill = opts.headerFill || COLOR.deep;
  const data = rows.map((row, ri) => {
    return row.map((cell, ci) => {
      if (ri === 0) {
        return {
          text: cell,
          options: { bold: true, color: COLOR.white, fill: { color: headerFill }, fontSize: 13, fontFace: FONT.head, valign: "middle" }
        };
      }
      return {
        text: cell,
        options: {
          color: COLOR.ink, fontSize: 12, fontFace: FONT.body, valign: "middle",
          fill: { color: ri % 2 === 0 ? COLOR.rowAlt : COLOR.white }
        }
      };
    });
  });
  slide.addTable(data, {
    x, y, w,
    colW,
    rowH: opts.rowH || 0.45,
    border: { type: "solid", pt: 0.5, color: COLOR.border },
    margin: 0.08,
  });
}

// KPI strip used on title slide
function addKpiStrip(slide, items) {
  const baseY = 5.65;
  const stripH = 1.4;
  const gap = 0.18;
  const cellW = (12 - gap * (items.length - 1)) / items.length;
  items.forEach((it, i) => {
    const x = 0.7 + i * (cellW + gap);
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y: baseY, w: cellW, h: stripH,
      fill: { color: COLOR.white, transparency: 88 },
      line: { color: COLOR.accent, width: 0.75 }
    });
    slide.addText(it.value, {
      x, y: baseY + 0.12, w: cellW, h: 0.75,
      fontSize: 44, fontFace: FONT.head, color: COLOR.white, bold: true, align: "center", margin: 0
    });
    slide.addText(it.label, {
      x, y: baseY + 0.9, w: cellW, h: 0.4,
      fontSize: 11, fontFace: FONT.body, color: COLOR.accent, align: "center", charSpacing: 2, margin: 0
    });
  });
}

// Section number large mark
function addCornerStamp(slide, text) {
  slide.addText(text, {
    x: 9.0, y: 0.2, w: 4.0, h: 0.35,
    fontSize: 10, fontFace: FONT.head, color: COLOR.muted, bold: true, align: "right", charSpacing: 2, margin: 0
  });
}

// ─────────────────────────── BUILD SLIDES ───────────────────────────

// Slide 1 — Title
{
  const s = pres.addSlide({ masterName: "LEAD" });
  s.addText("MICROSOFT BUILD 2026", {
    x: 0.7, y: 0.8, w: 12, h: 0.5,
    fontSize: 16, fontFace: FONT.head, color: COLOR.accent, bold: true, charSpacing: 8, margin: 0
  });
  s.addText("The AI Announcements", {
    x: 0.7, y: 1.4, w: 12, h: 1.4,
    fontSize: 68, fontFace: FONT.head, color: COLOR.white, bold: true, margin: 0
  });
  s.addText("A Customer Briefing", {
    x: 0.7, y: 2.8, w: 12, h: 0.7,
    fontSize: 32, fontFace: FONT.light, color: COLOR.accent, margin: 0
  });
  s.addText("A guided tour of every AI announcement from Build 2026 — the models, the platform, the agents, the governance, and the data and infrastructure that run them.", {
    x: 0.7, y: 3.7, w: 11.5, h: 1.6,
    fontSize: 16, fontFace: FONT.body, color: COLOR.white, valign: "top", margin: 0
  });
  addKpiStrip(s, [
    { value: "25+", label: "AI ANNOUNCEMENTS" },
    { value: "7",   label: "NEW MAI MODELS" },
    { value: "2",   label: "OPEN STANDARDS" },
    { value: "1",   label: "AGENT PLATFORM" },
  ]);
  s.addText("San Francisco · June 2–3, 2026", {
    x: 0.7, y: 7.0, w: 12, h: 0.3,
    fontSize: 11, fontFace: FONT.body, color: COLOR.accent, charSpacing: 4, margin: 0
  });
}

// Slide 2 — Thesis
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addTitle(s, "The Build 2026 thesis", "Opening");
  // pull quote block
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.95, w: 12.33, h: 1.6,
    fill: { color: COLOR.deep }, line: { color: COLOR.deep }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.95, w: 0.12, h: 1.6,
    fill: { color: COLOR.accent }, line: { color: COLOR.accent }
  });
  s.addText("\u201CThe system running AI matters more than any single model.\u201D", {
    x: 0.9, y: 2.05, w: 11.8, h: 0.95,
    fontSize: 26, fontFace: FONT.head, color: COLOR.white, italic: true, bold: true, margin: 0
  });
  s.addText("— Satya Nadella, Build 2026 keynote", {
    x: 0.9, y: 3.0, w: 11.8, h: 0.4,
    fontSize: 13, fontFace: FONT.body, color: COLOR.accent, margin: 0
  });
  s.addText("This briefing follows that thesis. We will look at:", {
    x: 0.5, y: 3.85, w: 12.3, h: 0.4,
    fontSize: 15, fontFace: FONT.body, color: COLOR.ink, margin: 0
  });
  const items = [
    "The MODELS Microsoft builds — and how customers can shape them.",
    "The PLATFORM that turns models into governed, production agents.",
    "The AGENTS that ship to users, devices, and enterprises.",
    "The STANDARDS that let agents act safely across vendors.",
    "The DATA and INFRASTRUCTURE that make all of it economical at scale.",
  ];
  items.forEach((t, i) => {
    s.addShape(pres.shapes.OVAL, {
      x: 0.55, y: 4.45 + i * 0.46, w: 0.28, h: 0.28,
      fill: { color: COLOR.blue }, line: { color: COLOR.blue }
    });
    s.addText(String(i+1), {
      x: 0.55, y: 4.45 + i * 0.46, w: 0.28, h: 0.28,
      fontSize: 11, fontFace: FONT.head, color: COLOR.white, bold: true, align: "center", valign: "middle", margin: 0
    });
    s.addText(t, {
      x: 1.0, y: 4.42 + i * 0.46, w: 11.5, h: 0.4,
      fontSize: 14, fontFace: FONT.body, color: COLOR.ink, margin: 0
    });
  });
}

// Slide 3 — How to read this deck
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addTitle(s, "How to read this deck", "Reading guide");
  s.addText("Every announcement uses the same three-part frame.", {
    x: 0.5, y: 1.62, w: 12.3, h: 0.35,
    fontSize: 15, fontFace: FONT.body, color: COLOR.muted, margin: 0
  });
  addWhatWhyStart(s,
    "The shipped capability, in one sentence — no marketing, no hedging.",
    "The customer problem it removes, and where it changes a decision you were already making.",
    "The concrete first step — a pilot, an eval, a migration, or a conversation with your account team.",
    { y: 2.15, h: 4.3 }
  );
  // callout
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 6.65, w: 12.33, h: 0.45,
    fill: { color: COLOR.deep }, line: { color: COLOR.deep }
  });
  s.addText("Each section ends with a \u201CStart here\u201D slide that maps the announcements to a customer journey.", {
    x: 0.7, y: 6.65, w: 12, h: 0.45,
    fontSize: 13, fontFace: FONT.body, color: COLOR.white, valign: "middle", italic: true, margin: 0
  });
}

// Slide 4 — Agenda
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addTitle(s, "Agenda", "Eight sections, one story");
  addStyledTable(s, [
    ["#", "Section", "Focus", "Slides"],
    ["1", "Models",        "MAI family and Frontier Tuning",                       "4"],
    ["2", "Platform",      "Microsoft Foundry end to end",                         "7"],
    ["3", "Agents in production", "Autopilots, Scout, Copilot app",                "4"],
    ["4", "Governance & quality", "ASSERT, ACS, OpenClaw",                        "4"],
    ["5", "Data for AI",   "HorizonDB, Cosmos DB, Fabric",                         "4"],
    ["6", "Infrastructure for AI", "Cobalt 200, Confidential, Rayfin",            "4"],
    ["7", "Frontier work", "Microsoft Discovery, Project Solara",                  "3"],
    ["8", "Where to start", "Customer journeys and resources",                     "3"],
  ], { colW: [0.6, 3.0, 7.73, 1.0], rowH: 0.45 });
}

// ─── SECTION 1: MODELS ───
{
  const s = pres.addSlide({ masterName: "DIVIDER" });
  addDivider(s, "01", "Models", "The MAI family and Frontier Tuning — the substrate every agent runs on.");
}

// Seven MAI models
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 01 · MODELS");
  addTitle(s, "Seven new MAI models", "The biggest first-party drop in Microsoft history");
  addStyledTable(s, [
    ["Model", "Purpose", "Best for"],
    ["MAI Image-2.5",       "Frontier image generation",            "Marketing, design systems"],
    ["MAI Image-2.5-Flash", "Low-latency image variant",            "Interactive UX, live editing"],
    ["MAI Transcribe-1.5",  "Multilingual real-time speech-to-text","Contact centers, meetings"],
    ["MAI Thinking-1",      "First Microsoft reasoning model",      "Planning, analysis, agents"],
    ["MAI Voice-2",         "Natural, controllable TTS",            "Brand voices, narration"],
    ["MAI Voice-2-Flash",   "Ultra-low-latency voice",              "Live conversational agents"],
    ["MAI Code-1-Flash",    "Code generation for agent loops",      "Tool-use, dev agents"],
  ], { colW: [2.6, 4.8, 4.93], rowH: 0.4 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.55, w: 12.33, h: 0.55, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Evaluate MAI Thinking-1 and MAI Code-1-Flash against your current reasoning and dev-agent workloads.", options: { color: COLOR.ink } },
  ], { x: 0.7, y: 6.55, w: 12, h: 0.55, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Frontier Tuning
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 01 · MODELS");
  addTitle(s, "Frontier Tuning", "Your own frontier model — not a downstream derivative");
  addTiles(s, [
    { head: "Before", body: "You fine-tuned a smaller derivative model and accepted a quality ceiling. The frontier model was a black box you only called.", bar: COLOR.muted },
    { head: "After",  body: "You shape the frontier model itself. Private variants. Continuous improvement from production traces. Full Foundry lifecycle tooling.", bar: COLOR.blue },
    { head: "How it works", body: "SFT, DPO, and RFT pipelines for frontier MAI models. Private variants with isolated weights and evals. Continuous improvement using production traces.", bar: COLOR.warm },
    { head: "Why it matters", body: "The center of gravity is shifting from \u201Cwhich model do I call?\u201D to \u201Cwhich model is mine?\u201D — Frontier Tuning makes that transition operational.", bar: COLOR.green },
  ], { y: 1.85, h: 4.6 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.55, w: 12.33, h: 0.55, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Identify 1–2 workloads where a generic frontier model is consistently 5–10 quality points behind your bar. Those are your first Frontier Tuning candidates.", options: { color: COLOR.ink } },
  ], { x: 0.7, y: 6.55, w: 12, h: 0.55, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Models — Start here
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 01 · MODELS");
  addTitle(s, "Models — start here", "Pick one row and move this quarter");
  addStyledTable(s, [
    ["If you are…",                       "Start with…",                              "Why"],
    ["New to Microsoft models",           "MAI Thinking-1 behind your top agent",     "Easiest A/B against your current LLM"],
    ["Running a contact center",          "MAI Voice-2-Flash + MAI Transcribe-1.5",   "Drop-in latency win on live channels"],
    ["Shipping a code assistant",         "MAI Code-1-Flash in your agent loop",      "Built for tool-call patterns"],
    ["At the quality ceiling",            "Frontier Tuning on your top-3 painful workloads", "The only path past the generic-model plateau"],
  ], { colW: [3.8, 4.5, 4.03], rowH: 0.55 });
  s.addText("All available through Microsoft Foundry — one billing surface, one identity model, one governance plane.", {
    x: 0.5, y: 5.7, w: 12.3, h: 0.4,
    fontSize: 13, fontFace: FONT.body, color: COLOR.muted, italic: true, margin: 0
  });
}

// ─── SECTION 2: PLATFORM ───
{
  const s = pres.addSlide({ masterName: "DIVIDER" });
  addDivider(s, "02", "Platform", "Microsoft Foundry, end to end — retrieval, grounding, runtime, lifecycle, and a closed-loop optimizer.");
}

// Foundry at a glance — visual stack diagram
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 02 · PLATFORM");
  addTitle(s, "Microsoft Foundry — the agent platform at a glance", "One stack, six new capabilities");

  // Vertical budget: 1.75 → 7.10 = 5.35"
  // Experiences (0.7) + gap(0.06) + Platform panel (3.3) + gap(0.06) + Identity (0.35) + gap(0.06) + Models (0.5) = 5.03"
  const layerX = 0.5, layerW = 12.33;
  const stackY = 1.75;

  // Experiences layer
  s.addShape(pres.shapes.RECTANGLE, { x: layerX, y: stackY, w: layerW, h: 0.7, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("AGENT EXPERIENCES", { x: layerX + 0.3, y: stackY + 0.06, w: 4, h: 0.25, fontSize: 9, fontFace: FONT.head, color: COLOR.accent, bold: true, charSpacing: 4, margin: 0 });
  s.addText("Copilot   ·   Autopilots   ·   Microsoft Scout   ·   Custom Agents", { x: layerX + 0.3, y: stackY + 0.32, w: layerW - 0.6, h: 0.35, fontSize: 15, fontFace: FONT.head, color: COLOR.white, bold: true, margin: 0 });

  // Platform panel
  const pY = stackY + 0.76;       // 2.51
  const pH = 3.3;
  s.addShape(pres.shapes.RECTANGLE, { x: layerX, y: pY, w: layerW, h: pH, fill: { color: COLOR.soft }, line: { color: COLOR.border } });
  s.addText("FOUNDRY PLATFORM", { x: layerX + 0.3, y: pY + 0.12, w: 4, h: 0.25, fontSize: 9, fontFace: FONT.head, color: COLOR.blue, bold: true, charSpacing: 4, margin: 0 });

  // 5 capability tiles in 2 rows of 3 / 2
  const tiles = [
    { h: "Foundry IQ",              b: "Unified retrieval across enterprise sources" },
    { h: "Web IQ",                  b: "Industrial-grade web grounding with citations" },
    { h: "Agent Runtime",           b: "Hosted A2A / MCP runtime with memory" },
    { h: "Model Lifecycle",         b: "Eval, canary, shadow, rollback" },
    { h: "Agent Optimization Loop", b: "Traces → graders → testable diffs" },
  ];
  const tileGap = 0.15;
  const colW2 = (layerW - 0.6 - tileGap * 2) / 3;
  const tilesTop = pY + 0.45;
  const tilesBottomLimit = pY + pH - 0.15;
  const tH = (tilesBottomLimit - tilesTop - tileGap) / 2; // two rows
  tiles.forEach((t, i) => {
    const r = Math.floor(i / 3), c = i % 3;
    const x = layerX + 0.3 + c * (colW2 + tileGap);
    const y = tilesTop + r * (tH + tileGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: colW2, h: tH, fill: { color: COLOR.white }, line: { color: COLOR.border } });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: colW2, h: 0.06, fill: { color: COLOR.blue }, line: { color: COLOR.blue } });
    s.addText(t.h, { x: x + 0.2, y: y + 0.15, w: colW2 - 0.4, h: 0.4, fontSize: 13, fontFace: FONT.head, color: COLOR.deep, bold: true, margin: 0 });
    s.addText(t.b, { x: x + 0.2, y: y + 0.55, w: colW2 - 0.4, h: tH - 0.65, fontSize: 11, fontFace: FONT.body, color: COLOR.muted, valign: "top", margin: 0 });
  });

  // Identity strip — below the platform panel
  const iY = pY + pH + 0.06;     // 2.51 + 3.3 + 0.06 = 5.87
  s.addShape(pres.shapes.RECTANGLE, { x: layerX, y: iY, w: layerW, h: 0.4, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("Identity   ·   RBAC   ·   Audit   ·   Policy", { x: layerX, y: iY, w: layerW, h: 0.4, fontSize: 12, fontFace: FONT.head, color: COLOR.white, bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0 });

  // Models layer below identity
  const mY = iY + 0.46;          // 6.33
  s.addShape(pres.shapes.RECTANGLE, { x: layerX, y: mY, w: layerW, h: 0.55, fill: { color: COLOR.blue }, line: { color: COLOR.blue } });
  s.addText("MAI  ·  OpenAI  ·  Phi  ·  Llama  ·  Mistral  ·  DeepSeek  ·  Partner models", {
    x: layerX, y: mY, w: layerW, h: 0.55, fontSize: 13, fontFace: FONT.head, color: COLOR.white, bold: true, align: "center", valign: "middle", margin: 0
  });
  // models ends at 6.88 — clear of footer divider at 7.18
}

// Foundry IQ
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 02 · PLATFORM");
  addTitle(s, "Foundry IQ", "Unified retrieval — serverless, billed per query");

  addStyledTable(s, [
    ["Without Foundry IQ",                          "With Foundry IQ"],
    ["4–8 weeks of RAG plumbing per source",        "One API, one schema, one bill"],
    ["Self-managed embedding pipelines",            "Managed indexing and re-ranking"],
    ["Per-cluster capacity planning",               "Serverless, pay-per-query"],
    ["Bespoke evaluations",                         "Eval harness included"],
  ], { y: 1.85, colW: [6.16, 6.17], rowH: 0.55 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 12.33, h: 1.5, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 0.08, h: 1.5, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("WHY IT MATTERS", { x: 0.75, y: 5.1, w: 12, h: 0.3, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("Retrieval is the #1 reason production agents fail. Foundry IQ collapses the most expensive plumbing in any agent project into a managed dependency.", {
    x: 0.75, y: 5.4, w: 12, h: 1.0, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Pick your most-asked-about knowledge surface (often the internal wiki). Stand up a Foundry IQ index this week and compare grounded answers against your current bot.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Web IQ
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 02 · PLATFORM");
  addTitle(s, "Web IQ", "Industrial-grade web grounding for agents");
  addTiles(s, [
    { head: "Real-time grounding with citations", body: "Every claim is traceable — built for agents, not search ads.", bar: COLOR.blue },
    { head: "Freshness + topical ranking",        body: "Tuned for agentic queries; surfaces what is true today.", bar: COLOR.blue },
    { head: "Provenance metadata",                body: "Audit-friendly provenance for compliance and governance.", bar: COLOR.warm },
    { head: "Foundry + Copilot APIs",             body: "Available to any agent — first-party or third-party.", bar: COLOR.green },
  ], { y: 1.85, h: 4.6 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Any agent that needs \u201Cwhat's true today\u201D — competitive intel, support, regulatory monitoring — should be evaluated against Web IQ before custom scraping is greenlit.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Foundry Agents (runtime)
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 02 · PLATFORM");
  addTitle(s, "Foundry Agents", "Hosted runtime for the full agent lifecycle");
  addTiles(s, [
    { head: "Runtime",  body: "Autoscaled hosted runtime · A2A and MCP protocol support · Durable per-agent memory.", bar: COLOR.blue },
    { head: "Operate",  body: "Continuous evaluation · Trace-derived datasets · Live cost / latency / quality dashboards.", bar: COLOR.warm },
    { head: "Govern",   body: "Per-agent identity · Role-based access · Policy-gated promotions · Full audit trail.", bar: COLOR.green },
    { head: "Extend",   body: "Bring-your-own-container agents · Self-service quota · Expanded regional footprint.", bar: COLOR.amber },
  ]);
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("Writing an agent is the easy part. Running an agent — versioned, observable, governed, recoverable — is what stops most pilots. Foundry now owns that surface.", {
    x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, color: COLOR.white, valign: "middle", italic: true, margin: 0
  });
}

// Foundry Models — services discipline
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 02 · PLATFORM");
  addTitle(s, "Foundry Models", "Treat models like services — versioned, observable, reversible");
  addStyledTable(s, [
    ["Capability",                                "What it replaces"],
    ["Side-by-side evals across providers",       "Hand-rolled eval notebooks"],
    ["Canary and shadow deployments",             "Manual cutovers and incident risk"],
    ["Cost / latency / quality dashboards",       "Three siloed dashboards"],
    ["Policy-gated promotion to production",      "Tribal-knowledge release gates"],
  ], { y: 1.85, colW: [6.16, 6.17], rowH: 0.55 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 12.33, h: 1.5, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 0.08, h: 1.5, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("WHY IT MATTERS", { x: 0.75, y: 5.1, w: 12, h: 0.3, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("Models are now services. They need versioning, observability, and safe rollback — the same disciplines we apply to microservices.", {
    x: 0.75, y: 5.4, w: 12, h: 1.0, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Pick the agent whose model you've been \u201Cmeaning to upgrade.\u201D Run it through a Foundry shadow deployment for two weeks.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Foundry Deploy
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 02 · PLATFORM");
  addTitle(s, "Foundry Deploy", "Closing the PoC-to-production gap");
  addTiles(s, [
    { head: "Self-service quota",       body: "No more support tickets to scale a pilot. Scale on demand.", bar: COLOR.blue },
    { head: "Expanded regional reach",  body: "Data residency in more countries — fewer compliance blockers.", bar: COLOR.blue },
    { head: "Bring-your-own-container", body: "Hosted agents that keep your stack and gain the runtime.", bar: COLOR.warm },
    { head: "Built-in RBAC",            body: "Same identity primitives across agents, models, and tools.", bar: COLOR.green },
  ]);
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "If you have a pilot that has been waiting on quota, region, or container packaging — re-open it this quarter.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Agent Optimization Loop — diagram
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 02 · PLATFORM");
  addTitle(s, "Agent Optimization Loop", "Closed-loop self-improvement for production agents");

  // pipeline boxes
  const stages = [
    { label: "Production traces", color: COLOR.deep },
    { label: "Graders\n(quality · cost · latency · safety)", color: COLOR.blue },
    { label: "Candidate diffs\n(instructions · tools · routing)", color: COLOR.warm },
    { label: "Held-out evals", color: COLOR.amber },
    { label: "Promote", color: COLOR.green },
  ];
  const sx = 0.5, sy = 2.2, sw = 12.33, sh = 1.3;
  const boxW = (sw - 0.6 * (stages.length - 1)) / stages.length;
  stages.forEach((stg, i) => {
    const x = sx + i * (boxW + 0.6);
    s.addShape(pres.shapes.RECTANGLE, { x, y: sy, w: boxW, h: sh, fill: { color: stg.color }, line: { color: stg.color } });
    s.addText(stg.label, { x, y: sy, w: boxW, h: sh, fontSize: 13, fontFace: FONT.head, color: COLOR.white, bold: true, align: "center", valign: "middle", margin: 0 });
    if (i < stages.length - 1) {
      // arrow
      s.addShape(pres.shapes.RIGHT_TRIANGLE, { x: x + boxW + 0.1, y: sy + sh/2 - 0.18, w: 0.4, h: 0.36, fill: { color: COLOR.muted }, line: { color: COLOR.muted }, rotate: 90 });
    }
  });
  // loop arrow back
  s.addShape(pres.shapes.LINE, { x: 0.7, y: 4.05, w: 11.93, h: 0, line: { color: COLOR.muted, width: 1.25, dashType: "dash", endArrowType: "triangle" } });
  s.addText("trace capture continues", { x: 0.7, y: 4.1, w: 11.93, h: 0.3, fontSize: 10, fontFace: FONT.body, color: COLOR.muted, align: "center", italic: true, margin: 0 });

  // why + start here
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.7, w: 12.33, h: 1.5, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.7, w: 0.08, h: 1.5, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("WHY IT MATTERS", { x: 0.75, y: 4.8, w: 12, h: 0.3, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("Agents drift. Without a feedback loop, they get worse over time — not better. This is the missing piece between \u201Cdeployed\u201D and \u201Cimproving.\u201D", {
    x: 0.75, y: 5.1, w: 12, h: 1.0, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.45, w: 12.33, h: 0.55, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Turn on trace capture for one production agent today. The loop needs ~2 weeks of real traces before it produces useful candidate diffs.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.45, w: 12, h: 0.55, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Platform — start here
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 02 · PLATFORM");
  addTitle(s, "Platform — start here", "Five concrete moves");
  addStyledTable(s, [
    ["You have…",                                     "Do this first",                                       "Outcome"],
    ["A RAG project in flight",                       "Replace your retrieval with Foundry IQ",              "Cut 4–8 weeks of plumbing"],
    ["Agents stuck in pilot",                         "Move them to the Foundry agent runtime",              "Identity, observability, governance included"],
    ["One model in production",                       "Add a shadow deployment of an alternative",           "Quantify the upgrade risk in 2 weeks"],
    ["Agents quietly drifting",                       "Enable trace capture + the optimization loop",        "First candidate diffs in ~2 weeks"],
    ["Pilots stalled on quota / region",              "Re-open them — quota is now self-service",            "Unblock without a support ticket"],
  ], { y: 1.85, colW: [3.6, 4.5, 4.23], rowH: 0.55 });
}

// ─── SECTION 3: AGENTS IN PRODUCTION ───
{
  const s = pres.addSlide({ masterName: "DIVIDER" });
  addDivider(s, "03", "Agents in production", "Autopilots, Microsoft Scout, and the GitHub Copilot app — from \u201Canswer my question\u201D to \u201Cdo this job.\u201D");
}

// Autopilots
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 03 · AGENTS");
  addTitle(s, "Autopilots", "Long-running, goal-driven agents");
  addTiles(s, [
    { head: "Long-horizon planning", body: "Memory and tools to pursue multi-step goals over hours or days — not single chat turns.", bar: COLOR.blue },
    { head: "Cross-app execution",   body: "Acts across Microsoft Graph and MCP-compatible tools. Not locked to one surface.", bar: COLOR.blue },
    { head: "User-in-the-loop",      body: "Approvals, checkpoints, and oversight built in — not optional.", bar: COLOR.warm },
    { head: "Available everywhere",  body: "Surfaces in Copilot and Foundry — buy or build.", bar: COLOR.green },
  ]);
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("Autopilots reframe the user model from Q&A to jobs-to-be-done. That changes the unit of value an agent delivers — and how IT measures success.", {
    x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, color: COLOR.white, valign: "middle", italic: true, margin: 0
  });
}

// Microsoft Scout
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 03 · AGENTS");
  addTitle(s, "Microsoft Scout", "Enterprise-secure personal agent — built on OpenClaw");
  addWhatWhyStart(s,
    "A persistent personal agent that runs alongside users across apps and devices. Pairs the OpenClaw sandbox with per-user memory, identity, and policy controls.",
    "Personal agents only work if IT can trust them. Scout is the first plausible answer: security, identity, and governance baked in — not bolted on.",
    "Pilot Scout with a small cross-functional group (sales, support, engineering). Measure which jobs your users had quietly given up on automating."
  );
}

// GitHub Copilot app
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 03 · AGENTS");
  addTitle(s, "GitHub Copilot app", "From your workspace to a reviewed PR");
  addStyledTable(s, [
    ["Phase",     "What Copilot does"],
    ["Understand","Indexes your local repo with privacy-respecting workspace awareness."],
    ["Plan",      "Decomposes the task; surfaces assumptions for approval."],
    ["Execute",   "Edits files, runs tests, fixes failures — with you watching."],
    ["Ship",      "Opens a PR, responds to review comments, iterates until merged."],
  ], { y: 1.85, colW: [2.2, 10.13], rowH: 0.6 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.5, w: 12.33, h: 1.0, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.5, w: 0.08, h: 1.0, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("WHY IT MATTERS", { x: 0.75, y: 5.6, w: 12, h: 0.3, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("\u201CThe agent that ships code\u201D has been the most overpromised idea in AI. The Copilot app is the most concrete instantiation yet.", {
    x: 0.75, y: 5.9, w: 12, h: 0.5, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Have your most-skeptical senior engineer use it for one week on real backlog tickets. Their feedback will tell you more than any benchmark.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Agents — start here
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 03 · AGENTS");
  addTitle(s, "Agents in production — start here", "Pick one. Measure the right thing.");
  addStyledTable(s, [
    ["You want…",                                                "Use…",                  "First measure"],
    ["To automate a multi-step job — not just answer a question",  "Autopilots",            "Time-to-completion per job, with user-in-the-loop approvals"],
    ["A personal agent your CISO will actually approve",           "Microsoft Scout",       "Capabilities granted vs. capabilities used per user"],
    ["An agent that ships PRs — not snippets",                     "GitHub Copilot app",    "PRs merged with no human edits / total PRs opened"],
  ], { y: 1.85, colW: [5.5, 2.8, 4.03], rowH: 0.6 });
  s.addText("All three sit on the same governance fabric — OpenClaw for execution, ACS for policy, MCP for tools. (Next section.)", {
    x: 0.5, y: 4.65, w: 12.3, h: 0.4, fontSize: 13, fontFace: FONT.body, color: COLOR.muted, italic: true, margin: 0
  });
}

// ─── SECTION 4: GOVERNANCE ───
{
  const s = pres.addSlide({ masterName: "DIVIDER" });
  addDivider(s, "04", "Governance & quality", "ASSERT, the Agent Control Specification, and OpenClaw — how agents act safely and stay correct.");
}

// ASSERT
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 04 · GOVERNANCE");
  addTitle(s, "ASSERT", "Turn written specs into executable evals");
  addWhatWhyStart(s,
    "Open-source framework that compiles natural-language behavior specifications into deterministic, runnable evals. Spec → test cases → graders → regression suite.",
    "Evals are the new tests. ASSERT lowers the activation energy of writing them from days to minutes — and makes them part of every PR.",
    "Take one written behavior requirement for one production agent and compile it with ASSERT this week. You will likely find a regression you didn't know existed."
  );
}

// ACS
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 04 · GOVERNANCE");
  addTitle(s, "Agent Control Specification (ACS)", "Portable runtime governance for agents");

  // sample manifest block
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.85, w: 6.0, h: 4.7, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("ACS MANIFEST", { x: 0.7, y: 1.95, w: 5.6, h: 0.35, fontSize: 11, fontFace: FONT.head, color: COLOR.accent, bold: true, charSpacing: 4, margin: 0 });
  const manifest = [
    "agent: invoice-helper",
    "version: 2.1.0",
    "capabilities:",
    "  - read_email",
    "  - send_email",
    "  - schedule_meeting",
    "approvals:",
    "  send_email:        user",
    "  external_payment:  manager",
    "data_boundaries:",
    "  pii:        redact",
    "  financial:  tenant_only",
    "audit:",
    "  trace_to: org_audit_endpoint",
  ];
  s.addText(manifest.join("\n"), {
    x: 0.7, y: 2.4, w: 5.6, h: 4.05,
    fontSize: 13, fontFace: "Consolas", color: COLOR.white, valign: "top", margin: 0
  });

  // right column
  s.addText("What it is", { x: 6.7, y: 1.95, w: 6.13, h: 0.35, fontSize: 11, fontFace: FONT.head, color: COLOR.blue, bold: true, charSpacing: 4, margin: 0 });
  s.addText("A vendor-neutral open standard. Agents publish an ACS manifest declaring capabilities, approvals, data boundaries, and audit hooks — and any compliant runtime (Foundry, Copilot, Windows, third-party) enforces them uniformly.", {
    x: 6.7, y: 2.3, w: 6.13, h: 1.7, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });
  s.addText("Why it matters", { x: 6.7, y: 4.1, w: 6.13, h: 0.35, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("Agents will outlive any one platform. ACS is the contract that lets governance travel with them — the way OAuth did for identity.", {
    x: 6.7, y: 4.45, w: 6.13, h: 1.5, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "When evaluating any new agent (built or bought), ask: \u201CDoes it publish an ACS manifest?\u201D Make it a procurement requirement.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// OpenClaw
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 04 · GOVERNANCE");
  addTitle(s, "OpenClaw", "The safe execution standard for local agents");
  addStyledTable(s, [
    ["Capability",                       "Effect"],
    ["Capability-based permissions",     "Agents get the minimum they need, per action — not a blanket grant."],
    ["Sandboxed execution",              "Each action runs in isolation; failures don't escape."],
    ["Full audit trail",                 "The user (and IT) sees what ran, when, and why."],
    ["Vendor-neutral",                   "Works with any agent — Microsoft, GitHub, third-party."],
  ], { y: 1.85, colW: [4.3, 8.03], rowH: 0.6 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.5, w: 12.33, h: 1.0, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.5, w: 0.08, h: 1.0, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("WHY IT MATTERS", { x: 0.75, y: 5.6, w: 12, h: 0.3, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("Agents need to do things on PCs — doing that safely is genuinely hard. OpenClaw is the first credible cross-vendor answer. Scout, the Copilot app, and Solara all build on it.", {
    x: 0.75, y: 5.9, w: 12, h: 0.6, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Update your endpoint policy to require OpenClaw for any agent that performs local actions. This is a 2026 must-have.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Three layers working together
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 04 · GOVERNANCE");
  addTitle(s, "Three layers, one governance fabric", "Insist on all three — for every agent you adopt");
  const cols = [
    { title: "ASSERT",   q: "Did the agent behave as specified?", a: "Quality — continuously, in CI.", color: COLOR.blue },
    { title: "ACS",      q: "Was the agent allowed to do that?",  a: "Policy — portably, across runtimes.", color: COLOR.warm },
    { title: "OpenClaw", q: "How did the agent actually run it?", a: "Execution — safely, with audit.",     color: COLOR.green },
  ];
  const colW = 4.05, colH = 4.4, baseY = 1.9, gap = 0.15;
  cols.forEach((c, i) => {
    const x = 0.5 + i * (colW + gap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: baseY, w: colW, h: colH, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: baseY, w: colW, h: 0.08, fill: { color: c.color }, line: { color: c.color } });
    s.addText(c.title, { x: x + 0.3, y: baseY + 0.3, w: colW - 0.6, h: 0.7, fontSize: 28, fontFace: FONT.head, color: COLOR.white, bold: true, margin: 0 });
    s.addText(c.q,     { x: x + 0.3, y: baseY + 1.2, w: colW - 0.6, h: 1.2, fontSize: 17, fontFace: FONT.body, color: COLOR.accent, italic: true, margin: 0 });
    s.addText(c.a,     { x: x + 0.3, y: baseY + 2.7, w: colW - 0.6, h: 1.5, fontSize: 16, fontFace: FONT.head, color: COLOR.white, bold: true, margin: 0 });
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.55, w: 12.33, h: 0.55, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addText("Together they form the fabric beneath Autopilots, Scout, the Copilot app, and any third-party agent you adopt.", {
    x: 0.75, y: 6.55, w: 12, h: 0.55, fontSize: 13, fontFace: FONT.body, color: COLOR.ink, valign: "middle", italic: true, margin: 0
  });
}

// ─── SECTION 5: DATA ───
{
  const s = pres.addSlide({ masterName: "DIVIDER" });
  addDivider(s, "05", "Data for AI", "HorizonDB, Cosmos DB, and Microsoft Fabric — because every agent eventually has a database problem.");
}

// HorizonDB
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 05 · DATA");
  addTitle(s, "Azure HorizonDB", "Postgres, engineered for the AI era");
  addStyledTable(s, [
    ["Replaces",                                          "Why it matters for AI"],
    ["Postgres + a vector DB + a memory store",           "One engine, one query language, one bill"],
    ["Capacity-planned clusters",                         "Elastic compute, separated storage, serverless"],
    ["Bolt-on hybrid search",                             "Native vector + lexical, first-class"],
    ["Custom memory plumbing",                            "Built-in agent memory primitives"],
  ], { y: 1.85, colW: [6.16, 6.17], rowH: 0.55 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 12.33, h: 1.5, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 0.08, h: 1.5, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("WHY IT MATTERS", { x: 0.75, y: 5.1, w: 12, h: 0.3, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("AI apps need transactional, vector, and memory workloads in the same place. HorizonDB removes the need to stitch three systems together — and the consistency headaches that come with it.", {
    x: 0.75, y: 5.4, w: 12, h: 1.0, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Your next greenfield agent project should default to HorizonDB — not Postgres + Pinecone + Redis.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Cosmos DB
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 05 · DATA");
  addTitle(s, "Azure Cosmos DB", "Agent memory at planetary scale");
  addTiles(s, [
    { head: "Episodic + semantic memory primitives", body: "Write less plumbing. Native types for what agents need.", bar: COLOR.blue },
    { head: "Vector + full-text hybrid search",       body: "Native, not bolted on. Same engine that runs your transactions.", bar: COLOR.blue },
    { head: "Global multi-write",                     body: "Agents that follow users across regions, consistently.", bar: COLOR.warm },
    { head: "SDKs for .NET, Python, JS, Java",        body: "First-class clients for every major agent stack.", bar: COLOR.green },
  ]);
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Building a global agent (consumer, multi-region enterprise, mobile-first)? Cosmos DB agentic toolkits should be your shortlist before anything else.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Fabric
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 05 · DATA");
  addTitle(s, "Microsoft Fabric", "GPU-accelerated warehouse + agentic apps blueprint");
  addTiles(s, [
    { head: "GPU-accelerated warehouse", body: "Transparent GPU offload for eligible queries. Order-of-magnitude speedups on large scans and warehouse-scale embedding generation. Same SQL, same OneLake.", bar: COLOR.blue },
    { head: "Agentic apps blueprint",    body: "Reference architectures, SDKs, and templates for production agents spanning Fabric, Cosmos DB, HorizonDB, Azure SQL, MySQL, and PostgreSQL — with cross-store governance.", bar: COLOR.warm },
  ], { y: 1.85, h: 4.6 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Identify your slowest scheduled warehouse query. Re-run it with GPU offload enabled. The before/after is usually the most persuasive demo you can show your data team.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Data — start here
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 05 · DATA");
  addTitle(s, "Data for AI — start here", "Right engine, right workload");
  addStyledTable(s, [
    ["Your situation",                                "Pick",                                "Why"],
    ["New AI app, single region",                      "HorizonDB",                           "OLTP + vector + memory in one engine"],
    ["New AI app, global users",                       "Cosmos DB + agentic toolkits",        "Multi-write + memory primitives"],
    ["Large analytical queries feeding agents",        "Fabric warehouse with GPU offload",   "Order-of-magnitude speedups"],
    ["Crossing transactional and analytical",          "Fabric + Databases blueprint",        "Reference architectures + SDKs"],
  ], { y: 1.85, colW: [4.6, 3.8, 3.93], rowH: 0.55 });
  s.addText("All four sit behind a unified governance plane — RBAC, audit, and policy that match what you already use elsewhere in Azure.", {
    x: 0.5, y: 4.65, w: 12.3, h: 0.4, fontSize: 13, fontFace: FONT.body, color: COLOR.muted, italic: true, margin: 0
  });
}

// ─── SECTION 6: INFRASTRUCTURE ───
{
  const s = pres.addSlide({ masterName: "DIVIDER" });
  addDivider(s, "06", "Infrastructure for AI", "Cobalt 200, Confidential Live Migration, and Rayfin — the substrate that makes everything above economical.");
}

// Cobalt 200
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 06 · INFRASTRUCTURE");
  addTitle(s, "Azure Cobalt 200 VMs", "50% faster · agentic-AI optimized");

  // big stat
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.85, w: 5.0, h: 4.7, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("50%", { x: 0.5, y: 2.4, w: 5.0, h: 1.8, fontSize: 120, fontFace: FONT.head, color: COLOR.accent, bold: true, align: "center", margin: 0 });
  s.addText("better performance vs. Cobalt 100\non general-purpose, web, data,\nand agentic AI workloads", {
    x: 0.5, y: 4.5, w: 5.0, h: 1.6, fontSize: 16, fontFace: FONT.body, color: COLOR.white, align: "center", margin: 0
  });

  // bullets right
  const items = [
    "Custom Microsoft-designed Arm-based silicon",
    "50% performance uplift across general workloads",
    "Tuned for agent runtimes, vector DBs, microservices",
    "Significant power-per-watt improvements",
  ];
  items.forEach((t, i) => {
    s.addShape(pres.shapes.OVAL, {
      x: 5.85, y: 2.0 + i * 0.7, w: 0.28, h: 0.28,
      fill: { color: COLOR.blue }, line: { color: COLOR.blue }
    });
    s.addText("✓", { x: 5.85, y: 2.0 + i * 0.7, w: 0.28, h: 0.28, fontSize: 12, fontFace: FONT.head, color: COLOR.white, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText(t, { x: 6.3, y: 1.97 + i * 0.7, w: 6.5, h: 0.4, fontSize: 15, fontFace: FONT.body, color: COLOR.ink, margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 5.7, y: 5.3, w: 7.13, h: 1.2, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.7, y: 5.3, w: 0.08, h: 1.2, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("As agents fan out into thousands of small calls, CPU efficiency becomes the difference between scaling and burning cash.", {
    x: 5.95, y: 5.4, w: 6.8, h: 1.0, fontSize: 13, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Re-baseline the CPU tier of your agent runtimes and vector DBs on Cobalt 200. TCO delta is usually visible inside one billing cycle.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Confidential live migration
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 06 · INFRASTRUCTURE");
  addTitle(s, "Confidential Live Migration", "Intel TDX — confidentiality and operability, at the same time");
  addStyledTable(s, [
    ["Before",                                                  "After"],
    ["Confidential = downtime for every host event",            "Live migration with memory encrypted in transit"],
    ["Attestation reset on every move",                         "Attestation continuity across source and destination"],
    ["Hard tradeoff: confidentiality OR operability",           "Both, at the same time"],
    ["Workloads required guest-side workarounds",               "Transparent to guest workloads — no changes"],
  ], { y: 1.85, colW: [6.16, 6.17], rowH: 0.55 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 12.33, h: 1.5, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 0.08, h: 1.5, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("WHY IT MATTERS", { x: 0.75, y: 5.1, w: 12, h: 0.3, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("Confidential AI workloads — regulated industries, sovereign deployments, sensitive fine-tuning — just became operationally boring.", {
    x: 0.75, y: 5.4, w: 12, h: 1.0, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Revisit any AI workload you previously deferred because confidential compute felt operationally fragile. The bar just moved.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Rayfin
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 06 · INFRASTRUCTURE");
  addTitle(s, "Rayfin", "Spec-to-backend in minutes");
  addTiles(s, [
    { head: "Spec → backend in minutes", body: "From PR description to deployable APIs, DBs, and queues — without a backend epic.", bar: COLOR.blue },
    { head: "Production defaults built in", body: "Auth, RBAC, audit, multi-tenant, zone-redundant — out of the box.", bar: COLOR.blue },
    { head: "Native Copilot integration", body: "The Copilot app generates and iterates Rayfin specs as part of normal PR flow.", bar: COLOR.warm },
    { head: "Differentiation focus",      body: "Compresses the boring 80% so teams ship the 20% that's actually theirs.", bar: COLOR.green },
  ]);
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Pick one new internal tool you'd normally schedule a 6-week backend sprint for. Build it with the Copilot app + Rayfin and measure the delta.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Infra — start here
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 06 · INFRASTRUCTURE");
  addTitle(s, "Infrastructure — start here", "Cost and operability are now unblockers, not constraints");
  addStyledTable(s, [
    ["Workload",                                          "Move to",                                "Expected impact"],
    ["Agent runtimes, vector DBs, microservices",         "Cobalt 200 VMs",                         "TCO improvement inside one billing cycle"],
    ["Sensitive / regulated AI workloads",                "Confidential live migration (TDX)",      "Eliminate downtime constraint"],
    ["New internal tools and admin apps",                 "Rayfin via the Copilot app",             "Days, not sprints, to a governed backend"],
  ], { y: 1.85, colW: [4.8, 3.8, 3.73], rowH: 0.6 });
}

// ─── SECTION 7: FRONTIER ───
{
  const s = pres.addSlide({ masterName: "DIVIDER" });
  addDivider(s, "07", "Frontier work", "Microsoft Discovery and Project Solara — where AI is being applied to science and to the device platform itself.");
}

// Discovery
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 07 · FRONTIER");
  addTitle(s, "Microsoft Discovery — GA", "Mayo Clinic co-developing a frontier healthcare model on top");
  addTiles(s, [
    { head: "Agentic R&D workflows",      body: "For materials, biotech, chemistry — governed end-to-end.", bar: COLOR.blue },
    { head: "Discovery app (preview)",    body: "Purpose-built UX designed for researchers, not chatbots.", bar: COLOR.blue },
    { head: "Integrated with Foundry",    body: "Models, evaluations, governance — same primitives as the rest of the stack.", bar: COLOR.warm },
    { head: "Mayo Clinic partnership",    body: "Co-developing a frontier healthcare AI model on Discovery.", bar: COLOR.green },
  ]);
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.green, transparency: 90 }, line: { color: COLOR.green } });
  s.addText([
    { text: "Start here  ", options: { bold: true, color: COLOR.green } },
    { text: "Any organization with an R&D function — pharma, materials, energy, advanced manufacturing — should pilot Discovery against a real research question this year.", options: { color: COLOR.ink } },
  ], { x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, valign: "middle", margin: 0 });
}

// Solara — visual planes
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 07 · FRONTIER");
  addTitle(s, "Project Solara", "An agent-first device platform");

  // intent pipeline boxes
  const stages = [
    { label: "Intent\n(user)",                    color: COLOR.deep },
    { label: "Plan\n(agent)",                     color: COLOR.blue },
    { label: "Tools\n(MCP · ACS · OpenClaw)",     color: COLOR.warm },
    { label: "Result",                            color: COLOR.green },
  ];
  const sy = 2.0, sh = 1.1;
  const boxW = (12.33 - 0.6 * (stages.length - 1)) / stages.length;
  stages.forEach((stg, i) => {
    const x = 0.5 + i * (boxW + 0.6);
    s.addShape(pres.shapes.RECTANGLE, { x, y: sy, w: boxW, h: sh, fill: { color: stg.color }, line: { color: stg.color } });
    s.addText(stg.label, { x, y: sy, w: boxW, h: sh, fontSize: 14, fontFace: FONT.head, color: COLOR.white, bold: true, align: "center", valign: "middle", margin: 0 });
    if (i < stages.length - 1) {
      s.addShape(pres.shapes.RIGHT_TRIANGLE, { x: x + boxW + 0.1, y: sy + sh/2 - 0.18, w: 0.4, h: 0.36, fill: { color: COLOR.muted }, line: { color: COLOR.muted }, rotate: 90 });
    }
  });

  // two planes
  const pY = 3.6;
  const planeW = 6.0, planeH = 2.5;
  // local
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: pY, w: planeW, h: planeH, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: pY, w: planeW, h: 0.08, fill: { color: COLOR.blue }, line: { color: COLOR.blue } });
  s.addText("LOCAL PLANE", { x: 0.7, y: pY + 0.2, w: planeW - 0.4, h: 0.35, fontSize: 11, fontFace: FONT.head, color: COLOR.blue, bold: true, charSpacing: 4, margin: 0 });
  s.addText("NPU/GPU inference · Per-user memory · Capability-bound tool execution", {
    x: 0.7, y: pY + 0.65, w: planeW - 0.4, h: planeH - 0.8, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });
  // cloud
  s.addShape(pres.shapes.RECTANGLE, { x: 6.83, y: pY, w: planeW, h: planeH, fill: { color: COLOR.soft }, line: { color: COLOR.soft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 6.83, y: pY, w: planeW, h: 0.08, fill: { color: COLOR.warm }, line: { color: COLOR.warm } });
  s.addText("CLOUD-BURST PLANE", { x: 7.03, y: pY + 0.2, w: planeW - 0.4, h: 0.35, fontSize: 11, fontFace: FONT.head, color: COLOR.warm, bold: true, charSpacing: 4, margin: 0 });
  s.addText("Foundry frontier models · Long-running Autopilots · Hosted memory + governance", {
    x: 7.03, y: pY + 0.65, w: planeW - 0.4, h: planeH - 0.8, fontSize: 14, fontFace: FONT.body, color: COLOR.ink, valign: "top", margin: 0
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.6, w: 12.33, h: 0.5, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("Solara is where the system running AI matters most. Day 1 showed the vision; Day 2 showed the seams.", {
    x: 0.75, y: 6.6, w: 12, h: 0.5, fontSize: 12, fontFace: FONT.body, color: COLOR.white, valign: "middle", italic: true, margin: 0
  });
}

// Frontier — what to watch
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 07 · FRONTIER");
  addTitle(s, "Frontier — what to watch (and what to do now)", "The standards underneath are already running in production");
  addStyledTable(s, [
    ["Initiative",                              "Time horizon",        "What customers should do today"],
    ["Microsoft Discovery",                     "Available now",        "Pilot one R&D question this year"],
    ["Mayo Clinic frontier health model",       "Co-developed",         "Watch as a reference for regulated frontier work"],
    ["Project Solara",                          "Research preview",     "Architect today's agents around MCP / ACS / OpenClaw"],
  ], { y: 1.85, colW: [4.5, 2.8, 5.03], rowH: 0.7 });
  s.addText("Frontier work is not a distraction from today's roadmap. The standards Microsoft is building underneath it are the same ones running in production right now.", {
    x: 0.5, y: 5.4, w: 12.3, h: 0.6, fontSize: 13, fontFace: FONT.body, color: COLOR.muted, italic: true, margin: 0
  });
}

// ─── SECTION 8: WHERE TO START ───
{
  const s = pres.addSlide({ masterName: "DIVIDER" });
  addDivider(s, "08", "Where to start", "Three concrete customer journeys you can begin this quarter — plus the official resource index.");
}

// Journey 1
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 08 · JOURNEYS");
  addTitle(s, "Journey #1 — \u201CWe have RAG bots, but they don't work in production.\u201D", "Six steps; first results inside two weeks");
  addStyledTable(s, [
    ["Step", "Action",                                                      "Outcome"],
    ["1",    "Replace your retrieval layer with Foundry IQ",                "Cut 4–8 weeks of plumbing per source"],
    ["2",    "Add Web IQ for any \u201Cwhat's true today\u201D questions",   "Citations, freshness, safety — by default"],
    ["3",    "Move the bot onto the Foundry agent runtime",                 "Identity, RBAC, observability included"],
    ["4",    "Wire one written behavior spec into ASSERT",                  "Catch your first regression this week"],
    ["5",    "Turn on the Agent Optimization Loop",                         "First candidate diffs in ~2 weeks"],
    ["6",    "Re-baseline runtime on Cobalt 200",                           "TCO improvement in one billing cycle"],
  ], { y: 1.85, colW: [0.6, 6.2, 5.53], rowH: 0.42 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.55, w: 12.33, h: 0.55, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("OUTCOME    A governed, measurable, continuously improving production agent — without rebuilding the team's stack from scratch.", {
    x: 0.75, y: 6.55, w: 12, h: 0.55, fontSize: 12, fontFace: FONT.body, color: COLOR.white, valign: "middle", italic: true, margin: 0
  });
}

// Journey 2
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 08 · JOURNEYS");
  addTitle(s, "Journey #2 — \u201CWe want personal AI, but our CISO said no.\u201D", "Co-design the rollout with security — not around it");
  addStyledTable(s, [
    ["Step", "Action",                                                       "Outcome"],
    ["1",    "Pilot Microsoft Scout with a small cross-functional group",    "Real usage data — not survey data"],
    ["2",    "Require ACS manifests for every agent in the pilot",           "Portable, auditable policy"],
    ["3",    "Require OpenClaw for all local actions",                       "Capability-scoped, sandboxed, audited"],
    ["4",    "Connect Scout traces to your existing audit pipeline",         "Trust through transparency, not promises"],
    ["5",    "Expand to one full function (sales or support)",               "Measure jobs-to-be-done, not chat turns"],
  ], { y: 1.85, colW: [0.6, 6.5, 5.23], rowH: 0.48 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.55, w: 12.33, h: 0.55, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("OUTCOME    A personal AI rollout your security team helped design — not one they're trying to contain after the fact.", {
    x: 0.75, y: 6.55, w: 12, h: 0.55, fontSize: 12, fontFace: FONT.body, color: COLOR.white, valign: "middle", italic: true, margin: 0
  });
}

// Journey 3
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 08 · JOURNEYS");
  addTitle(s, "Journey #3 — \u201CWe want agents to ship real software.\u201D", "Measured in merged PRs — not snippets in chat windows");
  addStyledTable(s, [
    ["Step", "Action",                                                       "Outcome"],
    ["1",    "Roll out the GitHub Copilot app to one engineering team",      "Real backlog tickets, real PRs"],
    ["2",    "Adopt Rayfin for new internal tools and admin apps",           "Days, not sprints, to a governed backend"],
    ["3",    "Use MAI Code-1-Flash in the agent loop",                       "Built for tool-call patterns"],
    ["4",    "Wrap every change with ASSERT evals in CI",                    "Regressions caught at PR time"],
    ["5",    "Use the Agent Optimization Loop on the dev agent",             "Continuous improvement, not stagnation"],
  ], { y: 1.85, colW: [0.6, 6.5, 5.23], rowH: 0.48 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.55, w: 12.33, h: 0.55, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("OUTCOME    An engineering org where agents are measured by merged PRs — not by code snippets in chat windows.", {
    x: 0.75, y: 6.55, w: 12, h: 0.55, fontSize: 12, fontFace: FONT.body, color: COLOR.white, valign: "middle", italic: true, margin: 0
  });
}

// Resources
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "SECTION 08 · RESOURCES");
  addTitle(s, "Resources — official links", "Newsroom, deep dives, and announcement blogs");
  addStyledTable(s, [
    ["Topic",                                          "Link"],
    ["Newsroom (all announcements)",                   "news.microsoft.com/build-2026"],
    ["MAI models",                                     "aka.ms/MAI-Build"],
    ["Foundry IQ",                                     "aka.ms/FoundryIQ"],
    ["Web IQ",                                         "aka.ms/nextgengrounding"],
    ["Foundry agents",                                 "aka.ms/BuildFoundryAgents"],
    ["Foundry models",                                 "aka.ms/BuildFoundryModels"],
    ["Azure HorizonDB",                                "aka.ms/HorizonDB-Build-blog"],
    ["Cosmos DB agentic toolkits",                     "aka.ms/build26/CosmosDBAgents"],
    ["Azure Cobalt 200",                               "aka.ms/Cobalt200VMs"],
    ["Rayfin",                                         "aka.ms/rayfin"],
    ["ASSERT · ACS · Optimization Loop · Scout · Solara", "commandline.microsoft.com"],
  ], { y: 1.6, colW: [5.5, 6.83], rowH: 0.4 });
}

// Recap
{
  const s = pres.addSlide({ masterName: "CONTENT" });
  addCornerStamp(s, "RECAP");
  addTitle(s, "The one slide to remember", "Pick one journey from section 8 and start it this quarter");

  // thesis bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.6, w: 12.33, h: 0.7, fill: { color: COLOR.deep }, line: { color: COLOR.deep } });
  s.addText("The system running AI matters more than any single model.", {
    x: 0.5, y: 1.6, w: 12.33, h: 0.7, fontSize: 18, fontFace: FONT.head, color: COLOR.white, bold: true, italic: true, align: "center", valign: "middle", margin: 0
  });

  addStyledTable(s, [
    ["Layer",         "What shipped at Build 2026"],
    ["Models",        "7 new MAI models · Frontier Tuning"],
    ["Platform",      "Foundry IQ · Web IQ · Foundry Agents · Models · Deploy · Optimization Loop"],
    ["Agents",        "Autopilots · Microsoft Scout · GitHub Copilot app"],
    ["Governance",    "ASSERT · Agent Control Specification · OpenClaw"],
    ["Data",          "HorizonDB · Cosmos DB agentic toolkits · Fabric GPU + blueprint"],
    ["Infrastructure","Cobalt 200 · Confidential live migration · Rayfin"],
    ["Frontier",      "Microsoft Discovery GA · Project Solara"],
  ], { y: 2.5, colW: [2.5, 9.83], rowH: 0.5 });
}

// Closing lead
{
  const s = pres.addSlide({ masterName: "LEAD" });
  s.addText("Thank you", {
    x: 0.7, y: 2.5, w: 12, h: 1.4,
    fontSize: 76, fontFace: FONT.head, color: COLOR.white, bold: true, margin: 0
  });
  s.addText("Questions?", {
    x: 0.7, y: 3.8, w: 12, h: 0.8,
    fontSize: 32, fontFace: FONT.light, color: COLOR.accent, margin: 0
  });
  s.addText("Microsoft Build 2026 — The AI Announcements", {
    x: 0.7, y: 5.2, w: 12, h: 0.5,
    fontSize: 18, fontFace: FONT.body, color: COLOR.white, margin: 0
  });
  s.addText("San Francisco · June 2–3, 2026", {
    x: 0.7, y: 5.6, w: 12, h: 0.4,
    fontSize: 14, fontFace: FONT.body, color: COLOR.accent, margin: 0
  });
  s.addText("For the full announcement index, demos, and the keynote replay:", {
    x: 0.7, y: 6.2, w: 12, h: 0.4,
    fontSize: 14, fontFace: FONT.body, color: COLOR.white, margin: 0
  });
  s.addText("news.microsoft.com/build-2026", {
    x: 0.7, y: 6.55, w: 12, h: 0.5,
    fontSize: 22, fontFace: FONT.head, color: COLOR.accent, bold: true, margin: 0
  });
}

// Save
pres.writeFile({ fileName: "Build-2026-AI-Customer-Briefing.pptx" })
  .then(fn => console.log("Wrote:", fn))
  .catch(err => { console.error(err); process.exit(1); });
