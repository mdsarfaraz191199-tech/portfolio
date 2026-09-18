import { aboutFacts, aboutParagraphs } from '../data/portfolio';
import Emphasis from './Emphasis';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 min-[900px]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] min-[900px]:gap-16">
        <div className="space-y-[18px]">
          {aboutParagraphs.map((para) => (
            <p key={para.slice(0, 40)} className="max-w-[66ch] text-ink-2">
              <Emphasis text={para} />
            </p>
          ))}
        </div>

        <dl className="self-start overflow-hidden rounded-[14px] border border-line">
          {aboutFacts.map((fact) => (
            <div
              key={fact.term}
              className="flex justify-between gap-4 border-b border-line-2 px-4 py-[14px] text-[0.9rem] last:border-b-0"
            >
              <dt className="text-muted">{fact.term}</dt>
              <dd className="text-right font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
