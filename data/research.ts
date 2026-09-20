export type ResearchFigure = {
  title: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};
export type ResearchEntry = {
  slug: string;
  title: string;
  category: string;
  icon: "phylogeny" | "cells" | "codons";
  organism: string;
  summary: string;
  status: string;
  question: string;
  background: string;
  methods: string[];
  methodsNote: string;
  tools: string[];
  topics: string[];
  figures: ResearchFigure[];
  results: string;
  interpretation: string;
  future: string;
  currentStatus: string;
  collaborators: string;
  institution: string;
  dates: string;
  publicationStatus: string;
};
export const researchIntro =
  'Wernher von Braun: "Research is what I\'m doing when I don\'t know what I\'m doing."';
export const researchEmpty = {
  question: "The specific research question is not documented here.",
  figures: "No research figures are displayed.",
  results: "No findings are reported on this page.",
  interpretation: "Interpretation will accompany verified findings.",
  future: "No future analyses are specified here.",
};
export const research: ResearchEntry[] = [
  {
    slug: "comparative-genomics",
    title: "Comparative Genomics & Evolution",
    category: "Comparative Genomics & Evolution",
    icon: "phylogeny",
    organism: "Tetrahymena species; Paramecium tetraurelia as an outgroup",
    summary:
      "Ongoing comparative genomics and phylogenomics among Tetrahymena species, with Paramecium tetraurelia as an outgroup.",
    status: "Ongoing analysis",
    question: "",
    background:
      "This independent research project involves comparisons among Tetrahymena species, using Paramecium tetraurelia as an outgroup in phylogenomic and comparative analyses. Its focus includes orthology, gene-family evolution, molecular evolution, and natural selection.",
    methods: [
      "Orthology and gene-family analysis",
      "Sequence alignment and phylogenetic reconstruction",
      "Phylogenomics and comparative evolutionary genomics",
      "dN/dS analysis in the study of positive and negative/purifying selection",
      "Sequence analysis and Linux/HPC workflows",
    ],
    methodsNote:
      "These are areas of ongoing work and tools I have worked with or am using. Their inclusion does not imply a completed analysis or a demonstrated selection signal.",
    tools: [
      "OrthoFinder",
      "OrthoMCL",
      "MAFFT",
      "MUSCLE",
      "IQ-TREE",
      "ParaAT",
      "PAML / codeml",
      "BLAST / BLAST+",
      "Biopython",
      "Linux",
      "Bash",
      "SLURM",
      "HPC",
    ],
    topics: [
      "Comparative genomics",
      "Phylogenomics",
      "Orthology",
      "Molecular evolution",
    ],
    currentStatus:
      "Comparative-genomics analysis is ongoing. Completed findings and biological conclusions are not reported here.",
    figures: [],
    results: "",
    interpretation: "",
    future: "",
    collaborators: "",
    institution: "",
    dates: "",
    publicationStatus: "",
  },
  {
    slug: "single-cell-genomics",
    title: "Single-Cell Genomics",
    category: "Single-Cell Genomics",
    icon: "cells",
    organism: "Liver and hepatobiliary cell populations",
    summary:
      "Research experience in liver and hepatobiliary biology through single-cell and single-nucleus transcriptomics, from quality control to cell-type and gene-expression analysis.",
    status: "Research experience · findings not reported here",
    question: "",
    background:
      "My research has included analysis related to hepatobiliary cell populations and liver biology using scRNA-seq and snRNA-seq. This is a separate project from my comparative-genomics and codon-bias work.",
    methods: [
      "Quality control for scRNA-seq and snRNA-seq",
      "PCA, dimensionality reduction, and UMAP",
      "Clustering and integration with Seurat and Harmony",
      "Cell-type annotation and marker-gene analysis",
      "Gene-expression analysis in liver/hepatobiliary cell populations",
    ],
    methodsNote:
      "These methods reflect my analysis experience. Dataset-specific parameters and validated biological interpretations are not documented on this page.",
    tools: ["R", "Seurat", "Harmony", "PCA", "UMAP"],
    topics: [
      "scRNA-seq",
      "snRNA-seq",
      "Hepatobiliary biology",
      "Cell-type annotation",
    ],
    currentStatus:
      "This page records analysis experience. It does not report biological discoveries, publications, or completed research findings.",
    figures: [],
    results: "",
    interpretation: "",
    future: "",
    collaborators: "",
    institution: "",
    dates: "",
    publicationStatus: "",
  },
  {
    slug: "codon-usage-bias",
    title: "Codon Usage & Codon Bias",
    category: "Codon Usage & Codon Bias",
    icon: "codons",
    organism: "",
    summary:
      "A distinct research project involving codon usage and codon usage bias, with interests in synonymous codons, nucleotide/codon sequences, and molecular evolution.",
    status: "Independent research project",
    question: "",
    background:
      "This project concerns codon usage and codon usage bias. Relevant concepts include synonymous codons, nucleotide and codon sequence analysis, molecular evolution, sequence analysis, and computational biology. It is independent of the Tetrahymena comparative-genomics project.",
    methods: [],
    methodsNote:
      "The project-specific methodology has not been documented here. The topics listed describe its subject area, not a claim that particular analyses have been performed.",
    tools: [],
    topics: [
      "Codon usage",
      "Codon usage bias",
      "Synonymous codons",
      "Nucleotide/codon sequence analysis",
      "Molecular evolution",
      "Sequence analysis",
      "Computational biology",
    ],
    currentStatus:
      "The project stage and completed findings are not specified. No organism, research question, analysis workflow, or scientific outcome is inferred.",
    figures: [],
    results: "",
    interpretation: "",
    future: "",
    collaborators: "",
    institution: "",
    dates: "",
    publicationStatus: "",
  },
];
