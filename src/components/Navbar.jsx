import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { playClickSound, playThwipSound, getMutedState, setMutedState } from '../utils/soundEffects';
import { 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  ArrowUpRight
} from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMuted, setIsMuted] = useState(getMutedState());

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    setMutedState(newState);
    if (!newState) {
      playClickSound();
    }
  };

  const handleNavClick = (href) => {
    playThwipSound();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070913]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={() => playThwipSound()}
          className="group flex items-center gap-2.5 text-white font-display font-bold tracking-tight text-xl"
        >
          {/* Custom Spider Emblem Icon */}
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-rose-600 via-rose-700 to-blue-600 flex items-center justify-center shadow-md shadow-rose-600/30 group-hover:scale-105 transition-transform">
            <span className="text-sm font-black">🕷</span>
            <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-rose-500 to-blue-500 opacity-0 group-hover:opacity-75 blur-xs transition-opacity -z-10" />
          </div>
          <div className="flex flex-col">
            <span className="text-white tracking-wider flex items-center gap-1 font-extrabold text-lg">
              SOHAM<span className="text-rose-500">.</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors">
              AI & ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 border border-white/8 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all relative ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-rose-600/20 to-blue-600/20 border border-rose-500/40 shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Controls: Sound & Contact CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Sound Mute/Unmute */}
          <button
            onClick={handleSoundToggle}
            title={isMuted ? 'Unmute Web SFX' : 'Mute Web SFX'}
            className="p-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-blue-400" />}
          </button>

          {/* Primary Connect Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-500 hover:to-blue-500 transition-all shadow-md shadow-rose-600/25 active:scale-95"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={handleSoundToggle}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-blue-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#070913]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-lg bg-slate-900/70 border border-white/5 text-sm font-medium text-slate-200 hover:text-white hover:border-rose-500/40"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-blue-600 shadow-md shadow-rose-600/30"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
