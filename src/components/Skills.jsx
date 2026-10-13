import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { playClickSound } from '../utils/soundEffects';
import { 
  Brain, 
  Code2, 
  Layout, 
  Server, 
  Wrench, 
  Check, 
  Sparkles,
  Search
} from 'lucide-react';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    Brain: Brain,
    Code2: Code2,
    Layout: Layout,
    Server: Server,
    Wrench: Wrench
  };

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }
    return {
      ...cat,
      skills: searchQuery ? matchingSkills : cat.skills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
              <span>🕷</span>
              <span>TECHNICAL REPERTOIRE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Skills & Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Structured into practical engineering domains. Clear distinctions between core strengths and active exploratory learning.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. PyTorch)..."
              className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 font-mono"
            />
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
          <button
            onClick={() => {
              playClickSound();
              setSelectedCategory('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-xs'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            All Competencies
          </button>

          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat.id);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <div
                key={category.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between backdrop-blur-xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 text-rose-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="space-y-2 mt-5">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between hover:border-white/15 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          <span className="text-xs font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-slate-500">
                            {skill.tag}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            skill.level === 'Core' || skill.level === 'Primary' || skill.level === 'Daily Use'
                              ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60'
                              : 'bg-slate-900 text-slate-400 border border-white/5'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
                  {category.skills.length} verified technologies in this category
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
