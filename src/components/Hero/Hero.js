import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code, Cpu, Sparkles, MapPin, Mail } from 'lucide-react';
import './Hero.css';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="home" className="hero section">
      <div className="container">
        <motion.div 
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Left Content */}
          <div className="hero-content">
            <motion.div className="hero-badge-group" variants={itemVariants}>
              <span className="hero-badge">
                <Sparkles size={14} className="badge-sparkle" />
                Software Engineering Intern Candidate
              </span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Hi, I'm <span className="gradient-text">Nadun Dilmina</span> Liyanage
            </motion.h1>

            <motion.h2 className="hero-subtitle" variants={itemVariants}>
              Computing & Info. Systems Undergraduate @ <span className="highlight-uni">Sabaragamuwa University</span>
            </motion.h2>

            <motion.p className="hero-description" variants={itemVariants}>
              Passionate about building responsive full-stack web applications, integrating AI-powered surveillance & computer vision models, and engineering robust digital experiences with clean architecture.
            </motion.p>

            {/* Quick Contact Info Pills */}
            <motion.div className="hero-info-row" variants={itemVariants}>
              <div className="hero-info-item">
                <MapPin size={15} />
                <span>Galle, Sri Lanka</span>
              </div>
              <div className="hero-info-item">
                <Mail size={15} />
                <span>nadundilminaliyanage@gmail.com</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="hero-buttons" variants={itemVariants}>
              <button className="btn" onClick={() => scrollToSection('projects')}>
                <span>View Projects</span>
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                <span>Get In Touch</span>
              </button>
              
              {/* Updated Download CV Button */}
              <a 
                href="/Nadun_CV.pdf" 
                download="Nadun_Dilmina_CV.pdf"
                className="btn btn-outline"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div className="hero-stats-row" variants={itemVariants}>
              <div className="hero-stat-card glass-card">
                <span className="stat-number">4+</span>
                <span className="stat-label">Featured Projects</span>
              </div>
              <div className="hero-stat-card glass-card">
                <span className="stat-number">15+</span>
                <span className="stat-label">Tech Stack Tools</span>
              </div>
              <div className="hero-stat-card glass-card">
                <span className="stat-number">2028</span>
                <span className="stat-label">Expected Graduation</span>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Right Visual Showcase */}
          <motion.div className="hero-visual" variants={itemVariants}>
            <div className="avatar-wrapper">
              <div className="avatar-glow"></div>
              <div className="avatar-ring"></div>
              
              <div className="avatar-container glass-panel">
                <img 
                  src="/nadun.jpg" 
                  alt="Nadun Dilmina Liyanage" 
                  className="profile-image" 
                  onError={(e) => {
                    e.target.src = "/image1.jpg";
                  }}
                />
              </div>

              {/* Floating Tech Badges */}
              <motion.div 
                className="floating-badge badge-top-right glass-card"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code size={18} className="badge-icon icon-cyan" />
                <div>
                  <strong>Full-Stack Web</strong>
                  <span>React & Node.js</span>
                </div>
              </motion.div>

              <motion.div 
                className="floating-badge badge-bottom-left glass-card"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Cpu size={18} className="badge-icon icon-purple" />
                <div>
                  <strong>AI & Vision</strong>
                  <span>YOLOv8 & OpenCV</span>
                </div>
              </motion.div>

              <motion.div 
                className="floating-badge badge-bottom-right glass-card"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Terminal size={18} className="badge-icon icon-emerald" />
                <div>
                  <strong>Backend & APIs</strong>
                  <span>FastAPI & REST</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;