import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './data/portfolioData';

export const App: React.FC = () => {
  // Theme state: dark by default, persisted in localStorage
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('pg_portfolio_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default dark theme
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSkillFilter, setActiveSkillFilter] = useState<{ id: string; name: string } | null>(null);

  // Sync theme class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('pg_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('pg_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Scroll to section with smooth behavior
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When a user clicks a skill card in Skills section
  const handleSkillClick = (skillId: string, skillName: string) => {
    setActiveSkillFilter({ id: skillId, name: skillName });
    // Smoothly scroll down to projects section
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-midnight text-slate-100 flex flex-col relative selection:bg-accentViolet selection:text-white">
      {/* Sticky Header with Voice Navigation and Theme Controls */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero isDark={isDark} onNavigate={handleNavigate} />
        <About />
        <Skills onSkillClick={handleSkillClick} />
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          activeSkillFilter={activeSkillFilter}
          onClearSkillFilter={() => setActiveSkillFilter(null)}
        />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modal for Deep Project Inspection */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
export default App;

