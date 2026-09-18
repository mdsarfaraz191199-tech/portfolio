import { useState } from 'react';
import { skillGroups } from '../data/portfolio';
import ChipList from './ChipList';
import Section from './Section';

export default function Skills() {
  const [filter, setFilter] = useState<string>('all');
  const visible = filter === 'all' ? skillGroups : skillGroups.filter((g) => g.id === filter);

  return (
    <Section id="skills" title="Technical skills" lede="Filter by area, or view everything at once.">
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter skills by area">
        {[{ id: 'all', name: 'All' }, ...skillGroups].map((group) => {
          const pressed = filter === group.id;
          return (
            <button
              key={group.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(group.id)}
              className={`rounded-full border px-[14px] py-2 text-[0.85rem] transition ${
                pressed
                  ? 'border-sand bg-sand font-semibold text-sand-ink'
                  : 'border-line text-ink-2 hover:border-sand hover:text-ink'
              }`}
            >
              {group.name}
            </button>
          );
        })}
      </div>

      <div className="grid gap-[14px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
        {visible.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.id} className="rounded-[14px] border border-line bg-surface p-[18px]">
              <h3 className="mb-[14px] flex items-center gap-[9px] text-[0.95rem]">
                <Icon size={17} className="text-sand" aria-hidden="true" />
                {group.name}
              </h3>
              <ChipList items={group.items} primary={group.primary} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}
