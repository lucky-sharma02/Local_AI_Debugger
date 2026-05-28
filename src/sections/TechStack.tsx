import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Code, Wind, Server, Cpu, Database, CheckSquare, Terminal } from 'lucide-react';

interface TechItem {
  name: string;
  role: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
}

interface TechGroup {
  category: string;
  items: TechItem[];
}

export const TechStack: React.FC = () => {
  const stack: TechGroup[] = [
    {
      category: 'Frontend & UI',
      items: [
        { name: 'TypeScript', role: 'Type-Safe Logic', icon: <Code className="w-6 h-6 text-blue-400" />, color: 'shadow-blue-500/10', borderColor: 'hover:border-blue-500/30' },
        { name: 'React', role: 'Interactive Views', icon: <Atom className="w-6 h-6 text-cyan-400" />, color: 'shadow-cyan-500/10', borderColor: 'hover:border-cyan-500/30' },
        { name: 'Tailwind CSS', role: 'Futuristic Styling', icon: <Wind className="w-6 h-6 text-teal-400" />, color: 'shadow-teal-500/10', borderColor: 'hover:border-teal-500/30' }
      ]
    },
    {
      category: 'Backend & Core Integration',
      items: [
        { name: 'Node.js', role: 'Runtime Execution', icon: <Server className="w-6 h-6 text-green-400" />, color: 'shadow-green-500/10', borderColor: 'hover:border-green-500/30' },
        { name: 'VS Code API', role: 'Editor Workspace Hooks', icon: <Cpu className="w-6 h-6 text-yellow-400" />, color: 'shadow-yellow-500/10', borderColor: 'hover:border-yellow-500/30' }
      ]
    },
    {
      category: 'Local AI Pipeline',
      items: [
        { name: 'Ollama Service', role: 'Local Model Hosting', icon: <Terminal className="w-6 h-6 text-purple-400" />, color: 'shadow-purple-500/10', borderColor: 'hover:border-purple-500/30' },
        { name: 'qwen2.5:3b', role: 'Fast Symbol Patching', icon: <Cpu className="w-6 h-6 text-indigo-400" />, color: 'shadow-indigo-500/10', borderColor: 'hover:border-indigo-500/30' },
        { name: 'qwen2.5-14B-instruct', role: 'Complex Multi-Agent Plans', icon: <Database className="w-6 h-6 text-pink-400" />, color: 'shadow-pink-500/10', borderColor: 'hover:border-pink-500/30' },
        { name: 'nomic-embed-text', role: 'Semantic Vector Embeddings', icon: <Database className="w-6 h-6 text-cyan-400" />, color: 'shadow-cyan-500/10', borderColor: 'hover:border-cyan-500/30' }
      ]
    },
    {
      category: 'Verification Framework',
      items: [
        { name: 'Vitest', role: 'Automated Test Runner', icon: <CheckSquare className="w-6 h-6 text-red-400" />, color: 'shadow-red-500/10', borderColor: 'hover:border-red-500/30' }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Under the Hood <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Ollama Coder integrates modern open-source language models, high-performance editor integrations, and standard web technologies.
          </p>
        </div>

        {/* Tech categories rendering */}
        <div className="space-y-16">
          {stack.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6">
              {/* Category Subtitle */}
              <h3 className="text-left text-lg md:text-xl font-semibold text-white/90 border-l-4 border-purple-500 pl-3">
                {group.category}
              </h3>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className={`p-6 rounded-xl glassmorphism border-dark-border shadow-md transition-all ${item.borderColor} ${item.color} flex items-center space-x-4`}
                  >
                    <div className="p-3 bg-slate-950/80 rounded-lg border border-dark-border">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-white text-sm md:text-base leading-snug">{item.name}</h4>
                      <p className="text-xs text-gray-500 font-light mt-0.5">{item.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
