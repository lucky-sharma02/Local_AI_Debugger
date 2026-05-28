import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, FileText, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'feedback',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', type: 'feedback', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Connect & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Have questions, feature proposals, or want to contribute? Send us a message or find our repositories below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Repository Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Project Channels</span>
              </h3>
              <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                Ollama Coder is open-source. Join our community, review documentation guides, or submit pull requests.
              </p>
            </div>

            {/* Link cards */}
            <div className="space-y-4 flex-1 mt-6">
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl glassmorphism border-dark-border hover:border-cyan-500/30 transition-all group"
              >
                <div className="p-2 bg-slate-950 rounded-lg border border-dark-border group-hover:border-cyan-500/20 transition-colors">
                  <Github className="w-5 h-5 text-gray-200" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">GitHub Repository</h4>
                  <p className="text-[11px] text-gray-500 font-light">Browse source, open issues, and inspect releases.</p>
                </div>
              </a>

              <a
                href="#rag-pipeline"
                className="flex items-center space-x-4 p-4 rounded-xl glassmorphism border-dark-border hover:border-cyan-500/30 transition-all group"
              >
                <div className="p-2 bg-slate-950 rounded-lg border border-dark-border group-hover:border-cyan-500/20 transition-colors">
                  <FileText className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">Documentation</h4>
                  <p className="text-[11px] text-gray-500 font-light">Read architecture, setup limits, and API guidelines.</p>
                </div>
              </a>

            </div>

            {/* Email contact snippet */}
            <div className="border-t border-white/5 pt-4 text-xs text-gray-500 font-light">
              Maintained under MIT License. Direct contact: <span className="text-gray-300 font-medium">support@ollamacoder.local</span>
            </div>
          </div>

          {/* Right Column: Glassmorphism Contact Form */}
          <div className="lg:col-span-7 rounded-2xl glassmorphism border-dark-border p-6 md:p-8 bg-slate-950/40 relative min-h-[380px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                >
                  <span className="text-[10px] text-cyan-400 font-mono tracking-widest font-semibold block uppercase">
                    Feedback & Inquiries Form
                  </span>
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-slate-950 border border-dark-border hover:border-gray-700 focus:border-cyan-500 p-2.5 rounded-lg text-sm text-white font-sans outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full bg-slate-950 border border-dark-border hover:border-gray-700 focus:border-cyan-500 p-2.5 rounded-lg text-sm text-white font-sans outline-none transition-colors"
                    />
                  </div>

                  {/* Feedback Type select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Message Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-slate-950 border border-dark-border hover:border-gray-700 focus:border-cyan-500 p-2.5 rounded-lg text-sm text-white font-sans outline-none transition-colors"
                    >
                      <option value="feedback">General Feedback</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-400">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your suggestions..."
                      className="w-full bg-slate-950 border border-dark-border hover:border-gray-700 focus:border-cyan-500 p-2.5 rounded-lg text-sm text-white font-sans outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-lg transition-all flex items-center justify-center space-x-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Feedback Submitted!</h4>
                  <p className="text-sm text-gray-400 font-light max-w-sm text-center">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your submission has been saved.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-gray-300 border border-dark-border text-xs rounded transition-colors"
                  >
                    Send Another Response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};
