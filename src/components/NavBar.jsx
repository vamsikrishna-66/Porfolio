import React from 'react';

const NavBar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="apple-dock">
      <button className="apple-btn" onClick={() => scrollTo('top')}>Home</button>
      <button className="apple-btn" onClick={() => scrollTo('about')}>About</button>
      <button className="apple-btn" onClick={() => scrollTo('projects')}>Projects</button>
      <button className="apple-btn" onClick={() => scrollTo('news')}>News</button>
      <button className="apple-btn" onClick={() => scrollTo('contact')}>Contact</button>
    </nav>
  );
};

export default NavBar;
