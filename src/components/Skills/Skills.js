import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Cpu, Wrench, Palette, Sparkles } from 'lucide-react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code size={22} className="cat-icon icon-cyan" />,
      skills: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C Language", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" }
      ]
    },
    {
      category: "Frontend Development",
      icon: <Layout size={22} className="cat-icon icon-indigo" />,
      skills: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      category: "Backend & Databases",
      icon: <Server size={22} className="cat-icon icon-purple" />,
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase & Auth", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
      ]
    },
    {
      category: "AI & Computer Vision",
      icon: <Cpu size={22} className="cat-icon icon-emerald" />,
      skills: [
        { name: "YOLOv8", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "MobileNetV2", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
        { name: "dlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
      category: "UI/UX & Creative Tools",
      icon: <Palette size={22} className="cat-icon icon-pink" />,
      skills: [
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
        { name: "UI Architecture", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
      ]
    },
    {
      category: "Development Tools",
      icon: <Wrench size={22} className="cat-icon icon-cyan" />,
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} />
            Technical Arsenal
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, full-stack frameworks, AI detection libraries, and UI design tools I utilize.
          </p>
        </div>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((catGroup, index) => (
            <motion.div key={index} className="skill-category-card glass-panel" variants={itemVariants}>
              <div className="category-header">
                <div className="category-icon-box">{catGroup.icon}</div>
                <h3 className="category-title">{catGroup.category}</h3>
              </div>

              <div className="skills-pill-list">
                {catGroup.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex} 
                    className="skill-pill glass-card"
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="skill-icon-wrapper">
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="skill-label">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;