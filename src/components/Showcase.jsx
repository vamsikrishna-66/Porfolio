import React, { useState, useEffect } from 'react';
import TiltCard from './TiltCard';
import { ExternalLink, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const GithubIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projects = [
  {
    title: "AI Interview Coach",
    tech: ["Python", "LLaMA", "Gemini API", "React", "FastAPI", "RAG", "T5"],
    desc: "Engineered a state-of-the-art Generative AI interviewing system by fine-tuning T5 architectures to dynamically orchestrate questions, contextual answers, and intelligent follow-ups. The core architecture integrates advanced RAG (Retrieval-Augmented Generation) pipelines, pulling real-time contextual data to ensure the AI's responses and inquiries accurately mirror industry-standard technical interviews. \n\nTo build a robust training foundation, I curated extensive, highly specialized datasets using the Gemini API and BrightData, augmented by LLaMA models for edge-case coverage and linguistic variability. The entire inferencing infrastructure is served via a high-performance FastAPI microservice, equipped with real-time request orchestration, asynchronous queue management, and comprehensive endpoint monitoring. Model reliability and conversational accuracy were continuously validated against benchmark metrics including ROUGE, BLEU, and BERTScore.",
    bullets: [
      "Designed and deployed a scalable RAG pipeline integrating vector databases for sub-millisecond document retrieval.",
      "Fine-tuned T5 models on massive, augmented datasets created via Gemini and LLaMA, achieving a 40% improvement in conversational flow.",
      "Architected the backend with FastAPI to handle highly concurrent WebSocket streams for real-time speech-to-text integration.",
      "Implemented continuous integration evaluating NLP metrics (ROUGE, BLEU, BERTScore) to ensure regression-free model updates."
    ],
    github: "https://github.com/vamsikrishna-66/AI-Interview-Coach"
  },
  {
    title: "Vehicle Trajectory Mining & Prediction",
    tech: ["Python", "TensorFlow", "OpenCV", "YOLO", "DeepSORT", "LSTM"],
    desc: "Spearheaded the development of a real-time, multi-camera intelligent traffic surveillance system designed to map vehicle trajectories and forecast congestion. Utilizing YOLOv8 deep learning models coupled with DeepSORT algorithms, the system accurately tracks unique vehicles across multiple disjointed geographical CCTV feeds, mitigating optical occlusion and perspective distortion.\n\nThe time-series trajectory data is continuously fed into deep LSTM (Long Short-Term Memory) neural networks that forecast localized traffic density up to 60 minutes in the future. The data ingestion and visualization pipeline was built entirely in Streamlit and Plotly Dash, seamlessly rendering over 10,000+ localized tracking frames with zero frame dropping. This multi-layered prediction engine outperformed standard PrefixSpan algorithms by over 10% in analytical accuracy and was operationally validated by the regional traffic division.",
    bullets: [
      "Engineered real-time object tracking pipelines using OpenCV and YOLOv8, maintaining 30 FPS across 4 concurrent 1080p camera streams.",
      "Implemented DeepSORT with custom re-identification heuristics to stitch broken trajectories occurring across non-overlapping camera FOVs.",
      "Developed LSTM-based predictive models using TensorFlow, forecasting arterial congestion and edge-case traffic gridlocks.",
      "Deployed comprehensive analytical dashboards used by the Chennai Police Department, receiving official validation for a 65% operational efficiency boost."
    ],
    github: "https://github.com/vamsikrishna-66/Vehicle-Trajectory-Mining-Using-Object-Detection"
  },
  {
    title: "Distributed Key-Value Store",
    tech: ["C++", "Raft", "LSM Tree", "Bloom Filters", "Multithreading", "gRPC"],
    desc: "Architected a highly available, fault-tolerant distributed key-value store natively in C++, leveraging the Raft consensus algorithm for leader election and state machine replication. The storage engine utilizes a heavily optimized Log-Structured Merge (LSM) Tree, fundamentally designed for massive write-heavy workloads, minimizing disk I/O through in-memory MemTables and structured SSTables.\n\nTo further optimize read pathways and minimize disk probes, probabilistic data structures like Bloom Filters were tightly integrated with the caching layer. Through rigorous performance profiling and multithreading optimizations, read queries sustained a 45% latency reduction. The clustering mechanism utilizes consistent hashing for dynamic node scaling, allowing the system to scale horizontally while cutting failover times from baseline 2 seconds down to 300 milliseconds.",
    bullets: [
      "Implemented the Raft Distributed Consensus protocol from scratch in C++, orchestrating reliable leader election and strict log replication.",
      "Designed an LSM-Tree based storage engine to prioritize high-throughput sequential disk writes, bypassing traditional B-Tree fragmentation.",
      "Optimized query routing with integrated Bloom Filters, achieving a 90% reduction in unnecessary disk reads during cache misses.",
      "Engineered efficient batched log replication via gRPC, spiking total cluster throughput by 25% under heavy concurrent load."
    ],
    github: "https://github.com/vamsikrishna-66"
  },
  {
    title: "Scalable File Storage Backend",
    tech: ["MongoDB", "Node.js", "Express", "AWS S3", "Redis", "JWT"],
    desc: "Engineered a robust, scalable backend infrastructure optimized for secure enterprise file sharing and storage virtualization. By intentionally decoupling object metadata (housed in MongoDB) from the raw binary payloads (stored in AWS S3), the architecture achieves superior horizontal scalability and strictly adheres to stateless microservice principles.\n\nThe system utilizes Redis for caching frequently accessed object structures and enforcing API rate-limiting guardrails. Security is aggressively managed through JWT-based Role-Based Access Control (RBAC), ensuring that deep-link sharing and file modifications map exactly to granular user permissions. Furthermore, the upload architecture leverages multi-part chunking and pre-signed S3 URLs, completely offloading heavy network I/O from the Node server directly to the storage bucket.",
    bullets: [
      "Decoupled application database from blob storage, integrating AWS S3 for binary objects and MongoDB for hierarchical metadata.",
      "Secured endpoints using strict JWT RBAC, preventing unauthorized horizontal privilege escalation on sensitive corporate documents.",
      "Implemented resilient, chunk-based multi-part uploads with automatic resumption protocols, guaranteeing durable file transfers.",
      "Integrated real-time WebSocket notifications broadcasting dynamic state changes for shared directories and collaborative file spaces."
    ],
    github: "https://github.com/vamsikrishna-66/Scalable-File-Storage-and-Sharing-Backend"
  },
  {
    title: "Full-Stack Booking Management",
    tech: ["HTML", "CSS", "Node.js/Express", "SQL", "PHP", "Security"],
    desc: "Developed a comprehensive, high-security hotel booking and internal user management ecosystem. The architecture spans a highly responsive, adaptive frontend user interface down to a deeply fortified backend infrastructure. A critical focus was placed on mitigating web vulnerabilities, incorporating rigorous session hardening parameters (HttpOnly, Secure, SameSite cookies) and parameterized queries to deflect injection attacks.\n\nThe transactional layer relies on a finely-tuned MySQL database, utilizing strictly structured transaction blocks with commit/rollback protections to ensure zero data anomalies during race conditions (e.g. double booking faults). The backend API routes constructed with Node.js and PHP seamlessly coordinate complex joins, returning aggregated analytics to the administrative dashboards in milliseconds.",
    bullets: [
      "Built a secure session management lifecycle utilizing hardened HTTP cookies, CSRF tokens, and zero-trust authentication flows.",
      "Architected ACID-compliant SQL transactions to resolve race conditions and enforce strict integrity in concurrently booked assets.",
      "Developed an adaptive, responsive CSS frontend adhering to modern web usability standards and WCAG accessibility guidelines.",
      "Optimized relational query execution plans, vastly reducing backend payload fetching time for dense administrative dashboards."
    ],
    github: "https://github.com/vamsikrishna-66/Full-Stack-Booking-and-User-Management-System"
  }
];

const experiences = [
  {
    company: "University of Southern California",
    role: "Information Technology (Graduate Assistant)",
    date: "December 2024 – Present",
    location: "Los Angeles, CA",
    desc: "Serving as a pivotal interface for the university's sprawling technological infrastructure. The role involves managing extensive network layers, deploying secure administrative systems, and maintaining high availability for thousands of concurrent student and faculty users. I actively resolve deep architectural blockers linking legacy systems to modern cloud deployment environments.",
    bullets: [
      "Leading technical support and infrastructure maintenance, ensuring 99.9% uptime for core enterprise and academic applications.",
      "Deploying and managing virtualized resources and testing environments for massive internal integration projects.",
      "Acting as the frontline escalation point for complex networking anomalies and system-level fault isolation within the university intranet.",
      "Collaborating with cross-functional IT departments to enforce cybersecurity compliance and strict data governance protocols."
    ]
  },
  {
    company: "ISRO (Indian Space Research Organisation)",
    role: "Software Engineering Intern",
    date: "October 2023 – January 2024",
    location: "Andhra Pradesh, IN",
    desc: "Contributed directly to mission-critical automation systems within one of the world's premier space research facilities. Working on the joint NASA-ISRO Synthetic Aperture Radar (NISAR) project, I leveraged advanced machine learning models—specifically Vision Transformers—to ingest, structure, and analyze highly complex visual telemetry emitted from orbiting Geo-Sat arrays.\n\nSimultaneously, I spearheaded an effort to bridge operational technology with modern web architectures. By linking physical DC power plants through Schneider SCADA (Citect) and PLCs directly to a secure, internal React-based dashboard, mission commanders gained real-time, high-fidelity oversight over vital ground-station power infrastructure.",
    bullets: [
      "Implemented state-of-the-art Vision Transformers to parse and categorize multi-spectral imagery for the terrestrial NISAR monitoring project.",
      "Architected a bridging protocol interfacing industrial Schneider SCADA systems with modern HTTP-based observability platforms.",
      "Developed a dark-themed, high-performance executive dashboard utilizing React JS and Chakra UI for live telemetry visualization.",
      "Structured critical CI/CD routines to push secure dashboard updates across isolated networks without violating air-gap protocols."
    ]
  },
  {
    company: "BreatheIt",
    role: "Software Engineer Intern",
    date: "July 2023 – October 2023",
    location: "Remote",
    desc: "Operated as a foundational engineer for an emerging healthcare and wellness platform dynamically shifting towards an expansive cloud presence. I successfully engineered a full cross-platform patient and administrative solution deeply integrated into the Google Cloud Platform (GCP) ecosystem, leveraging Firebase for real-time data syncing, authentication, and push notifications.\n\nBeyond application architecture, I integrated hardened third-party FinTech bridges for payment facilitation and automated complex scheduling matrices. A major contribution to the team's velocity was my establishing of strict CI/CD pipelines utilizing GitHub Actions, enforcing rigorous unit testing and automated QA deployments with zero downtime.",
    bullets: [
      "Engineered a highly responsive cross-platform web and mobile offering anchored to GCP and Firebase Realtime Databases.",
      "Integrated secure PCI-compliant payment gateways and dynamic resource booking algorithms mapping to available provider slots.",
      "Automated infrastructure testing and deployments via intricate CI/CD pipelines, increasing weekly release cycles by 200%.",
      "Refactored legacy state-management codebases, diminishing client-side memory leakage and boosting overall application interactivity."
    ]
  },
  {
    company: "Suvidha Foundation",
    role: "Software Development Intern / SME",
    date: "January 2023 – March 2023",
    location: "Remote",
    desc: "Acted as both a core developer and a Subject Matter Expert (SME) in modernizing the foundation's technological outreach. I was responsible for overhauling legacy web interfaces and transitioning them to responsive, high-performance web applications specifically designed for low-bandwidth environments globally.\n\nAdditionally, I closely collaborated on large-scale educational data pipelines, restructuring how donor metrics and user analytics were stored, processed, and displayed. This involved creating extensive technical documentation and providing hands-on troubleshooting mentorship to junior developers and volunteers.",
    bullets: [
      "Overhauled and shipped three major web properties, optimizing load times by 40% for regions with restrictive internet latency.",
      "Engineered automated ETL (Extract, Transform, Load) pipelines to manage expanding datasets revolving around educational outreach.",
      "Provided daily technical guidance, code-reviews, and system troubleshooting ensuring high standards across concurrent volunteer projects.",
      "Documented sprawling monolithic architectures and orchestrated the systematic decoupling into highly manageable, atomic components."
    ]
  },
  {
    company: "The Sparks Foundation",
    role: "Data Science & Web Dev Intern",
    date: "June 2021 – November 2022",
    location: "Remote",
    desc: "A dual-faceted engineering role balancing rigorous predictive analytics with full-stack web application development. On the data science vector, I synthesized massive unorganized datasets through intensive Exploratory Data Analysis, subsequently deploying both supervised and unsupervised learning algorithms (Linear Regression, K-Means Clustering, Random Forests) to extract actionable business intelligence.\n\nOn the web front, I single-handedly architected and deployed a secure mock-banking web application. This platform simulated complex monetary transactions processing via RESTful APIs, with dynamic state propagation executed flawlessly between a React frontend and a strictly ACID-compliant MySQL backend.",
    bullets: [
      "Executed sweeping Exploratory Data Analysis on massive socioeconomic datasets, filtering noise to establish high-correlation predictive models.",
      "Implemented a secure banking simulation featuring real-time financial transfers, balance reconciliations, and encrypted user lifecycles.",
      "Designed robust, scalable RESTful APIs in PHP that interfaced flawlessly with modern React.js frontend state management.",
      "Mastered the integration between mathematical data science outputs and live, accessible web dashboard presentations."
    ]
  }
];


const Showcase = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

  return (
    <div className="showcase-container">
      
      <section className="manifesto-section">
        <h2 className="manifesto-text">
          I shape <span className="highlight">deep architectures</span> and <br/>
          <span className="italic-serif">experiences</span> at the threshold.
        </h2>
      </section>

      <section className="archive-section" id="projects">
        <div className="section-header">
          <span className="index-number">(01)</span>
          <h2 className="section-title">Open Source Frameworks</h2>
        </div>
        
        {/* Changed to a dense 3 column grid to look less empty and remove images */}
        <div className="grid-stack grid-dense">
          {projects.map((proj, idx) => (
            <TiltCard key={idx} onClick={() => setSelectedItem(proj)} className="showcase-card dense-card" height="300px">
              <div className="card-top-bar">
                <span className="project-category">Repository / Code</span>
                <a href={proj.github} className="ext-icon" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} title="Open project in GitHub">
                    <GithubIcon size={20} />
                </a>
              </div>
              <div className="card-bottom">
                <h3 className="dense-title">{proj.title}</h3>
                <p className="dense-desc" style={{ marginBottom: "1rem" }}>
                  {proj.desc.split('.')[0] + '.'}
                </p>
                <div className="tech-stack small-stack" style={{ marginBottom: '1rem' }}>
                  {proj.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <p className="click-to-view showcase-explore">Click to explore abstract ▹</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="archive-section" id="experience">
        <div className="section-header">
          <span className="index-number">(02)</span>
          <h2 className="section-title">Career Path</h2>
        </div>
        
        <div className="grid-stack">
          {experiences.map((exp, idx) => (
            <TiltCard key={idx} height="40vh" onClick={() => setSelectedItem(exp)} className="showcase-card exp-card">
              <div className="card-bottom">
                 <h3>{exp.role} <span className="highlight">@ {exp.company}</span></h3>
                 <p className="exp-date">{exp.date} • {exp.location}</p>
                 <p className="dense-desc" style={{ marginBottom: "1rem" }}>
                   {exp.desc ? exp.desc.split('.')[0] + '.' : ''}
                 </p>
                 <p className="click-to-view exp-explore">Click to view details ▹</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 85% Expanding Modal Overlay without Image */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="modal-content text-only-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button className="modal-close" onClick={() => setSelectedItem(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-body centered-body">
                <h2 className="modal-title">{selectedItem.title || selectedItem.role}</h2>
                {selectedItem.company && <h3 className="modal-subtitle">@ {selectedItem.company}</h3>}
                
                {selectedItem.date && <p className="exp-date" style={{marginBottom: '2rem', textAlign: 'center'}}>{selectedItem.date}</p>}

                <p className="modal-desc centered-desc">{selectedItem.desc || 'Comprehensive professional experience summary and systems architectural design patterns utilized during this phase.'}</p>
                
                {selectedItem.tech && (
                  <div className="tech-stack center-stack" style={{marginBottom: '3rem'}}>
                    {selectedItem.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                )}

                {selectedItem.github && (
                   <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                     <a href={selectedItem.github} target="_blank" rel="noreferrer" className="glass-btn inline-btn" title="Open project in GitHub">
                       View Source Code <GithubIcon size={18} />
                     </a>
                   </div>
                )}

                {selectedItem.bullets && (
                    <ul className="exp-bullets modal-bullets">
                        {selectedItem.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Showcase;
