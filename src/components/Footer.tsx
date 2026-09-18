import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-line-2 pb-10 pt-[26px]">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[0.83rem] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.displayName} — {profile.title}, {profile.subtitle}
        </span>
        <a href="#top" className="transition hover:text-sand">
          Back to top
        </a>
      </div>
    </footer>
  );
}
