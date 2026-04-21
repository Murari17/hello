
import React from 'react';
import Section from './Section';
import { PROJECTS, PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-ivory py-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-charcoal-900 pb-6">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900">
                Selected Works
            </h2>
            <span className="font-mono text-xs text-charcoal-500 uppercase tracking-widest mb-1">
                Archive [2023—2025]
            </span>
        </div>

        {/* The Archive Grid */}
        <div className="w-full mb-16">
            {/* Table Header (Desktop) */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-charcoal-900 font-mono text-[10px] uppercase tracking-widest text-charcoal-500">
                <div className="col-span-1">Nº</div>
                <div className="col-span-3">Project Name</div>
                <div className="col-span-5">Description</div>
                <div className="col-span-3 text-right">Tech Stack</div>
            </div>

            {/* Project Rows */}
            <div className="flex flex-col">
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-charcoal-200 hover:bg-gold-50/20 transition-colors"
                    >
                        {/* Index */}
                        <div className="md:col-span-1 flex items-start">
                             <span className="font-mono text-xs text-charcoal-400">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Title */}
                        <div className="md:col-span-3 mb-2 md:mb-0">
                            <h3 className="font-serif text-xl text-charcoal-900 group-hover:text-gold-600 transition-colors">
                                {project.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-5 mb-4 md:mb-0">
                            <p className="font-sans text-sm font-light text-charcoal-600 leading-relaxed max-w-lg">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="md:col-span-3 flex flex-wrap gap-2 md:justify-end content-start">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="font-mono text-[9px] uppercase tracking-wider border border-charcoal-200 px-2 py-1 text-charcoal-500 bg-white">
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>

        {/* GitHub Link */}
        <div className="flex justify-center">
            <a 
                href="https://github.com/Murari17?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 border-b border-charcoal-900 pb-1 text-sm font-mono uppercase tracking-widest text-charcoal-900 hover:text-gold-600 hover:border-gold-600 transition-all"
            >
                View Full Repositories on GitHub
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
        </div>

      </div>
    </Section>
  );
};

export default Projects;
