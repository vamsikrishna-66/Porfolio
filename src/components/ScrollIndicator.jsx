import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// A high-tech glowing AI Neural Node relatable to deep architectures and AI data science
const AINode = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ filter: 'drop-shadow(0 0 8px rgba(69,243,255,0.8))' }}>
     {/* Central processing core */}
     <circle cx="20" cy="20" r="4" fill="var(--accent-cyan, #45f3ff)" />
     
     {/* Inner oscillating ring */}
     <circle cx="20" cy="20" r="10" stroke="var(--accent-purple, #b026ff)" strokeWidth="1.5" strokeDasharray="3 6">
       <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="4s" repeatCount="indefinite" />
     </circle>
     
     {/* Outer orbit ring */}
     <circle cx="20" cy="20" r="16" stroke="var(--accent-cyan, #45f3ff)" strokeWidth="1" strokeDasharray="8 16">
       <animateTransform attributeName="transform" type="rotate" from="360 20 20" to="0 20 20" dur="7s" repeatCount="indefinite" />
     </circle>

     {/* Intersecting data bridges */}
     <line x1="20" y1="2" x2="20" y2="6" stroke="#45f3ff" strokeWidth="1.5" />
     <line x1="20" y1="34" x2="20" y2="38" stroke="#45f3ff" strokeWidth="1.5" />
     <line x1="2" y1="20" x2="6" y2="20" stroke="#45f3ff" strokeWidth="1.5" />
     <line x1="34" y1="20" x2="38" y2="20" stroke="#45f3ff" strokeWidth="1.5" />
  </svg>
);

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();
    
    // Smooth responsive physics for scrolling
    const progress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    // Translate the AI Node from left edge to right edge of the screen
    // We stop at 100vw minus half the width to keep it visible
    const xPos = useTransform(progress, [0, 1], ['0%', '100%']);
    
    // Give it a subtle vertical levitation effect as it travels
    const yOffset = useTransform(progress,
        [0, 0.25, 0.5, 0.75, 1],
        ['0px', '8px', '-5px', '6px', '0px']
    );

    return (
        <div style={{
            position: 'fixed',
            top: '0',
            left: 0,
            width: '100vw',
            height: '40px',
            zIndex: 9999, // On top of everything
            pointerEvents: 'none'
        }}>
            {/* The structural glass/neon data pipeline backdrop */}
            <div style={{
                position: 'absolute',
                top: '19px',
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, rgba(69,243,255,0.05), rgba(176,38,255,0.2) 50%, rgba(69,243,255,0.05))'
            }} />
            
            {/* The active data transmission line that fills up behind the node */}
            <motion.div style={{
                position: 'absolute',
                top: '19px',
                left: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #b026ff, #45f3ff)',
                transformOrigin: 'left',
                scaleX: progress,
                width: '100%',
                boxShadow: '0 0 12px #45f3ff'
            }} />

            {/* The AI Neural Node traveling down the pipeline */}
            <motion.div style={{
                position: 'absolute',
                top: '0px',
                left: xPos,
                y: yOffset,
                x: 'calc(-50% + 5px)', // Center horizontally on the edge of the progress line
                width: '40px',
                height: '40px'
            }}>
                <AINode />
            </motion.div>
        </div>
    );
};

export default ScrollIndicator;
