import Image from "next/image";
import { Download, Mail, FolderOpen } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { HealingDemo } from "./HealingDemo";

export function Hero() {
  const social = "grid h-10 w-10 place-items-center rounded-lg border border-line text-ink transition-colors hover:border-accent hover:text-accent";
  return (
    <section id="top" aria-label="Introduction" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="mb-4 text-muted">{profile.title}</p>
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-xl text-lg text-muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="primary" href="#projects"><FolderOpen size={16} aria-hidden /> View projects</Button>
          <Button href={profile.cv} download><Download size={16} aria-hidden /> Download CV</Button>
          <Button href="#contact"><Mail size={16} aria-hidden /> Contact me</Button>
        </div>
        <div className="mt-8 flex gap-3">
          <a className={social} href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)"><GitHubIcon /></a>
          <a className={social} href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)"><LinkedInIcon /></a>
          <a className={social} href={`mailto:${profile.email}`} aria-label="Send an email"><Mail size={18} aria-hidden /></a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <div className="relative">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={800}
            height={1000}
            priority
            sizes="(min-width: 1024px) 384px, 90vw"
            className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
          />
          <div className="absolute -bottom-8 -left-4 right-6 sm:-left-10"><HealingDemo /></div>
        </div>
        <div className="h-10" aria-hidden />
      </div>
    </section>
  );
}
