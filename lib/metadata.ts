import type { Metadata } from "next";
import { profile } from "@/data/profile";
export function pageMetadata(
  title: string,
  description: string,
  pathname: string,
  article = false,
): Metadata {
  const url = new URL(pathname, profile.siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: profile.name,
      type: article ? "article" : "website",
    },
    twitter: { card: "summary", title, description },
  };
}
