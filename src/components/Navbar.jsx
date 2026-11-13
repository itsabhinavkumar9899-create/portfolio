import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  FileText, 
  Send,
  Code2,
  ChevronRight,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SocialIconWithCard from './SocialIconWithCard';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none transition-all duration-300">
      <div className={`pointer-events-auto w-full max-w-6xl rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'glass-nav shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border border-slate-700/60 py-2.5 px-4 sm:py-3 sm:px-5' 
          : 'bg-slate-950/75 md:bg-slate-950/40 md:backdrop-blur-md border border-slate-800/50 py-2.5 px-4 sm:py-3.5 sm:px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram & Name */}
          <a 
            href="#home" 
            className="group flex items-center gap-2.5 text-slate-100 hover:text-green-400 transition-colors"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-green-500/25 via-emerald-500/20 to-pink-500/25 border border-green-400/50 text-green-300 font-mono font-bold text-sm shadow-[0_0_15px_rgba(74,222,128,0.3)] group-hover:scale-105 transition-transform">
              <span>AK</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-green-300 transition-colors">
                Abhinav Kumar
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-950/60 border border-slate-800/60 rounded-full px-3 py-1.5 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1 text-xs font-medium transition-all rounded-full ${
                    isActive 
                      ? 'text-green-300 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-green-500/15 via-emerald-500/15 to-pink-500/15 border border-green-500/35 rounded-full -z-10 shadow-[0_0_12px_rgba(74,222,128,0.25)]"></span>
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <SocialIconWithCard
              platform="github"
              placement="bottom"
              align="right"
              iconClassName="w-4 h-4"
              buttonClassName="inline-flex items-center justify-center p-2 text-slate-300 hover:text-green-400 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm"
            />
            <div className="hidden lg:flex items-center gap-2">
              <SocialIconWithCard
                platform="linkedin"
                placement="bottom"
                align="right"
                iconClassName="w-4 h-4"
                buttonClassName="inline-flex items-center justify-center p-2 text-slate-300 hover:text-pink-400 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm"
              />
              <SocialIconWithCard
                platform="email"
                placement="bottom"
                align="right"
                iconClassName="w-4 h-4"
                buttonClassName="inline-flex items-center justify-center p-2 text-slate-300 hover:text-green-400 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm"
              />
            </div>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/60 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-sm"
              title="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-pink-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-green-400 via-emerald-400 to-pink-500 hover:from-green-300 hover:to-pink-400 rounded-xl shadow-[0_0_20px_rgba(74,222,128,0.35)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Get In Touch</span>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-slate-950" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <SocialIconWithCard
              platform="github"
              placement="bottom"
              align="right"
              iconClassName="w-4 h-4"
              buttonClassName="inline-flex items-center justify-center p-2 text-slate-300 hover:text-green-400 bg-slate-800/70 border border-slate-700/60 rounded-xl"
            />

            <button
              onClick={onOpenResume}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/70 border border-slate-700/60 rounded-xl text-xs"
              title="View Resume"
            >
              <FileText className="w-4 h-4 text-pink-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/70 border border-slate-700/60 rounded-xl focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-green-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2 pb-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-sm transition-all ${
                  activeSection === item.href.substring(1)
                    ? 'text-green-300 bg-green-950/40 border border-green-800/40 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}

            <div className="pt-2 mt-2 border-t border-slate-800/60 flex flex-col gap-2">
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 hover:border-green-500/40"
                >
                  <Github className="w-3.5 h-3.5 text-green-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 hover:border-pink-400/40"
                >
                  <Linkedin className="w-3.5 h-3.5 text-pink-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 hover:border-green-500/40"
                >
                  <Mail className="w-3.5 h-3.5 text-green-400" />
                  <span>Gmail</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:bg-slate-700"
              >
                <FileText className="w-4 h-4 text-pink-400" />
                <span>View Full Resume</span>
              </button>
              
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl bg-gradient-to-r from-green-400 via-emerald-400 to-pink-500 text-slate-950 shadow-lg"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
