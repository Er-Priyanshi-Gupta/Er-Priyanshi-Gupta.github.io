import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileDown, Code2 } from 'lucide-react';
import { VoiceNavigation } from './VoiceNavigation';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isDark,
  onToggleTheme,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Scroll Progress Bar */}
      <div
        className="h-[2.5px] bg-gradient-to-r from-accentViolet via-accentPink to-accentLavender transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <nav
        className={`w-full px-4 sm:px-8 py-3.5 transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none"
            aria-label="Priyanshi Gupta Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accentViolet via-purple-600 to-accentPink flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-slate-100 text-base group-hover:text-accentLavender transition-colors">
                Priyanshi<span className="text-accentViolet">.dev</span>
              </span>
              <span className="hidden sm:block text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                AI/ML & Software Eng
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-accentLavender font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-accentViolet to-accentPink rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Tools: Voice Nav, Theme Switcher, Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Voice Navigation Integration */}
            <VoiceNavigation onNavigate={handleLinkClick} onToggleTheme={onToggleTheme} />

            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-accentViolet/50 transition-colors"
              aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-accentViolet" />}
            </button>

            {/* Resume Download CTA */}
            <a
              href={portfolioData.personalInfo.resumeUrl}
              download="Priyanshi_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-accentViolet/90 to-purple-600 hover:from-accentViolet hover:to-accentPink text-white text-xs font-semibold shadow-md shadow-purple-900/40 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl glass-panel text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-panel border border-accentViolet/30 animate-fade-in shadow-2xl">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-accentViolet/20 text-accentLavender font-semibold border border-accentViolet/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={portfolioData.personalInfo.resumeUrl}
                download="Priyanshi_Gupta_Resume.pdf"
                className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-accentViolet to-accentPink text-white text-sm font-semibold shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

