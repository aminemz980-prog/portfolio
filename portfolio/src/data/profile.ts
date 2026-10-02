export const profile = {
  name: "Mohamed Amine Marzouki",
  shortName: "Amin",
  title: "Software Engineer",
  tagline: "AI-assisted QA automation and full-stack development",
  intro:
    "Software Engineering graduate from ISI Kef. I build full-stack applications and AI tooling, and I care about software that keeps working after it ships.",
  about: [
    "I recently graduated in Software Engineering from the Higher Institute of Computer Science of Kef, with a solid theoretical base that I have been turning into hands-on engineering through internships and personal projects.",
    "My final-year internship at IP-Label Africa (ITRS Group) put me in a QA team, where I built tooling that repairs broken Cypress tests and generates new ones with LLMs. That is where my interests in AI, automation and quality came together.",
    "I am looking for a first role where I can keep growing in full-stack development and AI-driven quality engineering.",
  ],
  email: "aminemz980@gmail.com",
  location: "Tunisia",
  languages: ["French", "English"],
  github: "https://github.com/aminemz980-prog",
  linkedin: "https://www.linkedin.com/in/mohamed-amine-marzougui-2130aa339",
  cv: "/cv-amin-marzouki.pdf",
  photo: "/profile.webp",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
] as const;
