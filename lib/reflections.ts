import type { Note } from "./notes";

// Only preview data crosses the client boundary; MDX and references stay server-side.
export type ReflectionPreview = Pick<Note, "slug" | "title" | "date" | "category" | "author" | "description" | "readingTime"> & {
  displayDate: string;
};
export type ArchiveSelection = { category: string | null; sort: "newest" | "oldest" };

export function categoryLabel(category: string): string {
  const plurals: Record<string, string> = {
    Aphorism: "Aphorisms", Thought: "Thoughts", Essay: "Essays",
    Meditation: "Meditations", "Literary Note": "Literary Notes",
    "Scientific Reflection": "Scientific Reflections", Reflection: "Reflections",
  };
  // Unknown labels are preserved: categories may be arbitrary names or uncountable nouns.
  return Object.hasOwn(plurals, category) ? plurals[category] : category;
}

export function getCategories(entries: readonly { category: string }[]) {
  const counts = new Map<string, number>();
  entries.forEach(({ category }) => counts.set(category, (counts.get(category) ?? 0) + 1));
  return [...counts].map(([value, count]) => ({ value, label: categoryLabel(value), count }))
    .sort((a, b) => a.label.localeCompare(b.label) || a.value.localeCompare(b.value));
}

export function readArchiveSelection(search: string, categories: readonly string[]): ArchiveSelection {
  const params = new URLSearchParams(search);
  const category = params.get("category");
  return {
    category: category !== null && categories.includes(category) ? category : null,
    sort: params.get("sort") === "oldest" ? "oldest" : "newest",
  };
}

export function selectReflections<T extends { date: string; slug: string; category: string }>(
  entries: readonly T[], { category, sort }: ArchiveSelection,
): T[] {
  return entries.filter(entry => category === null || entry.category === category)
    .sort((a, b) => (sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date))
      || a.slug.localeCompare(b.slug));
}

export function reflectionNeighbors<T extends { date: string; slug: string; category: string }>(entries: readonly T[], slug: string) {
  const ordered = selectReflections(entries, { category: null, sort: "oldest" });
  const index = ordered.findIndex(entry => entry.slug === slug);
  return index < 0 ? {} : { previous: ordered[index - 1], next: ordered[index + 1] };
}
