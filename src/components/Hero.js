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
            Hi, I'm <span className="text-primary">Nadun </span>
          </h1>
          <h2 className="hero-subtitle">Computing & Information Systems Undergraduate</h2>
          <p className="hero-description">
            Passionate about crafting innovative digital solutions while expanding my knowledge 
          in web technologies and software development. Currently exploring the intersection 
          of theory and practical through academic projects and hands-on learning experiences.
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
          <div className="image-container">
            <img 
              src="/nadun.jpg" 
              alt="Nadun - Full Stack Developer" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
