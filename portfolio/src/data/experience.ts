import type { Experience } from "@/types";
export const experience: Experience[] = [
  {
    period: "Feb 2026 – May 2026",
    role: "Final-year intern, AI-assisted QA automation",
    company: "IP-Label Africa (ITRS Group)",
    summary: "Final-year project carried out inside the QA team.",
    highlights: [
      "Built a self-healing engine in JavaScript/Node.js that detects broken Cypress selectors and suggests corrected replacements, cutting manual test maintenance.",
      "Designed a Cypress E2E test generation pipeline using LLM arbitration to speed up writing new test cases.",
      "Developed a React dashboard to follow test generation runs and results in real time.",
    ],
    stack: ["Node.js", "Cypress", "React", "LLMs"],
  },
  {
    period: "2025",
    role: "Web development intern",
    company: "Tunisie Telecom",
    summary: "Smartphone e-commerce application.",
    highlights: [
      "Built a full-stack platform to sell smartphones, with a product catalogue and shopping cart.",
      "Implemented end-to-end payment processing and user/client management backed by MongoDB.",
    ],
    stack: ["React", "Node.js", "MongoDB"],
  },
];
