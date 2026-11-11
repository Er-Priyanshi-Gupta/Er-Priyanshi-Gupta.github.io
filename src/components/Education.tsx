import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, BookOpen, Terminal, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-accentViolet/30 text-xs font-mono text-accentLavender mb-3">
            <Terminal className="w-3.5 h-3.5 text-accentViolet" />
            <span>06 // Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Academic <span className="bg-gradient-to-r from-accentViolet to-accentPink bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            Computer science engineering foundations and core academic achievements.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-accentViolet/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accentViolet/10 border border-accentViolet/20 flex items-center justify-center text-accentViolet group-hover:scale-110 group-hover:bg-accentViolet/20 transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
                    <Calendar className="w-3 h-3 text-accentViolet" />
                    {item.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl font-bold text-white group-hover:text-accentLavender transition-colors mb-1">
                  {item.degree}
                </h3>
                <div className="text-sm font-semibold text-accentPink mb-6">
                  {item.institution}
                </div>

                {/* Score highlight */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-accentViolet/15 border border-accentViolet/30 text-xs font-mono text-white mb-6">
                  <span>Academic Standing:</span>
                  <span className="text-sm font-bold text-accentLavender">{item.score}</span>
                  <span className="text-[10px] text-slate-400">({item.scoreType})</span>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-accentViolet" />
                    <span>Key Coursework &amp; Studies</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{course}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

