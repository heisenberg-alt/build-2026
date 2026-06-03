# Microsoft Build 2026 — The Announcements

A beautifully organized, single-page recap of every major announcement from **Microsoft Build 2026** in San Francisco. Built as a static site, ready to ship to **GitHub Pages**.

## Features

- **Preview cards** with category-filtered grid (AI · Infrastructure · Data · Windows · Quantum · Storage)
- **Click-through detail modal** with full explanation, "why it matters," and a deep link to the official Microsoft announcement
- **Official Microsoft imagery** from the Build 2026 newsroom
- **Animated hero** with gradient orbs, counters, and accessible keyboard navigation
- **Keynote highlights** and **photo gallery** sections
- **Mobile responsive**, dark, glass-morphism design
- **Zero build step** — pure HTML, CSS, and vanilla JS

## Preview locally

```powershell
# Any static server works:
npx serve .
# or
python -m http.server 8080
```

Then open http://localhost:8080.

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `build-2026`).
2. Push this folder to it:

   ```powershell
   git init
   git add .
   git commit -m "Microsoft Build 2026 recap"
   git branch -M main
   git remote add origin https://github.com/<your-user>/build-2026.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `(root)`**.
4. Wait a minute. Your site will be live at `https://<your-user>.github.io/build-2026/`.

> The `.nojekyll` file ensures GitHub Pages serves files exactly as-is (no Jekyll preprocessing of the `assets/` folder).

## Project structure

```
.
├── index.html               # Single-page layout
├── _config.yml              # GitHub Pages metadata
├── .nojekyll                # Skip Jekyll preprocessing
├── README.md
└── assets/
    ├── css/style.css        # All styles
    ├── js/data.js           # Announcement content (edit me!)
    ├── js/script.js         # Card render, filters, modal, counters
    └── img/favicon.svg      # Microsoft 4-square logo
```

## Updating the announcements

All announcement content lives in [`assets/js/data.js`](assets/js/data.js). Each entry has:

| Field | Purpose |
|---|---|
| `id` | Unique slug |
| `cat` | One of `ai`, `infra`, `data`, `windows`, `quantum`, `storage` |
| `tagLabel` | Pill text shown on the card |
| `title`, `subtitle` | Card heading + supporting line |
| `img` | Preview image URL (use official Microsoft URLs) |
| `preview` | One-paragraph card description |
| `details` | HTML shown in the modal |
| `why` | The "why it matters" callout |
| `link` | Official announcement URL (usually `aka.ms/...`) |

## Sources & credits

- All news content is summarized from the [official Microsoft Build 2026 newsroom](https://news.microsoft.com/build-2026/).
- Photography © Microsoft (Dan DeLong, John Brecher). Used here as direct hot-links to the official `msftstories.thesourcemediaassets.com` CDN.
- "Microsoft", "Build", "Azure", "Windows", "GitHub Copilot", "Foundry", "Cosmos DB", "Surface", and "Majorana" are trademarks of Microsoft Corporation.

This is an unofficial community recap. Not affiliated with Microsoft.
