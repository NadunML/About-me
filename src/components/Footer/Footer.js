import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <Code2 size={22} />
            </div>
            <div>
              <h3 className="footer-brand-title">Nadun Dilmina Liyanage</h3>
              <p className="footer-brand-sub">Software Engineering Intern Candidate</p>
            </div>
          </div>

          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Nadun Dilmina Liyanage. All rights reserved.
          </p>
          <p className="footer-tech">
            Crafted with React, Three.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;