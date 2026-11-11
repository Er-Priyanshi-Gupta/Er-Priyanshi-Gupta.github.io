import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-accentViolet/30 text-xs font-mono text-accentLavender mb-3">
            <Terminal className="w-3.5 h-3.5 text-accentViolet" />
            <span>04 // Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Professional <span className="bg-gradient-to-r from-accentViolet to-accentPink bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            Industry internship experience in machine learning pipelines and astronomical data analysis.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-accentViolet/30 space-y-12 max-w-4xl">
          {experience.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Checkpoint Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-8 h-8 rounded-full bg-midnight border-2 border-accentViolet flex items-center justify-center shadow-lg shadow-purple-900/50 group-hover:scale-110 group-hover:border-accentPink transition-all">
                <Briefcase className="w-4 h-4 text-accentLavender" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-accentViolet/50 transition-all duration-300">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accentLavender transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-base font-semibold text-accentPink mt-0.5">
                      {item.company} <span className="text-xs font-mono text-slate-400 font-normal">({item.employmentType})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 text-accentViolet" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-accentPink" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Bullets with Impact */}
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-slate-400 self-center mr-1">Technologies:</span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-accentViolet/10 border border-accentViolet/20 text-xs font-mono text-accentLavender"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
