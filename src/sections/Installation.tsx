import React, { useState } from 'react';
import { Copy, Check, Info } from 'lucide-react';

export const Installation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'build' | 'ollama'>('build');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const buildCommands = [
    { label: '1. Install Extension dependencies', cmd: 'npm install' },
    { label: '2. Compile TypeScript extension source code', cmd: 'npm run compile' }
  ];

  const ollamaCommands = [
    { label: '1. Pull Fast patching model (3B parameters)', cmd: 'ollama pull qwen2.5:3b' },
    { label: '2. Pull High-context coding LLM (14B parameters)', cmd: 'ollama pull cieloforge/qwen2.5-14B-instruct-spec' },
    { label: '3. Pull Local document embedder model', cmd: 'ollama pull nomic-embed-text' }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const currentCommands = activeTab === 'build' ? buildCommands : ollamaCommands;

  return (
    <section id="installation" className="py-24 relative overflow-hidden bg-slate-950/20 border-y border-dark-border">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Terminal <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Setup & Installation</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Build the Ollama Coder extension from source and pull the required open-weight models to get started.
          </p>
        </div>

        {/* Terminal Wrapper */}
        <div className="max-w-3xl mx-auto glassmorphism glassmorphism-glow rounded-2xl overflow-hidden border border-dark-border shadow-2xl">
          
          {/* Terminal Title Bar / Tabs */}
          <div className="bg-slate-950/90 px-4 py-3 border-b border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
            {/* Window control dots */}
            <div className="flex items-center space-x-2 self-start sm:self-center">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-[10px] text-gray-500 font-mono ml-4">bash — installer.sh</span>
            </div>

            {/* Installer tabs */}
            <div className="flex bg-slate-900 rounded-lg p-1 border border-white/5 w-full sm:w-auto">
              <button
                onClick={() => { setActiveTab('build'); setCopiedIndex(null); }}
                className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-xs font-semibold font-mono tracking-wide transition-all ${
                  activeTab === 'build' 
                    ? 'bg-slate-850 text-cyan-400 border border-cyan-500/20' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                1. Build Extension
              </button>
              <button
                onClick={() => { setActiveTab('ollama'); setCopiedIndex(null); }}
                className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-xs font-semibold font-mono tracking-wide transition-all ${
                  activeTab === 'ollama' 
                    ? 'bg-slate-850 text-cyan-400 border border-cyan-500/20' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                2. Pull Local Models
              </button>
            </div>
          </div>

          {/* Terminal Console Area */}
          <div className="bg-slate-950/70 p-6 md:p-8 font-mono text-xs md:text-sm text-gray-300 min-h-[220px]">
            
            <div className="space-y-6 text-left">
              {currentCommands.map((command, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 font-sans">
                    {command.label}
                  </div>
                  
                  {/* Command Row */}
                  <div className="flex items-center justify-between p-3 rounded bg-slate-900 border border-dark-border hover:border-gray-800 transition-colors group">
                    <div className="flex items-center space-x-2 overflow-x-auto scrollbar select-all pr-2">
                      <span className="text-cyan-500">$</span>
                      <span className="text-gray-200 font-medium whitespace-nowrap">{command.cmd}</span>
                    </div>
                    
                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(command.cmd, idx)}
                      className="p-1.5 rounded bg-slate-950 border border-dark-border text-gray-400 hover:text-cyan-400 transition-colors flex-shrink-0"
                      title="Copy Command"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Success Output */}
            <div className="mt-8 border-t border-dark-border pt-6 text-left">
              <span className="text-[10px] text-gray-500 uppercase font-mono block mb-2">Build Output Simulation:</span>
              <pre className="text-[11px] leading-5 text-gray-400/90 whitespace-pre-wrap">
                {activeTab === 'build' ? (
                  <>
                    <span className="text-cyan-400">⚡ npm run compile</span><br />
                    <span>&gt; ollama-coder@1.2.0 compile</span><br />
                    <span>&gt; tsc -p ./</span><br />
                    <span className="text-green-400">✔ Compilation completed in 1.48s. Output written to out/extension.js</span><br />
                    <span className="text-gray-500">Ready for reload. Launching extension host...</span>
                  </>
                ) : (
                  <>
                    <span className="text-cyan-400">⚡ ollama pull qwen2.5:3b</span><br />
                    <span>pulling manifest </span><br />
                    <span>pulling 2e8a6... 100% ▕████████████████████▏ 1.9 GB</span><br />
                    <span className="text-green-400">✔ success</span>
                  </>
                )}
              </pre>
            </div>

          </div>
        </div>

        {/* Small Prerequisites Badge */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-gray-500 font-light max-w-md mx-auto">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span className="text-left leading-normal">
            Prerequisites: Ensure <span className="font-semibold text-gray-300">Node.js v18+</span> and the <span className="font-semibold text-gray-300">Ollama</span> server app are running locally.
          </span>
        </div>

      </div>
    </section>
  );
};
