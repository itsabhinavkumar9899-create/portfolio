import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Send, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  Terminal,
  Code2,
  Database,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* Background Ambient Glows & Grid Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Radial Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-20 -right-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/70 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-8 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">
            {personalInfo.availability}
          </span>
          <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40">
            B.Tech '28
          </span>
        </div>

        {/* Hierarchy Greeting & Name */}
        <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-cyan-400 mb-3 flex items-center justify-center gap-2">
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
            <span className="text-cyan-400 font-bold">&gt;</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              {displayedText}
            </span>
            <span className="w-2.5 h-7 bg-cyan-400 animate-pulse inline-block"></span>
          </div>
        </div>

        {/* Tagline & Objective */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-10">
          {personalInfo.tagline}
        </p>

        {/* High-Impact CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Send className="w-4 h-4 text-slate-400" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Quick Social & Developer Links */}
        <div className="flex items-center gap-4 mb-14 text-slate-400">
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Direct"
            className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Stats Strip / Engineering Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-slate-800/80">
          <div className="p-4 rounded-xl glass-card text-left">
            <div className="text-2xl font-bold font-mono text-cyan-400 mb-1">2028</div>
            <div className="text-xs font-semibold text-slate-200">B.Tech Degree</div>
            <div className="text-[11px] text-slate-400 mt-0.5">CS & Data Science @ VGI</div>
          </div>

          <div className="p-4 rounded-xl glass-card text-left">
            <div className="text-2xl font-bold font-mono text-blue-400 mb-1">Full-Stack</div>
            <div className="text-xs font-semibold text-slate-200">MERN & Python</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Scalable Architecture</div>
          </div>

          <div className="p-4 rounded-xl glass-card text-left">
            <div className="text-2xl font-bold font-mono text-purple-400 mb-1">DSA & Core</div>
            <div className="text-xs font-semibold text-slate-200">Algorithms & OS</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Problem Solving Mindset</div>
          </div>

          <div className="p-4 rounded-xl glass-card text-left">
            <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">Target</div>
            <div className="text-xs font-semibold text-slate-200">FAANG / High-Scale</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Distributed Products</div>
          </div>
        </div>

      </div>
    </section>
  );
}
