import { motion } from 'framer-motion';
import { Link2, Cpu, BarChart3, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <Link2 className="text-brand-400" size={24} />,
      title: 'Connect Tools',
      description: 'Integrate FlowSync AI with your daily apps like Google Meet, Slack, Jira, GitHub, and Notion in a single click.',
      color: 'bg-brand-500/10 border-brand-500/30 text-brand-400',
    },
    {
      number: '02',
      icon: <Cpu className="text-indigo-400" size={24} />,
      title: 'Automate Tasks',
      description: 'Define your desired trigger conditions and let our smart AI engine handle notes, status syncs, and tasks automatically.',
      color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    },
    {
      number: '03',
      icon: <BarChart3 className="text-cyan-400" size={24} />,
      title: 'Analyze Results',
      description: 'Monitor time saved, track project completion speed, and continuously fine-tune automations with real-time analytics.',
      color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 60,
        damping: 15,
      },
    },
  };

  return (
    <section id="how-it-works" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 text-xs font-semibold text-brand-300 uppercase tracking-widest mb-4 inline-block">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Three simple steps to{' '}
            <span className="text-brand-500">unlock efficiency</span>
          </h2>
          <p className="text-lg text-dark-300">
            FlowSync AI runs in the background of your existing stack, so you never have to change the way you work.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t border-dashed border-white/10 -translate-y-12 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Step Icon & Number */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${step.color} shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
              <p className="text-sm text-dark-300 leading-relaxed max-w-sm">
                {step.description}
              </p>

              {/* Arrow Indicator (Mobile only between items) */}
              {index < 2 && (
                <div className="md:hidden mt-8 text-brand-500 animate-bounce">
                  <ArrowRight size={20} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
