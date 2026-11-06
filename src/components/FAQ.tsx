import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-white/5 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 font-medium text-white hover:text-brand-400 transition-colors focus:outline-none"
      >
        <span className="text-base sm:text-lg font-display">{question}</span>
        <ChevronDown
          size={18}
          className={`text-dark-400 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand-400' : 'rotate-0'
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-dark-300 leading-relaxed pr-6 pt-2 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does FlowSync AI integrate with my existing tools?",
      answer: "FlowSync AI supports 1-click native integrations with Google Meet, Zoom, Slack, Jira, GitHub, Notion, and 100+ others. Once authorized, it monitors events (such as meeting completions or pull requests) and triggers your custom workflows automatically.",
    },
    {
      question: "Is my meeting transcript and workspace data secure?",
      answer: "Absolutely. Security is our top priority. All data is encrypted in transit and at rest using enterprise-grade AES-256 standards. FlowSync AI is SOC2 Type II certified. Furthermore, we never use your private workspace data or meeting transcriptions to train public AI models.",
    },
    {
      question: "Can I create custom trigger and action workflows?",
      answer: "Yes! While we offer a variety of pre-built recipes, you can use our workflow builder to define custom trigger events and map them to multi-stage actions across different applications (e.g., creating a Jira ticket, posting a Slack summary, and sending an email) with zero coding required.",
    },
    {
      question: "How does the smart AI task assignment work?",
      answer: "Our system analyzes the description of the task for skills required, then cross-references your team members' expertise tags, active workloads, and calendar schedules. It then suggests or assigns the task to the teammate who is best suited and has the bandwidth to deliver it.",
    },
    {
      question: "Can we cancel our subscription or change plans at any time?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any time directly from your workspace billings settings. If you cancel, your premium features will remain active until the end of your current billing cycle, and you will not be charged again.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-dark-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/5 text-xs font-semibold text-brand-300 uppercase tracking-widest mb-4 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Got questions? We've got{' '}
            <span className="text-brand-500">answers</span>
          </h2>
          <p className="text-base text-dark-300">
            Can't find the answers you are looking for? Reach out to our dedicated success team at any time.
          </p>
        </div>

        {/* FAQ list */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 shadow-xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 max-w-xl mx-auto">
          <div className="p-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 rounded-lg shrink-0">
            <MessageCircle size={20} />
          </div>
          <p className="text-xs text-dark-300 text-left">
            Still have questions or need custom enterprise integration support?{' '}
            <a href="#" className="font-semibold text-brand-400 hover:text-brand-300 underline">
              Chat with our product specialists
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
