import React from 'react';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "JavaScript"],
    color: "var(--accent-cyan)"
  },
  {
    title: "Backend & Web",
    skills: ["Node.js", "React", "React Native", "Angular", "FastAPI", "REST APIs", "HTML", "CSS", "microservices"],
    color: "var(--accent-purple)"
  },
  {
    title: "Cloud & Distributed Systems",
    skills: ["AWS EC2", "AWS S3", "GCP", "Docker", "Kubernetes", "CI/CD"],
    color: "var(--accent-pink)"
  },
  {
    title: "Data",
    skills: ["MySQL", "MongoDB", "Relational Database Design", "Hadoop", "Firebase", "Query Optimization"],
    color: "var(--accent-cyan)"
  },
  {
    title: "Testing & Engineering",
    skills: ["Unit Testing", "Integration Testing", "Selenium", "Code Reviews", "SDLC"],
    color: "var(--accent-purple)"
  },
  {
    title: "ML Libraries",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas"],
    color: "var(--accent-pink)"
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title reveal">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category reveal glass-panel" style={{'--cat-color': category.color}}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-wrapper">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        .skill-category {
          transition: transform 0.3s ease;
        }
        .category-title {
          font-size: 1.3rem;
          color: #fff;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        .category-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50%;
          height: 2px;
          background: var(--cat-color);
        }
        .skills-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        .skill-badge {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--cat-color);
          border-radius: 8px;
          color: #e2e8f0;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 rgba(0,0,0,0);
        }
        .skill-badge:hover {
          background: var(--cat-color);
          color: #000;
          font-weight: 600;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px var(--cat-color);
        }
      `}</style>
    </section>
  );
};

export default Skills;
