import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { heroStats, profile } from '../data/portfolio';
import HeroStack from './HeroStack';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" aria-labelledby="hero-heading">
      <div className="wrap grid items-center gap-[52px] min-[980px]:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] min-[980px]:gap-12">
        <div>
          <p className="mb-5 flex items-center gap-3 text-[0.84rem] text-muted">
            <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-sand ring-4 ring-sand-soft" />
            {profile.displayName} — {profile.location}
          </p>

          <h1 id="hero-heading" className="text-fluid-3xl font-bold leading-[1.02] tracking-[-0.04em]">
            <span className="block">{profile.title}</span>
            <span className="block font-medium text-ink-2">{profile.subtitle}</span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-fluid-lg leading-relaxed text-ink-2">
            <strong className="font-semibold text-ink">5 years</strong> building scalable, responsive enterprise web
            applications — React.js, TypeScript, Node.js and MongoDB behind role-based dashboards, GIS mapping, REST
            APIs and real-time systems for banking and state government platforms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn" href={profile.resumePath} download>
              <Download size={17} aria-hidden="true" />
              Download resume
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-[10px] border-t border-line-2 pt-6 text-[0.84rem] text-muted">
            <a
              className="inline-flex max-w-full items-center gap-[7px] break-words text-ink-2 transition hover:text-sand"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="inline-flex max-w-full items-center gap-[7px] break-words text-ink-2 transition hover:text-sand"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              className="inline-flex max-w-full items-center gap-[7px] break-words text-ink-2 transition hover:text-sand"
              href={`mailto:${profile.email}`}
            >
              <Mail size={16} aria-hidden="true" />
              {profile.email}
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="rounded-2xl border border-line bg-gradient-to-b from-surface to-bg-2 p-[14px] shadow-card"
        >
          <div className="flex items-center justify-between px-1 pb-3 font-mono text-[0.72rem] text-muted">
            <span>core_stack</span>
            <b className="font-medium text-ink-2">live</b>
          </div>
          <HeroStack />
          <dl className="mt-[14px] grid grid-cols-3 gap-px overflow-hidden rounded-[10px] border border-line-2 bg-line-2">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-surface px-[10px] py-3">
                <dt className="mb-[3px] text-[0.7rem] text-muted">{stat.label}</dt>
                <dd className="text-[1.06rem] font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
