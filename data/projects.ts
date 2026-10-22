import { profile } from "./profile";
export const projects = [
  {
    "slug": "science-lens",
    "title": "Science Lens",
    "subtitle": "Read closely. Think independently.",
    "tags": [
      "RESEARCH",
      "SOFTWARE",
      "EDUCATION"
    ],
    "description": "A Zotero extension for looking up unfamiliar scientific terms while reading, designed to support deliberate reading and independent reasoning.",
    "motivation": "A short explanation can help a reader return to a difficult paper. Science Lens keeps that assistance limited: it supports understanding terminology without substituting for reading, checking sources, or reasoning through the paper.",
    "scope": "The current implementation retrieves English Wikipedia summaries for selected terms in the Zotero PDF reader, with links to source articles and alternative matches. It does not generate AI answers or analyze the surrounding paper. Only the requested term is sent for lookup; the PDF and library are not uploaded. Updates are manual.",
    "technology": [
      "JavaScript",
      "Zotero extension",
      "Wikipedia API",
      "Python packaging"
    ],
    "status": "Version 1.0.2 released; documented compatibility with Zotero 10.0.x",
    "github": `${profile.github}/Science-Lense`,
    "website": "",
    "screenshots": []
  },
  {
    "slug": "computational-biology",
    "title": "Computational Biology Work",
    "subtitle": "Methods that can be inspected and repeated.",
    "tags": [
      "BIOLOGY",
      "GENOMICS",
      "RESEARCH",
      "SOFTWARE"
    ],
    "description": "Bioinformatics scripts and analysis workflows for sequence data, codon usage, and comparative biological questions.",
    "motivation": "Reproducibility makes a computational claim open to inspection. Recording inputs, filtering choices, parameters, and environments allows an analysis to be revisited and its assumptions tested.",
    "scope": "The public Codon-Bias repository provides Python and R scripts for genome acquisition, coding-sequence extraction, RSCU, chi-square tests, residuals, and ENC–GC3 analysis. Broader comparative-genomics, phylogenomics, RNA-seq, and HPC workflows are areas of work; they are not presented as a released public toolkit.",
    "technology": [
      "Python",
      "R",
      "Biopython",
      "tidyverse",
      "seqinr",
      "ggplot2"
    ],
    "status": "Public codon-analysis scripts; broader workflows documented as available",
    "github": `${profile.github}/Codon-Bias`,
    "website": "",
    "screenshots": []
  },
  {
    "slug": "pubmd",
    "title": "PubMD — Scientific Literature Discovery",
    "subtitle": "A reading-oriented approach to finding research.",
    "tags": [
      "LITERATURE",
      "SOFTWARE",
      "CONCEPT"
    ],
    "description": "A concept for an open-source scientific literature discovery platform using PubMed/NCBI metadata, with separate discovery and research experiences.",
    "motivation": "I want to explore how the reading experience of Apple News, the scientific information architecture of PubMed, and academic literature-management tools could inform a more approachable way to find and organize papers.",
    "scope": "Planned Discover Mode would offer topic-based feeds, personalized discovery, accessible explanations, and research highlights. Planned Research Mode would support advanced and Boolean searching, MeSH terms, publication metadata, research filters, citation workflows, and literature organization. These are proposed capabilities; the platform is not operational.",
    "technology": [],
    "status": "Concept / Planning",
    "github": "",
    "website": "",
    "screenshots": []
  }
];
