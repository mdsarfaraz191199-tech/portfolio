import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
const STORAGE_KEY = 'msn-theme';

function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

/** Dark-first theme with a persisted user override. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0C1014' : '#F3F5F7');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable — the in-memory theme still applies */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return { theme, toggle };
}
