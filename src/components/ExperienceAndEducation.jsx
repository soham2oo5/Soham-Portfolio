import React from 'react';
import { educationTimeline, experience, certifications } from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const ExperienceAndEducation = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Spider-Verse Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-mono mb-3">
            <span>🕷</span>
            <span>TRAJECTORY & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Education & Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Academic distinction paired with practical software internships and verified industry certifications.
          </p>
        </div>

        {/* Dual Column Layout: Education Timeline on Left, Experience & Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= LEFT: EDUCATION TIMELINE ================= */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Academic Journey
              </h3>
            </div>

            {/* Glowing Web-Thread Connected Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-rose-500 before:via-blue-500 before:to-slate-800">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Web Node Pin */}
                  <div className={`absolute -left-6 sm:-left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-transform group-hover:scale-125 ${
                    item.isCurrent
                      ? 'bg-rose-500 border-white shadow-md shadow-rose-500 ring-4 ring-rose-500/20'
                      : 'bg-slate-900 border-blue-400'
                  }`} />

                  {/* Card Content */}
                  <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-rose-500/40 transition-all backdrop-blur-xs space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-rose-400" />
                        {item.period}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-950 border border-white/10 text-emerald-400">
                        {item.score}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {item.institution}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {item.degree}
                    </p>

                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{item.location} • {item.scoreLabel}</span>
                    </div>

                    <ul className="space-y-1.5 pt-2 border-t border-white/5">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-rose-400 font-bold">›</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT: WORK EXPERIENCE & CERTIFICATIONS ================= */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Practical Experience
                </h3>
              </div>

              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-blue-500/40 transition-all backdrop-blur-xs space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-950 text-blue-300 border border-blue-800">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {exp.location}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">{exp.role}</h4>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{exp.company}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skillsLearned.map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-white/5"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Training */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  Verified Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-xs font-bold text-white leading-snug">
                        {cert.title}
                      </h5>
                      <span className="text-[10px] font-mono text-emerald-400 shrink-0">
                        ✓ {cert.date}
                      </span>
                    </div>

                    <p className="text-[11px] text-purple-300 mt-1 font-mono">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {cert.topics.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
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
