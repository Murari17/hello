import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 border-b border-charcoal-100 pb-6 flex items-baseline justify-between">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-charcoal-900"
          >
            Experience
          </motion.h2>
          <span className="font-mono text-xs text-gold-500 hidden md:block">[ 03 ]</span>
        </div>

        {/* Grid Layout */}
        <div className="flex flex-col">
            {EXPERIENCES.map((exp, index) => (
              <motion.div 
                  key={index} 
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 border-b border-charcoal-100 group hover:bg-gold-50/10 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                
                {/* Column 1: Date (Technical/Mono) */}
                <div className="md:col-span-3">
                    <span className="font-mono text-xs font-medium text-gold-600 uppercase tracking-wide block">
                        {exp.period}
                    </span>
                </div>

                {/* Column 2: Role & Company (Editorial) */}
                <div className="md:col-span-4">
                    <h3 className="text-xl font-serif font-medium text-charcoal-900 leading-tight mb-1">
                        {exp.role}
                    </h3>
                    <span className="font-sans text-sm text-charcoal-500 uppercase tracking-wider">
                        {exp.company}
                    </span>
                </div>

                {/* Column 3: Description (Detail) */}
                <div className="md:col-span-5">
                    <ul className="space-y-3">
                        {exp.description.map((point, idx) => (
                            <li 
                                key={idx} 
                                className="text-charcoal-600 font-sans font-light text-sm leading-relaxed flex items-start"
                            >
                                <span className="mr-3 text-gold-400 mt-1.5 w-1 h-1 bg-gold-400 rounded-full flex-shrink-0"></span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

              </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;