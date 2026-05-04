# Healthcare AI Sandbox (BC AI Compliance Toolkit)

**Version 0:** initial public teaching build (`package.json` stays at `0.0.0` semver).

Zero-data-retention educational web application for **University of British Columbia, Faculty of Medicine, The Data Science and Health (DASH) Cluster** learners and BC clinicians-in-training. The **DASH Cluster** is building a system to link health research data in BC by enhancing the availability and use of health data to improve diagnosis, treatment, and prevention of disease, and to enable computational tools that speed discovery of new knowledge, optimizing health outcomes for all BC residents.

This is **not** clinical decision support, not legal advice, and not an official CPSBC product.

## Tech stack

- Vite 8, React 19, TypeScript
- Tailwind CSS v4, shadcn/ui (Base UI + Radix primitives)
- TanStack Router (file-based routes, generated `src/routeTree.gen.ts`)
- Framer Motion (subtle home animations)
- Netlify static hosting (`netlify.toml`: build `npm run build`, publish `dist`)

## Routes of note

- **`/updates`:** short policy changelog with hashtags for client-side filtering; deep docs remain under Guidelines.
- **`/bc-health-authorities`:** five regional RHAs plus PHSA, CPSBC, Doctors of BC, and BC Ministry notes with outbound links.
- **`/global-comparison`:** static teaching notes contrasting BC with selected foreign regimes (no automated fetching).

## Local development

```bash
npm install
npm run dev
```

Production build (Vite runs first to regenerate the route tree, then `tsc`):

```bash
npm run build
```

## Privacy & compliance notes

- **No backend** for learner inputs. Checklist state and theme preference use **`localStorage` only** in the browser.
- **No patient data** in authored scenarios; case studies are synthetic teaching narratives.
- **Outbound links** (CPSBC, OIPC, Health Canada, etc.) open third-party sites with their own privacy practices.
- **Optional Fathom Analytics**: set `VITE_FATHOM_SITE_ID` at build time to inject Fathom’s script (`src/bootstrapAnalytics.ts`). If unset, no analytics script loads.
- **Course feedback mailto**: set `VITE_FEEDBACK_MAILTO` (e.g. `mailto:instructor@ubc.ca?subject=...`) so the About page button addresses your team directly.

## Repository layout

- **`src/`:** BC AI Compliance Toolkit SPA (this README).
- **`legacy/Responsible_AI_use_healthcare-main/`:** archived earlier prototype (reference only).
- **`saudi-health-ai-governance-sandbox/`:** separate teaching sandbox (not linted with this app).

## Pedagogical sources

Content structure draws on the course **research toolkit** (regulatory matrix, cultural safety modules, myth-busting, UX tables) and aligns with public materials from **CPSBC**, **Health Canada AI4H**, **OIPC BC**, **PHSA**, and **Doctors of BC**. Indigenous cultural safety sections should be periodically reviewed with Indigenous health leads, as noted in the research notes.

## English-only

The interface is **English-only** by design (no FR toggle in this build).
