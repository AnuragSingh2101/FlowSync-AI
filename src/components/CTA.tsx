import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-dark-950 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 text-center border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          
          <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 text-xs font-semibold text-brand-300 mb-6 backdrop-blur-sm">
              <Sparkles size={12} className="animate-pulse" />
              <span>Get 14 Days Free trial</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 font-display leading-tight">
              Ready to transform your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-indigo-400">
                team's productivity?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-dark-300 mb-10 max-w-xl leading-relaxed">
              Join thousands of teams automating repetitive work, managing projects, and running efficient meetings with FlowSync AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a
                href="#pricing"
                className="px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 shadow-xl shadow-brand-500/20 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                Start Free Trial
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button className="px-8 py-4 rounded-xl font-semibold text-sm text-dark-100 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
