import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  GitMerge, 
  Users, 
  BarChart3, 
  Sparkles, 
  FileText, 
  TrendingUp,
  CheckSquare
} from 'lucide-react';

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const features = [
    {
      id: 'meeting-notes',
      icon: <MessageSquare className="text-brand-400" size={24} />,
      title: 'AI Meeting Notes',
      description: 'Instantly convert Google Meet, Zoom, and Teams transcripts into searchable summaries, key decisions, and action items.',
      badge: 'Popular',
      gridClass: 'md:col-span-2',
      illustration: (
        <div className="mt-6 p-4 rounded-xl bg-dark-900 border border-white/5 relative overflow-hidden h-40 flex flex-col justify-end">
          <div className="absolute top-2 left-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
            <span className="text-[10px] uppercase tracking-wider text-brand-300 font-semibold">Summarizing Call...</span>
          </div>
          <div className="space-y-3 z-10">
            <div className="flex gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center text-[8px] font-bold text-white">AI</div>
              <div className="bg-brand-500/10 border border-brand-500/20 text-brand-300 p-2 rounded-lg rounded-tl-none text-[10px] max-w-[80%]">
                "Based on the discussion, we will release v2.0 next Thursday. John will handle deployment, Sarah will write release notes."
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-white/5 pt-2.5">
              <span className="text-[10px] font-bold text-white">Action Items:</span>
              <span className="bg-white/5 text-dark-300 px-2 py-0.5 rounded text-[9px] border border-white/10">Deploy build (John)</span>
              <span className="bg-white/5 text-dark-300 px-2 py-0.5 rounded text-[9px] border border-white/10">Release notes (Sarah)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'automation',
      icon: <GitMerge className="text-indigo-400" size={24} />,
      title: 'Workflow Automation',
      description: 'Build trigger-action recipes to connect Slack, Jira, GitHub, Salesforce, and 100+ other apps without writing code.',
      badge: 'Core',
      gridClass: 'md:col-span-1',
      illustration: (
        <div className="mt-6 p-4 rounded-xl bg-dark-900 border border-white/5 relative overflow-hidden h-40 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.824 5.043a2.528 2.528 0 0 1-2.52-2.522A2.528 2.528 0 0 1 8.824 0a2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H3.781a2.528 2.528 0 0 1-2.522-2.52V8.824a2.528 2.528 0 0 1 2.522-2.52h5.043zm10.134 3.761a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522H10.133a2.528 2.528 0 0 1-2.522-2.522V3.781a2.528 2.528 0 0 1 2.522-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043zm-3.76 10.134a2.528 2.528 0 0 1 2.52 2.522 2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.522h2.522zm0-1.262a2.528 2.528 0 0 1-2.522-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.52h5.044a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.044z"/>
              </svg>
            </div>
            <div className="h-0.5 w-8 bg-gradient-to-r from-indigo-500 to-brand-500" />
            <div className="w-10 h-10 rounded-lg bg-brand-950/40 border border-brand-500/30 flex items-center justify-center text-brand-400">
              <Sparkles size={18} />
            </div>
            <div className="h-0.5 w-8 bg-gradient-to-r from-brand-500 to-cyan-500" />
            <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <CheckSquare size={18} />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'collaboration',
      icon: <Users className="text-cyan-400" size={24} />,
      title: 'Team Collaboration',
      description: 'Co-author project boards, assign issues, and share automated sync updates directly in real-time, keeping everyone on the same page.',
      badge: 'New',
      gridClass: 'md:col-span-1',
      illustration: (
        <div className="mt-6 p-4 rounded-xl bg-dark-900 border border-white/5 relative overflow-hidden h-40 flex flex-col justify-center">
          <div className="flex -space-x-2.5 overflow-hidden justify-center mb-3">
            {['Sarah L.', 'Alex M.', 'Devon K.', 'Emma W.'].map((name, i) => (
              <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-dark-950 bg-brand-600 flex items-center justify-center text-white text-[9px] font-bold">
                {name.split(' ').map(n=>n[0]).join('')}
              </div>
            ))}
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-dark-950 bg-white/5 border border-white/10 flex items-center justify-center text-dark-300 text-[9px] font-bold">
              +12
            </div>
          </div>
          <span className="text-[10px] text-center text-dark-400">Collaborating on Project Alpha</span>
        </div>
      ),
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="text-pink-400" size={24} />,
      title: 'Analytics Dashboard',
      description: 'Analyze workspace activity, identify bottlenecks, and optimize team velocity with built-in analytics and reporting tools.',
      badge: 'Premium',
      gridClass: 'md:col-span-2',
      illustration: (
        <div className="mt-6 p-4 rounded-xl bg-dark-900 border border-white/5 relative overflow-hidden h-40 flex flex-col justify-end">
          <div className="flex justify-between items-end h-24 gap-2">
            {[35, 45, 30, 55, 70, 60, 85, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end h-full">
                <div className="w-full bg-gradient-to-t from-pink-500/20 to-pink-500 rounded-t" style={{ height: `${h}%` }} />
                <span className="text-[8px] text-dark-500 text-center mt-1">W{i+1}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'task-assignment',
      icon: <Sparkles className="text-yellow-400" size={24} />,
      title: 'Smart Task Assignment',
      description: "Let AI match task descriptions to team members' skillsets, workloads, and schedules automatically for optimized delivery.",
      badge: 'AI Powered',
      gridClass: 'md:col-span-1',
      illustration: (
        <div className="mt-6 p-4 rounded-xl bg-dark-900 border border-white/5 relative overflow-hidden h-40 flex flex-col justify-center gap-2">
          <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between">
            <span className="text-[10px] text-white">Optimize database indices</span>
            <span className="text-[9px] bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded font-bold">Assign to Devon (DB Expert)</span>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center justify-between opacity-50">
            <span className="text-[10px] text-white">Design logo assets</span>
            <span className="text-[9px] bg-white/10 text-dark-300 px-1.5 py-0.5 rounded">Assigning...</span>
          </div>
        </div>
      ),
    },
    {
      id: 'reporting',
      icon: <FileText className="text-emerald-400" size={24} />,
      title: 'Real-time Reporting',
      description: 'Generate beautiful status reports with high-fidelity charts, shareable web links, and automatic Slack notifications.',
      badge: 'Enterprise',
      gridClass: 'md:col-span-2',
      illustration: (
        <div className="mt-6 p-4 rounded-xl bg-dark-900 border border-white/5 relative overflow-hidden h-40 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-semibold text-white">Weekly Performance Report</span>
            <span className="text-[9px] text-emerald-400 flex items-center gap-1"><TrendingUp size={10} /> +18.2%</span>
          </div>
          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[78%]" />
            </div>
            <div className="flex justify-between text-[8px] text-dark-400">
              <span>Automations Success Rate: 99.8%</span>
              <span>Tasks Delivered: 78/80</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-dark-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Everything you need to{' '}
            <span className="text-brand-500">automate and scale</span>
          </h2>
          <p className="text-lg text-dark-300">
            A comprehensive suite of intelligence layers and automation mechanisms built to eliminate administrative overhead.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className={`group/card glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between glass-card-hover ${feature.gridClass}`}
            >
              {/* Highlight Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    {feature.icon}
                  </div>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-brand-300 uppercase bg-brand-500/10 border border-brand-500/20 rounded-full">
                    {feature.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 font-display">{feature.title}</h3>
                <p className="text-sm text-dark-300 leading-relaxed">{feature.description}</p>
              </div>

              {/* Custom illustration block */}
              {feature.illustration}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
