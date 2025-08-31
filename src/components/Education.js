import React, { useEffect, useRef } from 'react';
import './Education.css';

function Education() {
  const educationRef = useRef(null);

  useEffect(() => {
    const currentRef = educationRef.current;
    
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

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div ref={educationRef} className="education-content reveal">
          <div className="education-item">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-details">
              <h3>Sabaragamuwa University of Sri Lanka</h3>
              <p className="education-degree">BSc (Hons) in Computing and information Systems</p>
              <p className="education-period">2022/23 batch </p>
              <p className="education-description">
                Currently pursuing my undergraduate degree in CIS with a focus on 
                software engineering, machine learning, and web development.
              </p>
              <div className="education-courses">
                <h4>Relevant Courses:</h4>
                <div className="courses-grid">
                  <span>Structured Programming</span>
                  <span>Object-Oriented Programming</span>
                  <span>Database Management Systems</span>
                  <span>Web Development</span>
                  <span>Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-icon">
              <i className="fas fa-school"></i>
            </div>
            <div className="education-details">
              <h3>St. Aloysius' College - Galle</h3>
              <p className="education-degree">G.C.E. Advanced Level</p>
              <p className="education-period">2022/23</p>
              <p className="education-description">
                Completed Advanced Level examination in Physical Science stream with outstanding results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;