export interface TechnicalCategory {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export const TECHNICAL_CATEGORIES: TechnicalCategory[] = [
  {
    number: "01",
    title: "AI & MACHINE LEARNING",
    subtitle: "Fine-Tuning, RAG & Inference Pipelines",
    description: "Designing domain-specific model workflows, parameter-efficient fine-tuning (QLoRA), and hybrid retrieval-augmented generation pipelines evaluated with quantitative benchmarks.",
    skills: ["RAG", "LLMs", "QLoRA", "Vector Search", "Model Evaluation", "Hugging Face", "ChromaDB", "Quantization"]
  },
  {
    number: "02",
    title: "FULL-STACK PRODUCTS",
    subtitle: "High-Performance Web & Real-Time Backends",
    description: "Building end-to-end applications from typed React and TypeScript client interfaces down to robust Spring Boot and Node.js microservices.",
    skills: ["React", "TypeScript", "Node.js", "Spring Boot", "REST APIs", "PostgreSQL", "Prisma ORM", "WebSockets"]
  },
  {
    number: "03",
    title: "DATA ENGINEERING",
    subtitle: "Distributed Pipelines & Lakehouse Infrastructure",
    description: "Constructing scalable data pipelines, automated schema validation checkpoints, and idempotently partitioned analytical stores.",
    skills: ["PySpark", "Apache Spark", "Azure Data Factory", "Delta Lake", "SQL Analytics", "Docker", "ETL Pipelines"]
  }
];

export type SkillCategory = 'all' | 'ai' | 'frontend' | 'backend' | 'data' | 'devops';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  categoryLabel: string;
  iconKey: string;
  brandColor: string;
  level: string;
  description: string;
  productionContext: string;
}

export const SKILL_CATEGORIES = [
  { id: 'all' as SkillCategory, label: 'ALL SKILLS', count: 24 },
  { id: 'ai' as SkillCategory, label: 'AI & MACHINE LEARNING', count: 6 },
  { id: 'frontend' as SkillCategory, label: 'FRONTEND & INTERFACES', count: 6 },
  { id: 'backend' as SkillCategory, label: 'BACKEND ARCHITECTURE', count: 4 },
  { id: 'data' as SkillCategory, label: 'DATA ENGINEERING', count: 4 },
  { id: 'devops' as SkillCategory, label: 'DATABASES & DEVOPS', count: 4 },
];

export const SKILL_ITEMS: SkillItem[] = [
  // AI & Intelligent Systems
  {
    id: "python",
    name: "Python",
    category: "ai",
    categoryLabel: "AI / Core Language",
    iconKey: "python",
    brandColor: "#3776AB",
    level: "Core Production",
    description: "Primary language for deep learning models, scientific computing, FastAPI services and PySpark data pipelines.",
    productionContext: "Core engine for LORCEN-RAG multi-hop retrieval and fine-tuning scripts."
  },
  {
    id: "pytorch",
    name: "PyTorch",
    category: "ai",
    categoryLabel: "Deep Learning",
    iconKey: "pytorch",
    brandColor: "#EE4C2C",
    level: "Model Training",
    description: "Deep learning tensor modeling, automatic differentiation, custom loss functions and fine-tuning pipelines.",
    productionContext: "Built custom adapter modules, attention analysis and backprop pipelines."
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "ai",
    categoryLabel: "Transformers Ecosystem",
    iconKey: "huggingface",
    brandColor: "#FFA000",
    level: "NLP & Tokenizers",
    description: "Transformers ecosystem, tokenizer architectures, model repository distribution and parameter-efficient tuning (PEFT/QLoRA).",
    productionContext: "Utilized for quantized model inference (<1GB VRAM) and tokenizer calibration."
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "ai",
    categoryLabel: "AI Microservices",
    iconKey: "fastapi",
    brandColor: "#05998B",
    level: "High Throughput",
    description: "Asynchronous Python web framework with OpenAPI schemas, streaming responses and dependency injection.",
    productionContext: "Delivered 53 tok/s streaming inference server with Pydantic validation."
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "ai",
    categoryLabel: "LLM Orchestration",
    iconKey: "langchain",
    brandColor: "#22C55E",
    level: "Agentic Workflows",
    description: "Complex retrieval chains, prompt template routing, document loaders and automated agent tool calling.",
    productionContext: "Engineered multi-stage query routing and recursive retrieval chains."
  },
  {
    id: "chroma",
    name: "ChromaDB",
    category: "ai",
    categoryLabel: "Vector Database",
    iconKey: "chroma",
    brandColor: "#EC4899",
    level: "Embeddings Storage",
    description: "Open-source embedding database for nearest neighbor search, cosine similarity and vector memory retrieval.",
    productionContext: "Indexed thousands of structured chunks with hybrid semantic similarity."
  },

  // Frontend & Interfaces
  {
    id: "react",
    name: "React",
    category: "frontend",
    categoryLabel: "Reactive Interfaces",
    iconKey: "react",
    brandColor: "#61DAFB",
    level: "Production Core",
    description: "Component-driven architecture, custom state machines, virtual DOM reconciliation and high-frame-rate interaction design.",
    productionContext: "Built responsive client portals, case-study viewports and real-time dashboard UI."
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    categoryLabel: "Typed Scalability",
    iconKey: "typescript",
    brandColor: "#3178C6",
    level: "Strict Typings",
    description: "Strong typing across client applications and backend APIs, eliminating runtime type errors and enhancing DX.",
    productionContext: "Maintained 100% strict type safety across full-stack applications with 0 compile errors."
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    categoryLabel: "Web Runtime",
    iconKey: "javascript",
    brandColor: "#F7DF1E",
    level: "ESNext Standard",
    description: "Modern asynchronous execution, Promises, DOM lifecycle manipulation, event loops and browser APIs.",
    productionContext: "Underlying foundation for performant frontends and Node.js microservices."
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    categoryLabel: "Full-Stack Web",
    iconKey: "nextjs",
    brandColor: "#000000",
    level: "SSR & Edge",
    description: "React framework for production: Server-Side Rendering (SSR), API routes, static site optimization and edge caching.",
    productionContext: "Engineered high-performance web products with optimized First Contentful Paint."
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    categoryLabel: "Design Engineering",
    iconKey: "tailwind",
    brandColor: "#06B6D4",
    level: "Utility System",
    description: "Utility-first CSS architecture for micro-responsive design, custom typography scales and minimal bundle footprints.",
    productionContext: "Created bespoke editorial layouts, hairline grid systems and smooth dark/light transitions."
  },
  {
    id: "gsap",
    name: "GSAP",
    category: "frontend",
    categoryLabel: "Creative Motion",
    iconKey: "gsap",
    brandColor: "#88CE02",
    level: "Kinetic Choreography",
    description: "GreenSock Animation Platform for hardware-accelerated transforms, timelines, ScrollTrigger, and continuous tickers.",
    productionContext: "Choreographed cinematic page reveals, counter-parallax interactions and kinetic streams."
  },

  // Backend Architecture
  {
    id: "java",
    name: "Java",
    category: "backend",
    categoryLabel: "Enterprise Backend",
    iconKey: "java",
    brandColor: "#ED8B00",
    level: "Award-Winning",
    description: "Object-oriented design, multithreaded concurrency, JVM optimization, memory management and data structures.",
    productionContext: "Earned Best Performer Award #1 at Elevate Labs for enterprise Java development."
  },
  {
    id: "springboot",
    name: "Spring Boot",
    category: "backend",
    categoryLabel: "REST Microservices",
    iconKey: "springboot",
    brandColor: "#6DB33F",
    level: "Enterprise APIs",
    description: "Robust backend microservices, Spring Security JWT authentication, Spring Data JPA/Hibernate and RESTful services.",
    productionContext: "Architected secure multi-tenant backend APIs with strict relational validation."
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    categoryLabel: "Event-Driven I/O",
    iconKey: "nodejs",
    brandColor: "#5FA04E",
    level: "API & Runtime",
    description: "Event-driven asynchronous backend runtime, Express.js microservices, WebSocket bidirectional communication, and middleware pipelines.",
    productionContext: "Built real-time audio streaming relays and asynchronous JSON streaming APIs."
  },
  {
    id: "fastapi_backend",
    name: "RESTful APIs",
    category: "backend",
    categoryLabel: "API Architecture",
    iconKey: "fastapi",
    brandColor: "#05998B",
    level: "High Throughput",
    description: "Deterministic REST API design, idempotent endpoints, rate limiting, request validation and OpenAPI documentation.",
    productionContext: "Standardized backend API communication contracts across cross-functional services."
  },

  // Data & Lakehouse
  {
    id: "spark",
    name: "Apache Spark",
    category: "data",
    categoryLabel: "Distributed Compute",
    iconKey: "spark",
    brandColor: "#E25A1C",
    level: "Distributed Engine",
    description: "Distributed data processing engine for in-memory batch computations, Resilient Distributed Datasets (RDDs) and DataFrames.",
    productionContext: "Engineered scalable analytical transformations during Data Engineering internship at Celebal."
  },
  {
    id: "pyspark",
    name: "PySpark",
    category: "data",
    categoryLabel: "Data Engineering",
    iconKey: "python",
    brandColor: "#3776AB",
    level: "Scale ETL",
    description: "Python API for Apache Spark, enabling high-performance parallelized data manipulation and streaming queries.",
    productionContext: "Processed large-scale distributed datasets with automated partition pruning."
  },
  {
    id: "deltalake",
    name: "Delta Lake",
    category: "data",
    categoryLabel: "Lakehouse Storage",
    iconKey: "deltalake",
    brandColor: "#00ADD8",
    level: "ACID Lakehouse",
    description: "Open-source storage layer that brings ACID transactions to Apache Spark and big data lake workloads.",
    productionContext: "Implemented idempotent MERGE operations, schema enforcement and time-travel querying."
  },
  {
    id: "azure_adf",
    name: "Azure Data Factory",
    category: "data",
    categoryLabel: "ETL Orchestration",
    iconKey: "azure",
    brandColor: "#0089D6",
    level: "Cloud Pipelines",
    description: "Cloud-based data integration service for automating and orchestrating complex multi-source ETL/ELT pipelines.",
    productionContext: "Configured scheduled cloud pipeline triggers, monitoring checkpoints and data transfers."
  },

  // Databases & DevOps
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "devops",
    categoryLabel: "Relational Database",
    iconKey: "postgresql",
    brandColor: "#4169E1",
    level: "ACID Persistence",
    description: "Advanced open-source relational database with complex SQL indexing, JSONB querying and transaction guarantees.",
    productionContext: "Relational store for user accounts, transactional state, and event logs."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "devops",
    categoryLabel: "NoSQL Database",
    iconKey: "mongodb",
    brandColor: "#47A248",
    level: "Document Store",
    description: "Scalable NoSQL document database, aggregation frameworks and flexible semi-structured JSON storage.",
    productionContext: "Persistence layer for dynamic LLM chat histories and conversational session states."
  },
  {
    id: "docker",
    name: "Docker",
    category: "devops",
    categoryLabel: "Containerization",
    iconKey: "docker",
    brandColor: "#2496ED",
    level: "Reproducible Builds",
    description: "Containerization platform ensuring deterministic runtime parity across local development and cloud production clusters.",
    productionContext: "Containerized LORCEN-RAG and TeLos microservices for zero-drift deployment."
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "devops",
    categoryLabel: "Version Control",
    iconKey: "git",
    brandColor: "#F05032",
    level: "CI/CD & Hygiene",
    description: "Distributed version control, branch hygiene, pull request reviews, automated GitHub Actions and semantic versioning.",
    productionContext: "Repository maintenance, atomic commit workflows and continuous integration pipelines."
  }
];

export interface KineticKeyword {
  word: string;
  iconKey: string;
  description: string;
  category: string;
}

export const KINETIC_ROW_1: KineticKeyword[] = [
  { word: "PYTHON", iconKey: "python", description: "Primary language for AI modeling, scientific computing & FastAPI services.", category: "AI / ML" },
  { word: "JAVA", iconKey: "java", description: "Enterprise backend services, object-oriented design & JVM concurrency.", category: "BACKEND" },
  { word: "TYPESCRIPT", iconKey: "typescript", description: "Strictly typed scalable applications across frontend and Node ecosystems.", category: "FRONTEND" },
  { word: "REACT", iconKey: "react", description: "Component-driven reactive UI architecture with high performance.", category: "FRONTEND" },
  { word: "PYTORCH", iconKey: "pytorch", description: "Deep learning tensor modeling, backpropagation and custom training loops.", category: "AI / ML" },
  { word: "NODE.JS", iconKey: "nodejs", description: "Event-driven asynchronous microservices and API gateways.", category: "BACKEND" },
  { word: "SPRING BOOT", iconKey: "springboot", description: "Production Java REST APIs, dependency injection and security.", category: "BACKEND" },
];

export const KINETIC_ROW_2: KineticKeyword[] = [
  { word: "FASTAPI", iconKey: "fastapi", description: "Asynchronous Python framework with OpenAPI generation and streaming.", category: "AI / ML" },
  { word: "HUGGING FACE", iconKey: "huggingface", description: "Transformers ecosystem, tokenizer mechanics, and model distribution.", category: "AI / ML" },
  { word: "NEXT.JS", iconKey: "nextjs", description: "Server-side rendering, edge caching and full-stack React framework.", category: "FRONTEND" },
  { word: "TAILWIND CSS", iconKey: "tailwind", description: "Utility-first design systems and micro-responsive layouts.", category: "FRONTEND" },
  { word: "POSTGRESQL", iconKey: "postgresql", description: "ACID-compliant relational database with complex indexing and constraints.", category: "DATABASE" },
  { word: "MONGODB", iconKey: "mongodb", description: "Document-oriented NoSQL storage for semi-structured application data.", category: "DATABASE" },
  { word: "GSAP", iconKey: "gsap", description: "High-performance timeline choreographies and ScrollTrigger animations.", category: "CREATIVE" },
];

export const KINETIC_ROW_3: KineticKeyword[] = [
  { word: "APACHE SPARK", iconKey: "spark", description: "Distributed compute engine for large-scale data transformation.", category: "DATA" },
  { word: "DELTA LAKE", iconKey: "deltalake", description: "ACID lakehouse storage layer enabling idempotent merge operations.", category: "DATA" },
  { word: "AZURE ADF", iconKey: "azure", description: "Cloud ecosystem: Azure Data Factory, cloud storage and compute pipelines.", category: "CLOUD" },
  { word: "DOCKER", iconKey: "docker", description: "Containerization ensuring deterministic cross-environment execution.", category: "DEVOPS" },
  { word: "GIT", iconKey: "git", description: "Distributed version control, collaborative branch hygiene and review workflows.", category: "DEVOPS" },
  { word: "CHROMADB", iconKey: "chroma", description: "Vector embeddings indexing, cosine distance search and AI memory.", category: "AI / ML" },
  { word: "LANGCHAIN", iconKey: "langchain", description: "Orchestration layer for multi-stage retrieval and agentic tool routing.", category: "AI / ML" },
];
