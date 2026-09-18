import { SquareArrowOutUpRight } from 'lucide-react';
import type { Project } from '../data/types';
import ChipList from './ChipList';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

/**
 * The whole card is clickable, but the accessible control is a real <button>
 * whose ::after covers the card — block content inside a <button> is invalid.
 */
export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      className="relative grid cursor-pointer gap-[22px] rounded-[18px] border border-line bg-surface p-[22px]
                 transition hover:-translate-y-[2px] hover:border-sand hover:shadow-card
                 min-[860px]:grid-cols-[minmax(0,1fr)_250px] min-[860px]:gap-[34px] min-[860px]:px-[30px] min-[860px]:py-7
                 [&:has(button:focus-visible)]:shadow-[0_0_0_2px_var(--bg),0_0_0_4px_var(--sand)]"
    >
      <div>
        <div className="mb-[10px] flex items-center gap-[10px] text-[0.84rem] text-muted">
          <span className="rounded-md bg-azure-soft px-[9px] py-[3px] text-[0.74rem] text-azure">{project.tag}</span>
          <span className="font-mono">{project.when}</span>
        </div>

        <h3 className="text-fluid-xl tracking-[-0.03em]">{project.name}</h3>
        <p className="mt-[6px] text-[0.9rem] text-muted">{project.client}</p>
        <p className="mt-[14px] max-w-[62ch] text-[0.95rem] text-ink-2">{project.summary}</p>

        <ChipList items={project.stack.slice(0, 8)} className="mt-[18px]" />

        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
          className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-sand
                     after:absolute after:inset-0 after:rounded-[18px] after:content-[''] focus-visible:shadow-none"
        >
          Read case study<span className="sr-only"> for {project.name}</span>
          <SquareArrowOutUpRight size={15} className="opacity-75" aria-hidden="true" />
        </button>
      </div>

      <dl className="self-start overflow-hidden rounded-xl border border-line-2 bg-line-2 [display:grid] [gap:1px]">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="bg-bg-2 px-4 py-[14px]">
            <dt className="text-[1.32rem] font-bold tracking-[-0.03em] text-ink">{metric.value}</dt>
            <dd className="mt-[2px] text-[0.78rem] leading-snug text-muted">{metric.label}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
