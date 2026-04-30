import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`apple-dock ${isOpen ? 'open' : ''}`}>
      <button className="apple-btn mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
      <div className="nav-items">
        <button className="apple-btn" onClick={() => scrollTo('top')}>Home</button>
        <button className="apple-btn" onClick={() => scrollTo('about')}>About</button>
        <button className="apple-btn" onClick={() => scrollTo('projects')}>Projects</button>
        <button className="apple-btn" onClick={() => scrollTo('news')}>News</button>
        <button className="apple-btn" onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  );
};

export default NavBar;
