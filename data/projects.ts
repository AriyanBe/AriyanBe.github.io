import { profile } from "./profile";
export const projects = [
  {
    slug: "signrounds",
    title: "SignRounds",
    subtitle: "Medical language. Human connection.",
    tags: ["MEDICINE", "EDUCATION", "SOFTWARE"],
    description: `Founded by ${profile.name}, SignRounds focuses on making medical American Sign Language education accessible to healthcare professionals.`,
    motivation:
      "Communication is part of care. SignRounds is focused on access to medical ASL education for healthcare professionals.",
    scope:
      "The project focuses on medical American Sign Language education. The official website provides information about SignRounds.",
    technology: [] as string[],
    status: "",
    github: "",
    website: "https://signrounds.com/",
    screenshots: [] as string[],
  },
  {
    slug: "science-lens",
    title: "Science Lens",
    subtitle: "Read closely. Think independently.",
    tags: ["RESEARCH", "SOFTWARE", "EDUCATION"],
    description:
      "A scientific reading tool designed as a Zotero extension to support deliberate reading and critical thinking, with intentionally minimal AI intervention.",
    motivation:
      "Science Lens is designed to help readers understand scientific terminology and concepts without replacing the work of reading and reasoning through scientific literature themselves.",
    scope:
      "Its philosophy centers on independent reasoning and deliberate engagement with scientific papers. The repository documents the implementation; this description does not imply additional features or outcomes.",
    technology: ["Zotero extension"],
    status: "",
    github: `${profile.github}/Science-Lense`,
    website: "",
    screenshots: [] as string[],
  },
  {
    slug: "computational-biology",
    title: "Computational Biology Work",
    subtitle: "Small tools for complex questions.",
    tags: ["BIOLOGY", "GENOMICS", "RESEARCH", "SOFTWARE"],
    description:
      "A home for bioinformatics pipelines, analysis scripts, HPC workflows, and smaller computational research projects.",
    motivation:
      "Reproducible computation makes it possible to return to a biological question, examine assumptions, and build on an analysis.",
    scope:
      "Individual pipelines and analyses can be documented with their biological questions, inputs, methods, and reproducibility notes. The GitHub link leads to my profile, not to a specific project repository.",
    technology: [] as string[],
    status: "",
    github: profile.github,
    website: "",
    screenshots: [] as string[],
  },
];
