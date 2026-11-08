import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo, educationData, projectsData, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `======================================================
${personalInfo.name.toUpperCase()}
${personalInfo.role}
Email: ${personalInfo.email}
Location: ${personalInfo.location}
Target: Software Engineering (High-Scale & FAANG/MANGA)
======================================================

CAREER OBJECTIVE:
${personalInfo.objective}

EDUCATION:
- ${educationData.degree} in ${educationData.major}
  ${educationData.institution} (${educationData.duration})
  Graduation Year: ${personalInfo.gradYear}
  Focus: Data Structures & Algorithms, Database Systems, Machine Learning, Operating Systems.

TECHNICAL SKILLS:
- Languages: Python, JavaScript (ES6+), TypeScript, Java, C, C++, HTML5, CSS3
- Frameworks & Libraries: React, Node.js, Express, Vite, Tailwind CSS
- Databases & Backend: MongoDB, Mongoose, RESTful APIs
- Developer Tools: Git, GitHub, VS Code, Vercel

FEATURED SOFTWARE PROJECTS:
1. Full-Stack API Testing Tool (Postman Clone)
   - Built with React, Vite, Node.js, Express, MongoDB, Mongoose, Vercel.
   - Real-time HTTP request executor (GET, POST, PUT, DELETE, PATCH).
   - Saved request collections and history tracking in MongoDB with schema validation.

2. Predictive ML Analytics & Housing Intelligence Engine
   - Built with Python, Scikit-Learn, Pandas, NumPy, React.
   - Multivariate regression pipeline achieving 91.4% R² variance score.
   - Interactive parameter toggling visualizer and high-throughput REST API inference.

3. Distributed Real-Time Task & Collab Workspace
   - Built with React, Node.js, Express, MongoDB, WebSockets.
   - Real-time state synchronization, optimistic UI updates, and RBAC security.

4. AlgoVisualizer - Graph & Sorting Algorithm Engine
   - Built with TypeScript, React, HTML5 Canvas, Tailwind CSS.
   - Real-time visualization for Dijkstra's, A*, QuickSort, and BFS/DFS.
======================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Abhinav_Kumar_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Action Header Bar */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Curriculum Vitae / Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm hover:scale-105 transition-transform"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body (FAANG-Format Preview) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 font-sans space-y-6 select-text">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-semibold text-cyan-400 font-mono mt-1">
                {personalInfo.role}
              </p>
            </div>

            <div className="mt-4 sm:mt-0 text-xs text-slate-400 space-y-1 sm:text-right font-mono">
              <div>{personalInfo.email}</div>
              <div>{personalInfo.location}</div>
              <div>B.Tech Graduation: 2028</div>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-2">
              Career Objective & Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-white">
                <span>{educationData.institution}</span>
                <span className="text-xs font-mono text-cyan-400">{educationData.duration}</span>
              </div>
              <div className="text-xs text-slate-300 font-medium">
                {educationData.degree} in {educationData.major}
              </div>
              <p className="text-xs text-slate-400 pt-1">
                <strong className="text-slate-300">Core Coursework:</strong> {educationData.coreSubjects.slice(0, 6).join(', ')}.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              Technical Stack & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-white">Programming Languages:</span>{' '}
                <span className="text-slate-300">Python, JavaScript (ES6+), TypeScript, Java, C, C++, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-semibold text-white">Frameworks & Libraries:</span>{' '}
                <span className="text-slate-300">React, Node.js, Express, Vite, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-white">Databases & API Design:</span>{' '}
                <span className="text-slate-300">MongoDB, Mongoose, RESTful APIs, JSON Schemas</span>
              </div>
              <div>
                <span className="font-semibold text-white">Developer Tools & Environments:</span>{' '}
                <span className="text-slate-300">Git, GitHub, VS Code, Vercel, Postman</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              Key Engineering Projects
            </h2>

            <div className="space-y-4">
              {projectsData.map((project) => (
                <div key={project.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-200">
                    <span className="text-white text-sm">{project.title}</span>
                    <span className="font-mono text-cyan-400 text-[11px]">[{project.tech.slice(0, 4).join(', ')}]</span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-300">
                    {project.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
