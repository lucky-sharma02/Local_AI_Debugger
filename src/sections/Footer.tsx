import { Github, Twitter, MessageSquare, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/80 border-t border-dark-border py-12 md:py-16 text-xs md:text-sm text-gray-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo & Slogan */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-base font-bold text-white tracking-wide">Ollama Coder</span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                LOCAL AGENT
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-light max-w-xs">
              Surgical symbol-level patching and incremental vector retrieval, run offline.
            </p>
          </div>

          {/* Quick shortcuts */}
          <div className="flex flex-wrap justify-center gap-6 text-[11px] md:text-xs">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#workflow" className="hover:text-cyan-400 transition-colors">Workflow</a>
            <a href="#installation" className="hover:text-cyan-400 transition-colors">Installation</a>
            <a href="#comparison" className="hover:text-cyan-400 transition-colors">Compare</a>
            <a href="#privacy-security" className="hover:text-cyan-400 transition-colors">Privacy</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded bg-slate-900 border border-dark-border hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded bg-slate-900 border border-dark-border hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="p-2 rounded bg-slate-900 border border-dark-border hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 transition-all">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright and Built Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-[11px]">
          <div className="flex items-center space-x-1">
            <span>© 2026 Ollama Coder. Developed under MIT license.</span>
          </div>
          
          {/* Built Badge */}
          <div className="flex items-center space-x-2 px-3 py-1 rounded bg-slate-900 border border-dark-border">
            <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="font-mono text-gray-400">Built with AI and Ollama</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
