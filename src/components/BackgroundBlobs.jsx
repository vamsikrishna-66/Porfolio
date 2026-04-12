import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const BackgroundBlobs = () => {
  // Use framer-motion values for smooth performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize values between -0.5 and 0.5
      const numX = (e.clientX / window.innerWidth) - 0.5;
      const numY = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(numX);
      mouseY.set(numY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-container">
      {/* Cinematic slowly moving multi-blobs */}
      <motion.div 
        className="blob blob-1" 
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div 
        className="blob blob-2" 
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div 
        className="blob blob-3" 
        style={{ x: smoothX, y: smoothY }}
      />
    </div>
  );
};

export default BackgroundBlobs;
