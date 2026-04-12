import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const experiences = [
  {
    company: "BreatheIt",
    role: "Software Engineer Intern",
    location: "Los Angeles, CA",
    date: "June 2025 - September 2025",
    glimpse: "Led end-to-end development of a cloud-backed scheduling platform with GCP microservices.",
    bullets: [
      "Led end-to-end development of a cloud-backed scheduling platform (React, React Native, Node.js); built scalable REST APIs, optimized relational queries, ensured consistency under concurrent workloads, and deployed via CI/CD.",
      "Designed and operated scalable backend microservices on GCP, implementing structured logging, monitoring, fault tolerance, and latency optimization to support reliable real-time decision workflows in production."
    ],
    color: "var(--accent-cyan)",
    theme: "cloud"
  },
  {
    company: "ISRO",
    role: "Software Engineer Intern",
    location: "Andhra Pradesh, IN",
    date: "March 2024 - June 2024",
    glimpse: "Built ML pipelines and a React platform for satellite imagery analysis.",
    bullets: [
      "Drove the design and deployment of an internal React-based platform, translating business workflows into production-ready applications; participated in code reviews, wrote unit tests, and followed structured SDLC practices.",
      "Built large-scale ML pipelines using Vision Transformers on satellite imagery (Sentinel-1 SAR), handling noisy real-world data, evaluation, and deployment constraints; improved model accuracy by 15%."
    ],
    color: "var(--accent-purple)",
    theme: "space"
  },
  {
    company: "Suvidha",
    role: "Python Developer Intern",
    location: "Chennai, IN",
    date: "December 2021 - February 2022",
    glimpse: "Constructed scalable Python data pipelines with PyTorch and Pandas.",
    bullets: [
      "Constructed scalable Python data pipelines for ingestion, validation, and transformation using NumPy, Pandas, and PyTorch, designed to handle failures and inconsistent inputs.",
      "Improved system reliability and throughput by optimizing pipeline execution paths, batching, and error-handling logic, increasing throughput by 25% and reducing pipeline failures by 15%."
    ],
    color: "var(--accent-pink)",
    theme: "cloud"
  },
  {
    company: "Sparks Foundation",
    role: "Web Developer Intern",
    location: "Chennai, IN",
    date: "July 2021 - August 2021",
    glimpse: "Full-stack banking web app featuring secure PHP/MySQL transactions.",
    bullets: [
      "Implemented a full-stack banking web application using React.js, JavaScript, PHP, and MySQL, supporting real-time balance updates, transaction history, and secure fund transfers.",
      "Built and optimized backend services for account management, authentication, and transaction processing, ensuring data integrity, reliable API communication, and responsive UX."
    ],
    color: "var(--accent-cyan)",
    theme: "business"
  }
];

const Experience = ({ onThemeChange }) => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (onThemeChange) {
      if (selectedId !== null) {
        onThemeChange(experiences[selectedId].theme);
      } else {
        onThemeChange('default');
      }
    }
  }, [selectedId, onThemeChange]);

  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-layout">
        <AnimatePresence mode="wait">
          {selectedId === null ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="projects-grid"
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  layoutId={`exp-card-${index}`}
                  key={index} 
                  className="project-card glass-panel"
                  onClick={() => setSelectedId(index)}
                  whileHover={{ y: -10 }}
                  style={{ borderTop: `4px solid ${exp.color}` }}
                >
                  <motion.h3 layoutId={`role-${index}`} className="project-title">{exp.role}</motion.h3>
                  <div className="tech-stack preview">
                    <span className="tech-tag" style={{ color: exp.color, borderColor: exp.color }}>@{exp.company}</span>
                    <span className="tech-tag">{exp.date}</span>
                  </div>
                  <p className="project-glimpse">{exp.glimpse}</p>
                  <p className="click-to-view" style={{ color: exp.color }}>Click to view details ▹</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              layoutId={`exp-card-${selectedId}`}
              className="project-detail glass-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring', damping: 25 }}
              style={{ borderTop: `6px solid ${experiences[selectedId].color}` }}
            >
              <button className="close-btn" onClick={() => setSelectedId(null)}>
                <X size={24} />
              </button>
              
              <div className="detail-content">
                <motion.h3 layoutId={`role-${selectedId}`} className="detail-title" style={{ marginBottom: '0.5rem' }}>
                  {experiences[selectedId].role}
                </motion.h3>
                <p className="date-location" style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: experiences[selectedId].color, fontWeight: 'bold' }}>@{experiences[selectedId].company}</span> | {experiences[selectedId].date} | {experiences[selectedId].location}
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="detail-desc">
                     <h4>Responsibilities & Achievements</h4>
                     <ul className="exp-bullets">
                        {experiences[selectedId].bullets.map((bullet, i) => (
                          <li key={i} style={{ '--bullet-color': experiences[selectedId].color }}>{bullet}</li>
                        ))}
                     </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .experience-section {
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2rem;
        }
        .experience-layout {
          width: 100%;
          min-height: 500px;
          position: relative;
          display: flex;
          justify-content: center;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          width: 100%;
        }
        .project-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 2.5rem;
          min-height: 250px;
        }
        .project-title {
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 1rem;
        }
        .tech-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .tech-tag {
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .project-glimpse {
          color: var(--text-primary);
          font-size: 0.95rem;
          margin-top: 1.5rem;
          line-height: 1.6;
          opacity: 0.9;
          flex-grow: 1;
        }
        .click-to-view {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .project-detail {
          width: 85vw;
          height: 85vh;
          max-width: none;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) !important;
          z-index: 50;
          padding: 5rem;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          background: rgba(10, 12, 16, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 100px rgba(0,0,0,0.8);
          border-radius: 24px;
        }
        .close-btn {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          pointer-events: auto;
          outline: none;
          cursor: pointer;
        }
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }
        .detail-title {
          font-size: 2.5rem;
          color: #fff;
          margin-bottom: 2rem;
        }

        .detail-desc h4 {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .exp-bullets {
           padding-left: 1.5rem;
           color: #cbd5e1;
           list-style: none;
        }
        .exp-bullets li {
           margin-bottom: 1.2rem;
           line-height: 1.7;
           font-size: 1.15rem;
           position: relative;
        }
        .exp-bullets li::before {
           content: '▹';
           position: absolute;
           left: -2rem;
           color: var(--bullet-color);
        }
        
        @media (max-width: 768px) {
          .project-detail { padding: 2rem; }
          .detail-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
