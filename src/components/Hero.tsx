import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Cpu, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Fictional company logos for trust badges
  const trustBadges = [
    { name: 'Stripe', logo: 'Stripe' },
    { name: 'Linear', logo: 'Linear' },
    { name: 'Vercel', logo: 'Vercel' },
    { name: 'Notion', logo: 'Notion' },
    { name: 'Figma', logo: 'Figma' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-dark-950 bg-glow-mesh">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 text-xs font-semibold text-brand-300 mb-6 backdrop-blur-sm"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>Introducing FlowSync Workspaces 2.0</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl font-display"
          >
            Automate Work.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-indigo-400 to-cyan-400 animate-text-gradient bg-[length:200%_auto]">
              Accelerate Growth.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-dark-300 max-w-2xl mb-10 leading-relaxed"
          >
            FlowSync AI helps teams automate repetitive work, manage complex projects, summarize meetings, and boost productivity by up to 40% with AI-powered workflows.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16 justify-center w-full sm:w-auto"
          >
            <a
              href="#pricing"
              className="px-8 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-brand-600 to-indigo-600 shadow-xl shadow-brand-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              Start Free Trial
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 rounded-xl font-medium text-dark-100 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all flex items-center justify-center gap-2">
              <Play size={16} className="fill-current" />
              Book Demo
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="w-full max-w-4xl mb-24">
            <p className="text-xs uppercase tracking-widest text-dark-500 font-semibold mb-6">
              Trusted by fast-growing teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-45 grayscale hover:opacity-75 transition-opacity duration-300">
              {trustBadges.map((badge) => (
                <div key={badge.name} className="flex items-center gap-2">
                  <Cpu size={18} className="text-white" />
                  <span className="text-white font-display font-semibold text-lg tracking-wider">
                    {badge.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Mockup Dashboard */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-5xl rounded-2xl glass-card p-2 sm:p-4 shadow-2xl relative group/mockup"
          >
            {/* Soft glow border */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-500/20 via-indigo-500/20 to-transparent opacity-50 blur-xl group-hover/mockup:opacity-80 transition-opacity duration-500" />
            
            <div className="rounded-xl overflow-hidden bg-dark-950 border border-white/5 shadow-inner relative flex flex-col md:flex-row h-[420px] md:h-[500px]">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-48 border-r border-white/5 bg-dark-950 p-4 text-left gap-6 shrink-0">
                <div className="flex items-center gap-1.5 px-2">
                  <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center text-white text-[10px] font-bold">FS</div>
                  <span className="text-xs font-semibold text-white">FlowSync Workspace</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-dark-500 px-2">Dashboard</span>
                  <div className="px-2 py-1.5 bg-white/5 rounded text-xs text-white font-medium flex items-center gap-2">
                    <Cpu size={12} className="text-brand-400" /> Automations
                  </div>
                  <div className="px-2 py-1.5 rounded text-xs text-dark-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                    <MessageSquare size={12} /> Meeting Notes
                  </div>
                  <div className="px-2 py-1.5 rounded text-xs text-dark-400 hover:text-white transition-colors flex items-center gap-2 cursor-pointer">
                    <ShieldCheck size={12} /> Access Logs
                  </div>
                </div>
                <div className="mt-auto p-2 bg-brand-950/20 border border-brand-800/30 rounded-lg flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-brand-300">PRO PLAN ACTIVE</span>
                  <span className="text-[9px] text-brand-400/80">350 automations run this billing period.</span>
                </div>
              </div>

              {/* Workspace Main Panel */}
              <div className="flex-1 bg-dark-950/50 flex flex-col text-left overflow-y-auto hide-scrollbar">
                {/* Header */}
                <div className="p-4 border-b border-white/5 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-white">Active Workflow: Google Meet Summarizer</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20 text-[10px] font-semibold text-brand-400">
                      Running Live
                    </span>
                  </div>
                </div>

                {/* Content - Interactive Flow Diagram */}
                <div className="p-4 md:p-6 flex-1 flex flex-col justify-center gap-4 relative">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                  {/* Flow Nodes */}
                  <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 z-10">
                    {/* Node 1 */}
                    <div className="w-full md:w-56 glass-card p-3 rounded-lg border border-white/10 relative hover:border-brand-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1 rounded bg-blue-500/10 text-blue-400">
                          <MessageSquare size={14} />
                        </div>
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider">Trigger: Meet Ended</span>
                      </div>
                      <p className="text-[11px] text-dark-300">Transcript captured from Google Meet session.</p>
                      <div className="absolute right-1/2 bottom-0 translate-y-full md:right-0 md:top-1/2 md:translate-x-full md:-translate-y-1/2 z-20">
                        {/* Connecting Line / Arrow */}
                        <div className="h-6 w-0.5 md:h-0.5 md:w-8 bg-brand-500" />
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="w-full md:w-56 glass-card p-3 rounded-lg border border-brand-500/40 relative hover:border-brand-500/60 transition-colors shadow-lg shadow-brand-500/5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1 rounded bg-brand-500/10 text-brand-400">
                          <Cpu size={14} className="animate-spin-slow" />
                        </div>
                        <span className="text-[11px] font-bold text-brand-300 uppercase tracking-wider flex items-center gap-1">
                          Action: AI Analysis <Sparkles size={10} className="text-brand-300 animate-pulse" />
                        </span>
                      </div>
                      <p className="text-[11px] text-dark-200">Extracted action items, key decisions & summaries.</p>
                      <div className="absolute right-1/2 bottom-0 translate-y-full md:right-0 md:top-1/2 md:translate-x-full md:-translate-y-1/2 z-20">
                        <div className="h-6 w-0.5 md:h-0.5 md:w-8 bg-brand-500" />
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="w-full md:w-56 glass-card p-3 rounded-lg border border-white/10 hover:border-brand-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider">Sync: Slack & Notion</span>
                      </div>
                      <p className="text-[11px] text-dark-300">Tasks logged in Notion, notification sent to team channels.</p>
                    </div>
                  </div>

                  {/* Graph or Analytics Card on bottom */}
                  <div className="glass-card rounded-lg border border-white/5 p-4 mt-6 z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs font-semibold text-white mb-0.5">Productivity Gain Tracker</h4>
                      <p className="text-[10px] text-dark-400">Automated workflows saving standard developer 12.4 hrs/week.</p>
                    </div>
                    <div className="flex items-end gap-1.5 h-10">
                      {[15, 30, 25, 45, 60, 55, 75].map((h, i) => (
                        <div key={i} className="w-2.5 rounded-t bg-brand-600/20 hover:bg-brand-500 transition-colors group/bar relative" style={{ height: `${h}%` }}>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-dark-900 border border-white/10 text-[8px] text-white px-1 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 pointer-events-none mb-1 whitespace-nowrap transition-opacity">
                            +{h}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
