import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getNotes, formatDate } from "@/lib/notes";
export function generateStaticParams() {
  return getNotes().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNotes().find((p) => p.slug === slug);
  if (!item) return {};
  return pageMetadata(item.title, item.description, `/notes/${slug}/`, true);
}
function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 800,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number | string;
  height?: number | string;
}) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNotes().find((p) => p.slug === slug);
  if (!note) notFound();
  return (
    <div className="wrap page-shell">
      <Link className="back-link" href="/notes/">
        ← The commonplace book
      </Link>
      <article className="journal-page">
        <header>
          <p className="eyebrow">FIELD NOTES · {note.category}</p>
          <h1>{note.title}</h1>
          <div className="note-meta">
            <time dateTime={note.date}>{formatDate(note.date)}</time>
            <span>{note.readingTime} min read</span>
          </div>
        </header>
        <div className="prose">
          <MDXRemote
            source={note.content}
            components={{ Figure }}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
          {note.references.length > 0 && (
            <section className="references">
              <h2>References</h2>
              <ol>
                {note.references.map((ref) => (
                  <li key={ref.url}>
                    <a href={ref.url}>{ref.title} ↗</a>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
        <div className="journal-end" aria-hidden="true">
          ❧
        </div>
      </article>
    </div>
  );
}
