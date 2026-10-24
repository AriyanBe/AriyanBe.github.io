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
console.log("Reflections verified: explicit publication, arbitrary categories, and short/long reading time.");
