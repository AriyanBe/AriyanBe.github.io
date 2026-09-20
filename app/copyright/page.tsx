import { PageIntro } from "@/components/page-intro";
import { copyright } from "@/data/copyright";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Copyright & Use",
  `Copyright and use of original materials on ${profile.name}’s website.`,
  "/copyright/",
);
export default function CopyrightPage() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="IX"
        label="COLOPHON"
        title="Copyright & Use."
        description={copyright.notice}
      />
      <div className="prose">
        {copyright.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        {profile.email && (
          <p>
            Permission enquiries:{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        )}
      </div>
    </div>
  );
}
