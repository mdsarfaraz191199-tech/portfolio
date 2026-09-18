import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../data/types';
import BulletList from './BulletList';
import ChipList from './ChipList';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-3 text-[0.8rem] font-semibold tracking-wide text-sand">{title}</h3>
      {children}
    </section>
  );
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  // Remember the trigger, lock scroll, move focus in — and undo all of it on close.
  useEffect(() => {
    if (!project) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      openerRef.current?.focus();
    };
  }, [project]);

  // Escape to close, Tab cycles inside the panel.
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeEl = document.activeElement;

      if (event.shiftKey && (activeEl === first || activeEl === panelRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] md:px-5 md:py-[5vh]" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-[rgba(6,10,14,0.72)] backdrop-blur-[3px]" onClick={onClose} />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative mx-auto h-full max-w-[860px] animate-rise overflow-y-auto border-x border-line bg-bg-2
                   md:h-[90vh] md:rounded-[18px] md:border"
      >
        <div className="sticky top-0 z-[2] flex items-start gap-4 border-b border-line-2 bg-bg-2/95 px-6 py-6 backdrop-blur-md md:px-8">
          <div>
            <h2 id="modal-title" className="text-fluid-xl">
              {project.name} — {project.client}
            </h2>
            <p className="mt-[5px] text-[0.87rem] text-muted">
              {project.role} · {project.when}
            </p>
          </div>
          <button type="button" onClick={onClose} className="icon-btn ml-auto" aria-label="Close case study">
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-[30px] px-6 pb-11 pt-7 md:px-8 md:pb-[52px]">
          <Block title="Overview">
            <p className="max-w-[70ch] text-ink-2">{project.overview}</p>
          </Block>

          <Block title="My role">
            <p className="max-w-[70ch] text-ink-2">{project.myRole}</p>
          </Block>

          <Block title="Key features">
            <BulletList items={project.features} />
          </Block>

          <Block title="Technology stack">
            <ChipList items={project.stack} allPrimary />
          </Block>

          <div className="grid gap-[26px] min-[680px]:grid-cols-2">
            <Block title="Technical challenges">
              <BulletList items={project.challenges} />
            </Block>
            <Block title="Implementation">
              <BulletList items={project.implementation} />
            </Block>
          </div>

          <Block title="Results">
            <BulletList items={project.results} />
            {/* Optional: replace or delete this note once you add your own detail. */}
            {/* <p className="mt-[14px] rounded-[10px] border border-dashed border-line bg-surface px-[14px] py-3 text-[0.85rem] text-muted">
              Placeholder — add your own detail here before sharing (this text is not taken from your resume).
            </p> */}
          </Block>
        </div>
      </div>
    </div>
  );
}
