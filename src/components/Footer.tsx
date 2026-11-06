import { Zap, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Release Notes', href: '#' },
      { name: 'Security Roadmap', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact Sales', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Status Page', href: '#' },
    ],
  };

  return (
    <footer className="bg-dark-950 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Bio */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center text-white">
                <Zap size={16} className="fill-current text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                FlowSync <span className="text-brand-500">AI</span>
              </span>
            </a>
            <p className="text-xs text-dark-300 max-w-sm leading-relaxed">
              FlowSync AI helps teams automate repetitive work, manage projects, summarize meetings, and improve productivity using AI-powered workflows.
            </p>
            {/* Newsletter */}
            <div className="flex flex-col gap-2.5 max-w-sm">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Subscribe to our newsletter
              </span>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-dark-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 flex-1 transition-all"
                />
                <button className="bg-brand-600 hover:bg-brand-500 text-white p-2 rounded-lg transition-colors flex items-center justify-center">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
              Product
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-dark-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
              Resources
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-dark-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs text-dark-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-dark-500">
            &copy; {currentYear} FlowSync AI, Inc. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-dark-400 hover:text-white hover:border-brand-500/30 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-dark-400 hover:text-white hover:border-brand-500/30 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-dark-400 hover:text-white hover:border-brand-500/30 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 text-dark-400 hover:text-white hover:border-brand-500/30 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
