import React from 'react';
import { ArrowRight, FileDown, Mail, ExternalLink, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ThreeCanvas } from './ThreeCanvas';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  isDark: boolean;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onNavigate }) => {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accentViolet/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accentPink/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-accentViolet/30 text-xs font-mono text-accentLavender mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles &amp; Internships</span>
            </div>

            {/* Greeting & Name */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-3">
              Hi, I'm <span className="bg-gradient-to-r from-accentViolet via-accentPink to-accentLavender bg-clip-text text-transparent">{personalInfo.fullName}</span>
            </h1>

            {/* Designation / Role */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-slate-300 mb-5">
              <Terminal className="w-5 h-5 text-accentViolet" />
              <span>{personalInfo.roleTitles.join(" • ")}</span>
            </div>

            {/* Headline & Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.headline}. {personalInfo.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-accentViolet to-purple-600 hover:from-accentViolet hover:to-accentPink text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Priyanshi_Gupta_Resume.pdf"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl glass-panel hover:bg-white/10 border border-accentViolet/30 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FileDown className="w-4 h-4 text-accentLavender" />
                <span>Resume PDF</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl glass-panel hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Mail className="w-4 h-4 text-accentPink" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social & Coding Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 w-full">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400 mr-2">Profiles:</span>
              
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs text-slate-300 hover:text-white hover:border-accentViolet/50 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-accentLavender" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs text-slate-300 hover:text-white hover:border-accentViolet/50 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs text-amber-300 hover:text-white hover:border-amber-400/50 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>LeetCode (Top 9.6%)</span>
              </a>

              <a
                href={personalInfo.socialLinks.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs text-emerald-300 hover:text-white hover:border-emerald-400/50 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                <span>HackerRank (5★)</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Visual Mesh & Interactive Neural Sphere */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="w-full relative rounded-3xl glass-panel border border-accentViolet/25 p-4 overflow-hidden glow-box">
              
              {/* Corner Badges */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-[11px] font-mono text-accentLavender">
                <span className="w-2 h-2 rounded-full bg-accentViolet animate-pulse" />
                <span>WebGL 3D Neural Mesh</span>
              </div>

              <div className="absolute top-4 right-4 z-20 text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded">
                Interactive: Drag & Tilt
              </div>

              {/* Three.js Canvas Container */}
              <div className="w-full h-[380px] sm:h-[420px] flex items-center justify-center">
                <ThreeCanvas isDark={isDark} />
              </div>

              {/* Bottom Quick-Metric Badges */}
              <div className="grid grid-cols-3 gap-2 mt-2 pt-3 border-t border-white/10 text-center">
                <div className="p-2 rounded-xl bg-white/5">
                  <div className="text-base font-extrabold text-accentLavender">8.92</div>
                  <div className="text-[10px] text-slate-400 font-mono">B.Tech CGPA</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5">
                  <div className="text-base font-extrabold text-accentPink">87th</div>
                  <div className="text-[10px] text-slate-400 font-mono">TCS CodeVita R2</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5">
                  <div className="text-base font-extrabold text-emerald-400">Top 9.6%</div>
                  <div className="text-[10px] text-slate-400 font-mono">LeetCode Global</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
