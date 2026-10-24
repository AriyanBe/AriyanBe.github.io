import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { getNotes, formatDate } from "@/lib/notes";
import { ReflectionsArchive } from "@/components/reflections-archive";
import { profile } from "@/data/profile";

const introduction = "Thoughts on life, consciousness, science, philosophy, literature, and the human condition. A collection of questions, observations, and ideas.";
export const metadata = pageMetadata("Reflections", introduction, "/reflections/");

export default function Reflections() {
  const reflections = getNotes();
  const preface = reflections.find((entry) => entry.slug === "the-first-page");
  const entries = reflections.filter(entry => entry.slug !== "the-first-page")
    .map(({ slug, title, date, category, author, description, readingTime }) => ({
      slug, title, date, category, author: author || profile.name, description, readingTime,
      displayDate: formatDate(date),
    }));
  return (
    <div className="wrap page-shell">
      <PageIntro number="VI" label="THE COMMONPLACE BOOK" title="Reflections." description={introduction} />
      {preface && (
        <p className="reflection-preface">
          <Link className="text-link" href={`/reflections/${preface.slug}/`}>Begin with the preface →</Link>
        </p>
      )}
      <ReflectionsArchive entries={entries} />
    </div>
  );
}
