import React, { useState } from 'react';
import { Folder, FolderOpen, FileCode, ChevronDown, ChevronRight, Info } from 'lucide-react';

interface FileNode {
  name: string;
  type: 'folder' | 'file';
  path: string;
  description?: string;
  children?: FileNode[];
}

export const ProjectStructure: React.FC = () => {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'src': true,
    'src/core': true,
    'src/agent': true
  });
  const [selectedFile, setSelectedFile] = useState<FileNode>({
    name: 'agent.py',
    type: 'file',
    path: 'src/core/agent.py',
    description: 'Core logic for orchestration of agents and LLM invocations. Manages the system-wide execution loop.'
  });

  const projectTree: FileNode = {
    name: 'src',
    type: 'folder',
    path: 'src',
    children: [
      {
        name: 'core',
        type: 'folder',
        path: 'src/core',
        children: [
          { name: 'agent.py', type: 'file', path: 'src/core/agent.py', description: 'Core logic for orchestration of agents and LLM invocations. Manages the system-wide execution loop.' },
          { name: 'patch.py', type: 'file', path: 'src/core/patch.py', description: 'Defines surgical code diff replacement schemas and local AST validity audits.' }
        ]
      },
      {
        name: 'agent',
        type: 'folder',
        path: 'src/agent',
        children: [
          { name: 'planner.py', type: 'file', path: 'src/agent/planner.py', description: 'Implements the Planner Agent. Scans the AST to segment developer tasks into step-by-step target changes.' },
          { name: 'patch_coder.py', type: 'file', path: 'src/agent/patch_coder.py', description: 'Implements the Patch Coder Agent. Interacts with the local LLM to generate precise inline diffs.' }
        ]
      },
      {
        name: 'rag',
        type: 'folder',
        path: 'src/rag',
        children: [
          { name: 'indexer.py', type: 'file', path: 'src/rag/indexer.py', description: 'Calculates file checksums on-save and updates changed functions incrementally in vector cache.' },
          { name: 'retriever.py', type: 'file', path: 'src/rag/retriever.py', description: 'Locates semantically relevant files and orders snippets based on AST hierarchy.' },
          { name: 'vector_db.py', type: 'file', path: 'src/rag/vector_db.py', description: 'Lightweight local embedded database implementation storing 768-dimension floats.' }
        ]
      },
      {
        name: 'providers',
        type: 'folder',
        path: 'src/providers',
        children: [
          { name: 'ollama.py', type: 'file', path: 'src/providers/ollama.py', description: 'HTTP wrapper client for local Ollama endpoints. Supports streaming tokens and embedding queries.' }
        ]
      },
      {
        name: 'tools',
        type: 'folder',
        path: 'src/tools',
        children: [
          { name: 'ast_parser.py', type: 'file', path: 'src/tools/ast_parser.py', description: 'Parses Python code into Abstract Syntax Trees, extracting classes, functions, and import references.' },
          { name: 'test_runner.py', type: 'file', path: 'src/tools/test_runner.py', description: 'Asynchronously runs workspace unit tests using Vitest or Pytest to verify patch corrections.' }
        ]
      },
      {
        name: 'context',
        type: 'folder',
        path: 'src/context',
        children: [
          { name: 'hierarchy.py', type: 'file', path: 'src/context/hierarchy.py', description: 'Constructs local project reference trees by analyzing import dependencies.' }
        ]
      },
      {
        name: 'ui',
        type: 'folder',
        path: 'src/ui',
        children: [
          { name: 'webview.ts', type: 'file', path: 'src/ui/webview.ts', description: 'Handles rendering and HTML/CSS updates inside the VS Code Sidebar pane.' }
        ]
      },
      {
        name: 'types',
        type: 'folder',
        path: 'src/types',
        children: [
          { name: 'index.ts', type: 'file', path: 'src/types/index.ts', description: 'TypeScript interface definitions for client-host postMessage payloads.' }
        ]
      },
      {
        name: 'utils',
        type: 'folder',
        path: 'src/utils',
        children: [
          { name: 'diff.ts', type: 'file', path: 'src/utils/diff.ts', description: 'Translates raw model string output into standard line-based diff additions/deletions.' },
          { name: 'logger.ts', type: 'file', path: 'src/utils/logger.ts', description: 'Custom logging module exporting detailed agent execution traces to extension log outputs.' }
        ]
      }
    ]
  };

  const toggleNode = (path: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const handleSelect = (node: FileNode) => {
    if (node.type === 'file') {
      setSelectedFile(node);
    } else {
      toggleNode(node.path);
    }
  };

  // Recursive Tree Node Renderer
  const renderNode = (node: FileNode, depth = 0) => {
    const isFolder = node.type === 'folder';
    const isExpanded = expandedNodes[node.path];
    const isSelected = selectedFile.path === node.path;

    return (
      <div key={node.path} className="font-mono text-xs md:text-sm">
        {/* Row */}
        <div
          onClick={() => handleSelect(node)}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
          className={`flex items-center space-x-2 py-1.5 hover:bg-white/5 cursor-pointer rounded transition-colors ${
            isSelected ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-500' : 'text-gray-300'
          }`}
        >
          {isFolder ? (
            <>
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-gray-500" /> : <ChevronRight className="w-3.5 h-3.5 text-gray-500" />}
              {isExpanded ? <FolderOpen className="w-4 h-4 text-cyan-400" /> : <Folder className="w-4 h-4 text-cyan-500" />}
            </>
          ) : (
            <>
              <div className="w-3.5" /> {/* Spacer instead of chevron */}
              <FileCode className="w-4 h-4 text-emerald-400" />
            </>
          )}
          <span className="truncate">{node.name}</span>
        </div>

        {/* Children */}
        {isFolder && isExpanded && node.children && (
          <div className="overflow-hidden">
            {node.children.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="project-structure" className="py-24 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Project <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Structure</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Explore the layout of the Ollama Coder extension codebase. Expand directories and inspect the responsibilities of individual modules.
          </p>
        </div>

        {/* VS Code Explorer Mockup */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Tree Explorer */}
          <div className="md:col-span-5 rounded-2xl glassmorphism border-dark-border p-4 md:p-6 bg-slate-950/60 max-h-[450px] overflow-y-auto scrollbar">
            <span className="text-[10px] text-gray-500 font-mono uppercase block mb-4 border-b border-white/5 pb-2 text-left">
              Workspace Explorer: src/
            </span>
            <div className="space-y-1">
              {renderNode(projectTree)}
            </div>
          </div>

          {/* Right Side: Component Details Panel */}
          <div className="md:col-span-7 rounded-2xl glassmorphism border-cyan-500/20 p-6 md:p-8 min-h-[220px] bg-slate-950/40 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <FileCode className="w-32 h-32 text-cyan-400" />
            </div>

            <div className="text-left space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  FILE DETAIL
                </span>
                <span className="text-xs text-gray-500 font-mono">{selectedFile.path}</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-mono flex items-center space-x-2">
                <FileCode className="w-6 h-6 text-emerald-400" />
                <span>{selectedFile.name}</span>
              </h3>

              <div className="h-px bg-dark-border my-4" />

              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                {selectedFile.description}
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-2 text-xs text-gray-500 font-light border-t border-white/5 pt-4">
              <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Selected module is written in compliance with local execution loops.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
