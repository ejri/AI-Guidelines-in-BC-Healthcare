# BC AI Policy Hub — Healthcare

[![Netlify Status](https://api.netlify.com/api/v1/badges/59c8dba6-2c64-4869-ae09-7e8896a6bc03/deploy-status)](https://app.netlify.com/projects/ai-guidelines-in-bc-healthcare/deploys)

**Consolidates AI regulations, policies, and guidance for BC healthcare professionals**—filter by role, organization, and topic (privacy, safety, ethics, documentation). Clean cards, readable summaries. Built for clinicians, researchers, and administrators.

Repository: [ejri/AI-Guidelines-in-BC-Healthcare](https://github.com/ejri/AI-Guidelines-in-BC-Healthcare)

**Live:** [ai-guidelines-in-bc-healthcare.netlify.app](https://ai-guidelines-in-bc-healthcare.netlify.app/)

**Dashboard:** [Netlify deploys](https://app.netlify.com/projects/ai-guidelines-in-bc-healthcare/deploys)

*(Add a production screenshot here after deploy.)*

## Features

- **Filter:** Role (physician, nurse, researcher, …), organization (CPSBC, Doctors of BC, VCH, …), and topics (privacy, AI scribes, bias, …).
- **Latest updates:** Timeline of notable policy and guidance changes; each item links through to detail cards and issuer pages.
- **Guideline details:** Short summaries, bullet key points, links to full sources and organization info URLs, bookmarks stored in **localStorage** on the device.
- **Feedback:** Buttons are present in the UI; outbound submission is turned off until a backend is wired.
- **Performance:** React 18 and Babel via CDN; no bundler in the browser at runtime. Production build copies static assets to `dist/` for Netlify.

**Sources (illustrative):** Health Canada AI4H, VCH / VCHRI AI Hub, Doctors of BC, CPSBC, BCCNM, OIPC BC, PHSA, CMA, and related issuers. Always confirm wording on the issuer’s site—for example [CPSBC publications](https://www.cpsbc.ca/news/publications/college-connector/2024-V12-05/01) and [OIPC BC news](https://www.oipc.bc.ca/documents/news-releases/3083).

## Tech stack

| Layer | Tech |
|-------|------|
| UI | React 18 (CDN), JSX via Babel standalone in the browser |
| Styles | Vanilla CSS (`app.css`) |
| Data | `data.js` (guidelines, orgs, topics, updates) |
| Build | `npm run build` → `scripts/build-static.mjs` copies files to `dist/` |
| Host | Netlify (`netlify.toml`: build + publish `dist/`) |

Runtime has **no npm dependencies** in the browser—only CDN scripts.

## Quick start

### 1. Clone and preview

```bash
git clone https://github.com/ejri/AI-Guidelines-in-BC-Healthcare.git
cd AI-Guidelines-in-BC-Healthcare
npm install
npm run preview
```

Open **http://localhost:4173** (serves the built `dist/` folder).

Alternative without a build step:

```bash
python3 -m http.server 5173
```

Then open **http://localhost:5173** from the repo root. Do not open `index.html` as a `file://` URL—JSX modules need HTTP.

### 2. Edit content

- **`data.js`** — Guidelines, organizations (`infoUrl` + metadata), topics, updates.
- **`screens.jsx`**, **`ui.jsx`**, **`app.jsx`** — Screens, cards, layout, chrome.
- **`npm run build`** — Refreshes **`dist/`** for deploy or `npm run preview`.

### 3. Deploy on Netlify

**Git (recommended):** push to `main`; Netlify runs `npm run build` and publishes `dist/`.

**Manual:** run `npm run build`, then drag **`dist/`** into the Netlify deploy drop zone.

**`netlify.toml`:**

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

In the Netlify UI, leave build command and publish directory empty so this file is authoritative.

## Scripts

```bash
npm run build    # Copy static assets → dist/
npm run preview  # build + serve dist on port 4173
```

## Contributing

1. Fork the repo and edit `data.js` and/or UI files.
2. Run `npm run preview` and smoke-test role/org/topic filters and source links.
3. Open a PR with a short note (e.g. “Add BCCNM AI update”).

Keep a BC healthcare focus, cite primary sources, and keep the UI easy to scan.

## About and privacy

- **Bookmarks:** Stored only in the visitor’s browser (localStorage); the hub does not operate a feedback or analytics backend in this prototype.
- **Privacy reference:** [OIPC guidance — AI scribes / PIPA context](https://www.oipc.bc.ca/documents/guidance-documents/3082) (see also [OIPC news](https://www.oipc.bc.ca/documents/news-releases/3083)).
- **License:** MIT *(add a `LICENSE` file in the repo if you want the standard GitHub license badge).*

## Related links

- [GitHub — AI-Guidelines-in-BC-Healthcare](https://github.com/ejri/AI-Guidelines-in-BC-Healthcare)
- [Pan-Canadian AI for Health (AI4H) guiding principles — Canada.ca](https://www.canada.ca/en/health-canada/corporate/transparency/health-agreements/pan-canadian-ai-guiding-principles.html)

---

*Teaching-style aggregator for Vancouver / BC healthcare contexts. Last updated May 2026.*
