import React from 'react';
import { playThwipSound, playClickSound } from '../utils/soundEffects';
import { Radio, Sparkles, X, Terminal, ShieldAlert } from 'lucide-react';

export const SpiderSenseHud = ({ isActive, onClose, onOpenPlayground }) => {
  if (!isActive) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm w-full animate-in slide-in-from-bottom-6 duration-300">
      <div className="relative rounded-2xl bg-slate-950/95 border-2 border-rose-500 shadow-2xl shadow-rose-600/40 p-4 backdrop-blur-xl text-white space-y-3">
        
        {/* Top Radar Alert */}
        <div className="flex items-center justify-between border-b border-rose-500/30 pb-2.5">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-rose-400 animate-spin" />
            <span className="font-mono text-xs font-bold text-rose-300 tracking-wider">
              SPIDEY-SENSE: TINGLING!
            </span>
          </div>
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
            aria-label="Dismiss Spider Sense HUD"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tactical HUD Metrics */}
        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          Sensory radar scanning developer portfolio telemetry. Neural network architectures & transformer models active.
        </p>

        {/* Quick Tactical Actions */}
        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
          <button
            onClick={() => {
              playThwipSound();
              onOpenPlayground();
            }}
            className="p-2 rounded-xl bg-rose-950/80 border border-rose-500/60 hover:bg-rose-900 text-rose-200 text-center font-semibold transition-colors flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch NLP</span>
          </button>

          <button
            onClick={() => {
              playThwipSound();
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-2 rounded-xl bg-blue-950/80 border border-blue-500/60 hover:bg-blue-900 text-blue-200 text-center font-semibold transition-colors flex items-center justify-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>View Projects</span>
          </button>
        </div>

        {/* Comic Sound Effect Watermark */}
        <div className="text-[10px] font-mono text-rose-400/80 flex items-center justify-between pt-1">
          <span>THWIP! WEB-LINE LOCKED</span>
          <span className="animate-pulse">● 100% SENSORY</span>
        </div>

      </div>
    </div>
  );
};
