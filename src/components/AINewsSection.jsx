import React from 'react';

const articles = [
  {
    date: "MAR 2026",
    title: "The Future of RAG and Large Language Models",
    readTime: "5 Min Read",
  },
  {
    date: "FEB 2026",
    title: "Orchestrating Scalable Microservices with GCP",
    readTime: "7 Min Read",
  },
  {
    date: "JAN 2026",
    title: "Deploying Vision Transformers for Real-Time Analysis",
    readTime: "4 Min Read",
  }
];

const AINewsSection = () => {
  return (
    <section className="news-section" id="news">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <span className="index-number">(03)</span>
        <h2 className="section-title">AI & ARCHITECTURE INSIGHTS</h2>
      </div>
      
      <div className="articles-list">
        {articles.map((article, idx) => (
          <div className="article-row" key={idx}>
            <div className="article-meta">
              <span className="article-date">{article.date}</span>
              <span className="article-time">{article.readTime}</span>
            </div>
            <h3 className="article-title">{article.title}</h3>
            <div className="article-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AINewsSection;
