import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'; 
import { Sun, Moon } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import InteractiveHero from './components/InteractiveHero';
import AboutSection from './components/AboutSection';
import Showcase from './components/Showcase';
import AINewsSection from './components/AINewsSection';
import ContactSection from './components/ContactSection';
import NavBar from './components/NavBar';
import './index.css';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1.2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-container" id="top">
      <CustomCursor />
      <div className="noise-overlay" />
      <NavBar />
      
      {/* Theme Toggle Button */}
      <button 
        className="theme-toggle-btn"
        onClick={() => setIsLightMode(!isLightMode)}
      >
        {isLightMode ? <Moon size={24} /> : <Sun size={24} />}
      </button>
      
      <main>
        <InteractiveHero />
        <AboutSection />
        <Showcase />
        <AINewsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
