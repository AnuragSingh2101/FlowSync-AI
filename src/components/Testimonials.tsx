import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "FlowSync AI completely changed how we handle post-meeting tasks. Our product managers save at least 8 hours a week because summaries and Jira ticket generation are handled automatically.",
      name: "Sarah Jenkins",
      role: "VP of Product at LinearTech",
      initials: "SJ",
      color: "bg-brand-500",
    },
    {
      quote: "The Slack and GitHub integrations are flawless. FlowSync AI automatically alerts developers of roadblocks and updates status reports in real-time. Team coordination has improved by leaps and bounds.",
      name: "Marcus Vance",
      role: "Engineering Director at SyncLabs",
      initials: "MV",
      color: "bg-indigo-500",
    },
    {
      quote: "We were skeptical about AI task assignments, but FlowSync gets it right 9 times out of 10. Our team load is beautifully balanced, and project delivery times have dropped by 25%.",
      name: "Elena Rostova",
      role: "Operations Lead at CloudVibe",
      initials: "ER",
      color: "bg-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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
    <section id="testimonials" className="py-24 bg-dark-950 relative overflow-hidden border-t border-b border-white/5">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 text-xs font-semibold text-brand-300 uppercase tracking-widest mb-4 inline-block">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Loved by modern{' '}
            <span className="text-brand-500">product teams</span>
          </h2>
          <p className="text-lg text-dark-300">
            Hear from operations, product, and engineering leaders who have accelerated their execution with FlowSync AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 relative flex flex-col justify-between glass-card-hover border border-white/5"
            >
              {/* Quote icon background */}
              <div className="absolute top-6 right-6 text-white/5 pointer-events-none">
                <Quote size={48} className="fill-current" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-400 text-brand-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-dark-200 text-sm leading-relaxed mb-8 italic relative z-10">
                  "{t.quote}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold font-display shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-dark-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
