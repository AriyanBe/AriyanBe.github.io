import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { timeline } from "@/data/timeline";
import { profile } from "@/data/profile";
export const metadata = pageMetadata(
  "About me",
  profile.description,
  "/about/",
);
export default function About() {
  return (
    <div className="wrap page-shell">
      <PageIntro
        number="I"
        label="ABOUT ME"
        title="A curiosity about life."
        description="From evolutionary histories to the workings of the human mind."
      />
      <div className="about-grid">
        <div className="prose">
          {profile.biography.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </section>
          ))}
        </div>
        <aside>
          <div
            className={`portrait-space${profile.portrait ? " has-portrait" : ""}`}
          >
            {profile.portrait ? (
              <Image
                src={profile.portrait}
                alt={profile.name}
                width={profile.portraitWidth}
                height={profile.portraitHeight}
              />
            ) : (
              <>
                <span className="portrait-monogram">{profile.initials}</span>
              </>
            )}
          </div>
          <p className="caption">
            {profile.name.toUpperCase()} · UNDERGRADUATE STUDENT RESEARCHER
          </p>
        </aside>
      </div>
      <section className="section">
        <div className="section-heading">
          <h2>A path in progress</h2>
          <Link className="text-link" href="/cv/">
            Curriculum vitae →
          </Link>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.label}>
              <span className="eyebrow">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
