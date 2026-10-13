import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { playThwipSound, playClickSound } from '../utils/soundEffects';
import { Github, Linkedin } from './SocialIcons';
import confetti from 'canvas-confetti';
import { 
  ArrowRight, 
  MapPin, 
  Mail,
  Download
} from 'lucide-react';

export const Hero = () => {
  const handleScroll = (id) => {
    playThwipSound();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    playThwipSound();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#e11d48', '#2563eb', '#38bdf8']
    });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      
      {/* Background Spider-Verse Animated Neon & Subtle Motion Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[34rem] h-[34rem] bg-rose-600/12 rounded-full blur-[110px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[30rem] h-[30rem] bg-blue-600/12 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Large Background Typography Watermark */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-display font-black text-[13vw] text-white/[0.02] select-none tracking-tighter whitespace-nowrap">
          SOHAM • DEV
        </div>

        {/* Dynamic Spider-Web Silk Geometry SVG */}
        <svg className="absolute -top-10 -right-10 w-96 h-96 opacity-25 text-rose-500/60" viewBox="0 0 300 300" fill="none">
          <path d="M 300 0 L 0 300 M 300 75 L 75 300 M 300 150 L 150 300 M 300 225 L 225 300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="300" cy="0" r="100" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="0" r="200" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="0" r="280" stroke="currentColor" strokeWidth="1" />
        </svg>

        <svg className="absolute -bottom-10 -left-10 w-96 h-96 opacity-20 text-blue-500/60" viewBox="0 0 300 300" fill="none">
          <path d="M 0 300 L 300 0 M 0 225 L 225 0 M 0 150 L 150 0 M 0 75 L 75 0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="0" cy="300" r="100" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="300" r="200" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-rose-500/30 text-rose-300 text-xs font-mono tracking-wider shadow-sm shadow-rose-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span>{personalInfo.heroEyebrow}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-white/10 text-slate-300 text-xs font-mono">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Minimal Hero: Just Soham's Name & Iconic Spiderman Tagline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* Hero Name with Spider-Verse Gradient & Glow */}
          <div className="relative inline-block group">
            {/* Ambient Glow behind name */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-600/30 via-red-600/20 to-blue-600/30 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
            
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl text-white tracking-tight leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-rose-200">
                Soham
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-blue-500">
                Dabholkar
              </span>
            </h1>
          </div>

          {/* Iconic Spider-Man Tagline */}
          <div className="pt-2">
            <p className="font-display font-medium text-xl sm:text-2xl md:text-3xl text-slate-200 tracking-wide">
              "{personalInfo.tagline}"
            </p>
          </div>

          {/* Clean concise academic & engineering subtext */}
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal pt-2">
            Fourth-year CSE (AI & ML) student at JSPM University, Pune. Engineering full-stack web applications, multilingual transformer models, and scalable cloud pipelines.
          </p>

          {/* Action Button Row with Download Resume */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            
            {/* Download Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Soham_Suhas_Dabholkar_Resume.pdf"
              onClick={handleDownloadResume}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 transition-all shadow-lg shadow-rose-600/30 active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            {/* Explore Projects Button */}
            <button
              onClick={() => handleScroll('projects')}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-blue-500/40 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Contact Me Button */}
            <button
              onClick={() => handleScroll('contact')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-white/10 hover:border-rose-500/40 transition-all active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-rose-400" />
              <span>Get in Touch</span>
            </button>

            {/* GitHub */}
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickSound()}
              className="inline-flex items-center gap-2 p-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickSound()}
              className="inline-flex items-center gap-2 p-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-blue-400 hover:text-blue-300 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

          </div>

        </div>

        {/* Minimal Highlight Stats Strip */}
        <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/40 border border-white/8 hover:border-rose-500/30 transition-all backdrop-blur-xs text-center group"
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-rose-400 transition-colors">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                {item.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-1">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
