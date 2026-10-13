/**
 * AIAC Research Pods - Centralized Data Store
 * Powers Pods Overview and Pod Detail views.
 * Structured for future authenticated admin/backend integration.
 */

const PODS_DATA = [
  {
    id: "pod-01",
    number: "01",
    badge: "POD 01",
    name: "Regional NLP & Indic LLMs",
    shortFocus: "Kannada text classification, Indic language models, pseudo-labeling, LoRA fine-tuning, and multilingual NLP.",
    description: "Conducting applied research on low-resource Indic language tokenization, Kannada sentiment & dialect parsing, cross-lingual pseudo-labeling, and compute-efficient parameter-efficient fine-tuning (PEFT/LoRA) on open weights.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>`,
    // Default initial completed milestones: 2 out of 5 = 40%
    completedMilestones: 2,
    topSuggestions: [
      {
        name: "Hugging Face",
        url: "https://huggingface.co/",
        domain: "huggingface.co",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
      },
      {
        name: "AI4Bharat",
        url: "https://ai4bharat.iitm.ac.in/",
        domain: "ai4bharat.iitm.ac.in",
        logo: "https://ai4bharat.iitm.ac.in/favicon.ico"
      }
    ],
    resources: [
      {
        name: "Hugging Face",
        url: "https://huggingface.co/",
        domain: "huggingface.co"
      },
      {
        name: "AI4Bharat",
        url: "https://ai4bharat.iitm.ac.in/",
        domain: "ai4bharat.iitm.ac.in"
      },
      {
        name: "IndicNLP Library",
        url: "https://anoopkunchukuttan.github.io/indic_nlp_library/",
        domain: "anoopkunchukuttan.github.io"
      },
      {
        name: "Hugging Face Datasets",
        url: "https://huggingface.co/docs/datasets/",
        domain: "huggingface.co"
      },
      {
        name: "PyTorch",
        url: "https://pytorch.org/",
        domain: "pytorch.org"
      },
      {
        name: "spaCy",
        url: "https://spacy.io/",
        domain: "spacy.io"
      },
      {
        name: "Weights & Biases",
        url: "https://wandb.ai/",
        domain: "wandb.ai"
      },
      {
        name: "Google Colab",
        url: "https://colab.research.google.com/",
        domain: "colab.research.google.com"
      }
    ]
  },
  {
    id: "pod-02",
    number: "02",
    badge: "POD 02",
    name: "Edge AI & Vision Systems",
    shortFocus: "Real-time vision systems, traffic intelligence, YOLO models, TensorRT optimization, and edge deployment.",
    description: "Designing latency-critical perception pipelines, INT8/FP4 quantization schemes, multi-camera telemetry streaming, and embedded acceleration across NVIDIA Jetson and edge micro-architectures.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`,
    // Default initial completed milestones: 1 out of 5 = 20%
    completedMilestones: 1,
    topSuggestions: [
      {
        name: "Ultralytics",
        url: "https://www.ultralytics.com/",
        domain: "ultralytics.com",
        logo: "https://www.ultralytics.com/favicon.ico"
      },
      {
        name: "NVIDIA Developer",
        url: "https://developer.nvidia.com/",
        domain: "developer.nvidia.com",
        logo: "https://developer.nvidia.com/favicon.ico"
      }
    ],
    resources: [
      {
        name: "Ultralytics YOLO",
        url: "https://www.ultralytics.com/",
        domain: "ultralytics.com"
      },
      {
        name: "OpenCV",
        url: "https://opencv.org/",
        domain: "opencv.org"
      },
      {
        name: "PyTorch",
        url: "https://pytorch.org/",
        domain: "pytorch.org"
      },
      {
        name: "NVIDIA TensorRT",
        url: "https://developer.nvidia.com/tensorrt",
        domain: "developer.nvidia.com"
      },
      {
        name: "NVIDIA DeepStream",
        url: "https://developer.nvidia.com/deepstream-sdk",
        domain: "developer.nvidia.com"
      },
      {
        name: "ONNX Runtime",
        url: "https://onnxruntime.ai/",
        domain: "onnxruntime.ai"
      },
      {
        name: "Roboflow",
        url: "https://roboflow.com/",
        domain: "roboflow.com"
      },
      {
        name: "Edge Impulse",
        url: "https://edgeimpulse.com/",
        domain: "edgeimpulse.com"
      }
    ]
  },
  {
    id: "pod-03",
    number: "03",
    badge: "POD 03",
    name: "Agentic AI & Autonomous Loops",
    shortFocus: "Multi-agent reasoning, LangGraph workflows, grounded RAG, orchestration, and autonomous AI systems.",
    description: "Investigating deterministic control loops, multi-agent consensus protocols, self-healing SQL/code workflows, and tool execution boundaries within unstructured enterprise environments.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    // Default initial completed milestones: 3 out of 5 = 60%
    completedMilestones: 3,
    topSuggestions: [
      {
        name: "LangChain",
        url: "https://www.langchain.com/",
        domain: "langchain.com",
        logo: "https://www.langchain.com/favicon.ico"
      },
      {
        name: "LangGraph",
        url: "https://langchain-ai.github.io/langgraph/",
        domain: "langchain-ai.github.io",
        logo: "https://langchain-ai.github.io/langgraph/favicon.ico"
      }
    ],
    resources: [
      {
        name: "LangChain",
        url: "https://www.langchain.com/",
        domain: "langchain.com"
      },
      {
        name: "LangGraph",
        url: "https://langchain-ai.github.io/langgraph/",
        domain: "langchain-ai.github.io"
      },
      {
        name: "LlamaIndex",
        url: "https://www.llamaindex.ai/",
        domain: "llamaindex.ai"
      },
      {
        name: "Ollama",
        url: "https://ollama.com/",
        domain: "ollama.com"
      },
      {
        name: "Hugging Face",
        url: "https://huggingface.co/",
        domain: "huggingface.co"
      },
      {
        name: "Chroma",
        url: "https://www.trychroma.com/",
        domain: "trychroma.com"
      },
      {
        name: "Qdrant",
        url: "https://qdrant.tech/",
        domain: "qdrant.tech"
      },
      {
        name: "OpenAI Platform",
        url: "https://platform.openai.com/",
        domain: "platform.openai.com"
      }
    ]
  },
  {
    id: "pod-04",
    number: "04",
    badge: "POD 04",
    name: "Healthcare & Bio-Signals",
    shortFocus: "ECG/EEG analysis, time-series anomaly detection, bio-signal intelligence, and healthcare AI research.",
    description: "Developing robust deep learning models for continuous physiological monitoring, ECG/EEG wave parsing, multimodal clinical signal alignment, and zero-leakage patient data validation.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
    // Default initial completed milestones: 1 out of 5 = 20%
    completedMilestones: 1,
    topSuggestions: [
      {
        name: "PhysioNet",
        url: "https://physionet.org/",
        domain: "physionet.org",
        logo: "https://physionet.org/favicon.ico"
      },
      {
        name: "MNE-Python",
        url: "https://mne.tools/",
        domain: "mne.tools",
        logo: "https://mne.tools/stable/_static/favicon.ico"
      }
    ],
    resources: [
      {
        name: "PhysioNet",
        url: "https://physionet.org/",
        domain: "physionet.org"
      },
      {
        name: "MNE-Python",
        url: "https://mne.tools/",
        domain: "mne.tools"
      },
      {
        name: "WFDB",
        url: "https://wfdb.io/",
        domain: "wfdb.io"
      },
      {
        name: "NeuroKit2",
        url: "https://neuropsychology.github.io/NeuroKit/",
        domain: "neuropsychology.github.io"
      },
      {
        name: "PyTorch",
        url: "https://pytorch.org/",
        domain: "pytorch.org"
      },
      {
        name: "TensorFlow",
        url: "https://www.tensorflow.org/",
        domain: "tensorflow.org"
      },
      {
        name: "MONAI",
        url: "https://monai.io/",
        domain: "monai.io"
      },
      {
        name: "Kaggle Datasets",
        url: "https://www.kaggle.com/datasets",
        domain: "kaggle.com"
      }
    ]
  },
  {
    id: "pod-05",
    number: "05",
    badge: "POD 05",
    name: "Secure AI & Model Ethics",
    shortFocus: "Adversarial robustness, fairness, explainability, jailbreak evaluation, AI safety, and responsible AI.",
    description: "Evaluating model vulnerability to adversarial prompt injections, model extraction, algorithmic bias in hiring/admissions, SHAP explainability bounds, and automated red-teaming benchmarks.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    // Default initial completed milestones: 2 out of 5 = 40%
    completedMilestones: 2,
    topSuggestions: [
      {
        name: "MITRE ATLAS",
        url: "https://atlas.mitre.org/",
        domain: "atlas.mitre.org",
        logo: "https://atlas.mitre.org/favicon.ico"
      },
      {
        name: "IBM AI Fairness 360",
        url: "https://aif360.mybluemix.net/",
        domain: "aif360.mybluemix.net",
        logo: "https://aif360.mybluemix.net/favicon.ico"
      }
    ],
    resources: [
      {
        name: "IBM AI Fairness 360",
        url: "https://aif360.mybluemix.net/",
        domain: "aif360.mybluemix.net"
      },
      {
        name: "Adversarial Robustness Toolbox",
        url: "https://adversarial-robustness-toolbox.org/",
        domain: "adversarial-robustness-toolbox.org"
      },
      {
        name: "Garak",
        url: "https://github.com/NVIDIA/garak",
        domain: "github.com"
      },
      {
        name: "MITRE ATLAS",
        url: "https://atlas.mitre.org/",
        domain: "atlas.mitre.org"
      },
      {
        name: "SHAP",
        url: "https://shap.readthedocs.io/",
        domain: "shap.readthedocs.io"
      },
      {
        name: "Microsoft Fairlearn",
        url: "https://fairlearn.org/",
        domain: "fairlearn.org"
      },
      {
        name: "OWASP Top 10 for LLM Applications",
        url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        domain: "owasp.org"
      },
      {
        name: "NIST AI Risk Management Framework",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
        domain: "nist.gov"
      }
    ]
  },
  {
    id: "pod-06",
    number: "06",
    badge: "POD 06",
    name: "Systems, HPC & MLOps",
    shortFocus: "GPU infrastructure, Docker, CI/CD, testbeds, reproducibility, model deployment, and experiment tracking.",
    description: "Constructing scalable laboratory infrastructure, heterogeneous GPU orchestration, automated regression test harnesses, artifact lineage registries, and continuous benchmark telemetry.",
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
    // Default initial completed milestones: 3 out of 5 = 60%
    completedMilestones: 3,
    topSuggestions: [
      {
        name: "MLflow",
        url: "https://mlflow.org/",
        domain: "mlflow.org",
        logo: "https://mlflow.org/favicon.ico"
      },
      {
        name: "NVIDIA NGC",
        url: "https://www.nvidia.com/en-in/gpu-cloud/ngc/",
        domain: "nvidia.com",
        logo: "https://www.nvidia.com/favicon.ico"
      }
    ],
    resources: [
      {
        name: "Docker",
        url: "https://www.docker.com/",
        domain: "docker.com"
      },
      {
        name: "Kubernetes",
        url: "https://kubernetes.io/",
        domain: "kubernetes.io"
      },
      {
        name: "MLflow",
        url: "https://mlflow.org/",
        domain: "mlflow.org"
      },
      {
        name: "Weights & Biases",
        url: "https://wandb.ai/",
        domain: "wandb.ai"
      },
      {
        name: "GitHub Actions",
        url: "https://github.com/features/actions",
        domain: "github.com"
      },
      {
        name: "NVIDIA NGC",
        url: "https://www.nvidia.com/en-in/gpu-cloud/ngc/",
        domain: "nvidia.com"
      },
      {
        name: "Prometheus",
        url: "https://prometheus.io/",
        domain: "prometheus.io"
      },
      {
        name: "Grafana",
        url: "https://grafana.com/",
        domain: "grafana.com"
      }
    ]
  }
];

// Standard 5 Milestones for AIAC Research Pods
const MILESTONE_DEFINITIONS = [
  {
    percentage: 20,
    stage: "Foundation",
    title: "Foundation",
    description: "Core topic, initial research plan, repository, and first baseline are established."
  },
  {
    percentage: 40,
    stage: "Development",
    title: "Development",
    description: "Initial implementation, model pipeline, data workflow, or prototype is developed."
  },
  {
    percentage: 60,
    stage: "Experimentation",
    title: "Experimentation",
    description: "Experiments, benchmark runs, comparisons, and research iteration are in progress."
  },
  {
    percentage: 80,
    stage: "Validation",
    title: "Validation",
    description: "Results are validated, documented, reviewed, and prepared for integration or paper work."
  },
  {
    percentage: 100,
    stage: "Research Ready",
    title: "Research Ready",
    description: "Research deliverables, reproducibility, documentation, and final readiness are achieved."
  }
];

/**
 * Returns all pods with enriched milestone progress objects
 */
function getAllPods() {
  return PODS_DATA.map(pod => enrichPodData(pod));
}

/**
 * Find a pod by ID or number string (e.g. "pod-01", "01", "1")
 */
function getPodById(idOrNum) {
  if (!idOrNum) return enrichPodData(PODS_DATA[0]);
  const normalized = String(idOrNum).toLowerCase().trim().replace(/^pod-?/, '');
  const found = PODS_DATA.find(p => 
    p.id === idOrNum || 
    p.number === normalized || 
    p.number === normalized.padStart(2, '0')
  );
  return found ? enrichPodData(found) : enrichPodData(PODS_DATA[0]);
}

/**
 * Enriches pod data with calculated progress and milestone state array
 */
function enrichPodData(pod) {
  const completedCount = Math.max(0, Math.min(5, Number(pod.completedMilestones) || 0));
  const progressPercent = Math.round((completedCount / 5) * 100);

  const enrichedMilestones = MILESTONE_DEFINITIONS.map((def, idx) => {
    const isCompleted = idx < completedCount;
    const isCurrent = idx === completedCount && completedCount < 5;
    const isUpcoming = idx > completedCount;

    return {
      ...def,
      index: idx,
      isCompleted,
      isCurrent,
      isUpcoming,
      status: isCompleted ? "completed" : (isCurrent ? "current" : "upcoming")
    };
  });

  return {
    ...pod,
    completedCount,
    progressPercent,
    isComplete: completedCount === 5,
    milestones: enrichedMilestones
  };
}

/**
 * Placeholder function for future authenticated Admin/Pod-Lead integration.
 * Public users cannot invoke persistence.
 */
function updatePodMilestone(podId, milestoneIndex) {
  console.info(`[AIAC Admin Hook] updatePodMilestone called for ${podId} -> milestone ${milestoneIndex}. Public visitor updates are not persisted.`);
}

// Helper to provide reliable favicon / logo with fallback
function getFaviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}
