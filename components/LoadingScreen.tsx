
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  
  useEffect(() => {
    // Slower duration: 3 seconds for the bar to fill
    const duration = 3000; 
    
    // Trigger completion slightly after the bar finishes
    const completeTimer = setTimeout(() => {
        onComplete();
    }, duration + 200);

    return () => {
        clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-950 text-ivory"
        initial={{ y: 0 }}
        exit={{ 
            y: '-100%', 
            transition: { 
                duration: 1.0, 
                ease: [0.76, 0, 0.24, 1] 
            } 
        }}
    >
        <div className="flex flex-col items-center justify-center w-full max-w-sm px-8">
            <motion.h1
                className="text-4xl md:text-5xl font-serif font-medium text-gold-100 tracking-[0.3em] uppercase mb-10 pl-2"
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                Murari
            </motion.h1>
            
            {/* Loading Bar Container */}
            <div className="w-full h-[1px] bg-charcoal-800 relative overflow-hidden">
                {/* Center-out expanding bar */}
                <motion.div
                    className="absolute inset-0 bg-gold-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                        duration: 3, 
                        ease: "easeInOut" 
                    }}
                    style={{ originX: 0.5 }}
                />
            </div>
        </div>
    </motion.div>
  );
};

export default LoadingScreen;
