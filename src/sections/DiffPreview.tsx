import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RefreshCw, GitCompare, AlertTriangle, FileCode } from 'lucide-react';

export const DiffPreview: React.FC = () => {
  const [patchState, setPatchState] = useState<'pending' | 'applied' | 'rejected'>('pending');

  const leftLines = [
    { num: 1, text: 'def check_user_access(user_id):', type: 'normal' },
    { num: 2, text: '    # Fetch user data from local cache', type: 'normal' },
    { num: 3, text: '    user = cache.get(user_id)', type: 'normal' },
    { num: 4, text: '    if not user:', type: 'normal' },
    { num: 5, text: '        user = db.fetch_user(user_id)', type: 'removed', highlight: true },
    { num: 6, text: '    return user.is_active', type: 'removed', highlight: true },
    { num: 7, text: '', type: 'normal' }
  ];

  const rightLines = [
    { num: 1, text: 'def check_user_access(user_id):', type: 'normal' },
    { num: 2, text: '    # Fetch user data from local cache', type: 'normal' },
    { num: 3, text: '    user = cache.get(user_id)', type: 'normal' },
    { num: 4, text: '    if not user:', type: 'normal' },
    { num: 5, text: '        user = db.fetch_user(user_id)', type: 'normal' },
    { num: 6, text: '        if user:', type: 'added', highlight: true },
    { num: 7, text: '            cache.set(user_id, user, expire=3600)', type: 'added', highlight: true },
    { num: 8, text: '    return user.is_active if user else False', type: 'added', highlight: true },
    { num: 9, text: '', type: 'normal' }
  ];

  const handleApply = () => {
    setPatchState('applied');
  };

  const handleReject = () => {
    setPatchState('rejected');
  };

  const handleReset = () => {
    setPatchState('pending');
  };

  return (
    <section id="diff-preview" className="py-24 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Interactive <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Live Diff</span> Preview
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Surgically apply modifications. Inspect red/green changes side-by-side. Try the interactive buttons below to merge or reject the patch.
          </p>
        </div>

        {/* Diff Review Sandbox Container */}
        <div className="max-w-5xl mx-auto glassmorphism glassmorphism-glow rounded-2xl overflow-hidden border border-dark-border shadow-2xl flex flex-col">
          
          {/* Editor Header Controls */}
          <div className="bg-slate-950/80 px-4 py-3 border-b border-dark-border flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GitCompare className="w-4 h-4 text-cyan-400" />
              <span className="text-xs md:text-sm font-semibold text-gray-200">Pending Changeset — auth_manager.py</span>
            </div>
            
            {/* Interactive Control Buttons */}
            <div className="flex items-center space-x-2">
              {patchState === 'pending' ? (
                <>
                  <button
                    onClick={handleReject}
                    className="px-3 py-1.5 rounded bg-red-500/10 border border-red-500/30 hover:border-red-500/60 text-red-400 text-xs font-medium transition-all flex items-center space-x-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Reject Patch</span>
                  </button>
                  <button
                    onClick={handleApply}
                    className="px-3 py-1.5 rounded bg-emerald-500/20 border border-emerald-500/40 hover:border-emerald-500/80 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-950/30 hover:shadow-emerald-500/10 transition-all flex items-center space-x-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Apply Patch</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 text-xs font-medium transition-all flex items-center space-x-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Sandbox</span>
                </button>
              )}
            </div>
          </div>

          {/* Sub-header File Tabs */}
          <div className="flex bg-slate-950/40 border-b border-dark-border text-xs text-gray-500 font-mono">
            <div className="px-4 py-2 border-r border-dark-border bg-slate-900 text-gray-300 flex items-center space-x-2">
              <FileCode className="w-3.5 h-3.5 text-cyan-400" />
              <span>auth_manager.py (Diff view)</span>
            </div>
          </div>

          {/* Editor Body */}
          <div className="relative bg-slate-950/60 min-h-[280px]">
            
            {/* Overlay feedback screens */}
            <AnimatePresence>
              {patchState === 'applied' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/90 z-20 flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Patch Applied Successfully!</h4>
                  <p className="text-sm text-gray-400 font-light max-w-sm text-center">
                    `check_user_access` has been updated and incremental indexer rebuilt the context in 8ms.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-gray-300 border border-dark-border text-xs rounded transition-colors"
                  >
                    Reset Visualizer
                  </button>
                </motion.div>
              )}

              {patchState === 'rejected' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/90 z-20 flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-red-950 border border-red-500/50 flex items-center justify-center text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                    <X className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Patch Rejected</h4>
                  <p className="text-sm text-gray-400 font-light max-w-sm text-center">
                    The requested modifications have been rolled back. Original file has been restored.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-gray-300 border border-dark-border text-xs rounded transition-colors"
                  >
                    Reset Visualizer
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Side-by-side Diff code grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dark-border font-mono text-[11px] md:text-xs">
              
              {/* Left Column (Original Code) */}
              <div className="p-4 overflow-x-auto text-left">
                <div className="text-gray-500 uppercase tracking-widest text-[9px] mb-3 select-none flex items-center justify-between">
                  <span>Original Code (auth_manager.py)</span>
                  <span className="text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded font-mono">- 2 lines</span>
                </div>
                
                <pre className="text-gray-400 leading-6">
                  {leftLines.map((line) => (
                    <div 
                      key={line.num} 
                      className={`flex -mx-4 px-4 ${line.type === 'removed' ? 'diff-removed' : ''}`}
                    >
                      <span className="w-8 text-gray-600 text-right pr-3 select-none">{line.num}</span>
                      <span className="flex-1 whitespace-pre">{line.text}</span>
                    </div>
                  ))}
                </pre>
              </div>

              {/* Right Column (New Suggested Code) */}
              <div className="p-4 overflow-x-auto text-left bg-slate-900/10">
                <div className="text-gray-500 uppercase tracking-widest text-[9px] mb-3 select-none flex items-center justify-between">
                  <span>Proposed Patch</span>
                  <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">+ 4 lines</span>
                </div>

                <pre className="text-gray-400 leading-6">
                  {rightLines.map((line) => (
                    <div 
                      key={line.num} 
                      className={`flex -mx-4 px-4 ${line.type === 'added' ? 'diff-added' : ''}`}
                    >
                      <span className="w-8 text-gray-600 text-right pr-3 select-none">{line.num}</span>
                      <span className="flex-1 whitespace-pre">{line.text}</span>
                    </div>
                  ))}
                </pre>
              </div>

            </div>
          </div>
        </div>

        {/* Small Notice Badge */}
        <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-gray-500 font-light">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500/80" />
          <span>Line numbers match active AST positions returned by local model.</span>
        </div>

      </div>
    </section>
  );
};
