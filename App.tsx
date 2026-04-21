
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Blog from './components/Blog';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

  // Lock scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-ivory text-charcoal-900 selection:bg-gold-200 selection:text-charcoal-900 font-sans relative">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-[100] mix-blend-multiply"></div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar currentView={currentView} onChangeView={setCurrentView} />
            <main className="relative z-10">
              {currentView === 'home' ? (
                <div key="home">
                  <Hero />
                  <About />
                  <Experience />
                  <Projects />
                  <Skills />
                  <Achievements />
                  <Footer />
                </div>
              ) : (
                <Blog key="blog" onBack={() => setCurrentView('home')} />
              )}
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
