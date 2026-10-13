/**
 * AIAC Research Projects - Centralized Data Store
 * Authentic student research projects across the 6 research themes.
 * Uses honest lifecycle statuses: Proposed, Active, Validating, Completed, Published.
 */

const PROJECTS_DATA = [
  // --- Pod 01: Regional NLP & Indic LLMs ---
  {
    id: "proj-01-kannada-ner",
    title: "Kannada Named Entity & Morphological Segmentation Benchmark",
    podId: "pod-01",
    podName: "Regional NLP & Indic LLMs",
    status: "Active",
    objective: "Developing a standardized tokenization and morphological parsing pipeline for low-resource Kannada administrative documents.",
    techStack: ["PyTorch", "Hugging Face", "spaCy", "IndicBERT"],
    cycle: "Cycle 2026.1",
    links: {
      code: "https://github.com/aiac-lab/kannada-morphology-baseline",
      report: null,
      demo: null
    }
  },
  {
    id: "proj-01-pseudo-label",
    title: "Cross-Lingual Pseudo-Labeling for Regional Sentiment Analysis",
    podId: "pod-01",
    podName: "Regional NLP & Indic LLMs",
    status: "Validating",
    objective: "Quantifying label noise transfer when bootstrapping regional Kannada sentiment classifiers from English instruction-tuned models.",
    techStack: ["PyTorch", "LoRA", "Hugging Face Datasets", "Weights & Biases"],
    cycle: "Cycle 2026.1",
    links: {
      code: "https://github.com/aiac-lab/indic-pseudo-labeling",
      report: null,
      demo: null
    }
  },

  // --- Pod 02: Edge AI & Vision Systems ---
  {
    id: "proj-02-quantized-yolo",
    title: "Low-Latency INT8 Quantized Object Detection on Embedded Jetson",
    podId: "pod-02",
    podName: "Edge AI & Vision Systems",
    status: "Active",
    objective: "Profiling post-training calibration loss and FPS throughput of YOLOv8n on resource-constrained ARM/NVIDIA architectures.",
    techStack: ["TensorRT", "YOLOv8", "CUDA", "OpenCV", "ONNX"],
    cycle: "Cycle 2026.1",
    links: {
      code: "https://github.com/aiac-lab/edge-vision-quantization",
      report: null,
      demo: null
    }
  },
  {
    id: "proj-02-stream-telemetry",
    title: "Multi-Camera Video Stream Anomaly Detection Pipeline",
    podId: "pod-02",
    podName: "Edge AI & Vision Systems",
    status: "Proposed",
    objective: "Designing a zero-copy frame ingestion buffer for temporal anomaly localization in campus perimeter feeds.",
    techStack: ["DeepStream", "GStreamer", "PyTorch", "C++"],
    cycle: "Cycle 2026.2",
    links: {
      code: null,
      report: null,
      demo: null
    }
  },

  // --- Pod 03: Agentic AI & Autonomous Loops ---
  {
    id: "proj-03-consensus-review",
    title: "Deterministic Multi-Agent Consensus for Automated Pull Request Triage",
    podId: "pod-03",
    podName: "Agentic AI & Autonomous Loops",
    status: "Active",
    objective: "Formulating a deterministic voting protocol across specialized reviewer agents to identify logic errors and test gaps in Python code.",
    techStack: ["LangGraph", "FastAPI", "Ollama", "Pydantic", "Docker"],
    cycle: "Cycle 2026.1",
    links: {
      code: "https://github.com/aiac-lab/agentic-pr-review",
      report: null,
      demo: null
    }
  },
  {
    id: "proj-03-rag-citation",
    title: "Grounded RAG Pipeline with Semantic Source Verification",
    podId: "pod-03",
    podName: "Agentic AI & Autonomous Loops",
    status: "Validating",
    objective: "Evaluating hallucination reduction rates using sentence-level attribution graphs on university academic regulations.",
    techStack: ["LlamaIndex", "ChromaDB", "LangChain", "Sentence-Transformers"],
    cycle: "Cycle 2026.1",
    links: {
      code: "https://github.com/aiac-lab/grounded-rag-eval",
      report: null,
      demo: null
    }
  },

  // --- Pod 04: Healthcare & Bio-Signals ---
  {
    id: "proj-04-ecg-arrhythmia",
    title: "Lightweight 1D-CNN for Real-Time Single-Lead ECG Anomaly Detection",
    podId: "pod-04",
    podName: "Healthcare & Bio-Signals",
    status: "Active",
    objective: "Constructing an ultra-compact convolutional classifier for continuous beat classification on PhysioNet MIT-BIH datasets.",
    techStack: ["PyTorch", "WFDB", "NeuroKit2", "SciPy"],
    cycle: "Cycle 2026.1",
    links: {
      code: "https://github.com/aiac-lab/ecg-anomaly-detection",
      report: null,
      demo: null
    }
  },
  {
    id: "proj-04-eeg-filtering",
    title: "Artifact Removal and Spectral Power Tracking in Mobile EEG Feeds",
    podId: "pod-04",
    podName: "Healthcare & Bio-Signals",
    status: "Proposed",
    objective: "Investigating wavelet decomposition methods for removing ocular and muscle artifacts from low-channel headband recordings.",
    techStack: ["MNE-Python", "NumPy", "PyTorch"],
    cycle: "Cycle 2026.2",
    links: {
      code: null,
      report: null,
      demo: null
    }
  },

  // --- Pod 05: Secure AI & Model Ethics ---
  {
    id: "proj-05-prompt-injection",
    title: "Systematic Jailbreak Taxonomy and Automated Evaluation for Small LLMs",
    podId: "pod-05",
    podName: "Secure AI & Model Ethics",
    status: "Active",
    objective: "Benchmarking 7B parameter local models against OWASP Top 10 LLM prompt injection and system override vectors.",
    techStack: ["Garak", "MITRE ATLAS", "PyTorch", "Hugging Face"],
    cycle: "Cycle 2026.1",
    links: {
      code: "https://github.com/aiac-lab/llm-jailbreak-eval",
      report: null,
      demo: null
    }
  },
  {
    id: "proj-05-fairness-audit",
    title: "Algorithmic Parity Audit of Student Merit Screening Baselines",
    podId: "pod-05",
    podName: "Secure AI & Model Ethics",
    status: "Proposed",
    objective: "Applying AIF360 disparate impact metrics to inspect gender and demographic balance in automated resume ranking heuristics.",
    techStack: ["AIF360", "Fairlearn", "SHAP", "Scikit-Learn"],
    cycle: "Cycle 2026.2",
    links: {
      code: null,
      report: null,
      demo: null
    }
  },

  // --- Pod 06: Systems, HPC & MLOps ---
  {
    id: "proj-06-reproducibility-harness",
    title: "Automated Experiment Lineage & GPU Telemetry Testbed",
    podId: "pod-06",
    podName: "Systems, HPC & MLOps",
    status: "Active",
    objective: "Building lightweight GitHub Actions runners that automatically capture VRAM spikes, seed integrity, and model hash lineage per PR.",
    techStack: ["Docker", "MLflow", "GitHub Actions", "Prometheus", "Python"],
    cycle: "Cycle 2026.1",
    links: {
      code: "https://github.com/aiac-lab/mlops-experiment-harness",
      report: null,
      demo: null
    }
  },
  {
    id: "proj-06-distributed-serving",
    title: "Heterogeneous Edge-to-Server Model Offloading Benchmarks",
    podId: "pod-06",
    podName: "Systems, HPC & MLOps",
    status: "Proposed",
    objective: "Profiling network latency thresholds for splitting neural pipeline layers between mobile nodes and local GPU servers.",
    techStack: ["Kubernetes", "gRPC", "Triton Server", "C++"],
    cycle: "Cycle 2026.2",
    links: {
      code: null,
      report: null,
      demo: null
    }
  }
];

// Helper functions for projects querying
function getAllProjects() {
  return PROJECTS_DATA;
}

function getProjectsByStatus(status) {
  if (!status || status === 'All') return PROJECTS_DATA;
  return PROJECTS_DATA.filter(p => p.status.toLowerCase() === status.toLowerCase());
}

function getProjectsByPod(podId) {
  if (!podId || podId === 'All') return PROJECTS_DATA;
  return PROJECTS_DATA.filter(p => p.podId === podId);
}
