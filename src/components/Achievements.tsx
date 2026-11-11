import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, ExternalLink, Sparkles, ShieldCheck, Terminal, FolderLock } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { achievements, certifications, personalInfo } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-accentViolet/30 text-xs font-mono text-accentLavender mb-3">
              <Terminal className="w-3.5 h-3.5 text-accentViolet" />
              <span>05 // Recognition &amp; Proof</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Achievements &amp; <span className="bg-gradient-to-r from-accentViolet to-accentPink bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-xl">
              Competitive coding milestones, hackathon participation, and verified credentials from industry leaders.
            </p>
          </div>

          {/* Certificate Drive Vault CTA */}
          <a
            href={personalInfo.socialLinks.certificationsDrive}
            target="_blank"
            rel="noreferrer"
            className="self-start md:self-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-accentViolet to-purple-600 hover:from-accentViolet hover:to-accentPink text-white font-semibold text-xs flex items-center gap-2.5 shadow-lg shadow-purple-950/40 hover:scale-[1.02] transition-all"
          >
            <FolderLock className="w-4 h-4" />
            <span>Open Verified Credentials Vault</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Competitive Coding & Hackathons Grid */}
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
          <Trophy className="w-5 h-5 text-amber-400" />
          <span>Competitive Coding &amp; Hackathons</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-accentViolet/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Trophy className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10 uppercase">
                    {item.issuer}
                  </span>
                </div>

                <div className="text-lg font-extrabold text-accentLavender mb-1 font-mono">
                  {item.highlight}
                </div>

                <h4 className="text-sm font-bold text-white mb-2 group-hover:text-accentPink transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-accentLavender hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Verify Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Vault */}
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Industry Certifications</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-accentViolet/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-accentViolet/10 text-accentViolet group-hover:bg-accentViolet/20 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-3 group-hover:text-accentLavender transition-colors">
                  {cert.name}
                </h4>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pt-3 border-t border-white/5 text-xs text-accentLavender hover:text-white flex items-center justify-between transition-colors font-mono"
                >
                  <span>View Verified Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

