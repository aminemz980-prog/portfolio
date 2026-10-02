import type { Project } from "@/types";
// Add `github` / `demo` URLs when a repository is public: buttons only render when a link exists.
export const projects: Project[] = [
  {
    title: "Self-healing Cypress engine",
    kind: "Final-year project, IP-Label Africa",
    description: "Tooling that keeps end-to-end tests alive when the UI changes, and generates new tests with LLM help.",
    features: ["Detects broken selectors and proposes replacements", "LLM-arbitrated E2E test generation", "Real-time React dashboard for runs"],
    stack: ["Node.js", "Cypress", "React", "LLMs"],
  },
  {
    title: "AI Student Assistant",
    kind: "Personal project",
    description: "A web assistant that answers student questions and helps with exam preparation.",
    features: ["Explains technical concepts", "Answers course questions", "Supports exam revision"],
    stack: ["Python", "FastAPI", "LLMs"],
  },
  {
    title: "AI Impact on Jobs 2030",
    kind: "Machine learning",
    description: "A model that predicts how likely a job is to be affected by automation by 2030.",
    features: ["Benchmarks Linear Regression, Decision Tree and Random Forest", "Data prepared with Pandas", "Models built with Scikit-learn"],
    stack: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    title: "Smartphone e-commerce platform",
    kind: "Internship, Tunisie Telecom",
    description: "Full-stack store for selling smartphones, with payment and customer management.",
    features: ["Product catalogue and cart", "End-to-end payment processing", "User and client management"],
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Flutter Music Application",
    kind: "Personal project",
    description: "A cross-platform app for searching and listening to music.",
    features: ["Audio player", "Music search"],
    stack: ["Flutter", "Dart"],
  },
];
