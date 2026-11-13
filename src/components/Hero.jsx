import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Send, 
  Sparkles,
  Terminal,
  Code2,
  Database,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SocialIconWithCard from './SocialIconWithCard';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalInfo.rolesList;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText === currentRole) {
      // Pause at end of word
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(40);
      }, 2000);
    } else if (isDeleting && displayedText === '') {
      // Move to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(90);
    } else {
      // Type or delete characters
      timer = setTimeout(() => {
        setDisplayedText(prev => 
          isDeleting 
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 px-4"
    >
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 max-w-full rounded-full bg-slate-900/85 border border-slate-700/70 shadow-[0_0_20px_rgba(74,222,128,0.2)] mb-6 sm:mb-8 md:backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">
            {personalInfo.availability}
          </span>
          <span className="text-xs font-mono text-pink-300 px-2 py-0.5 rounded-full bg-pink-950/60 border border-pink-700/40">
            B.Tech '28
          </span>
        </div>

        {/* Hierarchy Greeting & Name */}
        <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-green-400 mb-3 flex items-center justify-center gap-2">
          <Terminal className="w-4 h-4" />
          <span>Hello World, I'm</span>
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            {personalInfo.name}
          </span>
        </h1>

        {/* Dynamic Typing Subtitle */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 flex items-center gap-2 font-mono">
            <span className="text-green-400 font-bold">&gt;</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-pink-400">
              {displayedText}
            </span>
            <span className="w-2.5 h-7 bg-pink-400 animate-pulse inline-block"></span>
          </div>
        </div>

        {/* Tagline & Objective */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-10">
          {personalInfo.tagline}
        </p>

        {/* High-Impact CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mb-10 sm:mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto justify-center group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-green-400 via-emerald-400 to-pink-500 hover:from-green-300 hover:to-pink-400 shadow-[0_0_25px_rgba(74,222,128,0.35)] hover:shadow-[0_0_35px_rgba(236,72,153,0.55)] md:hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-950" />
          </a>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/85 hover:bg-slate-800/85 border border-slate-700/80 hover:border-pink-500/50 shadow-md md:hover:scale-105 active:scale-95 transition-all"
          >
            <FileText className="w-4 h-4 text-pink-400" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-950/75 hover:bg-slate-900/80 border border-slate-800 hover:border-green-400/50 active:scale-95 transition-all"
          >
            <Send className="w-4 h-4 text-green-400" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Quick Social & Developer Links */}
        <div className="flex items-center gap-4 mb-10 sm:mb-14 text-slate-400">
          <SocialIconWithCard platform="github" placement="top" align="center-left" />
          <SocialIconWithCard
            platform="linkedin"
            placement="top"
            align="center"
            buttonClassName="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-pink-400/40 hover:text-pink-400 transition-colors"
          />
          <SocialIconWithCard
            platform="email"
            placement="top"
            align="center-right"
            buttonClassName="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-green-500/40 hover:text-green-400 transition-colors"
          />
        </div>

        {/* Stats Strip / Engineering Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-slate-800/80">
          <div className="p-3.5 sm:p-4 rounded-xl glass-card text-left">
            <div className="text-xl sm:text-2xl font-bold font-mono text-green-400 mb-1">2028</div>
            <div className="text-xs font-semibold text-slate-200">B.Tech Degree</div>
            <div className="text-[11px] text-slate-400 mt-0.5">CS & Data Science @ VGI</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-card text-left">
            <div className="text-xl sm:text-2xl font-bold font-mono text-pink-400 mb-1">Full-Stack</div>
            <div className="text-xs font-semibold text-slate-200">MERN & Python</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Scalable Architecture</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-card text-left">
            <div className="text-xl sm:text-2xl font-bold font-mono text-green-400 mb-1">DSA & Core</div>
            <div className="text-xs font-semibold text-slate-200">Algorithms & OS</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Problem Solving Mindset</div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-card text-left">
            <div className="text-xl sm:text-2xl font-bold font-mono text-pink-400 mb-1">Target</div>
            <div className="text-xs font-semibold text-slate-200">FAANG / High-Scale</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Distributed Products</div>
          </div>
        </div>

      </div>
    </section>
  );
}
