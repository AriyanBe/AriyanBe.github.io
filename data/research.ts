import { profile } from "./profile";
export type ResearchFigure = { title: string; src: string; alt: string; caption: string; width: number; height: number };
export type ResearchEntry = {
 slug: string; title: string; projectTitle: string; category: string; icon: "phylogeny" | "cells" | "codons"; organism: string; summary: string; status: string; question: string; background: string; methods: string[]; methodsNote: string; tools: string[]; topics: string[]; figures: ResearchFigure[]; results: string; interpretation: string; future: string; currentStatus: string; collaborators: string; institution: string; dates: string; publicationStatus: string; limitations: string; plannedMethods: string[]; outputIds: string[];
};
export const researchIntro = '“Research is what I\'m doing when I don\'t know what I\'m doing.” — Wernher von Braun';
export const researchDescription = "Three independent research dossiers in comparative genomics, single-cell transcriptomics, and codon usage bias.";
export const researchEmpty = { figures: "No approved research figures are available for this dossier." };
export const research: ResearchEntry[] = [
  {
    "question": "What do orthologous and paralogous gene relationships reveal about evolutionary relationships, gene-family change, and sequence-level natural selection among six Tetrahymena species?",
    "background": "This six-species study connects phylogenomics with orthology, paralogy, and molecular evolution. Paramecium tetraurelia was considered in earlier analyses but is not part of the current six-species run.",
    "methods": [
      "Orthogroup inference and single-copy ortholog identification with OrthoFinder",
      "Sequence alignment using MAFFT and MUSCLE, and phylogenetic reconstruction with IQ-TREE",
      "Codon-alignment and dN/dS workflows using ParaAT and PAML / codeml",
      "Ongoing gene-family expansion and contraction analysis with CAFE5",
      "Sequence searches, preprocessing, and reproducible Linux/HPC workflows"
    ],
    "methodsNote": "The tools below reflect analysis experience and ongoing workflows; listing a method does not imply that every downstream analysis is complete.",
    "tools": [
      "OrthoFinder",
      "MAFFT",
      "MUSCLE",
      "IQ-TREE",
      "ParaAT",
      "PAML / codeml",
      "BLAST+",
      "CAFE5",
      "Biopython",
      "Linux / Bash",
      "SLURM",
      "High-performance computing"
    ],
    "topics": [
      "Comparative genomics",
      "Phylogenomics",
      "Orthology",
      "Gene-family evolution",
      "Molecular evolution"
    ],
    "figures": [],
    "results": "A six-species OrthoFinder run identified approximately 9,916 single-copy orthogroups represented in all six species. This is an analytical output of that run, not a published biological conclusion. Gene-family analysis with CAFE5 is ongoing.",
    "interpretation": "Shared single-copy orthogroups provide candidate loci for comparative analyses. Biological interpretation depends on alignment quality, orthology assessment, phylogenetic support, and downstream model checks. An omega (dN/dS) estimate greater than one alone does not establish statistically supported positive selection.",
    "future": "Continue gene-family analyses and evaluate phylogenetic and sequence-level results with appropriate quality controls before drawing biological conclusions.",
    "currentStatus": "The six-species OrthoFinder run is complete; downstream analyses and interpretation remain ongoing.",
    "collaborators": "",
    "institution": profile.university,
    "dates": "2026–present",
    "publicationStatus": "Ongoing research",
    "limitations": "Orthogroup counts depend on input assemblies, annotations, filtering, and software settings. Selection claims require appropriate model comparisons, statistical support, and checks for alignment errors and multiple testing. No final selection or gene-family conclusions are reported here.",
    "plannedMethods": [
      "OrthoMCL: implementation in this project is not confirmed; retained only as a prospective alternative."
    ],
    "outputIds": [],
    "slug": "comparative-genomics",
    "title": "Comparative Genomics & Evolution",
    "projectTitle": "Comparative Genomics and Molecular Evolution of Tetrahymena",
    "category": "Evolutionary genomics",
    "icon": "phylogeny",
    "organism": "Tetrahymena thermophila; Tetrahymena elliotti; Tetrahymena malaccensis; Tetrahymena pyriformis; Tetrahymena utriculariae; Tetrahymena borealis",
    "summary": "Investigating evolutionary relationships, gene-family dynamics, and molecular evolution across Tetrahymena species.",
    "status": "Ongoing research"
  },
  {
    "question": "How can single-cell and single-nucleus transcriptomic analyses characterize SOX4 expression and hepatobiliary cell populations across cholestatic liver diseases?",
    "background": "My analytical work concerns SOX4 expression, cellular heterogeneity, and gene-expression regulation in liver biology. The scientific scope includes primary sclerosing cholangitis, primary biliary cholangitis, biliary atresia, and Alagille syndrome. These disease areas describe the scope of inquiry, not completed disease-specific findings.",
    "methods": [
      "Quality control, normalization, and highly variable gene identification for scRNA-seq and snRNA-seq",
      "PCA, dimensionality reduction, and UMAP",
      "Seurat analysis and Harmony integration",
      "Cell clustering, cell-type annotation, and marker-gene analysis",
      "Gene-expression and differential-expression analysis"
    ],
    "methodsNote": "My contribution centers on computational analysis of transcriptomic data and the assessment of cell populations and gene expression. Dataset-specific parameters, internal material, and unapproved results are withheld.",
    "tools": [
      "R",
      "Seurat",
      "Harmony"
    ],
    "topics": [
      "scRNA-seq",
      "snRNA-seq",
      "Hepatobiliary biology",
      "SOX4",
      "Gene expression"
    ],
    "figures": [],
    "results": "Research analyses are ongoing. Detailed findings and unpublished results are not publicly available at this stage.",
    "interpretation": "No disease-specific conclusions or mechanistic claims are presented here.",
    "future": "Continue quality assessment and analysis while keeping unpublished findings and collaborator information outside the public record.",
    "currentStatus": "Research analyses are ongoing. Detailed findings and unpublished results are not publicly available at this stage.",
    "collaborators": "",
    "institution": "",
    "dates": "",
    "publicationStatus": "Ongoing research; detailed findings withheld",
    "limitations": "Sampling, quality-control choices, batch effects, and cell-type annotation influence interpretation. Expression differences alone do not establish causal mechanisms; cells must not be treated as independent biological replicates when sample-level replication is required.",
    "plannedMethods": [
      "Pseudobulk analysis is a prospective approach; completed use is not established here."
    ],
    "outputIds": [],
    "slug": "single-cell-genomics",
    "title": "Single-Cell Transcriptomics",
    "projectTitle": "SOX4 and Single-Cell & Single-Nucleus Transcriptomics",
    "category": "Single-cell & single-nucleus transcriptomics",
    "icon": "cells",
    "organism": "Liver and hepatobiliary cell populations",
    "summary": "Investigating hepatobiliary cell populations and gene expression in cholestatic liver diseases using single-cell and single-nucleus sequencing.",
    "status": "Ongoing research"
  },
  {
    "question": "How does synonymous codon usage vary across Escherichia coli coding sequences, and how much of that variation can nucleotide composition explain?",
    "background": "Approximately 250 Escherichia coli genome assemblies were obtained from NCBI RefSeq and analyzed computationally. Synonymous codons encode the same amino acid but need not occur at equal frequencies; this project examined those preferences and their possible evolutionary influences.",
    "methods": [
      "Genome acquisition and preprocessing from NCBI RefSeq",
      "Protein-coding sequence extraction, filtering, and in-frame codon counting",
      "Relative Synonymous Codon Usage (RSCU)",
      "Chi-square goodness-of-fit tests and standardized residual analysis",
      "Effective Number of Codons (ENC) and GC content at third codon positions (GC3)",
      "ENC–GC3 comparison with a composition-based expectation",
      "Statistical analysis and visualization in Python and R"
    ],
    "methodsNote": "The completed undergraduate analysis used sequence preprocessing and descriptive and statistical comparisons to investigate synonymous codon preferences.",
    "tools": [
      "Python",
      "R",
      "Biopython",
      "tidyverse",
      "seqinr",
      "ggplot2",
      "Linux / Bash"
    ],
    "topics": [
      "Codon usage",
      "Codon usage bias",
      "Synonymous codons",
      "Molecular evolution"
    ],
    "figures": [
      {
        "title": "Relative Synonymous Codon Usage (RSCU)",
        "src": "/images/Research/RSCU_plot.png",
        "width": 4200,
        "height": 1800,
        "alt": "RSCU bars for synonymous codons in Escherichia coli",
        "caption": "RSCU compares observed codon use with equal usage within a synonymous family. Values above or below one indicate relative over- or underrepresentation; these descriptive patterns do not establish their cause."
      },
      {
        "title": "Codon bias residuals",
        "src": "/images/Research/CodonBias_residuals_facet.png",
        "width": 3600,
        "height": 2400,
        "alt": "Faceted scaled residuals of synonymous codon counts by amino acid",
        "caption": "Residuals show the direction of departure from the equal-usage expectation within amino-acid groups. The existing plot scales residuals for display; its dashed lines should not be interpreted as independently verified significance thresholds."
      },
      {
        "title": "ENC–GC3 analysis",
        "src": "/images/Research/ENC_GC3_plot.png",
        "width": 2100,
        "height": 1800,
        "alt": "ENC against GC3 for Escherichia coli coding sequences with a red reference curve",
        "caption": "The existing plot compares coding-sequence ENC and GC3 with a composition-based reference curve. Some displayed ENC estimates fall below the conventional 20–61 range and require estimator and filtering review. The figure is retained as an original project output, not as validated evidence of translational selection."
      }
    ],
    "results": "The analysis identified nonrandom patterns of synonymous codon usage. ENC–GC3 analysis suggested that nucleotide composition alone may not fully explain the observed bias; estimator and filtering issues in the retained plot require review before stronger inferences.",
    "interpretation": "Selective influences are possible, but these analyses alone do not establish translational selection as the dominant cause. The official poster title is retained in the research-output record; the interpretation here is deliberately more cautious.",
    "future": "Potential follow-up includes checking the ENC estimator and sequence filters, evaluating alternative explanations, and extending comparisons to additional genomes. These are future directions rather than completed analyses.",
    "currentStatus": "Completed undergraduate project, publicly presented as a research poster on April 9, 2026.",
    "collaborators": "",
    "institution": profile.university,
    "dates": "2026",
    "publicationStatus": "Undergraduate research poster; not a peer-reviewed journal article",
    "limitations": "Results depend on annotation quality, sequence filtering, codon-count assumptions, and the statistical null model. The retained ENC plot includes estimates outside the conventional range. Composition-based comparisons and deviations from equal codon usage cannot, by themselves, distinguish all mutational and selective mechanisms.",
    "plannedMethods": [],
    "outputIds": [
      "codon-poster"
    ],
    "slug": "codon-usage-bias",
    "title": "Codon Usage Bias",
    "projectTitle": "Codon Usage and Synonymous Codon Bias in Escherichia coli",
    "category": "Molecular evolution & sequence analysis",
    "icon": "codons",
    "organism": "Approximately 250 Escherichia coli genome assemblies",
    "summary": "Examining synonymous codon preferences and evolutionary pressures across approximately 250 Escherichia coli genomes.",
    "status": "Completed undergraduate research"
  }
];
