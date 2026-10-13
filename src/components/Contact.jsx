import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { playClickSound, playThwipSound } from '../utils/soundEffects';
import { Github, Linkedin } from './SocialIcons';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Download, 
  FileText
} from 'lucide-react';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#e11d48', '#2563eb', '#38bdf8']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDirectMail = () => {
    playThwipSound();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#e11d48', '#2563eb', '#38bdf8']
    });
    window.location.href = personalInfo.socialLinks.emailMailto;
  };

  const handleResumeDownload = () => {
    playThwipSound();
    confetti({
      particleCount: 70,
      spread: 75,
      origin: { y: 0.75 },
      colors: ['#e11d48', '#2563eb', '#38bdf8']
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-white/5">
      
      {/* Background Neon Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-rose-950/20 via-blue-950/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-mono mb-3">
            <span>🕷</span>
            <span>GET IN TOUCH & RESUME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Have an idea? Let's build something useful.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Open for software engineering and AI/ML opportunities, full-stack roles, or discussing multilingual NLP research.
          </p>
        </div>

        {/* Direct Connection & Resume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Direct Email Card */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-rose-500/40 backdrop-blur-md flex flex-col justify-between transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-rose-400 text-xs font-mono uppercase tracking-wider">
                  <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>Direct Inbox</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  FAST RESPONSE
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-400 font-mono">Email Address:</p>
                <div className="text-base sm:text-lg font-mono font-bold text-white break-all mt-1">
                  {personalInfo.email}
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to email me directly regarding open positions, engineering internships, or project collaborations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/5">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDirectMail}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-xs font-semibold text-white transition-all shadow-md shadow-rose-600/30 cursor-pointer"
              >
                <span>Compose Mail</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Professional Presence & Resume Card (Vercel removed, Resume added) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-blue-500/40 backdrop-blur-md flex flex-col justify-between transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-blue-400 text-xs font-mono uppercase tracking-wider">
                  <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span>Profiles & Resume</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                  OFFICIAL PDF
                </span>
              </div>

              {/* Profiles & Resume (Single clean download option + LinkedIn + GitHub) */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={personalInfo.resumeUrl}
                  download="Soham_Suhas_Dabholkar_Resume.pdf"
                  onClick={handleResumeDownload}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-rose-500/30 hover:border-rose-500/60 text-slate-300 hover:text-white transition-all group/item cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold block text-white">Download Resume</span>
                      <span className="text-[11px] font-mono text-slate-400">PDF Document • 321 KB</span>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-rose-400 group-hover/item:translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClickSound()}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-white/5 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all group/item"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-blue-400 transition-colors" />
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playClickSound()}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-white/5 hover:border-white/30 text-slate-300 hover:text-white transition-all group/item"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300">
                      <Github className="w-4 h-4 text-slate-300" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">GitHub Repositories</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>📍 Pune, Maharashtra</span>
              <span className="text-emerald-400">● Available for Roles</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
