import { notFound } from "next/navigation";
import { getNotes } from "@/lib/notes";
import { pageMetadata } from "@/lib/metadata";
import { ReflectionRedirect } from "@/components/reflection-redirect";

export const dynamicParams = false;
export function generateStaticParams() {
  return getNotes().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getNotes().find((item) => item.slug === slug);
  if (!entry) return {};
  return {
    ...pageMetadata(entry.title, entry.description, `/reflections/${slug}/`),
    robots: { index: false, follow: true },
  };
}

export default async function LegacyNote({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getNotes().some((entry) => entry.slug === slug)) notFound();
  return <ReflectionRedirect href={`/reflections/${slug}/`} />;
}
