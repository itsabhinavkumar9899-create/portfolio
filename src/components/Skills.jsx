import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  FileCode, 
  Coffee, 
  Cpu, 
  Layout, 
  Boxes, 
  Zap, 
  Palette, 
  Sparkles, 
  Server, 
  Layers, 
  Database, 
  DatabaseZap, 
  Network, 
  GitBranch, 
  Github, 
  MonitorPlay, 
  Cloud,
  Search,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const iconMap = {
    Terminal: <Terminal className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-yellow-400" />,
    FileCode: <FileCode className="w-5 h-5 text-blue-400" />,
    Coffee: <Coffee className="w-5 h-5 text-orange-400" />,
    Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
    Layout: <Layout className="w-5 h-5 text-pink-400" />,
    Boxes: <Boxes className="w-5 h-5 text-cyan-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Palette: <Palette className="w-5 h-5 text-sky-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-indigo-400" />,
    Server: <Server className="w-5 h-5 text-emerald-400" />,
    Layers: <Layers className="w-5 h-5 text-slate-300" />,
    Database: <Database className="w-5 h-5 text-emerald-400" />,
    DatabaseZap: <DatabaseZap className="w-5 h-5 text-green-400" />,
    Network: <Network className="w-5 h-5 text-teal-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-orange-500" />,
    Github: <Github className="w-5 h-5 text-slate-200" />,
    MonitorPlay: <MonitorPlay className="w-5 h-5 text-blue-400" />,
    Cloud: <Cloud className="w-5 h-5 text-cyan-400" />,
  };

  const categories = [
    'All',
    'Languages',
    'Frontend',
    'Backend & Database',
    'Developer Tools'
  ];

  const allSkills = [
    ...skillsData.languages,
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.tools
  ];

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="skills" className="py-24 px-4 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>02. TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Core Stack</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            A comprehensive suite of modern engineering technologies I utilize to design, build, and deploy production-grade software.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800/80 shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword (e.g. React, Python)"
              className="w-full pl-9 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 rounded-xl glass-card glass-card-hover border border-slate-800/70 hover:border-cyan-500/40 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                    skill.level === 'Expert' 
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/40' 
                      : skill.level === 'Advanced'
                      ? 'bg-blue-950/80 text-blue-300 border border-blue-800/40'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{skill.category}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <CheckCircle2 className="w-3 h-3 text-cyan-500" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No results fallback */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p className="text-sm font-mono">No technologies found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs text-cyan-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Architecture Stack Badge Highlight */}
        <div className="mt-14 p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-base font-bold text-white mb-1">
              Primary Engineering Stack: MERN + Python Systems
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Equipped to build scalable, production-grade applications from high-concurrency Node.js backends and MongoDB databases to responsive React client interfaces and Python data models.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            {['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'TypeScript', 'Vercel'].map(t => (
              <span key={t} className="px-3 py-1 rounded-lg bg-slate-950 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
