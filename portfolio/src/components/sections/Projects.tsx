import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { GitHubIcon } from "@/components/ui/BrandIcons";
export function Projects() {
  const link = "inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline";
  return (
    <Section id="projects" title="Projects" intro="Professional work and personal builds.">
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p, idx) => (
          <li key={p.title} className={`flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent ${idx === 0 ? "md:col-span-2" : ""}`}>
            <p className="text-sm text-muted">{p.kind}</p>
            <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-muted">{p.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm marker:text-muted">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <ul className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <Tag key={s}>{s}</Tag>)}</ul>
            {(p.github || p.demo) && (
              <div className="mt-5 flex gap-5">
                {p.github && <a className={link} href={p.github} target="_blank" rel="noopener noreferrer"><GitHubIcon size={16} /> Source code</a>}
                {p.demo && <a className={link} href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden /> Live demo</a>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
