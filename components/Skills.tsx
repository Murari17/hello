
import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-white py-32">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <span className="font-mono text-xs text-gold-500 uppercase tracking-widest mb-2 block">
                    [ Capabilities Matrix ]
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900">
                    Technical Arsenal
                </h2>
            </div>
            <p className="font-sans text-sm text-charcoal-500 max-w-md text-right hidden md:block">
                A comprehensive breakdown of engineering competencies and technical stacks.
            </p>
        </div>

        {/* The Blueprint Grid */}
        <div className="border border-charcoal-900">
            
            {/* Skills Rows */}
            {SKILLS.map((cat, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-4 border-b border-charcoal-200 last:border-b-0 divide-y md:divide-y-0 md:divide-x divide-charcoal-200">
                    {/* Category Label */}
                    <div className="p-6 md:p-8 bg-charcoal-50/50 flex items-center">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-charcoal-900">
                            {cat.title}
                        </span>
                    </div>
                    
                    {/* Skills List */}
                    <div className="p-6 md:p-8 md:col-span-3 flex flex-wrap gap-x-8 gap-y-2 items-center">
                        {cat.skills.map((skill, i) => (
                            <span key={i} className="font-serif text-lg md:text-xl text-charcoal-800 italic hover:text-gold-600 transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </Section>
  );
};

export default Skills;
