import React, { useState } from 'react';
import { portfolioData, Skill } from '../data/portfolioData';
import {
  Code2,
  Cpu,
  Coffee,
  Database,
  Atom,
  Globe,
  FileCode,
  Palette,
  Server,
  Network,
  Layers,
  Box,
  Eye,
  Brain,
  Binary,
  BarChart3,
  Cloud,
  GitBranch,
  Send,
  Workflow,
  HardDrive,
  Radio,
  ArrowUpRight,
  Terminal,
  Filter
} from 'lucide-react';

interface SkillsProps {
  onSkillClick: (skillId: string, skillName: string) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onSkillClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { skills, projects } = portfolioData;

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'AI & ML', 'Tools & Cloud', 'Core CS'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  // Icon mapping
  const renderSkillIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-accentViolet group-hover:text-accentPink transition-colors" };
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Atom': return <Atom {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'FileCode': return <FileCode {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Box': return <Box {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'Brain': return <Brain {...props} />;
      case 'Binary': return <Binary {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'GitBranch': return <GitBranch {...props} />;
      case 'Send': return <Send {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'HardDrive': return <HardDrive {...props} />;
      case 'Radio': return <Radio {...props} />;
      default: return <Code2 {...props} />;
    }
  };

  const getProficiencyColor = (level: Skill['proficiency']) => {
    switch (level) {
      case 'Advanced':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Intermediate':
        return 'text-accentLavender bg-accentViolet/10 border-accentViolet/30';
      default:
        return 'text-slate-300 bg-slate-500/10 border-slate-500/30';
    }
  };

  const getProjectTitles = (projectIds: string[]) => {
    return projects
      .filter(p => projectIds.includes(p.id))
      .map(p => p.title);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-accentViolet/30 text-xs font-mono text-accentLavender mb-3">
              <Terminal className="w-3.5 h-3.5 text-accentViolet" />
              <span>02 // Competence Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Technical <span className="bg-gradient-to-r from-accentViolet to-accentPink bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Categorized technologies, verified proficiency levels, and direct project mappings. Click any card to inspect associated projects.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-2 rounded-xl border border-white/10 self-start sm:self-auto flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-accentViolet" />
            <span>Interactive: Click card to filter projects</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-accentViolet to-accentPink text-white shadow-lg shadow-purple-900/30 font-semibold'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-accentViolet/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const mappedProjects = getProjectTitles(skill.relatedProjectIds);
            const hasProjects = mappedProjects.length > 0;

            return (
              <div
                key={skill.id}
                onClick={() => onSkillClick(skill.id, skill.name)}
                className={`group p-5 rounded-2xl glass-panel border transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                  hasProjects
                    ? 'hover:border-accentViolet/70 hover:shadow-xl hover:shadow-purple-950/40 hover:-translate-y-1'
                    : 'border-white/10 hover:border-white/30'
                }`}
                title={hasProjects ? `Click to see projects built with ${skill.name}` : skill.name}
              >
                <div>
                  {/* Top Row: Icon + Proficiency */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accentViolet/10 border border-accentViolet/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accentViolet/20 transition-all">
                      {renderSkillIcon(skill.icon)}
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white group-hover:text-accentLavender transition-colors">
                      {skill.name}
                    </h3>
                    {hasProjects && (
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accentPink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Row: Usage Frequency & Related Project Pills */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-mono text-[10px] uppercase">Usage:</span>
                    <span className="text-slate-300 font-medium">{skill.frequency}</span>
                  </div>

                  {hasProjects ? (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {mappedProjects.map((pTitle, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-accentViolet/15 text-accentLavender font-mono truncate max-w-full"
                        >
                          ⚡ {pTitle}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="text-[10px] text-slate-400 font-mono italic">
                      Foundational / Coursework
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
