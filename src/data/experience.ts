export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  highlights: string[];
  technologies: string[];
  keyMetric: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "celebal",
    number: "01",
    role: "DATA ENGINEERING INTERN",
    company: "Celebal Technologies, India",
    location: "Remote",
    period: "Jun 2026 — Aug 2026",
    keyMetric: "50K+ Records • 40+ SQL Tests • Zero Duplicate Merges",
    highlights: [
      "Built distributed data workflows using Azure Data Factory, PySpark, Spark internals, and Delta Lake.",
      "Processed and aggregated 50K+ e-commerce records across a distributed cluster, rebuilding the pipeline with Delta Lake merge operations to support incremental updates.",
      "Set up Azure Data Factory pipelines to move and validate incoming files (Get Metadata, Copy Data) before lakehouse ingestion.",
      "Wrote 40+ SQL validation queries for cohort analysis against ShopEase and Superstore datasets.",
      "Capstone: Built an order analytics system from scratch, generating intentionally dirty datasets, writing 16 SQL queries, and testing edge cases including corrupted foreign keys and future-dated orders."
    ],
    technologies: ["Azure Data Factory", "PySpark", "Apache Spark", "Delta Lake", "SQL Analytics", "SQLite"]
  },
  {
    id: "elevate-labs",
    number: "02",
    role: "JAVA DEVELOPER INTERN",
    company: "Elevate Labs, India",
    location: "Remote",
    period: "Jun 2025 — Jul 2025",
    badge: "Ranked #1 • Best Performer Award",
    keyMetric: "Cohort Rank #1 • 100% Production Spec Adherence",
    highlights: [
      "Built and tested production-ready REST APIs in Spring Boot for live product features.",
      "Engineered persistence mappings and query optimizations using Hibernate ORM across PostgreSQL and MySQL backends.",
      "Collaborated in cross-functional agile sprint ceremonies, identifying edge-case regressions and reviewing pull requests.",
      "Ranked #1 in the internship cohort and received the official Best Performer Award for engineering excellence."
    ],
    technologies: ["Java", "Spring Boot", "Hibernate ORM", "PostgreSQL", "MySQL", "REST APIs"]
  }
];
