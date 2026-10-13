import React, { useEffect } from 'react';
import { playClickSound } from '../utils/soundEffects';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Terminal
} from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-950 border border-white/15 shadow-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[90vh] overflow-y-auto my-auto animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-rose-950 border border-rose-500/50 text-rose-300">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                STATUS: {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            Project Overview & Problem Statement
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Architecture Pipeline */}
        {project.architecture && (
          <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-rose-400" />
              Architectural Dataflow
            </div>
            <div className="p-3 rounded-lg bg-black/60 border border-white/5 font-mono text-xs text-rose-300 overflow-x-auto whitespace-nowrap">
              {project.architecture}
            </div>
          </div>
        )}

        {/* Key Implemented Capabilities */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Engineered Capabilities & Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-white/10 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            {project.previewNote}
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-white/10 transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
