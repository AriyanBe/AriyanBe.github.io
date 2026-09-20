import type { MetadataRoute } from "next";
import { profile, navigation } from "@/data/profile";
import { research } from "@/data/research";
import { projects } from "@/data/projects";
import { getNotes } from "@/lib/notes";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!profile.siteUrl) return [];
  return [
    "/copyright/",
    ...navigation.map(([, href]) => href),
    ...research.map((r) => `/research/${r.slug}/`),
    ...projects.map((p) => `/projects/${p.slug}/`),
    ...getNotes().map((n) => `/notes/${n.slug}/`),
  ].map((route) => ({ url: new URL(route, profile.siteUrl).toString() }));
}
