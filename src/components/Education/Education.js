import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, Trophy, Sparkles, Star } from 'lucide-react';
import './Education.css';

function Education() {
  const educationData = [
    {
      institution: "Sabaragamuwa University of Sri Lanka",
      degree: "BSc (Hons) in Computing and Information Systems",
      period: "2024 – Present | Expected Graduation: 2028",
      status: "Undergraduate",
      location: "Belihuloya, Sri Lanka",
      description: "Pursuing specialized honors degree in CIS with a core focus on Software Engineering, Artificial Intelligence, Database Management Systems, and Web Application Architecture.",
      courses: [
        "Structured Programming",
        "Object-Oriented Programming (OOP)",
        "Database Management Systems (RDBMS)",
        "Web Engineering",
        "Software Architecture"
      ]
    },
    {
      institution: "St. Aloysius' College, Galle",
      degree: "G.C.E. Advanced Level – Physical Science Stream",
      period: "Completed in 2022",
      status: "Z-Score: 1.3241",
      location: "Galle, Sri Lanka",
      description: "Completed Advanced Level examination in Physical Science stream (Combined Mathematics, Physics, Chemistry) achieving a Z-score of 1.3241.",
      courses: [
        "Combined Mathematics",
        "Physics",
        "Chemistry"
      ]
    }
  ];

  const certifications = [
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      type: "Certification",
      icon: <BookOpen size={20} className="cert-icon icon-cyan" />
    },
    {
      title: "Innovate with Ballerina Coding Challenge",
      issuer: "Ballerina Language Competition",
      type: "Hackathon / Challenge",
      icon: <Trophy size={20} className="cert-icon icon-purple" />
    },
    {
      title: "MoraXtreme 10.0",
      issuer: "University of Moratuwa IEEE",
      type: "Competitive Programming",
      icon: <Star size={20} className="cert-icon icon-emerald" />
    },
    {
      title: "JPURAXTREME 2.0",
      issuer: "University of Sri Jayewardenepura",
      type: "Hackathon Competition",
      icon: <Award size={20} className="cert-icon icon-pink" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, x: 0, 
      transition: { type: "spring", stiffness: 85, damping: 15 } 
    }
  };

  return (
    <section id="education" className="education section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} />
            Academic Journey
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            My academic foundation, university degree program, certifications, and hackathon participation.
          </p>
        </div>

        <div className="education-grid">
          {/* Education Timeline */}
          <motion.div 
            className="education-timeline-column"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="column-heading">
              <GraduationCap size={24} className="heading-icon icon-cyan" />
              <span>Higher Education</span>
            </h3>

            <div className="timeline-wrapper">
              {educationData.map((edu, idx) => (
                <motion.div key={idx} className="timeline-item glass-panel" variants={itemVariants}>
                  <div className="timeline-badge-row">
                    <span className="status-pill">{edu.status}</span>
                    <span className="period-pill">
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="edu-institution">{edu.institution}</h4>
                  <h5 className="edu-degree">{edu.degree}</h5>
                  <p className="edu-desc">{edu.description}</p>

                  <div className="edu-courses">
                    <span className="courses-label">Key Modules & Stream:</span>
                    <div className="courses-tags">
                      {edu.courses.map((course, cIdx) => (
                        <span key={cIdx} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Competitions Column */}
          <motion.div 
            className="certifications-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="column-heading">
              <Trophy size={24} className="heading-icon icon-purple" />
              <span>Certifications & Contests</span>
            </h3>

            <div className="certs-grid">
              {certifications.map((cert, cIdx) => (
                <motion.div 
                  key={cIdx} 
                  className="cert-card glass-card"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="cert-header">
                    <div className="cert-icon-wrapper">{cert.icon}</div>
                    <span className="cert-type-tag">{cert.type}</span>
                  </div>

                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Education;