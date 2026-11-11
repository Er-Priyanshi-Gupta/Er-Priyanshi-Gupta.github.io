import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, FileDown, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = 'Please provide your full name.';
    if (!formState.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formState.message.trim()) errs.message = 'Please enter a message.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Also trigger mailto so the recruiter can send directly via their default mail client if desired
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Message from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial aura */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accentViolet/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-accentViolet/30 text-xs font-mono text-accentLavender mb-3">
            <Terminal className="w-3.5 h-3.5 text-accentViolet" />
            <span>07 // Direct Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Get In <span className="bg-gradient-to-r from-accentViolet to-accentPink bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            Interested in discussing full-time opportunities, internship roles, or technical collaborations? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Email Card with Copy button */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-accentViolet/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-accentViolet/15 text-accentLavender">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedField === 'email' ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-1">Professional Email</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base font-bold text-white hover:text-accentLavender transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone Card with Call / Copy */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-accentPink/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-2xl bg-accentPink/15 text-accentPink">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-1">Direct Contact</div>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-base font-bold text-white hover:text-accentPink transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-slate-400">Current Base</div>
                <div className="text-sm font-bold text-white">{personalInfo.location}</div>
                <div className="text-xs text-slate-400 mt-0.5">{personalInfo.relocationStatus}</div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Priyanshi_Gupta_Resume.pdf"
                className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-accentViolet to-purple-600 hover:from-accentViolet hover:to-accentPink text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl glass-panel text-slate-300 hover:text-white hover:border-accentViolet transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5 text-accentLavender" />
              </a>
            </div>

          </div>

          {/* Right Column: Validated Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative"
            >
              <h3 className="text-xl font-bold text-white mb-2">Send Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Your message opens directly in your mail client or reaches me via verified contact.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Your message dispatch is initiated! Thank you for reaching out.</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-accentPink">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accentViolet text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email Address <span className="text-accentPink">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accentViolet text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer / AI ML Engineer Role"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accentViolet text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-accentPink">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accentViolet text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accentViolet via-purple-600 to-accentPink hover:opacity-95 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-950/50 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
