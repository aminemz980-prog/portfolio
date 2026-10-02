import { education } from "@/data/education";
import { Section } from "@/components/ui/Section";
export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <li key={e.title} className="rounded-xl border border-line bg-surface p-6">
            <p className="text-sm text-muted">{e.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
            <p className="mt-1 text-muted">{e.place}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
