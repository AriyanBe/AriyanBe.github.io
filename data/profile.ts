const name = "Ariyan Behrouz";
const university = "University of Houston";
export const profile = {
  name,
  university,
  initials: name
    .split(" ")
    .map((part) => part[0])
    .join(""),
  role: "Research in evolutionary genomics & computational biology",
  goal: "My long-term goal is to become a physician-scientist, with particular interests in neurology, psychiatry, and their intersection.",
  description: `Research in evolutionary genomics, computational biology, and single-cell transcriptomics by ${name}.`,
  introduction: "I explore biological systems through evolutionary genomics, computational biology, and single-cell transcriptomics. My research spans molecular evolution, comparative genomics, and gene expression in disease, guided by an ambition to connect scientific discovery with medicine.",
  disciplines: ["EVOLUTION", "GENOMICS", "BIOINFORMATICS", "MEDICINE"],
  email: "ariyanbeh@gmail.com",
  github: "https://github.com/AriyanBe",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://ariyanbehrouz.me",
  portrait: "/images/portrait/ariyan-behrouz.jpg",
  portraitWidth: 1122,
  portraitHeight: 1402,
  cv: "",
  copyrightYear: 2026,
  biography: [
  {
    "heading": "I. The Study of Life",
    "paragraphs": [
      `My foundation in biology at the ${university} has shaped how I approach living systems: through their evolutionary histories, the information encoded in genomes, and the diversity of cells that make up tissues.`,
      "My research experience connects molecular evolution, comparative genomics, phylogenetics, and gene-family analysis with single-cell and single-nucleus transcriptomics. Comparing sequences helps me ask how biological systems have changed; examining gene expression helps me ask how cells differ within those systems."
    ]
  },
  {
    "heading": "II. Computation as an Instrument of Discovery",
    "paragraphs": [
      "I use Python, R, and bioinformatics workflows to turn biological questions into analyses that can be inspected and repeated. Genomic data analysis requires more than running software: it involves choosing comparisons, checking assumptions, and deciding what the data can support.",
      "Scientific computing and high-performance computing make larger analyses practical. I am interested in reproducible workflows that record preprocessing, parameters, and computational environments so that an interpretation can be traced back to its evidence."
    ]
  },
  {
    "heading": "III. Discovery, With a Human Purpose",
    "paragraphs": [
      "My long-term goal is to become a physician-scientist. Neuroscience, neurology, psychiatry, and neuropsychiatry interest me because they connect biological mechanisms with cognition, behavior, and human experience. These are directions for future learning, not clinical qualifications I hold.",
      "I hope to connect fundamental research with questions in medicine and translational research. The history and philosophy of science also inform this ambition: how evidence is interpreted matters as much as the tools used to collect it."
    ]
  }
],
};
export const navigation = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Research", "/research/"],
  ["Projects", "/projects/"],
  ["Skills", "/skills/"],
  ["Interests", "/interests/"],
  ["Reflections", "/reflections/"],
  ["CV", "/cv/"],
  ["Contact", "/contact/"],
] as const;
