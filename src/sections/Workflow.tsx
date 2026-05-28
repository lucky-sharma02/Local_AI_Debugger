import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Compass, BrainCircuit, Search, Code, CheckSquare, RefreshCw, Layers, ArrowRight 
} from 'lucide-react';

interface Step {
  number: number;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  details: string;
  mockVisual: React.ReactNode;
}

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: Step[] = [
    {
      number: 1,
      title: 'User sends coding request',
      icon: <Send className="w-5 h-5 text-cyan-400" />,
      shortDesc: 'Developer asks to modify or refactor something in VS Code.',
      details: 'You prompt Ollama Coder to "add a caching layer to apply_patch in core/agent.py" or select a code block and request modifications.',
      mockVisual: (
        <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/20 font-mono text-[11px] text-gray-300">
          <div className="text-gray-500 border-b border-white/5 pb-2 mb-2 flex justify-between">
            <span>User Input</span>
            <span className="text-cyan-400">Prompt</span>
          </div>
          <p className="text-cyan-300 font-sans">"Refactor the apply_patch function in core/agent.py to cache applied symbol hashes so we don't apply duplicate edits."</p>
        </div>
      )
    },
    {
      number: 2,
      title: 'Symbol extraction',
      icon: <Compass className="w-5 h-5 text-purple-400" />,
      shortDesc: 'Parsing workspace symbols and locating target code references.',
      details: 'The system reads the active files and extracts class names, function boundaries, and import structures to identify where changes belong.',
      mockVisual: (
        <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/20 font-mono text-[11px] text-gray-300">
          <div className="text-gray-500 border-b border-white/5 pb-2 mb-2 flex justify-between">
            <span>AST Symbol Tree</span>
            <span className="text-purple-400">Resolved Targets</span>
          </div>
          <div className="text-purple-300">Target File: core/agent.py</div>
          <div className="pl-4 mt-1 text-gray-400">
            └─ Symbol: <span className="text-white">apply_patch</span> [Lines 42-68]<br/>
            └─ Dependencies: <span className="text-white">WorkspaceState, DiffEngine</span>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: 'Planner agent analysis',
      icon: <BrainCircuit className="w-5 h-5 text-emerald-400" />,
      shortDesc: 'Breaking down the goal into structural code changes.',
      details: 'A dedicated Planner Agent determines which classes or files need modifications and decides the order in which code changes should be coded.',
      mockVisual: (
        <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/20 font-mono text-[11px] text-gray-300">
          <div className="text-gray-500 border-b border-white/5 pb-2 mb-2 flex justify-between">
            <span>Planner Agent Execution</span>
            <span className="text-emerald-400">Execution Plan</span>
          </div>
          <div className="text-emerald-300">1. Modify class core.agent.PatchCoderAgent</div>
          <div className="text-gray-400 pl-4">→ Add dictionary field self.hash_cache</div>
          <div className="text-emerald-300 mt-1">2. Modify apply_patch(self, patch)</div>
          <div className="text-gray-400 pl-4">→ Check hash in hash_cache. If true, skip.</div>
        </div>
      )
    },
    {
      number: 4,
      title: 'Retrieval-Augmented Generation',
      icon: <Search className="w-5 h-5 text-amber-400" />,
      shortDesc: 'Retrieving context from the vector store index.',
      details: 'The RAG system performs vector and keyword searches on your codebase index to fetch dependent symbols and import contexts.',
      mockVisual: (
        <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/20 font-mono text-[11px] text-gray-300">
          <div className="text-gray-500 border-b border-white/5 pb-2 mb-2 flex justify-between">
            <span>RAG Semantic Query</span>
            <span className="text-amber-400">Context Loaded</span>
          </div>
          <div className="text-amber-300">Query: "hash_cache apply_patch"</div>
          <div className="mt-1 text-gray-400">
            [Match 1] core/agent.py (score: 0.94)<br/>
            [Match 2] utils/hashing.py (score: 0.81) <span className="text-emerald-400">← Imported</span>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: 'Patch generation',
      icon: <Code className="w-5 h-5 text-pink-400" />,
      shortDesc: 'Writing surgical code edits (patch diffs) for symbols.',
      details: 'The Patch Coder model runs locally on Ollama to write precise, AST-valid diff modifications for the targeted functions.',
      mockVisual: (
        <div className="bg-slate-950 p-4 rounded-xl border border-pink-500/20 font-mono text-[11px] text-gray-300">
          <div className="text-gray-500 border-b border-white/5 pb-2 mb-2 flex justify-between">
            <span>Local Patch Generation</span>
            <span className="text-pink-400">Raw Diff</span>
          </div>
          <div className="text-red-400">- def apply_patch(self, patch):</div>
          <div className="text-green-400">+ def apply_patch(self, patch):</div>
          <div className="text-green-400">+     patch_hash = hash_content(patch)</div>
          <div className="text-green-400">+     if patch_hash in self.hash_cache: return</div>
        </div>
      )
    },
    {
      number: 6,
      title: 'Inline diff rendering',
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      shortDesc: 'Showing changes inline inside the active editor tab.',
      details: 'The VS Code decoration layer renders insertions and deletions inline, allowing you to review them before saving.',
      mockVisual: (
        <div className="bg-slate-950 p-4 rounded-xl border border-sky-500/20 font-mono text-[11px] text-gray-300">
          <div className="text-gray-500 border-b border-white/5 pb-2 mb-2 flex justify-between">
            <span>VS Code Decorations</span>
            <span className="text-sky-400">Diff Layer</span>
          </div>
          <div className="bg-red-950/40 border-l-2 border-red-500 px-2 py-0.5 text-red-300">
            - self.engine.apply(patch)
          </div>
          <div className="bg-emerald-950/40 border-l-2 border-emerald-500 px-2 py-0.5 text-emerald-300">
            + self.hash_cache.add(patch_hash)
          </div>
        </div>
      )
    },
    {
      number: 7,
      title: 'Accept or Reject patch',
      icon: <CheckSquare className="w-5 h-5 text-indigo-400" />,
      shortDesc: 'Developer reviews changes and accepts or rejects them.',
      details: 'Review the changes, test compiling, and either click "Accept" to merge the code, or "Reject" to undo or ask the agent to rewrite.',
      mockVisual: (
        <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/20 font-mono text-[11px] text-gray-300">
          <div className="text-gray-500 border-b border-white/5 pb-2 mb-2 flex justify-between">
            <span>Developer Review</span>
            <span className="text-indigo-400">Controls</span>
          </div>
          <div className="flex space-x-2 mt-2">
            <button className="px-3 py-1 bg-green-500/25 border border-green-500 text-green-300 rounded font-semibold text-[10px]">
              Accept Patch (Enter)
            </button>
            <button className="px-3 py-1 bg-red-500/25 border border-red-500 text-red-300 rounded font-semibold text-[10px]">
              Reject (Esc)
            </button>
          </div>
        </div>
      )
    },
    {
      number: 8,
      title: 'Final workspace update',
      icon: <RefreshCw className="w-5 h-5 text-blue-400" />,
      shortDesc: 'Writing approved changes to disk and re-indexing.',
      details: 'The extension flushes updates to files, verifies syntax, and triggers the incremental indexer to re-vectorize the updated symbols.',
      mockVisual: (
        <div className="bg-slate-950 p-4 rounded-xl border border-blue-500/20 font-mono text-[11px] text-gray-300">
          <div className="text-gray-500 border-b border-white/5 pb-2 mb-2 flex justify-between">
            <span>Workspace Sync</span>
            <span className="text-blue-400">Success</span>
          </div>
          <div className="text-emerald-400">✔ Written: core/agent.py</div>
          <div className="text-blue-300 mt-1">✔ Incremental re-indexing complete (12ms)</div>
        </div>
      )
    }
  ];

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-slate-950/10">
      {/* Background Blurs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How Ollama Coder <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Follow the automated lifecycle of a code edit request through the agent network and patch system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Timeline Steps */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step) => {
              const isActive = activeStep === step.number;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`group flex items-start space-x-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-slate-900 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                      : 'glassmorphism border-dark-border hover:border-cyan-500/20'
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-bold ${
                      isActive 
                        ? 'bg-cyan-950 border-cyan-500 text-cyan-400' 
                        : 'bg-slate-950/80 border-dark-border text-gray-400'
                    }`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Step details */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 rounded bg-slate-950 border border-dark-border">
                        {step.icon}
                      </div>
                      <h4 className={`font-semibold text-sm md:text-base ${isActive ? 'text-cyan-400' : 'text-white'}`}>
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">
                      {step.shortDesc}
                    </p>
                  </div>

                  {/* Forward arrow indicating active/clickable */}
                  <div className="self-center">
                    <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'text-cyan-400 opacity-100' : 'text-gray-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Step Details & Live Sandbox Visual */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            
            <div className="relative rounded-2xl glassmorphism p-6 md:p-8 flex flex-col justify-between min-h-[380px] bg-slate-950/70 border-cyan-500/25">
              
              <AnimatePresence mode="wait">
                {steps.map((step) => {
                  if (step.number !== activeStep) return null;
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6 flex flex-col h-full justify-between"
                    >
                      {/* Step Header */}
                      <div className="text-left">
                        <div className="flex items-center space-x-2.5 mb-2">
                          <span className="text-xs font-mono text-cyan-400 tracking-widest font-semibold uppercase">
                            Step 0{step.number}
                          </span>
                          <span className="text-gray-600">|</span>
                          <span className="text-xs text-gray-500">Ollama Coder Pipeline</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed mb-6">
                          {step.details}
                        </p>
                      </div>

                      {/* Mock Interactive/Visual Segment */}
                      <div className="mt-auto">
                        <span className="text-[10px] text-gray-500 uppercase font-mono block mb-2 text-left">
                          Simulated Pipeline State:
                        </span>
                        {step.mockVisual}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
