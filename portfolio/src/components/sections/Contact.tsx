import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { ContactForm } from "./ContactForm";
export function Contact() {
  const row = "flex items-center gap-3 hover:text-accent";
  return (
    <Section id="contact" title="Contact" intro="Open to a first full-time role in full-stack, AI or QA automation.">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-4">
          <li><a className={row} href={`mailto:${profile.email}`}><Mail size={18} aria-hidden /> {profile.email}</a></li>
          <li><a className={row} href={profile.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /> GitHub</a></li>
          <li><a className={row} href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon /> LinkedIn</a></li>
        </ul>
        <ContactForm />
      </div>
    </Section>
  );
}
