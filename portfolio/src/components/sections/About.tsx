import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="max-w-prose space-y-4 text-lg leading-relaxed">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="h-fit space-y-4 rounded-xl border border-line bg-surface p-6 text-sm">
          <div><dt className="text-muted">Based in</dt><dd className="mt-1 font-medium">{profile.location}</dd></div>
          <div><dt className="text-muted">Languages</dt><dd className="mt-1 font-medium">{profile.languages.join(", ")}</dd></div>
          <div><dt className="text-muted">Focus</dt><dd className="mt-1 font-medium">{profile.tagline}</dd></div>
        </dl>
      </div>
    </Section>
  );
}
