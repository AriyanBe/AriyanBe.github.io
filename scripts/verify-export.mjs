import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
const root = path.resolve("out");
function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? walk(path.join(dir, entry.name))
        : [path.join(dir, entry.name)],
    );
}
const files = walk(root).filter((file) => file.endsWith(".html"));
const failures = [];
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const label = path.relative(root, file);
  if (!/<title>[^<]+<\/title>/.test(html))
    failures.push(`${label}: missing title`);
  if (!/<main\b[^>]*id="main"/.test(html))
    failures.push(`${label}: missing main landmark`);
  if (!/name="description"/.test(html) && !label.includes("404"))
    failures.push(`${label}: missing description`);
  const h1 = html.match(/<h1\b/g) || [];
  if (h1.length !== 1)
    failures.push(`${label}: expected one h1, got ${h1.length}`);
  for (const match of html.matchAll(
    /(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g,
  )) {
    const url = decodeURIComponent(match[1]).replaceAll("&amp;", "&");
    if (url.startsWith("//")) continue;
    const target = path.join(root, url);
    if (!fs.existsSync(target))
      failures.push(`${label}: broken local resource ${url}`);
  }
}
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
assert(
  sitemap.includes("/research/comparative-genomics/"),
  "Sitemap must include research routes",
);
assert(
  !files.some((file) => file.includes("research-note")),
  "Draft/template leaked into export",
);
assert(!failures.length, failures.join("\n"));
console.log(
  `Verified ${files.length} HTML pages: titles, descriptions, main landmarks, headings, local links/assets, draft exclusion, and sitemap.`,
);
