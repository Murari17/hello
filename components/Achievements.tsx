
import React from 'react';
import Section from './Section';
import { CERTIFICATIONS, COMPETITIONS } from '../constants';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" className="bg-ivory py-32 border-t border-charcoal-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Certifications Column */}
            <div>
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-8 h-px bg-gold-400"></div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal-900">
                        Certifications
                    </span>
                </div>
                
                <div className="space-y-8">
                    {CERTIFICATIONS.map((cert, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group border-l-2 border-charcoal-100 pl-6 hover:border-gold-400 transition-colors duration-300"
                        >
                            <h3 className="font-serif text-2xl italic text-charcoal-900 mb-2 group-hover:text-gold-600 transition-colors">
                                {cert.name}
                            </h3>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-500">
                                Issued by {cert.issuer}
                            </p>
                            {cert.issued && (
                                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-charcoal-400">
                                    Issued {cert.issued}
                                </p>
                            )}
                            {cert.credentialId && (
                                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-charcoal-400">
                                    Credential ID {cert.credentialId}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Competitions Column */}
            <div>
                <div className="flex items-center gap-3 mb-12">
                     <div className="w-8 h-px bg-gold-400"></div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal-900">
                        Competitions
                    </span>
                </div>

                <div className="space-y-8">
                     {COMPETITIONS.map((comp, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex justify-between items-baseline border-b border-charcoal-200 pb-4 group"
                        >
                            <div>
                                <h3 className="font-serif text-xl text-charcoal-900 mb-1 group-hover:text-gold-600 transition-colors">
                                    {comp.name}
                                </h3>
                                <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-500">
                                    {comp.organizer}
                                </p>
                            </div>
                            <span className="font-mono text-xs font-bold text-gold-600 group-hover:text-gold-500 transition-colors">
                                {comp.year}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </Section>
  );
};

export default Achievements;
