# Md Sarfaraz Nasirjah — Portfolio

Personal portfolio site. React 18 + TypeScript + Vite + Tailwind CSS + lucide-react.
Dark-first theme with a persisted light mode, no backend, no build-time data fetching.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # preview the production build
```

Node 18 or newer.

## Structure

```
public/resume/Md_Sarfaraz_Nasirjah_Resume_FullStack.pdf   served at /resume/...
src/
  App.tsx                   composes sections, owns the open-project state
  index.css                 design tokens (light + .dark) and shared primitives
  data/
    types.ts                typed content model
    portfolio.ts            ALL site content lives here
  hooks/
    useTheme.ts             dark-first theme, persisted in localStorage
    useActiveSection.ts     IntersectionObserver nav highlighting
    useScrolled.ts          nav border on scroll
  components/
    Navbar.tsx  Hero.tsx  HeroMap.tsx  About.tsx  Skills.tsx  Experience.tsx
    ProjectCard.tsx  Projects.tsx  ProjectModal.tsx  TechnicalHighlights.tsx
    Contact.tsx  Footer.tsx
    Section.tsx  BulletList.tsx  ChipList.tsx  Emphasis.tsx   (shared primitives)
```

Content and presentation are separate: to change what the site says, edit
`src/data/portfolio.ts` only. Bullet strings support `**bold**` via `Emphasis`.

## Before you publish

1. **Links** — GitHub and LinkedIn in `src/data/portfolio.ts` are both set to your real profiles.
2. **Case-study placeholders** — each project modal ends with a dashed note in
   `ProjectModal.tsx`. Fill it in or delete the block.
3. **Canonical URL** — `index.html` has `<link rel="canonical" href="https://your-domain.com/">`.
4. **Resume** — replace the PDF in `public/resume/` whenever you update it, keeping the filename
   (or update `profile.resumePath`).
5. **Social preview image** — optional: add `public/og.png` and an
   `<meta property="og:image" content="/og.png">` tag so shared links show a card.

## Deploy

**Vercel or Netlify (recommended).** Push to GitHub, import the repo, accept the detected
settings (build `npm run build`, output `dist`). Both give you a free HTTPS domain.

**GitHub Pages.** Set `base: '/<repo-name>/'` in `vite.config.ts`, then publish `dist/`
(for example with the `gh-pages` package or a Pages action).

## Accessibility and performance notes

- Semantic landmarks, skip link, visible focus rings, `aria-current` on the active nav link.
- Modal: `role="dialog"`, `aria-modal`, Escape to close, focus trapped inside and returned
  to the card that opened it, background scroll locked.
- `prefers-reduced-motion` disables the hero plotting animation and all transitions.
- No images, no icon font, no analytics. Fonts load from Google Fonts with `display=swap`;
  self-host them if you want zero third-party requests.
