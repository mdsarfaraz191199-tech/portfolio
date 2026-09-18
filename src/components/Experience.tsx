import { experience } from '../data/portfolio';
import BulletList from './BulletList';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative pl-[26px] before:absolute before:bottom-[10px] before:left-[5px] before:top-[10px] before:w-px before:bg-line before:content-['']">
        {experience.map((job, index) => (
          <article key={job.company} className={index > 0 ? 'mt-10' : ''}>
            <span
              aria-hidden="true"
              className="absolute left-0 mt-[7px] h-[11px] w-[11px] rounded-full border-2 border-sand bg-bg"
            />
            <div className="flex flex-wrap items-baseline gap-x-[14px] gap-y-1">
              <h3 className="text-fluid-lg font-semibold text-sand">{job.company}</h3>
              <span className="ml-auto whitespace-nowrap font-mono text-[0.84rem] text-muted">{job.when}</span>
            </div>
            <p className="mt-[2px] text-[0.84rem] text-muted">
              {job.role} · {job.where}
            </p>

            {job.projects.map((project) => (
              <div key={project.name} className="mt-5 border-l border-line-2 pl-5">
                <h4 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[0.97rem]">
                  {project.name}
                  <span className="font-mono text-[0.84rem] font-normal text-muted">{project.when}</span>
                </h4>
                <div className="mt-3">
                  <BulletList items={project.bullets} />
                </div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </Section>
  );
}
