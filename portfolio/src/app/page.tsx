import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Activities } from "@/components/sections/Activities";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.title,
    email: profile.email, url: profile.siteUrl, sameAs: [profile.github, profile.linkedin],
  };
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
