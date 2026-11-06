import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    {
      value: '10,000+',
      label: 'Active Teams',
      description: 'Streamlining workflow execution worldwide daily.',
      color: 'from-brand-400 to-indigo-400',
    },
    {
      value: '95%',
      label: 'Customer Satisfaction',
      description: 'Award-winning support and user-friendly experience.',
      color: 'from-indigo-400 to-cyan-400',
    },
    {
      value: '40%',
      label: 'Productivity Boost',
      description: 'Average increase in output velocity across projects.',
      color: 'from-cyan-400 to-emerald-400',
    },
    {
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade infrastructure SLA reliability.',
      color: 'from-emerald-400 to-brand-400',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="stats" className="py-20 bg-dark-950/60 border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 text-center border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-center"
            >
              <span className={`text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} font-display mb-2 text-glow`}>
                {stat.value}
              </span>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-dark-400 leading-relaxed max-w-[200px] mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
