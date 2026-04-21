
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

interface NavbarProps {
    currentView: 'home' | 'blog';
    onChangeView: (view: 'home' | 'blog') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (currentView === 'home') {
          // Determine active section
          const sections = ['experience', 'projects', 'skills', 'contact'];
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              // Check if section is in viewport (with some offset for header)
              if (rect.top >= 0 && rect.top <= 400) {
                setActiveSection(section);
                break;
              }
            }
          }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (currentView === 'blog') {
        onChangeView('home');
        // Wait for render to find element
        setTimeout(() => {
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }, 100);
    } else {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          setActiveSection(targetId);
        }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (currentView === 'blog') {
          onChangeView('home');
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled || currentView === 'blog'
            ? "bg-ivory/95 backdrop-blur-xl border-b border-gold-100 shadow-sm py-3" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#" 
              onClick={handleLogoClick}
              className="z-50 group relative"
            >
                <h1 className="text-2xl font-serif font-bold text-charcoal-900 tracking-wider uppercase">
                    Murari
                </h1>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
                {currentView === 'home' && navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={clsx(
                          "relative text-xs font-bold uppercase tracking-widest transition-colors duration-300",
                          isActive ? "text-gold-600" : "text-charcoal-800 hover:text-gold-500"
                        )}
                    >
                        {link.name}
                        <span className={clsx(
                          "absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400 transition-all duration-300",
                          isActive ? "opacity-100" : "opacity-0"
                        )}></span>
                    </a>
                  );
                })}

                <button
                    onClick={() => onChangeView(currentView === 'home' ? 'blog' : 'home')}
                    className={clsx(
                        "text-xs font-bold uppercase tracking-widest transition-colors duration-300",
                        currentView === 'blog' ? "text-gold-600" : "text-charcoal-800 hover:text-gold-500"
                    )}
                >
                    {currentView === 'home' ? 'Research' : 'Portfolio'}
                </button>
                
                {currentView === 'home' && (
                    <a 
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="ml-4 px-6 py-2 border border-charcoal-900 text-charcoal-900 text-[10px] font-bold uppercase tracking-widest hover:bg-charcoal-900 hover:text-ivory transition-all duration-300"
                    >
                        Contact
                    </a>
                )}
            </div>

            {/* Mobile Toggle */}
            <button
                className="md:hidden text-charcoal-900 z-50 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-ivory z-40 flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center space-y-8">
              {currentView === 'home' && navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-4xl font-serif text-charcoal-900 hover:text-gold-500 hover:italic transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
               <button
                  onClick={() => {
                      onChangeView(currentView === 'home' ? 'blog' : 'home');
                      setMobileMenuOpen(false);
                  }}
                  className="text-4xl font-serif text-charcoal-900 hover:text-gold-500 hover:italic transition-all duration-300"
                >
                  {currentView === 'home' ? 'Research' : 'Portfolio'}
                </button>

               <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="text-sm font-sans font-bold uppercase tracking-widest text-gold-600 mt-8 border-b border-gold-400 pb-1"
                >
                  Get in Touch
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
