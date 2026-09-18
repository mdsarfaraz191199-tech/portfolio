import { useCallback, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechnicalHighlights from './components/TechnicalHighlights';
import type { Project } from './data/types';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setActiveProject(null), []);

  return (
    <>
      <a
        href="#main"
        className="absolute left-3 top-[-60px] z-[999] rounded-lg bg-sand px-4 py-[10px] font-semibold text-sand-ink transition-[top] focus:top-3"
      >
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <span id="top" />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects onOpen={setActiveProject} />
        <TechnicalHighlights />
        <Contact />
      </main>

      <Footer />

      <ProjectModal project={activeProject} onClose={closeProject} />
    </>
  );
}
