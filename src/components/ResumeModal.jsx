import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a' }}
        >
            <motion.div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ 
               width: '900px', 
               maxWidth: '95vw',
               height: '85vh',  // Fixed height to force internal scrolling
               display: 'flex', 
               flexDirection: 'column', 
               borderRadius: '16px',
               position: 'relative',
               overflow: 'hidden',
               background: '#1a1a1a',
               boxShadow: '0 0 80px rgba(255, 215, 0, 0.1)', // Subtle golden light
               border: '1px solid rgba(255, 215, 0, 0.2)'
            }}
          >
            
            {/* Sticky Action Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#1a1a1a' }}>
               <h2 style={{ margin: 0, fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-1px' }}>Resume</h2>

               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <a href="/resume.pdf" target="_blank" rel="noreferrer" className="tech-pill" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', textDecoration: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: '8px' }}>
                    <ExternalLink size={16} /> View in Browser
                 </a>
                 
                 <a href="/resume.pdf" download="Vamsikrishna_Resume.pdf" className="tech-pill" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', background: 'var(--accent-purple)', color: '#000', textDecoration: 'none', fontWeight: 'bold', border: 'none', cursor: 'pointer', padding: '0.6rem 1rem', borderRadius: '8px' }}>
                    <Download size={16} /> Download PDF
                 </a>
                 
                 <button className="modal-close" onClick={onClose} style={{ position: 'relative', top: 'auto', right: 'auto', width: '38px', height: '38px', marginLeft: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>
                   <X size={20} />
                 </button>
               </div>
            </div>
            
            {/* Scrollable Container wrapping the White Page */}
            <div style={{ flex: 1, backgroundColor: '#111', padding: '2rem 1rem', overflowY: 'auto' }}>
               <div className="resume-container" style={{ 
                 margin: '0 auto',
                 textAlign: 'left', 
                 fontFamily: '"Times New Roman", Times, serif', 
                 backgroundColor: '#fff', 
                 color: '#000', 
                 padding: '4rem', 
                 width: '850px',
                 maxWidth: '100%',
                 zoom: '0.6', /* Scales down the entire original content at once */
                 boxShadow: '0 20px 50px rgba(0,0,0,0.5)', 
                 borderRadius: '4px'
               }}>
              
              {/* HEADER */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                 <h1 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '0 0 0.4rem 0', letterSpacing: '0.5px' }}>VAMSIKRISHNA CHINNAM</h1>
                 <p style={{ margin: 0, fontSize: '0.85rem', color: 'inherit' }}>
                    Los Angeles, CA | <a href="https://linkedin.com/in/vamsi-krishna-chinnam" style={{ color: '#0056b3', textDecoration: 'none' }} target="_blank" rel="noreferrer">linkedin.com/in/vamsi-krishna-chinnam</a> | <a href="mailto:chinnam@usc.edu" style={{ color: '#0056b3', textDecoration: 'none' }}>chinnam@usc.edu</a> | <a href="https://github.com/vamsikrishna-66" style={{ color: '#0056b3', textDecoration: 'none' }} target="_blank" rel="noreferrer">github.com/vamsikrishna-66</a>
                 </p>
              </div>

              {/* EDUCATION */}
              <div style={{ marginBottom: '1.2rem' }}>
                  <h2 style={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 0.3rem 0', borderBottom: '2px solid currentColor', paddingBottom: '0.1rem' }}>Education</h2>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.4rem' }}>
                     <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>University of Southern California</p>
                     <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Los Angeles, CA</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                     <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>Master of Science in Computer Science (GPA: 3.9/4.0)</p>
                     <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>Graduation Date: May 2026</p>
                  </div>
                  <p style={{ margin: '0.2rem 0 0 0', fontStyle: 'italic', fontSize: '0.85rem' }}>Coursework: Analysis of Algorithms, Machine Learning, NLP, Data Science, Information Retrieval, Database Systems, Security Systems</p>
              </div>

              {/* WORK EXPERIENCE */}
              <div style={{ marginBottom: '1.2rem' }}>
                  <h2 style={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 0.3rem 0', borderBottom: '2px solid currentColor', paddingBottom: '0.1rem' }}>Work Experience</h2>
                  
                  <div style={{ marginBottom: '0.8rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>BreatheIt</p>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Los Angeles, CA</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                       <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>Software Engineer Intern</p>
                       <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>June 2025 – September 2025</p>
                    </div>
                    <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                      <li>Designed and deployed LLM powered backend systems using FastAPI on GCP, implementing RAG pipelines, prompt engineering, agentic workflows, safeguards, and real-time inference optimized for production reliability.</li>
                      <li>Owned and shipped end-to-end scheduling platform (React, React Native, Node.js) integrated with Stripe payments and Google Calendar, implemented CI/CD pipelines and validated Android flows with Gradle/Emulator.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '0.8rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Indian Space Research Organization (ISRO)</p>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Andhra Pradesh, IN</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                       <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>Software Engineer Intern</p>
                       <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>March 2024 – June 2024</p>
                    </div>
                    <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                       <li>Built large-scale ML pipelines using Vision Transformers on satellite imagery (Sentinel-1 SAR), handling noisy real-world data, evaluation, and deployment constraints; improved model accuracy by 15% through architecture and training optimizations.</li>
                       <li>Led the design, development, and deployment of an internal React.js platform within ISRO’s secured infrastructure, aligning teams on ticketing and approval workflows with role-based access, task orchestration, and budget management.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '0.8rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Suvidha Foundation</p>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Chennai, IN</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                       <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>Python Developer Intern</p>
                       <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>December 2021 – February 2022</p>
                    </div>
                    <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                      <li>Constructed scalable Python data pipelines with NumPy, Pandas, PyTorch, and scikit-learn to automate data ingestion, validation, and transformation.</li>
                      <li>Improved backend reliability by 15% and data throughput by 25% through optimized pipelines and error handling.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '0.8rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>The Sparks Foundation</p>
                       <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Chennai, IN</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                       <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>Web Developer Intern</p>
                       <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.85rem' }}>July 2021 – August 2021</p>
                    </div>
                    <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                      <li>Implemented a full-stack banking web application using React.js, JavaScript, PHP, and MySQL, supporting real-time balance updates, transaction history, and secure fund transfers via RESTful APIs.</li>
                      <li>Built and optimized backend services for account management, authentication, and transaction processing, ensuring data integrity, reliable API communication, and a responsive user experience.</li>
                    </ul>
                  </div>

              </div>

              {/* PROJECTS & PUBLICATIONS */}
              <div style={{ marginBottom: '1.2rem' }}>
                  <h2 style={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 0.3rem 0', borderBottom: '2px solid currentColor', paddingBottom: '0.1rem' }}>Projects & Publications</h2>
                  
                  <div style={{ marginBottom: '0.8rem' }}>
                     <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>AI Interview Coach (Python, LLaMA, Gemini API, React, FastAPI) <a href="https://github.com/vamsikrishna-66/AI-Interview-Coach" style={{ color: '#0056b3', fontStyle: 'italic', textDecoration: 'underline' }} target="_blank" rel="noreferrer">GitHub</a></p>
                     <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                        <li>Crafted an GenAI interview system by fine-tuning T5 for questions/answers/follow-ups and implementing RAG pipelines, curated training data using Gemini API and BrightData with LLaMA-based augmentation, and deployed a FastAPI service with real-time inference, orchestration, monitoring, and ROUGE/BLEU/BERTScore evaluation.</li>
                     </ul>
                  </div>
                  
                  <div style={{ marginBottom: '0.8rem' }}>
                     <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Vehicle Trajectory Mining and Traffic Prediction using Object Detection (Python, TensorFlow, OpenCV) <a href="#" style={{ color: '#0056b3', fontStyle: 'italic', textDecoration: 'underline' }} target="_blank" rel="noreferrer">Publication Link</a></p>
                     <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                        <li>Built a real-time multi-camera traffic system using YOLO + DeepSORT on OpenCV to track across geolocated CCTV feeds, with LSTM-based congestion forecasting; shipped Streamlit/Plotly Dash dashboards (matplotlib, seaborn) over 10,000+ frames, achieved 10% higher accuracy than PrefixSpan, and was validated by Chennai Police (65% effective).</li>
                     </ul>
                  </div>

                  <div style={{ marginBottom: '0.8rem' }}>
                     <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Scalable File Storage and Sharing Backend (MongoDB, Node.js, Express, AWS S3) <a href="https://github.com/vamsikrishna-66/Scalable-File-Storage-and-Sharing-Backend" style={{ color: '#0056b3', fontStyle: 'italic', textDecoration: 'underline' }} target="_blank" rel="noreferrer">GitHub</a></p>
                     <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                        <li>Architected a secure backend separating metadata in MongoDB from objects on AWS S3; enforced JWT-based RBAC and real-time sharing notifications for durable uploads/downloads and clear failure handling.</li>
                     </ul>
                  </div>

                  <div style={{ marginBottom: '0.8rem' }}>
                     <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.9rem' }}>Full-Stack Booking & User Management System (HTML, CSS, Node.js/Express, SQL, PHP/DBMS) <a href="https://github.com/vamsikrishna-66/Full-Stack-Booking-and-User-Management-System" style={{ color: '#0056b3', fontStyle: 'italic', textDecoration: 'underline' }} target="_blank" rel="noreferrer">GitHub</a></p>
                     <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '1.5rem', fontSize: '0.85rem', lineHeight: '1.4' }}>
                        <li>Developed a secure hotel booking system with an adaptive frontend and session hardening (HttpOnly, Secure, SameSite); built Node.js backend with transaction-backed MySQL and optimized queries for reliability.</li>
                     </ul>
                  </div>
              </div>

              {/* TECHNICAL SKILLS */}
              <div style={{ marginBottom: '1.5rem' }}>
                 <h2 style={{ fontSize: '1rem', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 0.3rem 0', borderBottom: '2px solid currentColor', paddingBottom: '0.1rem' }}>Technical Skills</h2>
                 <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.5' }}>
                    <strong>Languages:</strong> Python, Java, C++, JavaScript | <strong>Backend & Web:</strong> Node.js, React, React Native, Angular, FastAPI, REST APIs, HTML, CSS<br/>
                    <strong>Cloud & Infrastructure:</strong> AWS EC2, AWS S3, GCP, Docker, Kubernetes, CI/CD | <strong>Data:</strong> MySQL, MongoDB, Hadoop, Firebase | <strong>ML Libraries:</strong> PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, Plotly, spaCy, OpenCV, cuDF, Streamlit | <strong>Testing:</strong> Unit Testing, Integration Testing, Selenium
                 </p>
              </div>

               </div>
               </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
