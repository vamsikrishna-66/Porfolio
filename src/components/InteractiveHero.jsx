import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import ResumeModal from './ResumeModal';

const InteractiveHero = () => {
  const containerRef = useRef(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Generate some grid lines for the background
  const lines = Array.from({ length: 20 });

  return (
    <section className="hero-container" ref={containerRef}>
      
      {/* Animated Sci-Fi Protocol Grid */}
      <div className="hero-grid-bg">
         <div className="grid-space" />
      </div>
      
      {/* Draggable Messy Desktop Elements (Distributed around edges avoiding center) */}
      {[
        { text: 'Data Structures', top: '15%', left: '8%' },
        { text: 'Algorithms', top: '10%', left: '38%' },
        { text: 'AIML', top: '15%', left: '75%' },
        { text: 'AWS', top: '40%', left: '5%' },
        { text: 'REST API', top: '45%', left: '82%' },
        { text: 'CI/CD', top: '70%', left: '10%' },
        { text: 'Kubernetes', top: '85%', left: '35%' },
        { text: 'React', top: '80%', left: '65%' },
        { text: 'OOP', top: '25%', left: '80%' },
        { text: 'Java Script', top: '75%', left: '80%' }
      ].map((item, index) => (
        <motion.div 
          key={index}
          drag 
          dragConstraints={containerRef} 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3 + (index * 0.2), repeat: Infinity, ease: 'easeInOut' }}
          whileDrag={{ scale: 1.1, zIndex: 100 }} 
          dragElastic={0.2} 
          className="draggable-item glass-badge"
          style={{ 
            top: item.top, 
            left: item.left,
            position: 'absolute'
          }}
        >
          {item.text}
        </motion.div>
      ))}

      {/* Central Typography Masked over the desktop */}
      <div className="hero-text-wrapper pointer-events-none">
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hero-accent-circle"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="awwwards-title"
        >
          VAMSI<br /><span className="outlined-title">KRISHNA</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="awwwards-subtitle"
        >
          Architecting Intelligence. Building the Future. Let's Deploy.
        </motion.p>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        >
          ↓ SCROLL TO EXPLORE
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          style={{ pointerEvents: 'auto', marginTop: '3rem' }} 
        >
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="glass-submit-btn" 
            style={{ 
               display: 'inline-flex', 
               alignItems: 'center', 
               gap: '10px', 
               padding: '1.2rem 2.5rem', 
               borderRadius: '50px',
               background: 'var(--accent-purple)', 
               color: '#000',
               fontWeight: 600,
               fontSize: '1.2rem',
               border: 'none',
               cursor: 'none',
               boxShadow: '0 10px 30px rgba(187, 134, 252, 0.3)'
            }}
          >
            <FileText size={22} /> My Resume
          </button>
        </motion.div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

    </section>
  );
};

export default InteractiveHero;
