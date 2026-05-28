import React from 'react';
import { Shield, EyeOff, Radio, Lock, ShieldCheck } from 'lucide-react';

export const PrivacySecurity: React.FC = () => {
  const securityPillars = [
    {
      title: 'Zero Cloud Telemetry',
      desc: 'Absolutely no codes, inputs, or workspace diagnostics are sent to external servers. What happens on your machine stays on your machine.',
      icon: <EyeOff className="w-5 h-5 text-cyan-400" />
    },
    {
      title: '100% Offline Support',
      desc: 'No active internet connection is required. Perfect for air-gapped networks, airplanes, or high-security enterprise environments.',
      icon: <Radio className="w-5 h-5 text-purple-400" />
    },
    {
      title: 'VRAM Isolation',
      desc: 'Model weights are loaded locally into your GPU/CPU space via Ollama. Data remains strictly inside system RAM boundaries.',
      icon: <Lock className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Corporate Compliance',
      desc: 'Compliant by design with strict IP custody policies, SOC2 scopes, and HIPAA guidelines. Eliminates the risk of training leaks.',
      icon: <ShieldCheck className="w-5 h-5 text-pink-400" />
    }
  ];

  return (
    <section id="privacy-security" className="py-24 relative overflow-hidden bg-slate-950/20 border-y border-dark-border">
      {/* Background Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Privacy by <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Design</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Ollama Coder runs completely inside your workstation, guaranteeing absolute containment of proprietary IP.
          </p>
        </div>

        {/* Security Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: orbit shield visual */}
          <div className="lg:col-span-5 flex justify-center relative py-10">
            {/* Background glowing rings */}
            <div className="absolute w-72 h-72 rounded-full border border-cyan-500/20 animate-ping opacity-25" />
            <div className="absolute w-60 h-60 rounded-full border border-purple-500/25 animate-pulse" />
            <div className="absolute w-44 h-44 rounded-full border border-white/5" />
            
            {/* Central Shield */}
            <div className="relative w-36 h-36 rounded-full bg-slate-950 border border-cyan-500/30 flex items-center justify-center shadow-2xl shadow-cyan-950/50 z-10">
              <Shield className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
            </div>
          </div>

          {/* Right Column: Security Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {securityPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl glassmorphism border-dark-border text-left hover:border-cyan-500/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-dark-border flex items-center justify-center mb-4">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">{pillar.title}</h4>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
