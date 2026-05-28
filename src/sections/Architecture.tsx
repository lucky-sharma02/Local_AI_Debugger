import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Bot, Cpu, Database, Settings, Laptop, ArrowDown, Info } from 'lucide-react';

interface ArchLayer {
  id: string;
  name: string;
  icon: React.ReactNode;
  subtitle: string;
  color: string;
  details: string[];
}

interface TechComponent {
  title: string;
  role: string;
  description: string;
  icon: React.ReactNode;
}

export const Architecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('agent-system');

  const layers: ArchLayer[] = [
    {
      id: 'user-layer',
      name: 'User Layer',
      icon: <Laptop className="w-5 h-5" />,
      subtitle: 'Developer Interface',
      color: 'from-cyan-500 to-blue-500',
      details: ['VS Code UI Sidebar panel', 'Chat input and patch prompt triggers', 'Side-by-side Diff Approve/Reject controls']
    },
    {
      id: 'vscode-layer',
      name: 'VS Code Extension Layer',
      icon: <Settings className="w-5 h-5" />,
      subtitle: 'IDE Event Bridge',
      color: 'from-blue-500 to-indigo-500',
      details: ['Workspace listener (File changes)', 'Decoration API (Diff highlights)', 'PostMessage communications channel']
    },
    {
      id: 'agent-system',
      name: 'Agent System Layer',
      icon: <Bot className="w-5 h-5" />,
      subtitle: 'Cognitive Engine',
      color: 'from-indigo-500 to-purple-500',
      details: ['Planner Agent (Decomposes targets)', 'Patch Coder Agent (Generates patches)', 'Validation / Tester Loop']
    },
    {
      id: 'rag-system',
      name: 'RAG Pipeline Layer',
      icon: <Database className="w-5 h-5" />,
      subtitle: 'Context Extractor',
      color: 'from-purple-500 to-pink-500',
      details: ['Incremental File Watcher', 'Nomic Embed Text encoder', 'Vector DB semantic matching', 'AST Symbol retriever']
    },
    {
      id: 'tool-layer',
      name: 'Tool Integration Layer',
      icon: <Layers className="w-5 h-5" />,
      subtitle: 'Action Interfaces',
      color: 'from-pink-500 to-rose-500',
      details: ['Symbol extraction tool', 'Diff patching engine', 'Compile checker & Vitest wrapper']
    },
    {
      id: 'ollama-layer',
      name: 'Local Ollama Layer',
      icon: <Cpu className="w-5 h-5" />,
      subtitle: 'Inference Provider',
      color: 'from-rose-500 to-red-500',
      details: ['Qwen2.5 3B/14B Instruct model execution', 'Nomic embedding engine', 'Context window optimization']
    }
  ];

  const components: TechComponent[] = [
    {
      title: 'Planner Agent',
      role: 'Goal Decomposition',
      description: 'Parses raw user requests, scans the workspace symbols, and outlines a multi-file file patching strategy.',
      icon: <Bot className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Patch Coder Agent',
      role: 'Surgical Diff Generation',
      description: 'Generates specific symbol replacements rather than rewrites, using custom prompt syntaxes for local model speed.',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Incremental Indexer',
      role: 'Active Vector Synchronization',
      description: 'Synchronizes on-save workspace modifications incrementally, ensuring zero latency during semantic lookups.',
      icon: <Database className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Dependency-aware Retrieval',
      role: 'Imports & Hierarchy Parsing',
      description: 'Extracts imported symbols and tracks dependencies recursively, injecting relevant parent-class definitions.',
      icon: <Layers className="w-5 h-5 text-pink-400" />
    },
    {
      title: 'Inline Diff Manager',
      role: 'TextEditor Decorations',
      description: 'Injects temporary, responsive red/green background visual changes directly into the VS Code Editor window.',
      icon: <Settings className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950/20 border-y border-dark-border">
      {/* Glow backgrounds */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            System <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Architecture</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Discover how user prompts flow through VS Code event listeners, cognitive agents, and local embedding vector pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Diagram Layers */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <span>Execution Layers</span>
              <span className="text-xs text-gray-500 font-normal">(Click layers to inspect details)</span>
            </h3>
            
            {layers.map((layer, index) => {
              const isActive = activeLayer === layer.id;
              return (
                <div key={layer.id} className="relative">
                  {/* Layer Block */}
                  <motion.button
                    onClick={() => setActiveLayer(layer.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all ${
                      isActive 
                        ? 'bg-slate-900 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                        : 'glassmorphism border-dark-border hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-r ${layer.color} text-slate-950`}>
                        {layer.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base">{layer.name}</h4>
                        <p className="text-xs text-gray-500 font-light">{layer.subtitle}</p>
                      </div>
                    </div>
                    {isActive && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="w-2.5 h-2.5 rounded-full bg-cyan-400"
                      />
                    )}
                  </motion.button>
                  
                  {/* Connector Arrow (Except last) */}
                  {index < layers.length - 1 && (
                    <div className="flex justify-center my-1 select-none pointer-events-none">
                      <ArrowDown className={`w-4 h-4 ${isActive ? 'text-cyan-500' : 'text-gray-700'}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Layer Info & Sub-components */}
          <div className="lg:col-span-6 space-y-8">
            {/* Layer Detail Display */}
            <div className="rounded-2xl glassmorphism border-cyan-500/20 p-6 md:p-8 min-h-[220px] flex flex-col justify-between relative overflow-hidden bg-slate-950/40">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Layers className="w-24 h-24 text-cyan-400" />
              </div>
              
              <AnimatePresence mode="wait">
                {layers.map((layer) => {
                  if (layer.id !== activeLayer) return null;
                  return (
                    <motion.div
                      key={layer.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded bg-gradient-to-r ${layer.color} text-slate-950`}>
                          Active Layer
                        </span>
                        <h4 className="text-xl font-bold text-white">{layer.name}</h4>
                      </div>
                      
                      <div className="h-px bg-dark-border" />
                      
                      <ul className="space-y-3">
                        {layer.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start space-x-2 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span className="font-light">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Deep Dive Sub-Components */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Info className="w-5 h-5 text-cyan-400" />
                <span>Deep Dive Components</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {components.map((comp, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl glassmorphism hover:border-cyan-500/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-3.5 mb-2">
                        <div className="p-1.5 rounded bg-slate-900 border border-dark-border">
                          {comp.icon}
                        </div>
                        <h4 className="font-semibold text-white text-sm">{comp.title}</h4>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block mb-2">
                        {comp.role}
                      </span>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
