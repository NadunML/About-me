import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ShieldAlert, Utensils, Clock, Music, CheckCircle, Gamepad2 } from 'lucide-react';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'carevision',
      title: "CareVision LK",
      subtitle: "AI-Powered Hospital Surveillance & Safety System",
      role: "Full-Stack Developer | Group Project",
      category: "ai",
      featured: true,
      icon: <ShieldAlert size={28} className="project-type-icon icon-emerald" />,
      description: "Centralized AI surveillance system built for hospital safety management, featuring real-time object detection and facial recognition.",
      bulletPoints: [
        "Developed responsive web dashboard in React.js connected to FastAPI & Python backend.",
        "Integrated YOLOv8 and MobileNetV2 for real-time AI safety threat detection.",
        "Utilized dlib and OpenCV for facial recognition and computer vision streams.",
        "Implemented secure authentication via Firebase Auth and Microsoft Single Sign-On (SSO)."
      ],
      technologies: ["React.js", "Python", "FastAPI", "YOLOv8", "MobileNetV2", "OpenCV", "dlib", "Firebase Auth", "MS SSO"],
      demoLink: "https://lnkd.in/p/gkjFSm-z",
      githubLink: "https://github.com/NadunML/Frontend_CareVision_LK.git"
    },
    {
      id: 'restaurant',
      title: "Restaurant Food Ordering System",
      subtitle: "Full-Stack Food Ordering & Admin Management Portal",
      role: "Full-Stack Developer",
      category: "fullstack",
      featured: true,
      icon: <Utensils size={28} className="project-type-icon icon-cyan" />,
      description: "Comprehensive food ordering application featuring separate customer workflows, takeaway/dine-in time slots, and an admin dashboard.",
      bulletPoints: [
        "Built responsive customer UI and admin analytics dashboard using React.js, Tailwind CSS, and Vite.",
        "Engineered RESTful APIs with Node.js and Express.js paired with MySQL relational database.",
        "Implemented dynamic shopping cart, order history tracking, and custom time-slot pre-ordering.",
        "Separated customer and administrative authorization workflows."
      ],
      technologies: ["React.js", "Tailwind CSS", "Vite", "Node.js", "Express.js", "MySQL", "REST APIs"],
      demoLink: "https://github.com/NadunML",
      githubLink: "https://github.com/NadunML/Mangotree-Customer-frontend"
    },
    {
      id: 'studyfocuser',
      title: "Study Focuser Pro",
      subtitle: "Pomodoro Productivity & Focus Music Web App",
      role: "Developer",
      category: "web",
      featured: false,
      icon: <Clock size={28} className="project-type-icon icon-purple" />,
      description: "Productivity application engineered on the Pomodoro technique to help students and developers maintain deep focus.",
      bulletPoints: [
        "Integrated customizable Pomodoro study session timers with ambient audio tracks.",
        "Designed clean responsive glassmorphism UI with interactive state controls.",
        "Deployed and optimized for zero-latency performance on Vercel."
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
      demoLink: "https://studyfocuser.vercel.app/",
      githubLink: "https://github.com/NadunML/Alarm-System"
    },
    {
      id: 'chordbox',
      title: "ChordBox",
      subtitle: "Digital Chord Sheet & Canvas Image Generator",
      role: "Developer",
      category: "web",
      featured: false,
      icon: <Music size={28} className="project-type-icon icon-pink" />,
      description: "Web application for musicians to digitize, organize, transpose, and export song chord arrangements.",
      bulletPoints: [
        "Created digital canvas interface for arranging chord diagrams and lyrics.",
        "Built instant image generator function to download chord sheets as high-res images.",
        "Implemented custom music note parser and transposition tools."
      ],
      technologies: ["React.js", "JavaScript", "HTML5 Canvas", "CSS3"],
      demoLink: "https://chordpage.vercel.app/",
      githubLink: "https://github.com/NadunML/Chord-Page"
    },
    {
      id: 'neogames',
      title: "Neo Games",
      subtitle: "Retro Arcade Mini-Games Portal",
      role: "Developer",
      category: "web",
      featured: true,
      icon: <Gamepad2 size={28} className="project-type-icon icon-green" />,
      description: "A highly responsive web-based gaming portal featuring classic retro games like Tetris, Snake, and Racer, optimized for both desktop and mobile devices.",
      bulletPoints: [
        "Engineered custom game logic and rendering algorithms for classic arcade games using React and HTML5 Canvas.",
        "Developed a dynamic, mobile-first user interface featuring an integrated on-screen virtual gamepad.",
        "Successfully wrapped the React web application into a fully functional standalone Android APK using AppCreator24 for rapid deployment."
      ],
      technologies: ["React.js", "Vite", "JavaScript", "HTML5 Canvas", "CSS3"],
      demoLink: "https://neo-games-nine.vercel.app/",
      githubLink: "https://github.com/NadunML/Neo-games"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 85, damping: 15 }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} />
            Featured Work
          </span>
          <h2 className="section-title">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore a showcase of my full-stack web applications, AI-driven surveillance platforms, and interactive productivity tools.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({projects.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI & Vision
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full-Stack Web
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Apps & Tools
          </button>
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={filter}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className={`project-card glass-panel ${project.featured ? 'featured-card' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="project-card-header">
                <div className="project-icon-badge">
                  {project.icon}
                </div>
                <div className="project-role-badge">
                  {project.role}
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <p className="project-desc">{project.description}</p>

                {/* Bullet Points */}
                <div className="project-bullets">
                  {project.bulletPoints.map((bp, idx) => (
                    <div key={idx} className="project-bullet-item">
                      <CheckCircle size={14} className="bullet-icon" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-tags">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-action-row">
                  <a 
                    href={project.demoLink} 
                    className="btn btn-sm btn-secondary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="btn btn-sm btn-outline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" style={{ fontSize: '1rem' }}></i>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;