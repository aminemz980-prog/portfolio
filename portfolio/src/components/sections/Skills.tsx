import { skills } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
export function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Tools I have used in internships and projects.">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div key={g.title}>
            <h3 className="mb-3 text-lg font-semibold">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">{g.items.map((i) => <Tag key={i}>{i}</Tag>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
