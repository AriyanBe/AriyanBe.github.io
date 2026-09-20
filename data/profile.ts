const name = "Ariyan Behrouz";
const university = "University of Houston";
export const profile = {
  name,
  university,
  initials: name
    .split(" ")
    .map((part) => part[0])
    .join(""),
  role: `Biology undergraduate at the ${university}`,
  goal: "My long-term goal is to become a physician-scientist, connecting biological discovery with the practice of medicine.",
  description: `Biology undergraduate at the ${university}, exploring evolutionary and computational biology, genomics, neuroscience, and medicine.`,
  introduction: `I’m a biology undergraduate at the ${university}. I study living systems through evolution, genomics, and computation—with a curiosity that reaches from the smallest cell to the human mind.`,
  email: "ariyanbeh@gmail.com",
  github: "https://github.com/AriyanBe",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://ariyanbe.github.io",
  portrait: "/images/portrait/ariyan-behrouz.jpg",
  portraitWidth: 1122,
  portraitHeight: 1402,
  cv: "",
  copyrightYear: 2026,
  biography: [
    {
      heading: "Biology is the starting point.",
      paragraphs: [
        `I’m ${name}, a biology undergraduate at the ${university}, student-researcher, and developer. My interests bridge evolutionary and computational biology, genomics, neuroscience, and medicine.`,
        "My research experience spans three distinct projects: comparative genomics and evolution, single-cell genomics, and codon usage and codon bias and etc. I am interested in using computation to answer biological questions while keeping the underlying biology in view.",
      ],
    },
    {
      heading: "Discovery, with a human purpose.",
      paragraphs: [
        "My long-term goal is to become a physician-scientist. I have a particular intellectual interest in the intersection of neurology and psychiatry, including neuropsychiatry, where questions about the nervous system meet questions about the mind and human experience.",
        "Alongside biology and technology, I am interested in the history and philosophy of science: how observations become evidence, how explanations develop, and how our ways of asking questions change. These are interests and directions for learning, rather than clinical qualifications.",
      ],
    },
  ],
};
export const navigation = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Research", "/research/"],
  ["Projects", "/projects/"],
  ["Skills", "/skills/"],
  ["Interests", "/interests/"],
  ["Field Notes", "/notes/"],
  ["CV", "/cv/"],
  ["Contact", "/contact/"],
] as const;
