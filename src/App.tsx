import { useState } from 'react';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Architecture } from './sections/Architecture';
import { Workflow } from './sections/Workflow';
import { DiffPreview } from './sections/DiffPreview';
import { RagPipeline } from './sections/RagPipeline';
import { TechStack } from './sections/TechStack';
import { Installation } from './sections/Installation';
import { ProjectStructure } from './sections/ProjectStructure';
import { Testing } from './sections/Testing';
import { Comparison } from './sections/Comparison';
import { PrivacySecurity } from './sections/PrivacySecurity';
import { FutureScope } from './sections/FutureScope';
import { Team } from './sections/Team';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Menu, X, Cpu } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Diff Viewer', href: '#diff-preview' },
    { name: 'RAG Pipeline', href: '#rag-pipeline' },
    { name: 'Setup', href: '#installation' },
    { name: 'Compare', href: '#comparison' }
  ];

  return (
    <div className="relative min-h-screen bg-dark-bg text-gray-100 selection:bg-cyan-500/30 selection:text-white">
      
      {/* Floating Navigation Header */}
      <nav className="fixed top-0 inset-x-0 h-16 glassmorphism border-b border-dark-border z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto md:top-4 md:rounded-xl md:border">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2.5">
          <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
          <span className="font-bold text-base sm:text-lg tracking-wider text-white">Ollama Coder</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 text-xs md:text-sm font-medium text-gray-400 select-none">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors py-1.5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA and Menu */}
        <div className="flex items-center space-x-4">
          <a
            href="#installation"
            className="hidden sm:inline-flex px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg shadow hover:shadow-cyan-500/25 transition-all"
          >
            Get Extension
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg border border-dark-border text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-slate-950/95 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 space-y-4 border-t border-dark-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors border-b border-white/5 pb-2 text-left"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#installation"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-center rounded-lg shadow transition-all block mt-4"
          >
            Get Extension
          </a>
        </div>
      )}

      {/* Main Layout Content */}
      <main className="max-w-7xl mx-auto w-full relative">
        <Hero />
        <Features />
        <Architecture />
        <Workflow />
        <DiffPreview />
        <RagPipeline />
        <TechStack />
        <Installation />
        <ProjectStructure />
        <Testing />
        <Comparison />
        <PrivacySecurity />
        <FutureScope />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
