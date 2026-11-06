import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for individuals and small teams starting with AI workflows.',
      price: {
        monthly: 19,
        annual: 15,
      },
      features: [
        'Up to 3 team members',
        '5 active automated workflows',
        '10 hours meeting summaries / mo',
        'Standard integrations (Slack, Notion)',
        'Basic reporting & analytics',
        'Standard email support',
      ],
      cta: 'Start 14-day free trial',
      highlighted: false,
      borderClass: 'border-white/5',
      btnClass: 'bg-white/5 hover:bg-white/10 text-white border border-white/10',
    },
    {
      name: 'Pro',
      description: 'Perfect for scaling teams that require deep integrations and insights.',
      price: {
        monthly: 49,
        annual: 39,
      },
      features: [
        'Up to 15 team members',
        'Unlimited active workflows',
        '50 hours meeting summaries / mo',
        'Advanced integrations (Jira, GitHub, Salesforce)',
        'Smart task assignment AI engine',
        'Priority Slack & email support (2hr SLA)',
        'Real-time automated PDF reporting',
      ],
      cta: 'Start 14-day free trial',
      highlighted: true,
      badge: 'Most Popular',
      borderClass: 'border-brand-500/50 shadow-lg shadow-brand-500/10',
      btnClass: 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-xl shadow-brand-500/20 hover:opacity-95 hover:scale-[1.02]',
    },
    {
      name: 'Enterprise',
      description: 'For organizations needing security, custom integrations, and SLA guarantees.',
      price: {
        monthly: 'Custom',
        annual: 'Custom',
      },
      features: [
        'Unlimited team members',
        'Unlimited active workflows & transcripts',
        'Dedicated custom-trained AI models',
        'SSO, SAML & advanced compliance logging',
        'Dedicated account success manager',
        'Custom uptime SLA contract guarantees',
        'Custom integration support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
      borderClass: 'border-white/5',
      btnClass: 'bg-white/5 hover:bg-white/10 text-white border border-white/10',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 text-xs font-semibold text-brand-300 uppercase tracking-widest mb-4 inline-block">
            Pricing plans
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Flexible pricing for{' '}
            <span className="text-brand-500">any team scale</span>
          </h2>
          <p className="text-lg text-dark-300">
            Start completely free for 14 days. No credit card required. Cancel anytime.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-semibold transition-colors duration-250 ${billingPeriod === 'monthly' ? 'text-white' : 'text-dark-400'}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-8 bg-white/5 border border-white/10 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div
                className={`w-6 h-6 rounded-full bg-brand-500 shadow-md transform transition-transform duration-300 ${
                  billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors duration-250 flex items-center gap-1.5 ${billingPeriod === 'annual' ? 'text-brand-400' : 'text-dark-400'}`}>
              Annual billing
              <span className="bg-brand-500/10 border border-brand-500/20 text-brand-300 text-[10px] px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 relative flex flex-col justify-between border ${
                plan.highlighted ? plan.borderClass : 'border-white/5'
              } transition-all duration-300 hover:scale-[1.01]`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase flex items-center gap-1">
                  <Sparkles size={10} className="fill-current text-white animate-pulse" />
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">{plan.name}</h3>
                <p className="text-xs text-dark-400 mb-6 min-h-[32px]">{plan.description}</p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-bold text-white">$</span>
                  <span className="text-5xl font-extrabold text-white tracking-tight font-display">
                    {typeof plan.price[billingPeriod] === 'number' ? (
                      <span className="tabular-nums">{plan.price[billingPeriod]}</span>
                    ) : (
                      plan.price[billingPeriod]
                    )}
                  </span>
                  {typeof plan.price[billingPeriod] === 'number' && (
                    <span className="text-sm text-dark-400 font-semibold ml-1">/ month</span>
                  )}
                </div>

                <div className="border-t border-white/5 pt-8 mb-8">
                  <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                    What's Included
                  </p>
                  <ul className="space-y-3.5">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-dark-300">
                        <Check size={14} className="text-brand-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs transition-all ${plan.btnClass}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
