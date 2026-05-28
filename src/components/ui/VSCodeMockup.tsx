import React, { useState, useEffect } from 'react';
import { Terminal as TermIcon, FileCode, Check, RefreshCw, Layers } from 'lucide-react';

interface VSCodeMockupProps {
  fileName?: string;
  language?: string;
  code?: string;
  streaming?: boolean;
  terminalOutput?: string;
  showTerminal?: boolean;
}

export const VSCodeMockup: React.FC<VSCodeMockupProps> = ({
  fileName = 'patch_coder.py',
  language = 'python',
  code = '',
  streaming = false,
  terminalOutput = '',
  showTerminal = true
}) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  // Streaming typing animation effect
  useEffect(() => {
    if (!streaming) {
      setDisplayedCode(code);
      return;
    }

    setDisplayedCode('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode((prev) => prev + code.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [code, streaming]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden glassmorphism glassmorphism-glow border border-dark-border shadow-2xl flex flex-col font-mono text-xs md:text-sm">
      {/* VS Code Title Bar */}
      <div className="bg-slate-950/80 px-4 py-2 border-b border-dark-border flex items-center justify-between select-none">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-gray-400 text-[11px] md:text-xs font-sans tracking-wide">
          Ollama Coder — {fileName}
        </div>
        <div className="flex items-center space-x-1.5 text-gray-500">
          <RefreshCw className="w-3.5 h-3.5 hover:text-cyan-400 transition-colors cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-1 min-h-[320px] md:min-h-[400px]">
        {/* VS Code Sidebar (icon only for clean futuristic layout) */}
        <div className="w-10 bg-slate-950/90 border-r border-dark-border flex flex-col items-center py-4 space-y-5 text-gray-500">
          <FileCode className="w-5 h-5 text-cyan-400 cursor-pointer" />
          <Layers className="w-5 h-5 hover:text-gray-300 transition-colors cursor-pointer" />
          <TermIcon className="w-5 h-5 hover:text-gray-300 transition-colors cursor-pointer" />
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-slate-900/60 overflow-hidden">
          {/* Tab bar */}
          <div className="flex bg-slate-950/40 border-b border-dark-border">
            <div className="px-4 py-2 bg-slate-900/80 border-r border-dark-border border-t-2 border-t-cyan-500 text-gray-200 flex items-center space-x-2">
              <span className="text-cyan-400">🐍</span>
              <span>{fileName}</span>
            </div>
            <div className="px-4 py-2 text-gray-500 hover:text-gray-300 cursor-pointer flex items-center space-x-2">
              <span className="text-yellow-500">⚡</span>
              <span>ollama_client.py</span>
            </div>
          </div>

          {/* Code display */}
          <div className="flex-1 p-4 md:p-6 overflow-y-auto text-left relative scrollbar">
            <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
              {displayedCode.split('\n').map((line, idx) => (
                <div key={idx} className="flex hover:bg-white/5 px-2 -mx-2 rounded transition-colors">
                  <span className="w-8 text-gray-600 select-none text-right pr-4 text-xs md:text-sm">
                    {idx + 1}
                  </span>
                  <span className="flex-1 font-mono text-xs md:text-sm">
                    {renderSyntaxColors(line)}
                    {idx === displayedCode.split('\n').length - 1 && cursorVisible && (
                      <span className="w-1.5 h-4 bg-cyan-400 inline-block ml-0.5 animate-pulse" />
                    )}
                  </span>
                </div>
              ))}
            </pre>
          </div>

          {/* Simulated Terminal */}
          {showTerminal && (
            <div className="h-32 md:h-40 border-t border-dark-border bg-slate-950/90 flex flex-col">
              <div className="bg-slate-950/60 px-4 py-1.5 border-b border-dark-border flex items-center space-x-4 text-gray-400 text-[11px] font-sans">
                <span className="text-gray-200 font-semibold border-b-2 border-cyan-500 pb-0.5">Terminal</span>
                <span>Output</span>
                <span>Problems (0)</span>
              </div>
              <div className="flex-1 p-3 text-left overflow-y-auto font-mono text-[11px] md:text-xs text-green-400/90 leading-relaxed scrollbar">
                {terminalOutput.split('\n').map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* VS Code Status Bar */}
      <div className="bg-cyan-950/90 text-[10px] md:text-xs px-3 py-1.5 flex items-center justify-between text-cyan-300/80 border-t border-cyan-900/30 select-none">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 font-semibold text-cyan-400">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse inline-block" />
            <span>Ollama: Connected</span>
          </div>
          <span>Ln 12, Col 24</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center space-x-3">
          <span>{language.toUpperCase()}</span>
          <span className="flex items-center space-x-1">
            <Check className="w-3.5 h-3.5" />
            <span>Prettier</span>
          </span>
        </div>
      </div>
    </div>
  );
};

// Simple syntax highlighter helper
const renderSyntaxColors = (line: string) => {
  // Regexes for python / javascript keywords, classes, functions
  const keywordRegex = /\b(def|class|import|from|return|if|else|elif|for|while|try|except|as|with|await|async|const|let|function|export|default|class)\b/g;
  const functionRegex = /\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/g;
  const stringRegex = /("(.*?)"|'(.*?)')/g;
  const commentRegex = /(#.*|\/\/.*)/g;

  if (commentRegex.test(line)) {
    return <span className="syntax-comment">{line}</span>;
  }

  // Split string and apply coloring dynamically
  let parts: React.ReactNode[] = [line];
  
  // Keyword coloring
  let keyIdx = 0;
  parts = parts.flatMap((part) => {
    if (typeof part !== 'string') return part;
    const splitParts = part.split(keywordRegex);
    return splitParts.map((sub, sIdx) => {
      if (sIdx % 2 === 1) {
        return <span key={`key-${keyIdx++}`} className="syntax-keyword">{sub}</span>;
      }
      return sub;
    });
  });

  // String coloring
  let strIdx = 0;
  parts = parts.flatMap((part) => {
    if (typeof part !== 'string') return part;
    const splitParts = part.split(stringRegex);
    return splitParts.map((sub, sIdx) => {
      // split with capture group returns extra indexes
      if (sIdx % 3 === 1) {
        return <span key={`str-${strIdx++}`} className="syntax-string">{sub}</span>;
      }
      if (sIdx % 3 === 2) return null; // skip captured interior
      return sub;
    });
  }).filter(Boolean);

  // Function coloring
  let fnIdx = 0;
  parts = parts.flatMap((part) => {
    if (typeof part !== 'string') return part;
    const splitParts = part.split(functionRegex);
    return splitParts.map((sub, sIdx) => {
      if (sIdx % 2 === 1) {
        return <span key={`fn-${fnIdx++}`} className="syntax-function">{sub}</span>;
      }
      return sub;
    });
  });

  return <>{parts}</>;
};
