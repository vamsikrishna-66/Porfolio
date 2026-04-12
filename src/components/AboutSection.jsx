import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Terminal } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-header">
        <span className="index-number">(00)</span>
        <h2 className="section-title">ABOUT ME</h2>
      </div>
      
      <div className="about-grid">
        <div className="about-left">
          <h3 className="about-heading">
            I engineer <span className="highlight">intelligent scalable systems</span> to solve bleeding-edge problems.
          </h3>
        </div>
        
        <div className="about-right">
          <p className="about-text">
            I am a student at the <strong className="highlight">University of Southern California (USC)</strong> and an AI & Full-Stack Engineer specializing in high-octane backends and responsive architectural design. From deploying vehicle trajectory mining via object detection to architecting full-stack booking platforms and scalable file storage networks, my goal is bridging the gap between raw data science and premium user experiences.
          </p>
          <div className="skills-array">
            <div className="skill-box">
              <Code size={24} className="accent-cyan" />
              <h4>Modern Web</h4>
              <p>React, Node.js, Express, Framer Motion</p>
            </div>
            <div className="skill-box">
              <Cloud size={24} className="accent-purple" />
              <h4>Cloud Architecture</h4>
              <p>GCP, AWS S3, Docker, Microservices</p>
            </div>
            <div className="skill-box">
              <Terminal size={24} className="accent-pink" />
              <h4>AI & Data</h4>
              <p>Python, LLaMA, TensorFlow, Vector DBs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
