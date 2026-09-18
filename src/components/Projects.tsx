import { projects } from '../data/portfolio';
import type { Project } from '../data/types';
import ProjectCard from './ProjectCard';
import Section from './Section';

export default function Projects({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <Section id="projects" title="Featured projects" lede="Select a project for the full case study.">
      <div className="grid gap-[18px]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>
    </Section>
  );
}
