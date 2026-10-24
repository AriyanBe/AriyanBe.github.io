import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import matter from "gray-matter";
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
const hiddenAssets = ["2.0.png", "3.png", "Img 1.png", "Screenshot 2026-09-07 213431.png", "images.jpg"];
for (const name of hiddenAssets) {
  assert(!fs.existsSync(path.join(root, "images/Research", name)), `Unapproved asset exported: ${name}`);
}
assert(!fs.existsSync(path.join(root, "projects/signrounds")), "Removed project route exported");
assert(fs.existsSync(path.join(root, "projects/pubmd/index.html")), "Missing PubMD route");
const entries = fs.readdirSync("content/notes").filter(name => /\.mdx?$/.test(name)).map(name => {
  const { data, content } = matter(fs.readFileSync(path.join("content/notes", name), "utf8"));
  return { ...data, content, slug: name.replace(/\.mdx?$/, "") };
});
const listing = fs.readFileSync(path.join(root, "reflections/index.html"), "utf8");
assert(listing.includes("Reflections."), "Missing Reflections heading");
assert(listing.includes("/reflections/the-first-page/"), "Missing preface link");
assert(listing.includes("Begin with the preface"), "Missing persistent preface label");
assert(!/<h2[^>]*><a[^>]*href="\/reflections\/the-first-page\//.test(listing), "Preface duplicated in ordinary list");
const chronological = entries.filter(entry => entry.draft === false).sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug));
for (const entry of entries) {
  if (entry.draft !== false) {
    for (const route of ["notes", "reflections"]) {
      assert(!fs.existsSync(path.join(root, route, entry.slug)), `Draft exported: ${route}/${entry.slug}`);
    }
    // Include React payloads and JS, not just public HTML, in the privacy check.
    for (const file of walk(root).filter(file => /\.(html|txt|json|js|xml)$/.test(file))) {
      assert(!fs.readFileSync(file, "utf8").includes(entry.slug), `Draft leaked into ${path.relative(root, file)}: ${entry.slug}`);
    }
    continue;
  }
  const route = `/reflections/${entry.slug}/`;
  const html = fs.readFileSync(path.join(root, route, "index.html"), "utf8");
  const escapedCategory = String(entry.category).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("'", "&#x27;");
  assert((entry.slug === "the-first-page" || listing.includes(escapedCategory)) && html.includes(escapedCategory), `Category missing: ${entry.slug}`);
  if (entry.slug !== "the-first-page") assert(listing.includes(`href="${route}"`), `Entry link missing from static listing: ${entry.slug}`);
  if (entry.author) {
    assert(listing.includes(entry.author) && html.includes(entry.author), `Missing author: ${entry.slug}`);
    assert(html.includes(`name="author" content="${entry.author}"`), "Missing author metadata");
  }
  for (const reference of entry.references ?? []) {
    const escapedUrl = reference.url.replaceAll("&", "&amp;");
    assert(html.includes(`href="${escapedUrl}" target="_blank" rel="noopener noreferrer"`), `Missing secure reference link: ${entry.slug}`);
  }
  const index = chronological.findIndex(item => item.slug === entry.slug);
  for (const [rel, neighbor] of [["prev", chronological[index - 1]], ["next", chronological[index + 1]]]) {
    if (neighbor) assert([...html.matchAll(/<a\b[^>]*>/g)].some(([tag]) => tag.includes(`href="/reflections/${neighbor.slug}/"`) && tag.includes(`rel="${rel}"`)), `Incorrect ${rel} navigation: ${entry.slug}`);
    else assert(!html.includes(`rel="${rel}"`), `Unexpected ${rel} navigation: ${entry.slug}`);
  }
  assert(html.includes(`property="article:section" content="${escapedCategory}"`), "Missing category metadata");
  assert(html.includes(`rel="canonical" href="https://ariyanbehrouz.me${route}"`), "Incorrect canonical URL");
  const wordCount = entry.content.trim().split(/\s+/).filter(Boolean).length;
  assert.equal(html.includes(" min read"), wordCount >= 220, `Incorrect reading time visibility: ${entry.slug}`);
  const legacy = fs.readFileSync(path.join(root, "notes", entry.slug, "index.html"), "utf8");
  assert(legacy.includes(`content="0;url=${route}"`) && legacy.includes('content="noindex, follow"'), "Missing static legacy redirect");
}
assert(fs.readFileSync(path.join(root, "notes/index.html"), "utf8").includes('content="0;url=/reflections/"'), "Missing collection redirect");
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const label = path.relative(root, file);
  if (/signrounds|PRIAVET|Priavet|\bPRIVATE\b/i.test(html)) failures.push(`${label}: stale or private placeholder`);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${match[1]}"`)) failures.push(`${label}: broken section link #${match[1]}`);
  }
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
assert(sitemap.includes("/reflections/the-first-page/") && !sitemap.includes("/notes/"), "Sitemap must use Reflections URLs only");
assert(fs.readFileSync(path.join(root, "about/index.html"), "utf8").includes("On the Making of This Website"), "Missing website acknowledgment");
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
