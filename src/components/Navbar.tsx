import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import type { Theme } from '../hooks/useTheme';

const SECTION_IDS = navItems.map((item) => item.id);

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled();

  // Close the drawer when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 880) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg backdrop-blur-md transition-colors ${
        scrolled ? 'border-b border-line-2' : 'border-b border-transparent'
      }`}
    >
      <div className="wrap flex h-[66px] items-center gap-4">
        <a href="#top" className="mr-auto flex items-center gap-[10px]" aria-label={`${profile.displayName}, home`}>
          <span
            aria-hidden="true"
            className="grid h-[30px] w-[30px] place-items-center rounded-lg border border-line bg-sand-soft text-[0.72rem] font-semibold text-sand"
          >
            MS
          </span>
          <span className="text-[0.97rem] font-semibold tracking-tight">{profile.displayName}</span>
          <span className="ml-[10px] hidden border-l border-line pl-[10px] text-[0.82rem] text-muted lg:inline">
            {profile.title}
          </span>
        </a>

        <nav className="hidden items-center gap-[2px] min-[880px]:flex" aria-label="Sections">
          {navItems.map((item) => {
            const current = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={current ? 'true' : undefined}
                className={`relative rounded-lg px-3 py-2 text-[0.9rem] transition hover:bg-surface-2 hover:text-ink ${
                  current ? 'text-ink' : 'text-ink-2'
                }`}
              >
                {item.label}
                {current && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 bottom-[3px] h-[1.5px] rounded-sm bg-sand"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="icon-btn"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <a className="btn btn-sm hidden sm:inline-flex" href={profile.resumePath} download>
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="icon-btn min-[880px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-drawer" className="wrap border-t border-line-2 bg-bg min-[880px]:hidden">
          <ul className="py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line-2 px-1 py-[13px] text-[1.02rem] last:border-b-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
