import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Play, Terminal, Zap, Shield, SearchCode } from 'lucide-react';

export const Testing: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [testOutput, setTestOutput] = useState<string[]>([]);
  const [progress, setProgress] = useState(100);

  const mockLogs = [
    ' RUN  v2.4.1 — d:/Engineering/TY-SEM-2/Major Project/Ollama Coder',
    ' ',
    ' ✓ tests/utils/diff.test.ts (8 tests) (42ms)',
    ' ✓ tests/core/patch.test.ts (6 tests) (89ms)',
    ' ✓ tests/rag/indexer.test.ts (10 tests) (112ms)',
    ' ✓ tests/rag/retriever.test.ts (8 tests) (65ms)',
    ' ✓ tests/agent/planner.test.ts (6 tests) (184ms)',
    ' ',
    ' Test Files  5 passed (5)',
    '      Tests  38 passed (38)',
    '   Start at  18:14:02',
    '   Duration  492ms (transform 120ms, setup 0ms, collect 80ms)'
  ];

  useEffect(() => {
    setTestOutput(mockLogs);
  }, []);

  const runTests = () => {
    setIsRunning(true);
    setTestOutput([' RUN  v2.4.1 — d:/Engineering/TY-SEM-2/Major Project/Ollama Coder', ' ']);
    setProgress(0);

    let idx = 2;
    const interval = setInterval(() => {
      if (idx < mockLogs.length) {
        setTestOutput((prev) => [...prev, mockLogs[idx]]);
        setProgress(((idx + 1) / mockLogs.length) * 100);
        idx++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setProgress(100);
      }
    }, 180);
  };

  const testTypes = [
    {
      title: 'Property-Based Testing',
      desc: 'Generates random patch instructions to verify that the AST parser and patch engine never produce corrupt code files.',
      icon: <Shield className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Retrieval Accuracy',
      desc: 'Checks embedding retrieval against fixed benchmark workspace files, ensuring semantic queries score > 0.85.',
      icon: <SearchCode className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Diff Rendering',
      desc: 'Verifies character-level insertions and deletions align correctly with VS Code TextEditor viewport bounds.',
      icon: <Zap className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="testing" className="py-24 relative overflow-hidden bg-slate-950/20 border-y border-dark-border">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Robust & Fully <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Tested</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            We ensure precision code edits. Our Vitest suites validate indexing boundaries, embedding queries, and diff alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Test summary & interactive Vitest Console */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl glassmorphism border-dark-border bg-slate-950/60 p-6 md:p-8">
            
            {/* Terminal Console Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 select-none">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold text-gray-200">vitest --run</span>
              </div>
              
              <button
                disabled={isRunning}
                onClick={runTests}
                className={`px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded flex items-center space-x-1.5 transition-all ${
                  isRunning ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'Running...' : 'Re-Run Suite'}</span>
              </button>
            </div>

            {/* Test console lines */}
            <div className="flex-1 font-mono text-[11px] md:text-xs text-left min-h-[220px] bg-slate-950 p-4 rounded-xl border border-white/5 leading-relaxed overflow-y-auto scrollbar">
              {testOutput.map((line, idx) => {
                let colorClass = 'text-gray-300';
                if (line.includes('✓')) colorClass = 'text-green-400 font-medium';
                if (line.includes('RUN')) colorClass = 'text-cyan-400';
                if (line.includes('passed')) colorClass = 'text-green-400 font-bold';
                return (
                  <div key={idx} className={colorClass}>
                    {line}
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-4 w-full bg-slate-900 rounded-full h-1 overflow-hidden">
              <motion.div 
                className="bg-emerald-500 h-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: isRunning ? 0.1 : 0.4 }}
              />
            </div>
          </div>

          {/* Right Side: Specific Test Focus Area Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Main Stats Block */}
            <div className="rounded-2xl glassmorphism border-emerald-500/20 bg-emerald-950/10 p-6 md:p-8 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] text-emerald-400/80 uppercase font-mono tracking-widest block mb-1">Vitest Runner Summary</span>
                <h3 className="text-4xl font-extrabold text-white">38 / 38</h3>
                <p className="text-xs text-gray-400 font-light mt-1">Local tests executed successfully</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <CheckCircle2 className="w-9 h-9 animate-pulse" />
              </div>
            </div>

            {/* Focus cards */}
            <div className="space-y-4 flex-1">
              {testTypes.map((type, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl glassmorphism border-dark-border flex items-start space-x-4 text-left hover:border-cyan-500/10 transition-colors"
                >
                  <div className="p-2 bg-slate-950 rounded-lg border border-dark-border">
                    {type.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{type.title}</h4>
                    <p className="text-xs text-gray-400 font-light mt-1 leading-normal">
                      {type.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
