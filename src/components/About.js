import React, { useEffect, useRef, useState } from 'react';
import './About.css';

function About() {
  const aboutRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Replace these with your actual image paths
  const images = [
    "/image1.jpg",
    "/image2.jpg"
  ];

  useEffect(() => {
    const currentRef = aboutRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div ref={aboutRef} className="about-content reveal">
          <div className="about-text">
            <p>
              I'm a passionate Computing and information Systems undergraduate at Sabaragamuwa University of Sri Lanka 
              with a strong interest in web development, software engineering, and emerging technologies. 
            </p>
            <p>
              My journey in technology began during my school years, and my passion has only grown since 
              starting my university education.
            </p>
            <p>
              When I'm not coding, you can find me participating in university tech events, exploring 
              new programming concepts, or contributing to open-source projects.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies used</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="slideshow">
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
