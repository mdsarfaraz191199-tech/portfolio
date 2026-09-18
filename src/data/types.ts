import type { LucideIcon } from 'lucide-react';

export interface SkillGroup {
  id: string;
  name: string;
  icon: LucideIcon;
  items: string[];
  /** Items rendered with extra emphasis. */
  primary?: string[];
}

export interface ExperienceProject {
  name: string;
  when: string;
  /** Wrap a phrase in **double asterisks** to emphasise it. */
  bullets: string[];
}

export interface Experience {
  company: string;
  role: string;
  when: string;
  where: string;
  projects: ExperienceProject[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  tag: string;
  when: string;
  role: string;
  summary: string;
  stack: string[];
  metrics: Metric[];
  overview: string;
  myRole: string;
  features: string[];
  challenges: string[];
  implementation: string[];
  results: string[];
}

export interface Highlight {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface Profile {
  name: string;
  displayName: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePath: string;
}

export interface NavItem {
  id: string;
  label: string;
}
