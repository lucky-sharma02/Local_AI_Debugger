import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, Fingerprint, Database, Sparkles, 
  SearchCode, ArrowRight, ArrowDown 
} from 'lucide-react';

export const RagPipeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'indexing' | 'embeddings' | 'retrieval'>('indexing');

  const pipelineSteps = [
    { id: 'step-1', name: 'Workspace', icon: <FolderGit2 className="w-5 h-5 text-cyan-400" /> },
    { id: 'step-2', name: 'Chunking', icon: <SearchCode className="w-5 h-5 text-purple-400" /> },
    { id: 'step-3', name: 'Embeddings', icon: <Fingerprint className="w-5 h-5 text-emerald-400" /> },
    { id: 'step-4', name: 'Retrieval', icon: <Database className="w-5 h-5 text-amber-400" /> },
    { id: 'step-5', name: 'Patch Generation', icon: <Sparkles className="w-5 h-5 text-pink-400" /> }
  ];

  const technicalDetails = {
    indexing: {
      title: 'Incremental Indexer',
      desc: 'Ollama Coder uses an incremental indexer that monitors files in the workspace. Instead of full database rebuilds, it recalculates hashes on save, parsing only the edited components.',
      bullets: [
        'MD5 Hash Validation: Compares changes on file saves.',
        'AST Parsing: Isolates imports, functions, and classes.',
        'Chunking Thresholds: Generates overlapping semantic paragraphs of 200-500 tokens.',
        'Low Memory: Runs locally inside VS Code, requiring < 50MB RAM.'
      ]
    },
    embeddings: {
      title: 'Local Embedding Generation',
      desc: 'Vectors are calculated on the CPU/GPU using the `nomic-embed-text` model via local Ollama services, keeping text data private.',
      bullets: [
        '768-Dimension Vectors: Detailed semantic mapping of functions.',
        'Model optimization: Leverages local Ollama instance concurrency.',
        'Code-Specific Normalization: Handles brackets, variables, and comments separately.',
        'Asynchronous Batching: Processes chunks in background without locking typing threads.'
      ]
    },
    retrieval: {
      title: 'Dependency Graph Retrieval',
      desc: 'Standard vector matching often fetches irrelevant snippets. Ollama Coder implements a dependency ranking model to prioritize import relationships.',
      bullets: [
        'AST Imports Matching: Checks dependencies referenced in target files.',
        'Graph Ranking: Prioritizes parent classes and interfaces first.',
        'Semantic + Keyword Hybrid: Combines vector queries with classical AST symbol lookup.',
        'Prompt Budgeting: Clips context size to match local context limits (4k - 8k tokens).'
      ]
    }
  };

  return (
    <section id="rag-pipeline" className="py-24 relative overflow-hidden bg-slate-950/20 border-y border-dark-border">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            RAG & AI <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Context Pipeline</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Surgical code edits require rich local context. Our RAG engine extracts and ranks code snippets with absolute safety.
          </p>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="max-w-4xl mx-auto mb-20 p-6 md:p-8 rounded-2xl glassmorphism bg-slate-950/40">
          <span className="text-[10px] text-gray-500 font-mono uppercase block mb-6 text-center tracking-widest">
            Pipeline Data Flow (Workspace to Output)
          </span>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={step.id}>
                {/* Step Block */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-36 p-4 rounded-xl glassmorphism border-cyan-500/20 text-center flex flex-col items-center space-y-2 relative"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-dark-border flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-semibold text-white tracking-wide">{step.name}</h4>
                  <span className="text-[9px] font-mono text-cyan-400/70">Stage 0{idx + 1}</span>
                </motion.div>

                {/* Arrow Connector (Except last) */}
                {idx < pipelineSteps.length - 1 && (
                  <div className="flex items-center justify-center text-gray-700">
                    <ArrowRight className="w-5 h-5 hidden md:block text-cyan-500/50" />
                    <ArrowDown className="w-5 h-5 block md:hidden my-1 text-cyan-500/50" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Technical deep dive tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Selection buttons */}
          <div className="lg:col-span-4 space-y-3 flex flex-col">
            <button
              onClick={() => setActiveTab('indexing')}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeTab === 'indexing' 
                  ? 'bg-slate-900 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.1)] text-white' 
                  : 'glassmorphism border-dark-border text-gray-400 hover:text-gray-200'
              }`}
            >
              <h4 className="font-semibold text-sm md:text-base">01. Incremental Indexing</h4>
              <p className="text-xs text-gray-500 font-light mt-1">Workspace tracking & parsing</p>
            </button>
            
            <button
              onClick={() => setActiveTab('embeddings')}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeTab === 'embeddings' 
                  ? 'bg-slate-900 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] text-white' 
                  : 'glassmorphism border-dark-border text-gray-400 hover:text-gray-200'
              }`}
            >
              <h4 className="font-semibold text-sm md:text-base">02. Local Embeddings</h4>
              <p className="text-xs text-gray-500 font-light mt-1">Vectorization via nomic-embed</p>
            </button>

            <button
              onClick={() => setActiveTab('retrieval')}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeTab === 'retrieval' 
                  ? 'bg-slate-900 border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.1)] text-white' 
                  : 'glassmorphism border-dark-border text-gray-400 hover:text-gray-200'
              }`}
            >
              <h4 className="font-semibold text-sm md:text-base">03. Graph Retrieval</h4>
              <p className="text-xs text-gray-500 font-light mt-1">Dependency hierarchies ranking</p>
            </button>
          </div>

          {/* Tab content display */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl glassmorphism p-6 md:p-8 min-h-[300px] text-left relative bg-slate-950/40">
              <AnimatePresence mode="wait">
                {Object.entries(technicalDetails).map(([key, data]) => {
                  if (key !== activeTab) return null;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{data.title}</h3>
                        <p className="text-sm text-gray-400 font-light leading-relaxed">{data.desc}</p>
                      </div>

                      <div className="h-px bg-dark-border" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.bullets.map((bullet, idx) => {
                          const [header, desc] = bullet.split(':');
                          return (
                            <div key={idx} className="flex items-start space-x-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                              <div className="text-xs md:text-sm">
                                <span className="font-semibold text-gray-200">{header}:</span>
                                <span className="text-gray-400 font-light">{desc}</span>
                              </div>
                            </div>
                          );
                        })}
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
