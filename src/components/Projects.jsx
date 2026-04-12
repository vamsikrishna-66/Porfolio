import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Interview Coach",
    tech: ["Python", "LLaMA", "Gemini API", "React", "FastAPI"],
    glimpse: "LLM-powered backend services on GCP for real-time inference.",
    bullets: [
      "Crafted LLM-powered backend services on GCP using T5 fine-tuning, LLaMA, and Gemini API for real-time inference.",
      "Implemented intelligent orchestration, ranking logic, and conversational safeguards to ensure realistic mock interviews.",
      "Focused on eliminating latency bottlenecks and building robust fault tolerance and monitoring systems for smooth production reliability."
    ],
    theme: "ai"
  },
  {
    title: "Scalable File Storage Backend",
    tech: ["MongoDB", "Node.js", "Express", "AWS S3"],
    glimpse: "Microservice-style separated metadata and object storage.",
    bullets: [
      "Architected a distributed storage backend using a microservice-style separation of metadata (MongoDB) and physical object storage (AWS S3).",
      "Implemented secure JWT-based Role-Based Access Control (RBAC) to ensure strict data privacy and access governance.",
      "Engineered asynchronous processing queues and robust failure recovery mechanisms to maintain high availability under load."
    ],
    theme: "cloud"
  },
  {
    title: "Full-Stack Booking & User Management",
    tech: ["HTML", "CSS", "Node.js/Express", "SQL"],
    glimpse: "Secure hotel booking system with an adaptive frontend.",
    bullets: [
      "Developed a responsive and secure hotel booking system equipped with an adaptive frontend.",
      "Hardened overall session security utilizing HttpOnly, Secure, and SameSite cookie policies.",
      "Constructed a high-performance Node.js backend integrating with transaction-backed MySQL databases and heavily optimized queries."
    ],
    theme: "business"
  },
  {
    title: "Vehicle Trajectory Mining & Prediction",
    tech: ["Python", "TensorFlow", "OpenCV", "Object Detection"],
    glimpse: "Real-time multi-camera traffic system using YOLO and DeepSORT.",
    bullets: [
      "Built a real-time, multi-camera traffic analysis system leveraging YOLO and DeepSORT on OpenCV.",
      "Enabled persistent multi-object tracking across distinct, geolocated CCTV data streams.",
      "Implemented sophisticated LSTM-based congestion forecasting models that outperformed traditional PrefixSpan methods by 10% in prediction accuracy."
    ],
    theme: "space"
  }
];

const Projects = ({ onThemeChange }) => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (onThemeChange) {
      if (selectedId !== null) {
        onThemeChange(projects[selectedId].theme);
      } else {
        onThemeChange('default');
      }
    }
  }, [selectedId, onThemeChange]);

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects & Architecture</h2>
      
      <div className="projects-layout">
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
              {projects.map((project, index) => (
                <motion.div 
                  layoutId={`project-card-${index}`}
                  key={index} 
                  className="project-card glass-panel"
                  onClick={() => setSelectedId(index)}
                  whileHover={{ y: -10 }}
                >
                  <motion.h3 layoutId={`title-${index}`} className="project-title">{project.title}</motion.h3>
                  <div className="tech-stack preview">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 3 && <span className="tech-tag">+{project.tech.length - 3}</span>}
                  </div>
                  <p className="project-glimpse">{project.glimpse}</p>
                  <p className="click-to-view">Click to explore abstract ▹</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              layoutId={`project-card-${selectedId}`}
              className="project-detail glass-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring', damping: 25 }}
            >
              <button className="close-btn" onClick={() => setSelectedId(null)}>
                <X size={24} />
              </button>
              
              <div className="detail-content">
                <motion.h3 layoutId={`title-${selectedId}`} className="detail-title">
                  {projects[selectedId].title}
                </motion.h3>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="tech-stack full">
                    {projects[selectedId].tech.map((tech, i) => (
                      <span key={i} className="tech-tag active">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="detail-desc">
                    <h4>Abstract & Architecture</h4>
                    <ul className="project-bullets">
                      {projects[selectedId].bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href="#" className="glass-btn detail-btn">
                    View Interactive Demo <ExternalLink size={18} style={{marginLeft: '8px'}} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .projects-section {
          width: 100%;
          max-width: 1100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2rem;
        }
        .projects-layout {
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
          justify-content: space-between;
          padding: 2.5rem;
          min-height: 250px;
        }
        .project-title {
          font-size: 1.6rem;
          color: #fff;
          margin-bottom: 1rem;
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-tag {
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .tech-tag.active {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.3);
        }
        .project-glimpse {
          color: var(--text-primary);
          font-size: 0.95rem;
          margin-top: 1.5rem;
          line-height: 1.5;
          opacity: 0.9;
        }
        .click-to-view {
          margin-top: 1rem;
          color: var(--accent-cyan);
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
        .tech-stack.full {
          margin-bottom: 3rem;
        }
        .detail-desc h4 {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .project-bullets {
          padding-left: 1.5rem;
          color: #cbd5e1;
          list-style: none;
        }
        .project-bullets li {
           margin-bottom: 1.2rem;
           line-height: 1.7;
           font-size: 1.15rem;
           position: relative;
        }
        .project-bullets li::before {
           content: '▹';
           position: absolute;
           left: -2rem;
           color: var(--accent-purple);
        }
        .detail-btn {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2rem;
          border-radius: 50px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .detail-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .project-detail {
            padding: 2rem;
          }
          .detail-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
