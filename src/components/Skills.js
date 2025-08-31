import React, { useEffect, useRef } from 'react';
import './Skills.css';

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const currentRef = skillsRef.current;
    
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "JavaScript"},
        { name: "C" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS" },
        { name: "React" },
        { name: "Node.js" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL"},
        { name: "MongoDB"},
        { name: "Git"}
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div ref={skillsRef} className="skills-content reveal">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}✔</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;