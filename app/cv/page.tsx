import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { profile } from "@/data/profile";
import { timeline } from "@/data/timeline";
export const metadata = pageMetadata(
  "Curriculum Vitae",
  `Academic background and research interests of ${profile.name}, ${profile.role.toLowerCase()}.`,
  "/cv/",
);
export default function CV() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="VII"
        label="ACADEMIC RECORD"
        title="Curriculum vitae."
        description="A record of education, research, and the work along the way."
      />
      <div className="cv-banner">
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
        </div>
        {profile.cv && (
          <a className="button" href={profile.cv} download>
            Download CV ↓
          </a>
        )}
      </div>
      <div className="timeline">
        {timeline.map((item) => (
          <section key={item.label}>
            <p className="eyebrow">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </section>
        ))}
      </div>
      {!profile.cv && (
        <p className="editorial-note">
          This page summarizes education and research direction. A downloadable
          CV is not currently available.
        </p>
      )}
      <Link className="text-link" href="/research/">
        Explore research areas →
      </Link>
    </div>
  );
}
