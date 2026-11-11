import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { Search, ExternalLink, ArrowRight, Sparkles, Terminal, X, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  activeSkillFilter: { id: string; name: string } | null;
  onClearSkillFilter: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProject,
  activeSkillFilter,
  onClearSkillFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { projects } = portfolioData;

  const categories = ['All', 'Full-Stack', 'AI & ML', 'Computer Vision'];

  // Filter projects based on category, search query, and active skill filter
  const filteredProjects = projects.filter((project) => {
    // 1. Category Filter
    if (selectedCategory !== 'All' && project.category !== selectedCategory) {
      return false;
    }

    // 2. Active Skill Filter
    if (activeSkillFilter) {
      const skillNameLower = activeSkillFilter.name.toLowerCase();
      const matchesTech = project.techStack.some((t) =>
        t.toLowerCase().includes(skillNameLower) || skillNameLower.includes(t.toLowerCase())
      );
      const matchesLang = project.languages.some((l) =>
        l.toLowerCase().includes(skillNameLower) || skillNameLower.includes(l.toLowerCase())
      );
      if (!matchesTech && !matchesLang) {
        return false;
      }
    }

    // 3. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchDesc = project.shortDescription.toLowerCase().includes(q);
      const matchTech = project.techStack.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchTech;
    }

    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-accentViolet/30 text-xs font-mono text-accentLavender mb-3">
              <Terminal className="w-3.5 h-3.5 text-accentViolet" />
              <span>03 // Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Engineering <span className="bg-gradient-to-r from-accentViolet to-accentPink bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Production-focused applications, deep learning architectures, and real-time vision systems. Click any project card for a full technical breakdown.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel border border-white/10 focus:border-accentViolet text-xs text-white placeholder-slate-400 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar: Categories + Active Skill Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-accentViolet to-accentPink text-white shadow-md font-semibold'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-accentViolet/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Active Skill Filter Badge */}
          {activeSkillFilter && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accentViolet/20 border border-accentViolet/50 text-xs font-mono text-accentLavender animate-fade-in">
              <span>Filtered by Skill: <strong>{activeSkillFilter.name}</strong></span>
              <button
                onClick={onClearSkillFilter}
                className="p-0.5 rounded-md hover:bg-white/10 text-slate-300 hover:text-white"
                title="Clear skill filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Projects Explorer Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl border border-white/10 text-center max-w-lg mx-auto">
            <Code2 className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No matching projects found</h3>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search query or reset the active filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                onClearSkillFilter();
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-accentViolet/20 text-accentLavender text-xs font-mono hover:bg-accentViolet/30 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl glass-panel border border-white/10 hover:border-accentViolet/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-purple-950/50 hover:-translate-y-1.5 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  {/* Visual Header / Cover Gradient */}
                  <div className={`p-6 bg-gradient-to-br ${project.coverGradient} border-b border-white/10 relative`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-[11px] font-mono text-accentLavender">
                        {project.category}
                      </span>
                      {project.isFeatured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-accentPink/30 border border-accentPink/50 text-[10px] font-mono text-white flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-accentPink" />
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accentLavender transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 rounded-lg bg-accentViolet/10 text-[10px] font-mono text-accentLavender">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="text-xs font-semibold text-accentLavender hover:text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                  >
                    <span>Inspect Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accentPink" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl bg-accentViolet/20 hover:bg-accentViolet/40 text-accentLavender hover:text-white transition-colors"
                        title="Live Application Demo"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
