export interface ProjectMetric {
  startValue: string;
  endValue: string;
  label: string;
  unit?: string;
  highlight?: boolean;
}

export interface ProjectCase {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  liveUrl: string;
  githubUrl: string;
  tagline: string;
  description: string;
  technologies: string[];
  problem: string;
  approach: string;
  result: string;
  metrics: ProjectMetric[];
  imagePreview: string;
  statsOverview: { label: string; value: string }[];
}

export const PROJECTS: ProjectCase[] = [
  {
    id: "lorcen-rag",
    number: "01",
    title: "LORCEN-RAG",
    subtitle: "Domain-Specialized GATE CS Reasoning LLM",
    year: "2026",
    liveUrl: "https://lorcenrag.up.railway.app",
    githubUrl: "https://github.com/piyush23-eng/CALYPSO-RAG",
    tagline: "Domain-specialized reasoning for GATE CS.",
    description: "A production-oriented multimodal Agentic RAG system for GATE Computer Science reasoning, combining hybrid retrieval, GraphRAG, CRAG, symbolic verification and QLoRA fine-tuning.",
    imagePreview: "/projects/lorcen-rag.png",
    technologies: [
      "Python",
      "PyTorch",
      "HuggingFace",
      "QLoRA",
      "Qwen2.5-1.5B",
      "GGUF",
      "Quantization",
      "FastAPI",
      "RAG",
      "GraphRAG",
      "CRAG"
    ],
    problem: "Standard autoregressive LLMs and simple vector-search RAG pipelines break on rigorous computer science entrance examinations due to three specific failures: arithmetic drift across multi-step calculations, dense acronym disambiguation (e.g., Strict 2PL vs Rigorous 2PL), and multi-hop dependencies spanning different syllabus chapters.",
    approach: "Fine-tuned Qwen2.5-1.5B end-to-end with 4-bit QLoRA using a leakage-safe dataset pipeline (SHA-256 and MinHash LSH deduplication, temporal train/val/test split). Coupled retrieval with hybrid BM25 + dense vector embeddings, GraphRAG multi-hop traversal, Corrective RAG (CRAG) document evaluation, and a 4-stage chain-of-thought derivation schema.",
    result: "Quantized the fine-tuned model to GGUF Q4_K_M, compressing footprint from ~3.1GB to under 1GB while accelerating CPU inference from 18 to 53 tok/s. Deployed behind a production FastAPI service with token-by-token streaming, verified against a 50-question benchmark with zero hallucinated derivation steps.",
    metrics: [
      { startValue: "61.2", endValue: "71.0", label: "Context Recall", unit: "%" },
      { startValue: "84.0", endValue: "89.1", label: "Faithfulness", unit: "%" },
      { startValue: "3.1GB", endValue: "<1GB", label: "Quantized Model", unit: "" },
      { startValue: "18", endValue: "53", label: "CPU Inference", unit: " tok/s" }
    ],
    statsOverview: [
      { label: "Benchmark Set", value: "50 GATE CS Questions" },
      { label: "Serving Engine", value: "FastAPI + Streaming" },
      { label: "Quantization", value: "GGUF Q4_K_M" },
      { label: "Architecture", value: "CRAG + GraphRAG" }
    ]
  },
  {
    id: "telos",
    number: "02",
    title: "TeLos",
    subtitle: "Voice-First AI Technical Interview Simulator",
    year: "2026",
    liveUrl: "https://telos-evk7.onrender.com",
    githubUrl: "https://github.com/piyush23-eng/TeLos",
    tagline: "An interview simulator that listens, evaluates and responds in real time.",
    description: "A full-stack technical interview platform combining streaming AI interviews, real-time speech analytics, company preparation roadmaps, code execution and proctored assessments.",
    imagePreview: "/projects/telos.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "OpenRouter",
      "Deepgram",
      "WebRTC",
      "MediaPipe",
      "Vite"
    ],
    problem: "Engineers preparing for top-tier technical rounds face a binary choice: unstructured self-study or expensive human mock interviews. Existing AI tools rely on slow, unnatural text prompts that fail to replicate high-pressure conversational exchanges, speech pacing, and real-time coding evaluations.",
    approach: "Architected a low-latency bidirectional voice pipeline uniting Deepgram Nova-3 speech recognition, Web Speech synthesis, and streaming turn-by-turn LLM reasoning. Integrated MediaPipe WebAssembly for in-browser client-side head-pose and gaze attention proctoring, paired with an isolated multi-language code execution engine.",
    result: "Deployed an end-to-end interview simulator tracking candidate words-per-minute (WPM), talk-to-listen ratios, and filler-word decay (-65% baseline reduction). Shipped 47 curated company preparation roadmaps and persistent candidate readiness scoring across 6 evaluation dimensions.",
    metrics: [
      { startValue: "0", endValue: "47", label: "Company Roadmaps", unit: "" },
      { startValue: "0", endValue: "6", label: "Evaluation Dimensions", unit: "" },
      { startValue: "0", endValue: "5", label: "Code Languages", unit: "" },
      { startValue: "0", endValue: "-65", label: "Filler-Word Decay", unit: "%" }
    ],
    statsOverview: [
      { label: "Execution Sandbox", value: "Python, Java, C, C++, JS" },
      { label: "Voice Latency", value: "Sub-Second Streaming" },
      { label: "Proctoring", value: "MediaPipe WASM Gaze" },
      { label: "Database Layer", value: "Prisma ORM + PostgreSQL" }
    ]
  }
];
