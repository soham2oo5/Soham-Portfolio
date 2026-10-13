import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { playThwipSound } from '../utils/soundEffects';
import { Github, Linkedin } from './SocialIcons';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    playThwipSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070f] border-t border-white/10 py-12 overflow-hidden text-slate-400">
      
      {/* Decorative spider-web accent in bottom corner */}
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-10">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none">
          <path d="M 100 0 L 0 100 M 100 30 L 30 100 M 100 60 L 60 100" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <span className="text-rose-500">🕷</span>
              <span>SOHAM DABHOLKAR</span>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-mono">
              Computer Science (AI & ML) • JSPM University, Pune
            </p>
            <p className="text-[11px] text-slate-600 mt-1 italic">
              "With great power comes great responsibility."
            </p>
          </div>

          {/* Social Icons & Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-white/5 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900 border border-white/5 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="group flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900 border border-white/10 hover:border-rose-500/50 text-xs font-mono text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Soham Suhas Dabholkar. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono">
            <span>Designed & built in Pune, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
