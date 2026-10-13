import React from 'react';
import { personalInfo, currentlyExploring } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Compass, 
  Layers, 
  Target
} from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-mono mb-3">
            <span>🕷</span>
            <span>PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Fourth-year engineer focused on scalable architectures, cloud engineering, and applied machine learning.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-5">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                Crafting Software with Purpose & Responsibility
              </h3>

              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                  {paragraph}
                </p>
              ))}

              {/* Quick Fact Chips */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400">Current Base</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>Pune, MH</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400">Degree & Year</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>B.Tech 4th Year</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 col-span-2 sm:col-span-1">
                  <div className="text-[11px] font-mono text-slate-400">Specialization</div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>AI & ML</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Motto Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-950/30 to-blue-950/30 border border-rose-500/20 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">The Guiding Philosophy</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed italic">
                  "With great power comes great responsibility." Whether automating cloud deployments or handling sensitive user commentary data, reliability and empathy guide every line of code.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Currently Exploring (DevOps, Cloud, AI/ML, Data Analytics) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Exploring Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: '10s' }} />
                  <h3 className="font-display font-bold text-white text-base">
                    Currently Exploring
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800/60">
                  DEVOPS • CLOUD • ML
                </span>
              </div>

              <p className="text-xs text-slate-400">
                Active technical exploration, lab experiments, and continuous upskilling:
              </p>

              <div className="space-y-3 pt-1">
                {currentlyExploring.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {item.title}
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Trajectory Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-rose-400" />
                Academic Milestones
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-white font-medium">JSPM University Pune (4th Year)</span>
                  <span className="font-mono text-emerald-400 font-semibold">8.1 CGPA</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                  <span className="text-white font-medium">Govt Polytechnic Ratnagiri</span>
                  <span className="font-mono text-blue-400 font-semibold">83.56% Distinction</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-white font-medium">Maharashtra State Board (SSC)</span>
                  <span className="font-mono text-slate-400">77.00%</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
