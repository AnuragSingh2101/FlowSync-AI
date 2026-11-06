import { useState, useEffect } from 'react';
import { Menu, X, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Stats', href: '#stats' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Zap size={20} className="fill-current text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              FlowSync <span className="text-brand-500">AI</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-dark-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-dark-300 hover:text-white transition-colors duration-200 px-4 py-2">
              Log in
            </button>
            <a
              href="#pricing"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-brand-600 to-indigo-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-brand-800 transition-all duration-300 shadow-lg shadow-brand-500/25"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-dark-950 rounded-md group-hover:bg-opacity-0 flex items-center gap-1.5 font-medium">
                Get Started
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-300 hover:text-white p-2 rounded-lg focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-950 border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-dark-300 hover:text-white py-2 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-dark-300 hover:text-white py-2 text-left"
                >
                  Log in
                </button>
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-gradient-to-r from-brand-600 to-indigo-500 text-white font-medium py-3 px-4 rounded-lg shadow-lg shadow-brand-500/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
                >
                  Get Started
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
