export type ResearchFigure = {
  title: string;
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
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
  ' "Research is what I\'m doing when I don\'t know what I\'m doing."-Wernher von Braun';
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
    question: "what are the evolutionary relationships among Tetrahymena species, and what are the patterns of molecular evolution and natural selection in their genomes?",
    background:
      "This is a capstone research project with UH that involves comparisons among Tetrahymena species, using Paramecium tetraurelia as an outgroup in phylogenomic and comparative analyses. Its focus includes orthology, gene-family evolution, molecular evolution, and natural selection.",
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
      "CAFE"
    ],
    topics: [
      "Comparative genomics",
      "Phylogenomics",
      "Orthology",
      "Molecular evolution",
    ],
    currentStatus:
      "Comparative-genomics analysis is ongoing. Completed findings and biological conclusions are not reported here.",
    figures: [
  {
    title: "Research Figure",
    src: "/images/Research/images.jpg",
    alt: "Research figure",
    caption: "Research figure from this project.",
    width: 1122,
    height: 1402,
  },
],
    results: "Ongoing analysis. No completed findings are reported on this page.",
    interpretation: "Ongoing analysis. No completed findings are reported on this page.",
    future: "Ongoing analysis. No completed findings are reported on this page.",
    collaborators: "Zufall Lab, Dr. Zufall",
    institution: "UH",
    dates: "2026-Present",
    publicationStatus: "2027",
  },
  {
    slug: "single-cell-genomics",
    title: "Single-Cell Genomics",
    category: "Single-Cell Genomics",
    icon: "cells",
    organism: "Liver and hepatobiliary cell populations",
    summary:
      "Research experience in liver and hepatobiliary biology through single-cell and single-nucleus transcriptomics, from quality control to cell-type and gene-expression analysis.",
    status: "Research experience · PRIVATE",
    question: "Evaluating SOX4 Expression Across Cholestatic Liver Diseases Using Public Omics Datasets",
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
    tools: ["R", "Seurat", "Harmony", "PCA", "UMAP", "Clustering", "Cell-type annotation", "Gene-expression analysis"],
    topics: [
      "scRNA-seq",
      "snRNA-seq",
      "Hepatobiliary biology",
      "Cell-type annotation",
    ],
    currentStatus: 
      "Priavet research experience is ongoing. Completed findings and biological conclusions are not reported here.",
    figures: [
  {
    title: "Research Figure 1",
    src: "/images/Research/2.0.png",
    alt: "Research analysis figure",
    caption: "Research analysis figure from this project.",
    width: 1600,
    height: 1000,
  },
  {
    title: "Research Figure 2",
    src: "/images/Research/3.png",
    alt: "Research analysis figure",
    caption: "Research analysis figure from this project.",
    width: 1600,
    height: 1000,
  },
  {
    title: "Research Figure 3",
    src: "/images/Research/Screenshot 2026-09-07 213431.png",
    alt: "Research analysis screenshot",
    caption: "Research analysis results from this project.",
    width: 1600,
    height: 1000,
  },
],
      results: "PRIVATE",
    interpretation: "PRIVATE",
    future: "PRIVATE",
    collaborators: "PRIVATE",
    institution: "Baylor College of Medicine, PRIAVET",
    dates: "2026-Present",
    publicationStatus: "PRIVATE",
  },
  {
  slug: "codon-usage-bias",
  title: "Codon Usage & Codon Bias",
  category: "Codon Usage & Codon Bias",
  icon: "codons",
  organism: "Escherichia coli",

  summary:
    "A distinct research project involving codon usage and codon usage bias, with interests in synonymous codons, nucleotide/codon sequences, and molecular evolution.",

  status: "Independent research project",

  question:
    "Assessing codon usage and codon usage bias in Escherichia coli",

  background:
    "This project concerns codon usage and codon usage bias. Relevant concepts include synonymous codons, nucleotide and codon sequence analysis, molecular evolution, sequence analysis, and computational biology. It is independent of the Tetrahymena comparative-genomics project.",

  methods: [ "NCBI RefSeq genome acquisition and comparative sequence analysis",
  "Protein-coding sequence (CDS) filtering and quality control",
  "Genome-wide in-frame codon counting",
  "Relative Synonymous Codon Usage (RSCU) analysis",
  "Chi-square goodness-of-fit testing of synonymous codon usage",
  "Standardized residual analysis for codon over- and underrepresentation",
  "Effective Number of Codons (ENC) analysis",
  "GC content at third codon positions (GC3) analysis",
  "ENC–GC3 analysis against Wright’s neutral expectation",
  "Statistical analysis and visualization in Python and R",],

  methodsNote:
    "Approximately 250 complete Escherichia coli genome assemblies were obtained from NCBI RefSeq and processed using Biopython. Annotated protein-coding sequences were filtered before genome-wide codon usage analysis. RSCU, chi-square tests, standardized residuals, and ENC–GC3 analysis were used to characterize synonymous codon usage and evaluate mutational versus selective influences.",

  tools: ["Python", "R", "Biopython", "Linux", "Bash", "HPC"],

  topics: [
    "Codon usage",
    "Codon usage bias",
    "Synonymous codons",
    "Nucleotide/codon sequence analysis",
    "Molecular evolution",
    "Sequence analysis",
    "Computational biology",
  ],

  currentStatus: "Finished",

  figures: [
    {
      title: "Relative Synonymous Codon Usage (RSCU)",
      src: "/images/Research/RSCU_plot.png",
      alt: "Relative synonymous codon usage analysis in Escherichia coli",
      caption:
        "Relative synonymous codon usage (RSCU) patterns across codons in Escherichia coli.",
      width: 1600,
      height: 1000,
    },
    {
      title: "Codon Bias Residual Analysis",
      src: "/images/Research/CodonBias_residuals_facet.png",
      alt: "Codon bias residual analysis in Escherichia coli",
      caption:
        "Residual analysis of codon usage bias across Escherichia coli genes.",
      width: 1600,
      height: 1000,
    },
    {
      title: "ENC–GC3 Analysis",
      src: "/images/Research/ENC_GC3_plot.png",
      alt: "ENC versus GC3 analysis in Escherichia coli",
      caption:
        "Relationship between effective number of codons (ENC) and GC content at third codon positions (GC3).",
      width: 1600,
      height: 1000,
    },
  ],

  results:
    "Genome-wide analysis of Escherichia coli revealed widespread, non-random synonymous codon usage. RSCU and chi-square analyses showed significant deviations from equal synonymous usage, driven by preferential use of specific codons. ENC–GC3 results indicated that many genes exhibit stronger codon bias than expected from GC composition alone, supporting a dominant role for natural selection—likely translational selection—over neutral mutational pressure.",

  interpretation:
    "These findings highlight the functional and evolutionary significance of synonymous codon choice and provide a framework for extending codon usage analyses to other genomes.",

  future:
    "Future work may extend these analyses to additional genomes and investigate evolutionary patterns of codon usage across species.",

  collaborators: "PRIVATE",

  institution: "UH",

  dates: "2026",

  publicationStatus:
    "Published Research Poster: https://hdl.handle.net/10657/21202",
},
];