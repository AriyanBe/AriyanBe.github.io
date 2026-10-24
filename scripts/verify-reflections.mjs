import fs from "node:fs";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import vm from "node:vm";
import ts from "typescript";

// Exercise the real content loader against in-memory fixtures. No test entries
// are written to the content archive or exposed to the static build.
const fixtures = new Map();
function fixture(slug, draft, words, category = "Custom category") {
  fixtures.set(`${slug}.mdx`, `---\ntitle: "${slug}"\ndate: "2026-10-24"\ncategory: "${category}"\n${draft}\n---\n${Array(words).fill("test").join(" ")}`);
}
fixture("short", "draft: false", 1, "Aphorism");
fixture("below-threshold", "draft: false", 219);
fixture("essay", "draft: false", 440, "Essay");
fixture("threshold", "draft: false", 220);
fixture("draft", "draft: true", 1);
fixture("unspecified", "", 1);
fixture("malformed", 'draft: "false"', 1);
fixtures.set("short.mdx", fixtures.get("short.mdx").replace('category: "Aphorism"', 'category: "Aphorism"\nauthor: "External Author"'));
const source = ts.transpileModule(fs.readFileSync("lib/notes.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
const require = createRequire(import.meta.url);
const exports = {};
vm.runInNewContext(source, {
  exports,
  process,
  require: (name) => name === "node:fs" ? {
    existsSync: () => true,
    readdirSync: () => [...fixtures.keys()],
    readFileSync: (filename) => fixtures.get(String(filename).split(/[\\/]/).pop()),
  } : require(name),
});
const published = exports.getNotes();
assert.equal(published.length, 4, "Only explicit draft: false may publish");
assert.equal(exports.getNotes(true).length, 7, "Private author access must retain drafts");
for (const slug of ["short", "below-threshold"]) {
  assert.equal(published.find(entry => entry.slug === slug).readingTime, null);
}
assert.equal(published.find(entry => entry.slug === "threshold").readingTime, 1);
assert.equal(published.find(entry => entry.slug === "essay").readingTime, 2);
assert.equal(published.find(entry => entry.slug === "below-threshold").category, "Custom category");
assert.equal(published.find(entry => entry.slug === "short").author, "External Author");
assert.equal(published.find(entry => entry.slug === "essay").author, undefined);

const archive = {};
vm.runInNewContext(ts.transpileModule(fs.readFileSync("lib/reflections.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, { exports: archive, URLSearchParams });
const entries = [
  { slug: "z", date: "2026-01-01", category: "Poetry" },
  { slug: "b", date: "2026-10-24", category: "Poetry" },
  { slug: "a", date: "2026-10-24", category: "Aphorism" },
  { slug: "c", date: "2026-10-24", category: "A previously unknown category" },
];
const slugs = list => Array.from(list, entry => entry.slug);
assert.deepEqual(slugs(archive.selectReflections(entries, { category: null, sort: "newest" })), ["a", "b", "c", "z"]);
assert.deepEqual(slugs(archive.selectReflections(entries, { category: null, sort: "oldest" })), ["z", "a", "b", "c"]);
const selection = archive.readArchiveSelection("?category=Poetry&sort=oldest", ["Poetry"]);
assert.deepEqual(slugs(archive.selectReflections(entries, selection)), ["z", "b"]);
assert.equal(archive.readArchiveSelection("?category=Missing&sort=invalid", ["Poetry"]).category, null);
assert.equal(archive.readArchiveSelection("?sort=invalid", []).sort, "newest");
assert.equal(archive.readArchiveSelection("?category=Literary+Note", ["Literary Note"]).category, "Literary Note");
assert.equal(archive.getCategories(entries).find(category => category.value === "Poetry").count, 2);
assert(archive.getCategories(entries).some(category => category.value === "A previously unknown category"));
assert.equal(archive.categoryLabel("Aphorism"), "Aphorisms");
assert.equal(archive.categoryLabel("Poetry"), "Poetry");
assert.equal(archive.categoryLabel("constructor"), "constructor");
assert.equal(archive.selectReflections([], { category: "Poetry", sort: "oldest" }).length, 0);
assert.equal(archive.reflectionNeighbors(entries, "z").previous, undefined);
assert.equal(archive.reflectionNeighbors(entries, "c").next, undefined);
assert.equal(archive.reflectionNeighbors(entries, "b").previous.slug, "a");
assert.equal(archive.reflectionNeighbors(entries, "b").next.slug, "c");
assert.deepEqual(entries.map(entry => entry.slug), ["z", "b", "a", "c"], "Selections must not mutate the collection");
console.log("Reflections verified: publication, authors, dynamic categories, URL selection, combined sorting/filtering, chronological neighbors, and reading time.");
