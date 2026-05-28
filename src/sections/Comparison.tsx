import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

interface CompareRow {
  feature: string;
  ollamaCoder: 'yes' | 'no' | 'partial';
  copilot: 'yes' | 'no' | 'partial';
  cursor: 'yes' | 'no' | 'partial';
  codeium: 'yes' | 'no' | 'partial';
  tabnine: 'yes' | 'no' | 'partial';
}

export const Comparison: React.FC = () => {
  const comparisonData: CompareRow[] = [
    { feature: '100% Local Offline Execution', ollamaCoder: 'yes', copilot: 'no', cursor: 'no', codeium: 'no', tabnine: 'partial' },
    { feature: 'Absolute Workspace Privacy', ollamaCoder: 'yes', copilot: 'no', cursor: 'no', codeium: 'no', tabnine: 'no' },
    { feature: 'Symbol-Level Patching', ollamaCoder: 'yes', copilot: 'no', cursor: 'yes', codeium: 'no', tabnine: 'no' },
    { feature: 'Incremental RAG Context', ollamaCoder: 'yes', copilot: 'partial', cursor: 'yes', codeium: 'partial', tabnine: 'partial' },
    { feature: 'Multi-Agent Flow (Planner/Coder)', ollamaCoder: 'yes', copilot: 'no', cursor: 'yes', codeium: 'no', tabnine: 'no' },
    { feature: 'Inline Diff Visualization', ollamaCoder: 'yes', copilot: 'yes', cursor: 'yes', codeium: 'yes', tabnine: 'yes' },
    { feature: 'Multi-File Code Edits', ollamaCoder: 'yes', copilot: 'partial', cursor: 'yes', codeium: 'no', tabnine: 'no' }
  ];

  const renderIcon = (status: 'yes' | 'no' | 'partial', isOllama = false) => {
    switch (status) {
      case 'yes':
        return (
          <div className="flex justify-center">
            <Check className={`w-5 h-5 ${isOllama ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'text-emerald-500'}`} />
          </div>
        );
      case 'no':
        return (
          <div className="flex justify-center">
            <X className="w-4 h-4 text-gray-700" />
          </div>
        );
      case 'partial':
        return (
          <div className="flex justify-center text-amber-500 text-xs font-semibold font-mono">
            Partial
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How We <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Compare</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Check the feature breakdown to see why Ollama Coder stands out for offline, local, and surgical software engineering.
          </p>
        </div>

        {/* Comparison Table Grid Wrapper */}
        <div className="w-full overflow-x-auto rounded-2xl glassmorphism border border-dark-border shadow-2xl bg-slate-950/40">
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b border-dark-border bg-slate-950/70 text-xs md:text-sm font-semibold tracking-wider text-gray-400 select-none">
                <th className="p-4 md:p-6 w-[35%]">Feature Capability</th>
                <th className="p-4 md:p-6 text-center text-white bg-cyan-500/5 border-x border-cyan-500/20 relative">
                  <div className="flex items-center justify-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="text-cyan-400 font-bold">Ollama Coder</span>
                  </div>
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
                </th>
                <th className="p-4 md:p-6 text-center font-medium">Copilot</th>
                <th className="p-4 md:p-6 text-center font-medium">Cursor</th>
                <th className="p-4 md:p-6 text-center font-medium">Codeium</th>
                <th className="p-4 md:p-6 text-center font-medium">Tabnine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border font-sans text-xs md:text-sm text-gray-300">
              {comparisonData.map((row, idx) => (
                <tr 
                  key={idx} 
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  {/* Feature Label */}
                  <td className="p-4 md:p-6 font-medium text-white">{row.feature}</td>
                  
                  {/* Ollama Coder (Main column highlighted) */}
                  <td className="p-4 md:p-6 text-center bg-cyan-500/5 border-x border-cyan-500/10 font-semibold">
                    {renderIcon(row.ollamaCoder, true)}
                  </td>
                  
                  {/* Competitors */}
                  <td className="p-4 md:p-6 text-center">{renderIcon(row.copilot)}</td>
                  <td className="p-4 md:p-6 text-center">{renderIcon(row.cursor)}</td>
                  <td className="p-4 md:p-6 text-center">{renderIcon(row.codeium)}</td>
                  <td className="p-4 md:p-6 text-center">{renderIcon(row.tabnine)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small comparative notice */}
        <div className="mt-6 text-center text-xs text-gray-500 font-light select-none">
          Comparative data compiled based on default offline, free, and local product plan limits.
        </div>

      </div>
    </section>
  );
};
