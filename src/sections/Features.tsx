import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, Bot, Target, Database, Users, 
  GitCompare, Cpu, Files, RefreshCw, Lock 
} from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  glowColor: string;
}

export const Features: React.FC = () => {
  const featuresList: FeatureItem[] = [
    {
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
      title: 'Chat Mode',
      description: 'Conversational developer interface to ask questions, explain code, write test cases, or inspect runtime errors directly from the editor.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]'
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      title: 'Agent Mode',
      description: 'Autonomous planning and execution loops that write files, verify their syntax, and iterate to resolve complex developer goals.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]'
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: 'Symbol-Level Patching',
      description: 'Isolate target class and function symbols for modification, producing surgical diffs rather than recreating entire large files.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]'
    },
    {
      icon: <Database className="w-6 h-6 text-amber-400" />,
      title: 'Incremental RAG',
      description: 'Real-time background indexing that immediately captures local edits and maintains an up-to-date vector db for context.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]'
    },
    {
      icon: <Users className="w-6 h-6 text-rose-400" />,
      title: 'Multi-Agent Workflow',
      description: 'Cooperative tasks divided between a Planner agent (splits actions) and a Patch Coder agent (writes clean, semantic code).',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]'
    },
    {
      icon: <GitCompare className="w-6 h-6 text-sky-400" />,
      title: 'Inline Diff Visualization',
      description: 'Examine changes visually with standard red/green highlight layers side-by-side inside VS Code prior to applying edits.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]'
    },
    {
      icon: <Cpu className="w-6 h-6 text-pink-400" />,
      title: 'Local Ollama Integration',
      description: 'Optimized support for local setups (like Qwen2.5) to run lightweight instruct and embedding models efficiently on consumer hardware.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]'
    },
    {
      icon: <Files className="w-6 h-6 text-teal-400" />,
      title: 'Multi-file Editing',
      description: 'Refactor complex dependencies across multiple files in a single turn without causing compile or module-resolution errors.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-blue-400" />,
      title: 'Streaming Responses',
      description: 'Watch the code and plans emerge in real time, allowing you to stop execution immediately if the agent goes off-course.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]'
    },
    {
      icon: <Lock className="w-6 h-6 text-orange-400" />,
      title: 'Privacy-Focused',
      description: '100% offline security. Zero code leaks, zero server telemetry, and completely isolated workspace data processing.',
      glowColor: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Engineered for <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Power & Autonomy</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Unlike simple completions, Ollama Coder understands symbols, maintains context incrementally, and safely edits your codebase locally.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {featuresList.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl glassmorphism p-6 md:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Highlight Background Glow */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent ${feature.glowColor}`} />
              
              <div>
                {/* Feature Icon container */}
                <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-dark-border flex items-center justify-center mb-6 shadow-md">
                  {feature.icon}
                </div>

                {/* Feature Title */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
              
              {/* Corner Glow effect */}
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
