import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
export type Note = {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  readingTime: number;
  content: string;
  draft: boolean;
  references: { title: string; url: string }[];
};
const directory = path.join(process.cwd(), "content", "notes");
export function getNotes(includeDrafts = false): Note[] {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(directory, file), "utf8"),
      );
      if (
        typeof data.title !== "string" ||
        typeof data.date !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(data.date) ||
        Number.isNaN(Date.parse(data.date))
      )
        throw new Error(`Invalid title or date in ${file}`);
      return {
        slug: file.replace(/\.mdx?$/, ""),
        title: data.title,
        date: data.date,
        category: String(data.category || "Field Notes"),
        description: String(data.description || ""),
        readingTime: Math.max(1, Math.ceil(content.split(/\s+/).length / 220)),
        content,
        draft: data.draft === true,
        references: Array.isArray(data.references) ? data.references : [],
      };
    })
    .filter((note) => includeDrafts || !note.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
