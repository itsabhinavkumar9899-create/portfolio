import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Code2, 
  Binary, 
  Database, 
  BrainCircuit, 
  Cpu, 
  Network 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const subjectIcons = {
    "Data Structures & Algorithms (DSA)": <Binary className="w-4 h-4 text-green-400" />,
    "Object-Oriented Programming (Java / C++)": <Code2 className="w-4 h-4 text-pink-400" />,
    "Database Management Systems (DBMS & SQL)": <Database className="w-4 h-4 text-green-400" />,
    "Theory of Computation & Formal Languages": <Cpu className="w-4 h-4 text-pink-400" />,
    "Machine Learning & Statistical Methods": <BrainCircuit className="w-4 h-4 text-green-400" />,
    "Operating Systems & Process Concurrency": <Cpu className="w-4 h-4 text-pink-400" />,
    "Computer Networks & Protocols": <Network className="w-4 h-4 text-green-300" />,
    "Software Engineering & System Architecture": <CheckCircle2 className="w-4 h-4 text-green-400" />,
  };

  return (
    <section id="education" className="py-16 sm:py-24 px-4 relative bg-slate-950/15">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-green-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>04. ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-300 to-pink-500">Theoretical CS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Deepening computational theory, mathematical modeling, and engineering systems at Vishveshwarya Group of Institutions.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border border-slate-800/80 mb-10 sm:mb-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Accent */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-green-500/15 via-pink-500/15 to-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Degree & Institution Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/70 border border-pink-800/50 text-pink-300 text-xs font-mono">
                <Award className="w-3.5 h-3.5" />
                <span>Undergraduate Degree Program</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {educationData.degree}
              </h3>
              
              <div className="text-lg font-medium text-green-300">
                Specialization: {educationData.major}
              </div>

              <div className="text-base text-slate-300 font-semibold flex items-center gap-2">
                <span>{educationData.institution}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  {educationData.duration} (Graduation: 2028)
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  {educationData.location}
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed pt-2">
                {educationData.description}
              </p>
            </div>

            {/* Quick Metrics & Target Box */}
            <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Program Highlights & Focus
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-green-950/60 border border-green-800/40 text-green-400">
                    <Binary className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Algorithmic Problem Solving</div>
                    <div className="text-[11px] text-slate-400">Rigorous practice across arrays, dynamic programming, trees, and graphs.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-pink-950/60 border border-pink-800/40 text-pink-400">
                    <BrainCircuit className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Data Science & ML Pipeline</div>
                    <div className="text-[11px] text-slate-400">Statistical inference, feature engineering, and neural network foundations.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-green-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Hardware-Software Systems</div>
                    <div className="text-[11px] text-slate-400">Computer organization, memory hierarchy, and process scheduling.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Core Subjects Grid */}
          <div className="mt-8 pt-8 border-t border-slate-800/80">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-green-400" />
              <span>Core Academic Coursework & Focus Areas</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {educationData.coreSubjects.map((sub, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-green-400/40 flex items-center gap-2.5 transition-colors"
                >
                  <div className="shrink-0">
                    {subjectIcons[sub] || <CheckCircle2 className="w-4 h-4 text-green-400" />}
                  </div>
                  <span className="text-xs font-medium text-slate-200">
                    {sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4-Year Academic Progression Timeline */}
        <div className="space-y-4">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 text-center mb-6">
            Undergraduate Engineering Road to 2028
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {educationData.milestones.map((m, i) => {
              const phaseColors = [
                { text: 'text-green-400', dot: 'bg-green-400' },
                { text: 'text-pink-400', dot: 'bg-pink-400' },
                { text: 'text-emerald-400', dot: 'bg-emerald-400' },
                { text: 'text-pink-300', dot: 'bg-pink-300' },
              ][i % 4];

              return (
                <div 
                  key={i}
                  className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 relative flex flex-col justify-between"
                >
                  <div>
                    <div className={`text-xs font-mono font-bold ${phaseColors.text} mb-1`}>
                      YEAR {m.year}
                    </div>
                    <div className="text-sm font-semibold text-white mb-2">
                      {m.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <span className={`w-1.5 h-1.5 rounded-full ${phaseColors.dot}`}></span>
                    Phase {i + 1} of 4
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
