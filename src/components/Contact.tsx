import { Mail, MapPin, Phone, User } from 'lucide-react';
import { profile } from '../data/portfolio';

const details = [
  { icon: User, label: 'Name', value: profile.name, href: undefined },
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad" aria-labelledby="contact-heading">
      <div className="wrap">
        <div className="grid gap-9 rounded-[20px] border border-line bg-surface p-[30px] min-[880px]:grid-cols-[minmax(0,1fr)_minmax(0,420px)] min-[880px]:gap-14 min-[880px]:p-11">
          <div>
            <h2 id="contact-heading" className="text-fluid-2xl">
              Open to Full Stack &amp; React.js roles
            </h2>
            <p className="mt-[14px] max-w-[48ch] text-ink-2">
              Available for Full Stack Developer, React.js Developer and Senior Frontend positions in Hyderabad or
              remote. The fastest way to reach me is email or phone.
            </p>

            <div className="mt-[26px] flex flex-wrap gap-3">
              <a
                className="btn btn-primary"
                href={`mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(profile.displayName)}`}
              >
                Email me
              </a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="btn btn-ghost" href={profile.resumePath} download>
                Download resume
              </a>
            </div>
          </div>

          <dl className="grid gap-px self-start overflow-hidden rounded-[14px] border border-line-2 bg-line-2">
            {details.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <Icon size={18} className="shrink-0 text-sand" aria-hidden="true" />
                  <div>
                    <dt className="mb-[2px] text-[0.74rem] text-muted">{label}</dt>
                    <dd className="break-words text-[0.92rem]">{value}</dd>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href} className="flex items-center gap-[14px] bg-bg-2 px-[18px] py-[15px] transition hover:bg-surface-2">
                  {body}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-[14px] bg-bg-2 px-[18px] py-[15px]">
                  {body}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
