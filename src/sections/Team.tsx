import React from 'react';
import { Github, Linkedin, Code2, Database, Laptop } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  avatarIcon: React.ReactNode;
  github: string;
  linkedin: string;
}

export const Team: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: 'Aryan Patel',
      role: 'Lead AI Architect',
      specialty: 'Orchestrating Planner & Patch Coder agents. Formulating surgical replacement prompt schemes.',
      avatarIcon: <Code2 className="w-8 h-8 text-cyan-400" />,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Sneha Rao',
      role: 'RAG & Indexing Engineer',
      specialty: 'Optimizing local vector search indexing, nomic-embed models, and workspace watch protocols.',
      avatarIcon: <Database className="w-8 h-8 text-purple-400" />,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Kabir Mehta',
      role: 'VS Code Core Developer',
      specialty: 'Managing extension event loops, TextEditor decoration channels, diff views, and sidebar webviews.',
      avatarIcon: <Laptop className="w-8 h-8 text-emerald-400" />,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden bg-slate-950/20 border-y border-dark-border">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Meet the <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Developers</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            The core team behind building and optimizing Ollama Coder for offline software environments.
          </p>
        </div>

        {/* Member cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="group relative rounded-2xl glassmorphism p-6 md:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 bg-slate-950/40 text-left"
            >
              {/* Highlight Background Glow */}
              <div className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-b from-white/5 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.08)]" />

              <div>
                {/* Cyber Avatar Box */}
                <div className="w-16 h-16 rounded-xl bg-slate-950 border border-dark-border flex items-center justify-center mb-6 shadow-lg group-hover:border-cyan-500/30 transition-colors">
                  {member.avatarIcon}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 block mb-4">
                  {member.role}
                </span>

                {/* Tech specialty */}
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mb-6">
                  {member.specialty}
                </p>
              </div>

              {/* Social Channels */}
              <div className="flex items-center space-x-3 mt-4 border-t border-white/5 pt-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded bg-slate-950 border border-dark-border text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded bg-slate-950 border border-dark-border text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
