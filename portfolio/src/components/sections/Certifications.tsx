import { certifications } from "@/data/extras";
import { Section } from "@/components/ui/Section";
export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.title} className="rounded-xl border border-line bg-surface p-6">
            <p className="text-sm text-muted">{c.year}</p>
            <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
            <p className="text-muted">{c.issuer}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
