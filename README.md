# BC AI Policy Hub — Healthcare (prototype)

[![Netlify Status](https://api.netlify.com/api/v1/badges/59c8dba6-2c64-4869-ae09-7e8896a6bc03/deploy-status)](https://app.netlify.com/projects/ai-guidelines-in-bc-healthcare/deploys)

Static teaching aggregator prototype. Served as plain HTML/CSS/JS (React via CDN).

**Live site:** [ai-guidelines-in-bc-healthcare.netlify.app](https://ai-guidelines-in-bc-healthcare.netlify.app/)  
**Netlify dashboard:** [Project deploys](https://app.netlify.com/projects/ai-guidelines-in-bc-healthcare/deploys)

## Local preview

From the repo root:

```bash
python3 -m http.server 5173
```

Open `http://localhost:5173` (avoid opening `index.html` as a `file://` URL — JSX scripts need HTTP).
