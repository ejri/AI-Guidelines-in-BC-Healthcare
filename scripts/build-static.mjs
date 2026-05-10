import { copyFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const dist = join(root, "dist");

const files = [
  "index.html",
  "app.css",
  "app.jsx",
  "data.js",
  "screens.jsx",
  "tweaks-panel.jsx",
  "ui.jsx",
];

mkdirSync(dist, { recursive: true });
for (const f of files) {
  const src = join(root, f);
  if (!existsSync(src)) {
    console.error(`build-static: missing ${f}`);
    process.exit(1);
  }
  copyFileSync(src, join(dist, f));
}

console.log("build-static: copied", files.length, "files to dist/");
