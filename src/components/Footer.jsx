import React from 'react';
import { 
  ArrowUp, 
  Code2, 
  Heart, 
  Terminal 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SocialIconWithCard from './SocialIconWithCard';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/85 md:bg-slate-950/60 md:backdrop-blur-md py-10 sm:py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
            <span>{personalInfo.name}</span>
            <span className="text-xs font-mono text-slate-500">• Portfolio 2.0</span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            Full-Stack Developer & Data Science Student at Vishveshwarya Group of Institutions (VGI), Greater Noida.
          </p>
          <div className="text-[11px] font-mono text-slate-400 mt-2">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
        </div>

        {/* Quick Nav & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-400">
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-pink-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-pink-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <SocialIconWithCard
              platform="github"
              placement="top"
              align="end-left"
              iconClassName="w-4 h-4"
              buttonClassName="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-green-400 hover:border-green-400/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            />
            <SocialIconWithCard
              platform="linkedin"
              placement="top"
              align="end-center"
              iconClassName="w-4 h-4"
              buttonClassName="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-400/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            />
            <SocialIconWithCard
              platform="email"
              placement="top"
              align="end-right"
              iconClassName="w-4 h-4"
              buttonClassName="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-green-400 hover:border-green-400/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            />
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-green-400 hover:border-green-400/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Engineering watermark */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 text-center gap-2">
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-pink-400" />
          <span>Architected with React, Vite, Tailwind CSS & Modular Components</span>
        </div>
        <div className="text-slate-400">
          Targeting High-Scale Systems • FAANG/MANGA Engineering
        </div>
      </div>
    </footer>
  );
}
