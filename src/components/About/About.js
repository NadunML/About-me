import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, GitBranch, Layers, Users, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import './About.css';

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/nadun.jpg",
    "/image1.jpg",
    "/image3.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const competencies = [
    {
      icon: <Brain size={24} className="comp-icon icon-cyan" />,
      title: "Problem Solving & Analytical Thinking",
      desc: "Ability to break down complex architectural challenges and engineer robust, effective algorithms and web solutions."
    },
    {
      icon: <GitBranch size={24} className="comp-icon icon-indigo" />,
      title: "Version Control & Collaboration",
      desc: "Proficient in Git & GitHub workflows, feature branching, code reviews, and agile team development practices."
    },
    {
      icon: <Layers size={24} className="comp-icon icon-purple" />,
      title: "Software Engineering Fundamentals",
      desc: "Solid mastery of Object-Oriented Programming (OOP), relational database design (MySQL), and REST API design."
    },
    {
      icon: <Users size={24} className="comp-icon icon-pink" />,
      title: "Technical Communication & Teamwork",
      desc: "Strong interpersonal and technical communication skills to collaborate seamlessly with engineering and cross-functional teams."
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} />
            Background & Expertise
          </span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A dedicated undergraduate software engineer passionate about modern web engineering, AI integrations, and UI/UX design.
          </p>
        </div>
        
        <div className="about-grid">
          {/* Left Bio Card */}
          <motion.div 
            className="about-bio-card glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bio-tag">
              <BookOpen size={16} />
              <span>Professional Summary</span>
            </div>

            <p className="bio-lead">
              I am a <strong>Computing and Information Systems undergraduate</strong> with hands-on experience in full-stack web development and AI-powered software engineering.
            </p>

            <p className="bio-text">
              My expertise spans building responsive web applications using <strong>React.js, Tailwind CSS, Vite, Node.js, FastAPI, and MySQL</strong>, as well as integrating computer vision AI models like <strong>YOLOv8, MobileNetV2, and OpenCV</strong>.
            </p>

            <p className="bio-text">
              Driven by strong problem-solving skills and a solid understanding of software engineering fundamentals (OOP, relational database design, REST architecture), I am currently seeking a <strong>Software Engineering Internship</strong> to contribute to real-world impact while advancing my industry capabilities.
            </p>

            <div className="bio-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Full-Stack Web Engineering (MERN / Vite)</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>Computer Vision & AI Model Integration</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>UI/UX Design Systems & Prototyping</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Slideshow & Highlights */}
          <motion.div 
            className="about-gallery-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="gallery-frame glass-panel">
              <div className="slideshow-wrapper">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={`slide-item ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    <div className="slide-overlay"></div>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="slide-dots">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="gallery-caption">
                <span className="caption-title">Nadun Dilmina Liyanage</span>
                <span className="caption-sub">Undergraduate & Full-Stack Developer</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Competencies Row */}
        <div className="competencies-wrapper">
          <h3 className="competencies-title">
            Core <span className="gradient-text-cyan">Competencies</span>
          </h3>

          <div className="competencies-grid">
            {competencies.map((comp, index) => (
              <motion.div 
                key={index} 
                className="competency-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="comp-icon-box">{comp.icon}</div>
                <h4 className="comp-title">{comp.title}</h4>
                <p className="comp-desc">{comp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;