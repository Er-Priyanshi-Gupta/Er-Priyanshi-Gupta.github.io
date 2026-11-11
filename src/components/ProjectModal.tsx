import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, Layers, AlertCircle, Sparkles, BookOpen, UserCheck, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="max-w-3xl w-full glass-panel rounded-3xl border border-accentViolet/40 shadow-2xl overflow-hidden my-auto relative animate-scale-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Visual */}
        <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.coverGradient} border-b border-white/10 relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-black/50 text-slate-300 hover:text-white hover:bg-black/70 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-xs font-mono text-accentLavender">
              {project.category}
            </span>
            {project.isFeatured && (
              <span className="px-3 py-1 rounded-full bg-accentPink/30 border border-accentPink/50 text-xs font-mono text-white flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-accentPink" />
                Featured Project
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {project.title}
          </h2>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold text-xs flex items-center gap-2 hover:bg-slate-200 transition-colors shadow-lg"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect GitHub Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-accentViolet to-accentPink text-white font-semibold text-xs flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Application</span>
              </a>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {/* Problem & Motivation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accentLavender mb-2 flex items-center gap-1.5 font-mono">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accentLavender mb-2 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-4 h-4 text-accentPink" />
                Motivation &amp; Purpose
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {project.motivation}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Core Features &amp; Capabilities</span>
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-accentViolet mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture & Technical Implementation */}
          <div>
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-accentViolet" />
              <span>Technical Implementation &amp; Architecture</span>
            </h3>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 font-mono text-xs text-slate-300">
              <div className="text-accentLavender">
                <strong>Pipeline:</strong> {project.architecture}
              </div>
              <p className="leading-relaxed font-sans text-slate-300 text-xs sm:text-sm">
                {project.technicalImplementation}
              </p>
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-accentPink" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-mono bg-accentViolet/15 text-accentLavender border border-accentViolet/30"
                >
                  {tech}
                </span>
              ))}
              {project.database && (
                <span className="px-3 py-1 rounded-xl text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                  DB: {project.database}
                </span>
              )}
            </div>
          </div>

          {/* Challenges & How They Were Solved */}
          <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
            <h4 className="text-xs font-bold font-mono text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              Engineering Challenge &amp; Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-white">Challenge:</strong> {project.challenges}
            </p>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-emerald-400">Resolution:</strong> {project.howSolved}
            </p>
          </div>

          {/* Individual Contribution & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono uppercase text-accentLavender font-bold mb-1.5 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-accentViolet" />
                My Contribution
              </div>
              <p className="text-xs text-slate-300">
                {project.individualContribution}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono uppercase text-accentLavender font-bold mb-1.5 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-accentPink" />
                Key Learnings
              </div>
              <p className="text-xs text-slate-300">
                {project.learnings}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-black/60 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Press ESC or click outside to close</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
