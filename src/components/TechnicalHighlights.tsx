import { highlights } from '../data/portfolio';
import Section from './Section';

export default function TechnicalHighlights() {
  return (
    <Section
      id="highlights"
      title="Engineering highlights"
      lede="The problems I have solved, rather than a list of logos."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line-2 bg-line-2 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ icon: Icon, title, body }) => (
          <article key={title} className="bg-surface p-[22px] transition-colors hover:bg-surface-2">
            <h3 className="mb-[9px] flex items-center gap-[10px] text-[0.98rem]">
              <Icon size={18} className="shrink-0 text-sand" aria-hidden="true" />
              {title}
            </h3>
            <p className="text-[0.88rem] leading-relaxed text-muted">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
