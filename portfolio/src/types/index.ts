export type SkillGroup = { title: string; items: string[] };
export type Experience = {
  period: string; role: string; company: string; summary: string; highlights: string[]; stack: string[];
};
export type Education = { period: string; title: string; place: string };
export type Project = {
  title: string; kind: string; description: string; features: string[]; stack: string[];
  github?: string; demo?: string;
};
export type Certification = { title: string; issuer: string; year: string };
export type Activity = { title: string; period?: string; description: string };
