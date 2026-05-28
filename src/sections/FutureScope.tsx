import React from 'react';
import { Compass, Sparkles, GitBranch, ShieldAlert, Cpu } from 'lucide-react';

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'done' | 'current' | 'future';
}

export const FutureScope: React.FC = () => {
  const roadmap: RoadmapItem[] = [
    {
      quarter: 'Q3 2026',
      title: 'Advanced AST-Based Parsing',
      description: 'Deeper syntax trees analysis to track cross-class dependencies and prevent circular reference compilation bugs.',
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      status: 'done'
    },
    {
      quarter: 'Q4 2026',
      title: 'Autonomous Repo Agents',
      description: 'Fully autonomous developer agents capable of writing unit tests, reviewing errors, and running compilation loops.',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      status: 'current'
    },
    {
      quarter: 'H1 2027',
      title: 'Smarter Multi-File Refactoring',
      description: 'Generate surgical edits spanning 5+ dependent modules simultaneously while updating import and export bindings.',
      icon: <GitBranch className="w-5 h-5 text-purple-400" />,
      status: 'future'
    },
    {
      quarter: 'H2 2027',
      title: 'Local AI Test Generation & CI',
      description: 'Auto-write Vitest/Pytest files alongside patch generation. Run pre-commit testing checks locally inside containerized steps.',
      icon: <Sparkles className="w-5 h-5 text-pink-400" />,
      status: 'future'
    },
    {
      quarter: '2028 & Beyond',
      title: 'Collaborative Local Clusters',
      description: 'Share local GPU Ollama model execution budgets across LAN networks, enabling teams to aggregate local VRAM resources securely.',
      icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
      status: 'future'
    }
  ];

  return (
    <section id="future-scope" className="py-24 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Roadmap & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Future Scope</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Follow our path as we transition from simple patch completions to collaborative local multi-agent software engineering.
          </p>
        </div>

        {/* Roadmap timeline layout */}
        <div className="relative border-l border-dark-border pl-6 md:pl-10 space-y-12 max-w-4xl mx-auto text-left">
          
          {roadmap.map((item, idx) => {
            const isCurrent = item.status === 'current';
            const isDone = item.status === 'done';
            
            return (
              <div key={idx} className="relative group">
                
                {/* Timeline node dot */}
                <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full border transition-all ${
                  isCurrent 
                    ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)] animate-pulse' 
                    : isDone
                      ? 'bg-emerald-500 border-emerald-500'
                      : 'bg-slate-950 border-gray-700'
                }`} />

                {/* Card Container */}
                <div className={`p-6 rounded-2xl glassmorphism border-dark-border transition-all duration-300 relative ${
                  isCurrent ? 'border-cyan-500/25 shadow-[0_0_15px_rgba(6,182,212,0.05)] bg-slate-950/70' : 'bg-slate-950/30'
                }`}>
                  
                  {/* Status Tag */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold tracking-widest ${
                      isCurrent ? 'text-cyan-400' : isDone ? 'text-emerald-400' : 'text-gray-500'
                    }`}>
                      {item.quarter}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono font-semibold ${
                      isCurrent 
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                        : isDone
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-900 text-gray-500 border border-white/5'
                    }`}>
                      {isCurrent ? 'In Development' : isDone ? 'Shipped' : 'Research'}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-1.5 bg-slate-950 rounded-lg border border-dark-border">
                      {item.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
