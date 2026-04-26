import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('experiences');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['experiences', 'stories', 'practical'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      if (current) setActiveSection(current);
      else if (window.scrollY < 200) setActiveSection('experiences');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expériences', href: '#experiences' },
    { name: 'Histoires', href: '#stories' },
    { name: 'Conseils Voyage', href: '#practical' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'h-20 bg-white shadow-sm border-b border-border' : 'h-24 bg-transparent'
      }`}
    >
      <div className="h-full px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 z-50 relative">
          <div className="w-8 h-8 bg-ocre rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">BF</span>
          </div>
          <span className="font-serif italic text-2xl tracking-tighter text-ink-dark">Burkina Tourism</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-[15px] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-2 transition-colors ${
                activeSection === link.href.substring(1) ? 'text-ocre' : 'text-ink hover:text-ocre'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ocre"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
          <button className="px-6 py-2 bg-espoir text-white text-[13px] font-semibold hover:bg-espoir/80 transition-colors rounded-full">
            Explorer
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-ink" size={28} />
          ) : (
            <Menu className="text-ink" size={28} />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-paper z-40 flex flex-col justify-center px-12"
            >
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-4xl text-ink hover:text-ocre transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
