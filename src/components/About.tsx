import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Globe2, Briefcase, Award, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const { personalInfo } = portfolioData;

  const focusAreas = [
    {
      title: "Applied AI & ML Systems",
      desc: "Architecting end-to-end data preprocessing, feature engineering, and ensemble modeling pipelines for real-world predictive utility.",
    },
    {
      title: "Real-Time Computer Vision",
      desc: "Developing touch-free human-computer interfaces using MediaPipe and OpenCV with sub-millisecond gesture tracking.",
    },
    {
      title: "Scalable Full-Stack Web",
      desc: "Building decoupled client-server web platforms in React, Next.js, and Node.js with secure token-based authentication.",
    },
    {
      title: "Algorithmic Problem Solving",
      desc: "Top 9.67% globally on LeetCode with strong intuition in Dynamic Programming, Graphs, and computational complexity.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-accentViolet/30 text-xs font-mono text-accentLavender mb-3">
            <Terminal className="w-3.5 h-3.5 text-accentViolet" />
            <span>01 // Technical Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="bg-gradient-to-r from-accentViolet to-accentPink bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            Who I am, what drives my technical curiosity, and how I engineer software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Avatar & Quick Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-3xl border border-accentViolet/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accentViolet/20 rounded-full blur-2xl pointer-events-none" />
              
              {/* Avatar Preview */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-950/60 to-black/80 flex items-center justify-center p-4 border border-white/10 mb-6">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(149,96,245,0.3)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Identity & Status */}
              <div className="text-center pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white">{personalInfo.fullName}</h3>
                <p className="text-xs text-accentLavender font-mono mt-1">Software Engineer & AI/ML Engineer</p>
              </div>

              {/* Relocation & Remote Availability */}
              <div className="pt-4 space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-accentPink shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Base:</span> {personalInfo.location}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <Briefcase className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Mode:</span> {personalInfo.relocationStatus}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-slate-300">
                  <Globe2 className="w-4 h-4 text-accentViolet shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">Target Regions:</span> {personalInfo.targetCities.join(", ")} | {personalInfo.targetCountries.join(", ")}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Credentials Badge Box */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accentViolet/20 text-accentViolet">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Academic Standing</div>
                  <div className="text-xs text-slate-400">Pranveer Singh Inst. of Tech (PSIT)</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-accentLavender">8.92</span>
                <span className="text-[10px] text-slate-400 block font-mono">CGPA / 10.0</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Bio & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-base glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
              {personalInfo.aboutLong.map((paragraph, idx) => (
                <p key={idx} className="first-of-type:text-lg first-of-type:text-slate-200">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars / Areas of Competence */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accentViolet" />
                <span>Core Engineering Pillars</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-accentViolet/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-accentLavender mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{area.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

