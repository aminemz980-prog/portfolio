import { activities } from "@/data/extras";
import { Section } from "@/components/ui/Section";
export function Activities() {
  if (activities.length === 0) return null;
  return (
    <Section id="activities" title="Activities">
      <ul className="grid gap-6 sm:grid-cols-2">
        {activities.map((a) => (
          <li key={a.title} className="rounded-xl border border-line bg-surface p-6">
            {a.period && <p className="text-sm text-muted">{a.period}</p>}
            <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
            <p className="mt-2 text-muted">{a.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
