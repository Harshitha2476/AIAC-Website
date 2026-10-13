/**
 * AIAC Research Centre - Updates & Events Data Store
 * Dated timeline of real lab milestones, technical workshops, and engineering updates.
 * Structured so administrators can seamlessly append or modify entries.
 */

const UPDATE_CATEGORIES = [
  "All",
  "Research Update",
  "Engineering Update",
  "Workshop",
  "Event",
  "Announcement",
  "Milestone"
];

const UPDATES_DATA = [
  {
    id: "update-2026-07",
    date: "April 2026",
    category: "Workshop",
    title: "Technical Seminar: INT8 Quantization Workflows on Embedded Jetson",
    description: "Hands-on engineering workshop led by Pod 02 on TensorRT model compilation, calibration dataset selection, and latency profiling on physical embedded boards.",
    podId: "pod-02",
    tag: "Workshop"
  },
  {
    id: "update-2026-06",
    date: "March 2026",
    category: "Milestone",
    title: "Milestone Reached: Pod 03 Achieves 60% Experimentation Stage",
    description: "Multi-agent consensus protocol tests completed across 150 automated pull requests with verifiable Pydantic schema validation.",
    podId: "pod-03",
    tag: "Milestone"
  },
  {
    id: "update-2026-05",
    date: "March 2026",
    category: "Engineering Update",
    title: "Lab MLOps Testbed: Automated GPU Telemetry & VRAM Tracking Deployed",
    description: "Systems & Infrastructure Council integrated Prometheus scrapers and GitHub Actions runners to automatically record VRAM limits on every test run.",
    podId: "pod-06",
    tag: "Engineering"
  },
  {
    id: "update-2026-04",
    date: "February 2026",
    category: "Research Update",
    title: "AIAC-TR-2026-01 Published: Kannada Morphology Baseline",
    description: "Pod 01 completed initial byte-pair tokenization benchmarks on regional scans, releasing standardized pre-processing scripts under Apache-2.0.",
    podId: "pod-01",
    tag: "Research"
  },
  {
    id: "update-2026-03",
    date: "February 2026",
    category: "Workshop",
    title: "Bootcamp Session: Deterministic Tool Calling with LangGraph",
    description: "Technical briefing covering agent graph boundaries, state transitions, human-in-the-loop validation, and unit testing for LLM tool executors.",
    podId: "pod-03",
    tag: "Workshop"
  },
  {
    id: "update-2026-02",
    date: "January 2026",
    category: "Announcement",
    title: "Cross-Pod Governance Councils Formed",
    description: "Ratified four cross-pod student councils (Systems & Infrastructure, ML Rigor, Research Ethics, and Documentation) to enforce engineering standards.",
    podId: null,
    tag: "Governance"
  },
  {
    id: "update-2026-01",
    date: "January 2026",
    category: "Event",
    title: "AIAC Lab Induction & Cohort 2026 Screening Task",
    description: "Admissions opened for early-semester undergraduate engineers. Active induction begins through the mandatory 48-hour builder evaluation.",
    podId: null,
    tag: "Admissions"
  }
];

function getAllUpdates() {
  return UPDATES_DATA;
}

function getUpdatesByCategory(category) {
  if (!category || category === "All") return UPDATES_DATA;
  return UPDATES_DATA.filter(u => u.category.toLowerCase() === category.toLowerCase());
}
