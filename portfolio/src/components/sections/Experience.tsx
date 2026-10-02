import { experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-12 border-l border-line pl-8">
        {experience.map((e) => (
          <li key={e.role + e.period} className="relative">
            <span aria-hidden className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm text-muted">{e.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{e.role}</h3>
            <p className="font-medium text-accent">{e.company}</p>
            <p className="mt-2 text-muted">{e.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-muted">{e.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            <ul className="mt-4 flex flex-wrap gap-2">{e.stack.map((s) => <Tag key={s}>{s}</Tag>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
