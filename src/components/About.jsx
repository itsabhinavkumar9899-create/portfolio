import React, { useState } from 'react';
import { 
  User, 
  Terminal, 
  Cpu, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  Rocket, 
  Code2, 
  Copy, 
  Check, 
  GraduationCap, 
  MapPin, 
  Target 
} from 'lucide-react';
import { personalInfo, careerPhilosophy } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('philosophy');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const terminalSnippets = {
    philosophy: `// abhinav_engineer_manifesto.ts
export interface EngineerProfile {
  name: "${personalInfo.name}";
  focus: "Full-Stack Systems & Data-Driven Architectures";
  mindset: "First-principles problem solving with scale in mind";
  currentYear: "2024-2028 (Undergraduate B.Tech)";
}

export const corePhilosophy = {
  scalability: "Design for 10x throughput, decouple bottlenecks early",
  cleanCode: "Self-documenting, type-safe, and modular micro-modules",
  dataScience: "Leverage statistical modeling to turn raw inputs into intelligence",
  target: "High-scale engineering teams (FAANG/MANGA)"
};`,
    systemInfo: `{
  "developer": "${personalInfo.name}",
  "institution": "${personalInfo.institution}",
  "major": "${personalInfo.degree}",
  "graduationYear": 2028,
  "core_competencies": [
    "Distributed Web Applications",
    "Data Structures & Algorithms (Java/C++)",
    "RESTful API Architecture",
    "MongoDB & Document Data Modeling",
    "Machine Learning & Predictive Analysis"
  ],
  "location": "${personalInfo.location}",
  "status": "Available for High-Impact Software Engineering Internships"
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(terminalSnippets[activeTab]);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Fundamentals Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Real-World Software</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Bridging algorithmic rigor, distributed full-stack architecture, and machine learning insight.
          </p>
        </div>

        {/* Narrative & Interactive Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-slate-700/80 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>The Engineering Journey</span>
              </h3>
              <p className="text-slate-300">
                I am a Computer Science & Data Science undergraduate at <strong className="text-white font-medium">Vishveshwarya Group of Institutions (VGI), Greater Noida</strong>, graduating in <span className="text-cyan-400 font-mono font-medium">2028</span>. My engineering journey is driven by an obsession with how high-scale distributed systems and data pipelines operate under load.
              </p>
              <p className="mt-3 text-slate-300">
                Rather than treating software as merely syntax or UI templates, I study software from foundational principles: how data structures optimize memory, how database queries affect latency, and how clean modular code preserves developer velocity.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-slate-700/80 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                <span>FAANG & High-Scale Product Ambition</span>
              </h3>
              <p className="text-slate-300">
                {personalInfo.objective}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  #ScalableSystems
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  #MERNStack
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  #DataScience
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  #CleanCode
                </span>
              </div>
            </div>

            {/* Quick Specs Pill Box */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[11px]">Degree & Batch</div>
                  <div className="font-semibold text-slate-200">B.Tech (2024 - 2028)</div>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[11px]">Location</div>
                  <div className="font-semibold text-slate-200">Greater Noida, India</div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Code / Terminal Window */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950/95 shadow-2xl backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400">abhinav@portfolio-os: ~</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex bg-slate-950 rounded-lg p-0.5 border border-slate-800">
                    <button
                      onClick={() => setActiveTab('philosophy')}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                        activeTab === 'philosophy' 
                          ? 'bg-slate-800 text-cyan-300 font-semibold' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      manifesto.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('systemInfo')}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all ${
                        activeTab === 'systemInfo' 
                          ? 'bg-slate-800 text-cyan-300 font-semibold' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      spec.json
                    </button>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="p-1.5 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                    title="Copy code"
                  >
                    {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 overflow-x-auto text-xs sm:text-sm font-mono text-slate-300 leading-relaxed max-h-[380px] select-text">
                <pre className="text-slate-300">
                  <code>{terminalSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Status */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  TypeScript / Node Runtime Active
                </span>
                <span>UTF-8 • LF</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Core Pillars of Engineering Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {careerPhilosophy.map((item, idx) => {
            const icons = {
              Layers: <Layers className="w-6 h-6 text-cyan-400" />,
              TrendingUp: <TrendingUp className="w-6 h-6 text-blue-400" />,
              CheckCircle2: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
              Rocket: <Rocket className="w-6 h-6 text-purple-400" />
            };

            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl glass-card glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center mb-4">
                    {icons[item.icon] || <Cpu className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-cyan-400/80">
                  Core Principle #{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
