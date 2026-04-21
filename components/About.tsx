import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-ivory">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Label */}
            <div className="md:col-span-3 sticky top-32">
                <span className="font-mono text-xs text-gold-500 uppercase tracking-widest block mb-4">
                    [ About ]
                </span>
                <div className="w-12 h-px bg-charcoal-900"></div>
            </div>

            {/* Content */}
            <div className="md:col-span-9">
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                >
                    <p className="text-2xl md:text-3xl font-serif text-charcoal-900 leading-relaxed mb-12">
                        Blending <span className="italic text-gold-500">technical rigor</span> with scalable infrastructure. I build systems where code meets reliability, and innovation meets stability.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-charcoal-100 pt-12">
                        <div>
                            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal-900 mb-4">
                                Engineering
                            </h3>
                            <p className="text-charcoal-600 text-sm font-sans font-light leading-relaxed">
                                Crafting robust full-stack applications with MERN and optimizing machine learning models for predictive intelligence.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal-900 mb-4">
                                Operations
                            </h3>
                            <p className="text-charcoal-600 text-sm font-sans font-light leading-relaxed">
                                Orchestrating cloud-native deployments with Docker, Kubernetes, and AWS to ensure zero-downtime scalability.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;