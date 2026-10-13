import React, { useState } from 'react';
import { projects, projectCategories } from '../data/portfolioData';
import { playClickSound, playThwipSound } from '../utils/soundEffects';
import { 
  Cpu, 
  ArrowUpRight, 
  ChevronRight
} from 'lucide-react';

export const Projects = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const flagshipProject = projects.find(p => p.featured);
  const standardProjects = filteredProjects.filter(p => !p.featured || selectedCategory !== 'all');

  const handleCategoryChange = (catId) => {
    playClickSound();
    setSelectedCategory(catId);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Spider-Verse Ambient Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-rose-950/20 via-transparent to-blue-950/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-mono mb-3">
              <span>🕷</span>
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Production-focused implementations spanning multilingual NLP, interactive web engineering, and mobile development.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900 border border-white/10 self-start md:self-auto">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-sm shadow-rose-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= FLAGSHIP SHOWCASE CARD ================= */}
        {selectedCategory === 'all' && flagshipProject && (
          <div className="mb-10 relative group">
            {/* Outer dual neon glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-600 via-rose-500 to-blue-600 opacity-30 group-hover:opacity-60 blur-xl transition-opacity -z-10" />

            <div className="relative rounded-2xl bg-slate-950/90 border border-white/15 p-6 sm:p-8 backdrop-blur-xl transition-all">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Story */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-rose-950 text-rose-300 border border-rose-500/50">
                      ★ {flagshipProject.badge}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {flagshipProject.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {flagshipProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {flagshipProject.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {flagshipProject.keyFeatures.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-rose-400 font-bold">›</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {flagshipProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs - Clean deep dive button */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        playThwipSound();
                        onSelectProject(flagshipProject);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 shadow-md shadow-rose-600/30 cursor-pointer transition-all active:scale-95"
                    >
                      <span>Architecture Deep-Dive</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Interactive Architecture Diagram Box */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl bg-slate-900/90 border border-white/10 p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-rose-400" />
                        <span className="text-xs font-mono text-slate-300">Model Pipeline Architecture</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">PYTORCH / REST</span>
                    </div>

                    <div className="space-y-2.5 text-xs font-mono">
                      <div className="p-2.5 rounded bg-black/50 border border-white/5 flex items-center justify-between">
                        <span className="text-slate-400">1. Multilingual Comments</span>
                        <span className="text-rose-400 text-[10px]">EN + HI + MR</span>
                      </div>
                      <div className="text-center text-slate-600 text-xs">↓ Subword Tokenizer</div>
                      <div className="p-2.5 rounded bg-blue-950/40 border border-blue-500/30 flex items-center justify-between">
                        <span className="text-blue-300">2. XLM-RoBERTa Encoder</span>
                        <span className="text-blue-400 text-[10px]">12 Heads</span>
                      </div>
                      <div className="text-center text-slate-600 text-xs">↓ Attention Pooling</div>
                      <div className="p-2.5 rounded bg-rose-950/40 border border-rose-500/30 flex items-center justify-between">
                        <span className="text-rose-300">3. Sarcasm & Sentiment Head</span>
                        <span className="text-rose-400 text-[10px]">True Polarity</span>
                      </div>
                      <div className="text-center text-slate-600 text-xs">↓ Fast JSON Output</div>
                      <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                        <span className="text-emerald-300">4. FastAPI / REST Endpoint</span>
                        <span className="text-emerald-400 text-[10px]">Real-Time</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ================= STANDARD PROJECTS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {standardProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-slate-900/60 border border-white/10 hover:border-rose-500/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-950/20 group backdrop-blur-xs"
            >
              <div className="space-y-4">
                {/* Card Top Pill */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-950 border border-white/10 text-slate-300">
                    {proj.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {proj.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-rose-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {proj.summary}
                </p>

                {/* Key Points */}
                <ul className="space-y-1.5 pt-1">
                  {proj.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-rose-400 font-bold">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 border border-white/5 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button - Technical Specs only (removed external links per user request) */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-6">
                <button
                  onClick={() => {
                    playThwipSound();
                    onSelectProject(proj);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 group/btn cursor-pointer py-1.5 px-3 rounded-lg bg-rose-950/30 border border-rose-500/20 hover:border-rose-500/50 transition-all"
                >
                  <span>Technical Specs & Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <span className="text-[11px] font-mono text-slate-500">
                  {proj.previewNote}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
