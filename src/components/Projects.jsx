import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Sparkles, 
  CheckCircle, 
  Terminal, 
  ArrowUpRight,
  Info,
  X,
  Database,
  Cpu,
  Server
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filters = ['All', 'Full Stack', 'Data Science', 'Web Applications'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. FEATURED SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Style <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Software Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl">
            Real-world web architectures, distributed platforms, and machine learning models engineered for scale, reliability, and performance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                project.featured 
                  ? 'border-slate-700/80 bg-slate-900/60 hover:border-cyan-500/50 hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.2)]' 
                  : 'border-slate-800/80 bg-slate-950/60 hover:border-slate-700/80'
              }`}
            >
              {/* Card Top Preview / Banner Bar */}
              <div className="p-6 pb-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-800/40">
                    {project.badge || project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      aria-label="View source on GitHub"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:text-white hover:bg-cyan-500/40 border border-cyan-500/30 transition-colors"
                      aria-label="View Live Project"
                      title="Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-cyan-400" />
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Architectural Highlights */}
                <div className="mt-5 space-y-2 border-t border-slate-800/70 pt-4">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Architectural Highlights</span>
                  </div>
                  {project.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Tags & Deep Dive Trigger */}
              <div className="p-6 pt-4 bg-slate-950/50 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap self-end sm:self-auto"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Deep Dive Spec</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Deep Dive Specification Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    System Architecture & Design Document
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {activeProjectModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
                
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Executive Summary
                  </h4>
                  <p>{activeProjectModal.description}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Full Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {activeProjectModal.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Technology & Ecosystem Components
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-700 text-cyan-300 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono">
                  <div className="text-slate-400 mb-1 flex items-center gap-1.5">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span>Deployment & CI/CD Status</span>
                  </div>
                  <div className="text-slate-200">
                    Continuous delivery enabled via Git webhooks into Vercel cloud serverless edge network. Response logs persisted to MongoDB cluster.
                  </div>
                </div>

              </div>

              {/* Modal Actions */}
              <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-end gap-3">
                <a
                  href={activeProjectModal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={activeProjectModal.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Deployment</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
