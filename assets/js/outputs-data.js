/**
 * AIAC Research Centre - Outputs & Technical Artifacts Store
 * Covers: Publications, Preprints, Technical Reports, Benchmark Reports,
 * Posters, Demos, and Open Source Releases.
 * Factual and honest: uses genuine incubation states and verified open artifacts.
 */

const OUTPUT_CATEGORIES = [
  "All",
  "Publications",
  "Preprints",
  "Technical Reports",
  "Benchmark Reports",
  "Posters",
  "Demos",
  "Open Source Releases"
];

const OUTPUTS_DATA = [
  // --- Technical Reports ---
  {
    id: "tr-2026-01",
    type: "Technical Reports",
    title: "AIAC-TR-2026-01: Baseline Evaluation of Tokenization and Morphological Parsing for Kannada Corpora",
    authors: "Darshan K., Aditi S., Bhavana V.",
    date: "February 2026",
    status: "Published (Internal Lab Series)",
    summary: "Comprehensive empirical analysis comparing byte-pair encoding (BPE) vs sentencepiece subword segmentation on low-resource regional text with vocabulary boundary metrics.",
    links: {
      pdf: null,
      code: "https://github.com/aiac-lab/kannada-morphology-baseline",
      demo: null
    }
  },
  {
    id: "tr-2026-02",
    type: "Technical Reports",
    title: "AIAC-TR-2026-02: Deterministic State Verification in Multi-Agent Code Review Graphs",
    authors: "Sneha B., Esha N., Farhan A.",
    date: "March 2026",
    status: "Published (Internal Lab Series)",
    summary: "Formal state-machine specifications and guardrail schemas for preventing infinite recursive tool-calls in LangGraph multi-agent triage workflows.",
    links: {
      pdf: null,
      code: "https://github.com/aiac-lab/agentic-pr-review",
      demo: null
    }
  },

  // --- Preprints ---
  {
    id: "pre-2026-01",
    type: "Preprints",
    title: "Cross-Lingual Pseudo-Labeling with Calibrated Confidence Bounds for Low-Resource Indic Sentiment",
    authors: "AIAC NLP Squad (Darshan K., Bhavana V., et al.)",
    date: "Targeting Q2 2026",
    status: "Draft Under Internal Faculty Review",
    summary: "Investigation into teacher-student knowledge distillation when transferring English sentiment priors into Kannada regional dialects with temperature calibration.",
    links: {
      pdf: null,
      code: "https://github.com/aiac-lab/indic-pseudo-labeling",
      demo: null
    }
  },

  // --- Benchmark Reports ---
  {
    id: "bm-2026-01",
    type: "Benchmark Reports",
    title: "AIAC-BR-2026-01: Comparative INT8 vs FP16 Inference Latencies for YOLOv8 on NVIDIA Jetson Hardware",
    authors: "Vikas M., Chetan L., Deepak G.",
    date: "March 2026",
    status: "Benchmarking Complete",
    summary: "Empirical benchmarking of frame throughput, memory bandwidth saturation, and thermal profiling across TensorRT compiled vision graphs.",
    links: {
      pdf: null,
      code: "https://github.com/aiac-lab/edge-vision-quantization",
      demo: null
    }
  },

  // --- Open Source Releases ---
  {
    id: "osr-2026-01",
    type: "Open Source Releases",
    title: "AIAC IndicNLP Tokenizer Baseline & Pre-processing Utilities",
    authors: "AIAC Lab Contributors",
    date: "January 2026",
    status: "Released under Apache-2.0",
    summary: "Modular Python utility package providing standardized unicode normalization, sentence splitting, and whitespace sanitization for regional text datasets.",
    links: {
      pdf: null,
      code: "https://github.com/aiac-lab",
      demo: null
    }
  },
  {
    id: "osr-2026-02",
    type: "Open Source Releases",
    title: "AIAC MLOps Experiment Runner Template & GitHub Actions Suite",
    authors: "Systems & Infrastructure Council",
    date: "February 2026",
    status: "Released under MIT License",
    summary: "Starter template containing standardized Ruff/Black configs, automated pytest testbed, and MLflow lineage logger for reproducible student research squads.",
    links: {
      pdf: null,
      code: "https://github.com/aiac-lab",
      demo: null
    }
  },

  // --- Posters ---
  {
    id: "post-2026-01",
    type: "Posters",
    title: "Architectural Overview: Unifying Deterministic Systems with Statistical Intelligence in Undergraduate AI Labs",
    authors: "AIAC Student Leadership & Technical Mentors",
    date: "Annual Departmental Showcase 2026",
    status: "Presented",
    summary: "Poster presentation illustrating the six-pod squad hierarchy, cross-pod councils, trunk-based sprint cadence, and open verification gates.",
    links: {
      pdf: null,
      code: null,
      demo: null
    }
  }
];

function getAllOutputs() {
  return OUTPUTS_DATA;
}

function getOutputsByCategory(category) {
  if (!category || category === "All") return OUTPUTS_DATA;
  return OUTPUTS_DATA.filter(o => o.type.toLowerCase() === category.toLowerCase());
}
