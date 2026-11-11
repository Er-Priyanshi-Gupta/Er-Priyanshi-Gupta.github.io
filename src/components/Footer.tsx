import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Sparkles, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accentViolet to-accentPink flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base">
                Priyanshi Gupta
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono max-w-sm">
              Computer Science Engineer • AI/ML &amp; Full-Stack Architect
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              About
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('skills')} className="hover:text-white transition-colors">
              Skills
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
              Projects
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('experience')} className="hover:text-white transition-colors">
              Experience
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('achievements')} className="hover:text-white transition-colors">
              Achievements
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Right Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-accentViolet transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-amber-400 transition-colors"
              aria-label="LeetCode"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-accentViolet/20 border border-accentViolet/40 text-accentLavender hover:bg-accentViolet/30 hover:text-white transition-all ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Priyanshi Gupta. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono">
            <span>Built with precision &amp; algorithmic passion</span>
            <Heart className="w-3 h-3 text-accentPink inline mx-1 fill-accentPink" />
          </div>
        </div>

      </div>
    </footer>
  );
};
