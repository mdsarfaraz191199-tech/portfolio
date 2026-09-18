import { useEffect, useState } from 'react';

/** Highlights the nav link for whichever section is centred in the viewport. */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
