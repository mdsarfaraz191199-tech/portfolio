/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        'line-2': 'var(--line-2)',
        sand: 'var(--sand)',
        'sand-ink': 'var(--sand-ink)',
        'sand-soft': 'var(--sand-soft)',
        azure: 'var(--azure)',
        'azure-soft': 'var(--azure-soft)',
      },
      fontFamily: {
        sans: ['Archivo', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        fluid: 'clamp(.95rem, .92rem + .16vw, 1.02rem)',
        'fluid-lg': 'clamp(1.1rem, 1.04rem + .3vw, 1.24rem)',
        'fluid-xl': 'clamp(1.35rem, 1.24rem + .55vw, 1.72rem)',
        'fluid-2xl': 'clamp(1.75rem, 1.5rem + 1.1vw, 2.5rem)',
        'fluid-3xl': 'clamp(2.1rem, 1.55rem + 2.6vw, 4rem)',
      },
      maxWidth: { content: '1120px' },
      boxShadow: { card: 'var(--shadow)' },
      keyframes: {
        plot: { from: { opacity: '0', transform: 'scale(.4)' }, to: { opacity: '1', transform: 'scale(1)' } },
        rise: { from: { opacity: '0', transform: 'translateY(14px)' }, to: { opacity: '1', transform: 'none' } },
        draw: { to: { strokeDashoffset: '0' } },
      },
      animation: {
        plot: 'plot .5s cubic-bezier(.2,.8,.3,1) forwards',
        rise: 'rise .24s cubic-bezier(.2,.8,.3,1)',
        draw: 'draw 1.1s cubic-bezier(.3,.7,.2,1) forwards',
      },
    },
  },
  plugins: [],
};
