import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

/** Shared section shell: consistent padding, heading and optional lede. */
export default function Section({ id, title, lede, children }: SectionProps) {
  return (
    <section id={id} className="section-pad" aria-labelledby={`${id}-heading`}>
      <div className="wrap">
        <header className="mb-10 flex flex-wrap items-baseline gap-x-5 gap-y-2">
          <h2 id={`${id}-heading`} className="text-fluid-2xl">
            {title}
          </h2>
          {lede && <p className="max-w-[52ch] text-muted">{lede}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
