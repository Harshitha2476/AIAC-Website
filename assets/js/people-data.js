/**
 * AIAC Research Centre - People & Directory Data Store
 * Structured academic directory with clear roles, councils, pod assignments,
 * and research interests. Does not expose private student information.
 */

const PEOPLE_DATA = {
  // Leadership & Advisory
  leadership: [
    {
      id: "fac-dir",
      name: "Faculty Oversight / Academic Director",
      role: "Faculty Director",
      category: "Faculty & Advisory",
      affiliation: "Department of Computer Science & Engineering",
      assignedPod: "All Pods",
      interests: ["Machine Learning Theory", "Research Methodology", "Academic Peer Review", "Grant Governance"],
      bio: "Provides institutional supervision, research integrity validation, curriculum alignment, and publication oversight across all AIAC student research squads.",
      links: {}
    },
    {
      id: "lead-arch-01",
      name: "Principal Systems Architect",
      role: "Lead Systems Architect & Strategic Advisor",
      category: "Faculty & Advisory",
      affiliation: "Industry Advisory Tier (15+ Yrs Industry Exp)",
      assignedPod: "Infrastructure & Systems Track",
      interests: ["Distributed Systems", "Heterogeneous Compute", "Model Serving Architecture", "Research IP Governance"],
      bio: "Oversees large-scale system topology, hardware feasibility constraints, production benchmarking integrity, and software delivery standards.",
      links: {}
    },
    {
      id: "lead-ai-02",
      name: "Applied AI & Agent Practitioner",
      role: "Technical Lead & Engineering Mentor",
      category: "Faculty & Advisory",
      affiliation: "Industry Advisory Tier (3+ Yrs Applied AI Exp)",
      assignedPod: "Agentic Systems & Core Frameworks",
      interests: ["Multi-Agent Orchestration", "LangGraph Runtimes", "Deterministic Tool Calling", "CI/CD for Machine Learning"],
      bio: "Guides weekly engineering sprints, reviews technical pull requests, enforces Pydantic schemas, and mentors squad members on code quality.",
      links: {}
    }
  ],

  // 4 Cross-Pod Councils
  councils: [
    {
      id: "council-sys",
      councilName: "Systems & Infrastructure Council",
      leadName: "Arjun S. (Student Lead)",
      role: "Council Lead",
      assignedPod: "Pod 06 & Cross-Lab",
      mandate: "Oversees GPU testbed availability, Docker environment standards, and repository CI/CD runners across all pods.",
      interests: ["Container Runtimes", "CUDA Profiling", "GitHub Actions"]
    },
    {
      id: "council-ml",
      councilName: "ML Rigor & Benchmarking Council",
      leadName: "Priyanka M. (Student Lead)",
      role: "Council Lead",
      assignedPod: "Pod 03 & Cross-Lab",
      mandate: "Audits baseline evaluation protocols, seed reproducibility, statistical significance checks, and benchmark sanity.",
      interests: ["Evaluation Metrics", "Statistical Validation", "Ablation Studies"]
    },
    {
      id: "council-ethics",
      councilName: "Research Ethics & Lineage Council",
      leadName: "Kavya N. (Student Lead)",
      role: "Council Lead",
      assignedPod: "Pod 05 & Cross-Lab",
      mandate: "Inspects training dataset licenses, model cards, anonymization standards, and environmental FLOP estimates.",
      interests: ["Data Licensing", "Algorithmic Fairness", "Model Provenance"]
    },
    {
      id: "council-docs",
      councilName: "Documentation & Reproducibility Council",
      leadName: "Rohan D. (Student Lead)",
      role: "Council Lead",
      assignedPod: "Pod 01 & Cross-Lab",
      mandate: "Enforces self-contained replication scripts, README documentation standards, and open dataset cataloging.",
      interests: ["Open Science", "Technical Writing", "Artifact Registries"]
    }
  ],

  // 6 Pod Anchors (Senior Student Leads)
  podAnchors: [
    {
      id: "anchor-pod-01",
      name: "Darshan K.",
      role: "Pod Anchor",
      podId: "pod-01",
      podName: "Regional NLP & Indic LLMs",
      interests: ["Kannada Morphology", "Tokenization Efficiency", "PEFT/LoRA"],
      github: "https://github.com/aiac-lab"
    },
    {
      id: "anchor-pod-02",
      name: "Vikas M.",
      role: "Pod Anchor",
      podId: "pod-02",
      podName: "Edge AI & Vision Systems",
      interests: ["TensorRT INT8", "Embedded Jetson", "Stream Latency"],
      github: "https://github.com/aiac-lab"
    },
    {
      id: "anchor-pod-03",
      name: "Sneha B.",
      role: "Pod Anchor",
      podId: "pod-03",
      podName: "Agentic AI & Autonomous Loops",
      interests: ["LangGraph Logic", "Multi-Agent Consensus", "Deterministic Tooling"],
      github: "https://github.com/aiac-lab"
    },
    {
      id: "anchor-pod-04",
      name: "Akash R.",
      role: "Pod Anchor",
      podId: "pod-04",
      podName: "Healthcare & Bio-Signals",
      interests: ["1D-CNN Architectures", "ECG Signal Processing", "PhysioNet Benchmarks"],
      github: "https://github.com/aiac-lab"
    },
    {
      id: "anchor-pod-05",
      name: "Meghana P.",
      role: "Pod Anchor",
      podId: "pod-05",
      podName: "Secure AI & Model Ethics",
      interests: ["Prompt Injections", "Fairlearn Metrics", "Model Robustness"],
      github: "https://github.com/aiac-lab"
    },
    {
      id: "anchor-pod-06",
      name: "Kiran T.",
      role: "Pod Anchor",
      podId: "pod-06",
      podName: "Systems, HPC & MLOps",
      interests: ["MLflow Registries", "GPU Telemetry", "Automated Pipelines"],
      github: "https://github.com/aiac-lab"
    }
  ],

  // Student Researchers (Squad members across pods)
  researchers: [
    {
      id: "res-01",
      name: "Aditi S.",
      role: "Student Researcher",
      podId: "pod-01",
      podName: "Regional NLP & Indic LLMs",
      interests: ["Low-Resource Tokenizers", "Indic Dialect Corpora", "Synthetic Text Generation"]
    },
    {
      id: "res-02",
      name: "Bhavana V.",
      role: "Student Researcher",
      podId: "pod-01",
      podName: "Regional NLP & Indic LLMs",
      interests: ["Cross-Lingual Embeddings", "Morphological Disambiguation", "Kannada Sentiment"]
    },
    {
      id: "res-03",
      name: "Chetan L.",
      role: "Student Researcher",
      podId: "pod-02",
      podName: "Edge AI & Vision Systems",
      interests: ["YOLO Optimization", "FP4/INT8 Calibration", "CUDA Acceleration"]
    },
    {
      id: "res-04",
      name: "Deepak G.",
      role: "Student Researcher",
      podId: "pod-02",
      podName: "Edge AI & Vision Systems",
      interests: ["Video Frame Decoders", "Zero-Copy Buffering", "Perimeter Telemetry"]
    },
    {
      id: "res-05",
      name: "Esha N.",
      role: "Student Researcher",
      podId: "pod-03",
      podName: "Agentic AI & Autonomous Loops",
      interests: ["Grounded Retrieval", "Attribution Graphs", "Context Compaction"]
    },
    {
      id: "res-06",
      name: "Farhan A.",
      role: "Student Researcher",
      podId: "pod-03",
      podName: "Agentic AI & Autonomous Loops",
      interests: ["Text-to-SQL Self-Correction", "Agent Sandbox Execution", "Pydantic Schemas"]
    },
    {
      id: "res-07",
      name: "Gautam K.",
      role: "Student Researcher",
      podId: "pod-04",
      podName: "Healthcare & Bio-Signals",
      interests: ["ECG Wavelet Filtering", "Arrhythmia Anomaly Scoring", "Time-Series Baselines"]
    },
    {
      id: "res-08",
      name: "Harini M.",
      role: "Student Researcher",
      podId: "pod-04",
      podName: "Healthcare & Bio-Signals",
      interests: ["EEG Band Power Analysis", "Electrode Noise Reduction", "Clinical Data Privacy"]
    },
    {
      id: "res-09",
      name: "Ishan W.",
      role: "Student Researcher",
      podId: "pod-05",
      podName: "Secure AI & Model Ethics",
      interests: ["Adversarial Jailbreaks", "Garak Benchmark Suites", "System Prompt Guardrails"]
    },
    {
      id: "res-10",
      name: "Jyoti S.",
      role: "Student Researcher",
      podId: "pod-05",
      podName: "Secure AI & Model Ethics",
      interests: ["SHAP Feature Bounds", "Disparate Impact Auditing", "Dataset Bias Metrics"]
    },
    {
      id: "res-11",
      name: "Kartik N.",
      role: "Student Researcher",
      podId: "pod-06",
      podName: "Systems, HPC & MLOps",
      interests: ["VRAM Monitoring", "Docker Multi-Stage Builds", "GitHub Actions Runners"]
    },
    {
      id: "res-12",
      name: "Lavanya B.",
      role: "Student Researcher",
      podId: "pod-06",
      podName: "Systems, HPC & MLOps",
      interests: ["Triton Model Serving", "gRPC Protocol Buffers", "Reproducible Environment Manifests"]
    }
  ]
};
