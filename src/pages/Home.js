import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="text-primary">Nadun Liyanage</span>
          </h1>
          <h2 className="hero-subtitle">Computing & Information Systems Undergraduate</h2>
          <p className="hero-description">
            I'm a passionate developer and Computing & Information Systems student at Sabaragamuwa University of Sri Lanka. 
            I enjoy creating innovative solutions and exploring new technologies.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <i className="fas fa-user-graduate"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;