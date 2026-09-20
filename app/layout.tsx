import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: profile.siteUrl ? new URL(profile.siteUrl) : undefined,
  title: {
    default: `${profile.name} — Biology, Research & Computation`,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  openGraph: {
    title: profile.name,
    description: profile.description,
    type: "website",
    locale: "en_US",
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: profile.name,
    description: profile.description,
  },
  authors: [{ name: profile.name }],
  creator: profile.name,
  other: {
    copyright: `© ${profile.copyrightYear} ${profile.name}. All rights reserved.`,
  },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
