import React from 'react';
import { motion } from 'framer-motion';
import { VSCodeMockup } from '../components/ui/VSCodeMockup';
import { ArrowRight, Code, Shield, Terminal, Zap, FileText } from 'lucide-react';

const mockCode = `from ollama_coder.core.agent import PlannerAgent
from ollama_coder.core.rag import IncrementalIndexer

async def generate_symbol_patch(workspace_path, prompt):
    # 1. Initialize local indexing & RAG
    indexer = IncrementalIndexer(workspace_path)
    context = await indexer.search_semantic(prompt, limit=3)
    
    # 2. Engage Planner Agent to isolate target symbols
    agent = PlannerAgent(model="qwen2.5:3b")
    plan = await agent.analyze(prompt, context)
    
    # 3. Stream symbol-level code diff patch
    print(f"Targeting symbol: {plan.target_symbol}")
    patch = await agent.generate_patch(plan.target_symbol, context)
    return patch
`;

const mockTerminal = `ollama run cieloforge/qwen2.5-14B-instruct-spec
[Ollama] Model qwen2.5-14B loaded (Local GPU Mode)
[Ollama Coder] Parsing workspace symbols...
[Ollama Coder] RAG: Found 12 file matches.
[Ollama Coder] Indexer: Loaded 148 code chunks.
[Ollama Coder] Agent: Generating patch for 'generate_symbol_patch'
[Ollama Coder] Streaming diff... Done!`;

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid z-0 opacity-40 pointer-events-none" />

      {/* Floating Neon Background Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[450px] md:h-[450px] bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Version Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glassmorphism border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-6 shadow-lg shadow-cyan-950/20"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>v1.2.0 Released — Symbol patching, Local RAG</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
            >
              The Local AI Coder
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent neon-text-glow-cyan">
                Ollama Coder
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light"
            >
              AI-powered VS Code coding assistant with local LLMs, Retrieval-Augmented Generation, and symbol-level patch generation. Fully secure. Completely offline.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#installation"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center space-x-2 text-sm md:text-base border border-cyan-300/20"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#rag-pipeline"
                className="w-full sm:w-auto px-8 py-3.5 glassmorphism hover:bg-white/10 hover:border-gray-400 border border-dark-border text-white font-medium rounded-lg transition-all flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <FileText className="w-4 h-4" />
                <span>View Documentation</span>
              </a>
            </motion.div>

            {/* Trust Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-dark-border pt-8 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-1.5 text-cyan-400 font-semibold mb-1">
                  <Shield className="w-4 h-4" />
                  <span>100% Local</span>
                </div>
                <span className="text-xs text-gray-500">Zero Cloud Relays</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-1.5 text-purple-400 font-semibold mb-1">
                  <Terminal className="w-4 h-4" />
                  <span>Symbol Edit</span>
                </div>
                <span className="text-xs text-gray-500">Precision Patching</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold mb-1">
                  <Code className="w-4 h-4" />
                  <span>RAG Engine</span>
                </div>
                <span className="text-xs text-gray-500">Incremental Indexing</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full relative"
          >
            {/* Background glowing rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-75 z-0" />
            
            {/* Main VS Code Mockup */}
            <div className="relative z-10">
              <VSCodeMockup
                fileName="agent_workflow.py"
                code={mockCode}
                terminalOutput={mockTerminal}
                streaming={true}
                showTerminal={true}
              />
            </div>

            {/* Small Floating Snippet Card (Left Overlay) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -left-6 bottom-16 hidden md:flex items-center space-x-3 bg-slate-950/95 border border-cyan-500/30 rounded-lg p-3 shadow-xl backdrop-blur-xl z-20"
            >
              <div className="w-8 h-8 rounded bg-cyan-950 border border-cyan-500/30 flex items-center justify-center">
                <Code className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-cyan-400 font-semibold">PATCH GENERATION</div>
                <div className="text-[11px] font-mono text-gray-300">apply_patch() +12 -2</div>
              </div>
            </motion.div>

            {/* Small Floating Agent Card (Right Overlay) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute -right-6 top-16 hidden md:flex items-center space-x-3 bg-slate-950/95 border border-purple-500/30 rounded-lg p-3 shadow-xl backdrop-blur-xl z-20"
            >
              <div className="w-8 h-8 rounded bg-purple-950 border border-purple-500/30 flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-purple-400 font-semibold">PLANNER AGENT</div>
                <div className="text-[11px] font-mono text-gray-300">Evaluating AST nodes...</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
