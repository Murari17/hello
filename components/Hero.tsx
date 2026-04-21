import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const handleScrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('experience');
    if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 pb-12 bg-ivory">
      
      <div className="max-w-7xl mx-auto text-center z-10 w-full">
        
        {/* Decorative Top Label */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
        >
        </motion.div>

        {/* Name Block */}
        <div className="flex flex-col items-center justify-center mb-8">
            <div className="overflow-hidden">
                <motion.h1 
                    variants={textReveal}
                    initial="hidden"
                    animate="visible"
                    className="font-serif font-medium text-charcoal-900 leading-[0.9] tracking-tight text-center"
                    style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}
                >
                    Murari Prasad
                </motion.h1>
            </div>
            
            <div className="overflow-hidden">
                <motion.h1 
                    variants={textReveal}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.15 }} // Slight stagger
                    className="font-serif italic text-gold-400 leading-[0.9] tracking-tight text-center"
                    style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}
                >
                    Samal
                </motion.h1>
            </div>
        </div>

        {/* Technical Roles */}
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-charcoal-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-12"
        >
            <span className="border border-charcoal-100 px-3 py-1 rounded-full">DevOps Engineer</span>
            <span className="hidden md:inline-block w-8 h-px bg-gold-300"></span>
            <span className="border border-charcoal-100 px-3 py-1 rounded-full">Machine Learning</span>
            <span className="hidden md:inline-block w-8 h-px bg-gold-300"></span>
            <span className="border border-charcoal-100 px-3 py-1 rounded-full">Full Stack</span>
        </motion.div>

        {/* Description */}
        <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
            className="text-base md:text-lg text-charcoal-600 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-24 px-6"
        >
            {PERSONAL_INFO.summary}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.5, duration: 1 }}
             className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
             onClick={handleScrollToExperience}
        >
            <span className="font-mono text-[9px] uppercase tracking-widest text-charcoal-400">Explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-charcoal-900 to-transparent"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;