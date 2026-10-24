import { pageMetadata } from "@/lib/metadata";
import { ReflectionRedirect } from "@/components/reflection-redirect";

export const metadata = {
  ...pageMetadata("Reflections", "The commonplace book has moved to Reflections.", "/reflections/"),
  robots: { index: false, follow: true },
};

export default function LegacyNotes() {
  return <ReflectionRedirect href="/reflections/" />;
}
