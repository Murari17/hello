
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
        hour12: false 
      }) + ' IST');
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="bg-ivory border-t border-charcoal-100 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <div className="mb-10 md:mb-0">
                <span className="text-[10px] font-sans font-bold uppercase tracking-ultra text-gold-500 mb-2 block">
                    Contact
                </span>
                <p className="text-charcoal-400 text-xs font-sans tracking-widest uppercase">
                    Based in {PERSONAL_INFO.location}
                </p>
            </div>
            <div className="text-right hidden md:block">
                 <span className="text-[10px] font-sans font-bold uppercase tracking-ultra text-gold-500 mb-2 block">
                    Local Time
                </span>
                <p className="text-charcoal-900 text-xl font-serif italic">
                    {time}
                </p>
            </div>
        </div>

        <div className="text-center mb-24">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal-900 mb-8 leading-none"
            >
                Let's create something
                <br className="hidden md:block" />
                <span className="italic text-gold-500 inline-block ml-3">timeless.</span>
            </motion.h2>
            
            <motion.a 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="inline-block relative text-xl md:text-2xl font-light font-sans tracking-widest text-charcoal-600 hover:text-charcoal-900 transition-colors group mt-8"
            >
                {PERSONAL_INFO.email}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </motion.a>
        </div>

        <div className="border-t border-charcoal-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] text-charcoal-400 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Murari Prasad Samal
            </div>
            
            <div className="flex gap-8">
                <a href={PERSONAL_INFO.socials.linkedin} className="text-[10px] text-charcoal-500 hover:text-gold-600 uppercase tracking-widest transition-colors">LinkedIn</a>
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-[10px] text-charcoal-500 hover:text-gold-600 uppercase tracking-widest transition-colors">GitHub</a>
                <a href={PERSONAL_INFO.socials.twitter} className="text-[10px] text-charcoal-500 hover:text-gold-600 uppercase tracking-widest transition-colors">Twitter</a>
            </div>
            
            <div className="md:hidden text-[10px] font-sans font-bold uppercase tracking-ultra text-gold-500">
                {time}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
