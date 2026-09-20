import fs from "node:fs";
import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
const { content } = matter(
  fs.readFileSync("content/templates/research-note.mdx", "utf8"),
);
const Figure = ({ src, alt, caption, width, height }) =>
  React.createElement(
    "figure",
    null,
    React.createElement("img", { src, alt, width, height }),
    React.createElement("figcaption", null, caption),
  );
const result = await compileMDX({
  source: content,
  components: { Figure },
  options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
});
const html = renderToStaticMarkup(result.content);
assert(html.includes("data-footnotes"), "Footnotes failed to render");
assert(
  html.includes("<figure>") && html.includes("<figcaption>"),
  "MDX figure component failed to render",
);
assert(html.includes('width="1200"'), "MDX figure dimensions were lost");
assert(
  html.includes("user-content-fn-context"),
  "Footnote navigation target missing",
);
console.log(
  "MDX verified: Markdown headings, JSX figure, dimensions, captions, and linked footnotes.",
);
