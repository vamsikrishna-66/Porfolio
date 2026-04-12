import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 40, damping: 15 }
    }
  };

  return (
    <section id="home" className="hero-section reveal">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="greeting">Hi, I'm</span><br/>
          Vamsikrishna<br/>
          <span className="lastname">Chinnam</span>
        </motion.h1>
        
        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          Application Development, Backend & AI
        </motion.h2>
        
        <motion.p className="hero-description" variants={itemVariants}>
          Architecting robust backend microservices, building scalable full-stack applications, and engineering AI-driven solutions. Transforming complex systems into responsive digital experiences.
        </motion.p>
        
        <motion.div className="hero-links" variants={itemVariants}>
          <a href="mailto:chinnam@usc.edu" className="glass-btn">Email Me</a>
          <a href="https://linkedin.com/in/vamsi-krishna-chinnam" target="_blank" rel="noreferrer" className="glass-btn">LinkedIn</a>
          <a href="https://github.com/vamsikrishna-66" target="_blank" rel="noreferrer" className="glass-btn">GitHub</a>
        </motion.div>
      </motion.div>
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #fff;
          text-shadow: 0 0 30px rgba(255,255,255,0.1);
          letter-spacing: -1px;
        }
        .hero-title .greeting {
          font-size: 1.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 300;
        }
        .hero-title .lastname {
          background: linear-gradient(to right, #ffffff, #a1a1aa); /* Sleek Silver/White */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 2rem;
          color: #e2e8f0;
          margin-bottom: 2rem;
          font-weight: 400;
        }
        .hero-description {
          max-width: 650px;
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 3rem;
          color: #94a3b8;
          font-weight: 300;
        }
        .hero-links {
          display: flex;
          gap: 1.5rem;
        }
        .glass-btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        .glass-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(69, 243, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Hero;
