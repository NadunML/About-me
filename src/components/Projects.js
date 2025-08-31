import React, { useEffect, useRef } from 'react';
import './Projects.css';

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const currentRef = projectsRef.current;
    
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

  const projects = [
    {
      title: "Resturant Website",
      description: "An innovative digital platform that brings the dining experience online, allowing customers to browse menus, make reservations, and place orders for both delivery and pickup with ease.",
      technologies: ["HTML", "CSS"],
      link: "https://www.linkedin.com/posts/nadun-liyanage-046bb4314_excited-to-share-my-first-website-which-activity-7255257087574781953-MXps?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_pWjYBXzYo3NULBJAp-92LB78thFIVSoE",
      github: "#"
    },
    {
      title: "Ticket Machine Mini Project",
      description: "A simple command-line application that simulates a ticket machine, allowing users to select a destination, calculate the fare, and purchase a ticket.",
      technologies: ["C"],
      link: "https://www.linkedin.com/posts/nadun-liyanage-046bb4314_publictransport-programming-cprogramming-activity-7267263564678107137-tqi1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_pWjYBXzYo3NULBJAp-92LB78thFIVSoE",
      github: "#"
    },
    {
      title: "Task Swapper",
      description: "Coming Soon...!",
      technologies: ["HTML","CSS","Ballerina","MongoDB"],
      link: "#",
      github: "#"
    },
    
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div ref={projectsRef} className="projects-grid reveal">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;