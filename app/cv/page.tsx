import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
import { profile } from "@/data/profile";
export const metadata = pageMetadata("Curriculum Vitae", `Request the academic CV of ${profile.name}.`, "/cv/");
export default function CV() {
  return <div className="wrap page-shell">
    <PageIntro number="VII" label="ACADEMIC RECORD" title="Curriculum vitae." description="For my CV, please contact me via email." />
    <div className="cv-banner"><div><h2>{profile.name}</h2><p>{profile.role}</p></div>
      {profile.email && <a className="text-link" href={`mailto:${profile.email}?subject=CV%20request`}>{profile.email} ↗</a>}
    </div>
  </div>;
}
