import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const contactDetails = [
    {
      id: 'email',
      icon: <Mail size={22} className="contact-icon icon-cyan" />,
      label: "Email Address",
      value: "nadundilminaliyanage@gmail.com",
      action: "mailto:nadundilminaliyanage@gmail.com",
      copyText: "nadundilminaliyanage@gmail.com"
    },
    {
      id: 'phone',
      icon: <Phone size={22} className="contact-icon icon-indigo" />,
      label: "Phone / WhatsApp",
      value: "+94 76 529 3838",
      action: "tel:+94765293838",
      copyText: "+94765293838"
    },
    {
      id: 'location',
      icon: <MapPin size={22} className="contact-icon icon-purple" />,
      label: "Location",
      value: "Galle & Sabaragamuwa University, Sri Lanka",
      action: null,
      copyText: "Galle, Sri Lanka"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      username: "Nadun Liyanage",
      url: "https://www.linkedin.com/in/nadun-liyanage-046bb4314",
      faIcon: "fab fa-linkedin-in"
    },
    {
      name: "GitHub",
      username: "NadunML",
      url: "https://github.com/NadunML",
      faIcon: "fab fa-github"
    },
    {
      name: "WhatsApp",
      username: "Direct Chat",
      url: "https://wa.me/qr/XC2CZB7IZNWRE1",
      faIcon: "fab fa-whatsapp"
    },
    {
      name: "Instagram",
      username: "___ndl_",
      url: "https://www.instagram.com/___ndl_?igsh=MTduZnk1eXZ2YjQyZA==",
      faIcon: "fab fa-instagram"
    }
  ];

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedField(id);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={14} />
            Let's Collaborate
          </span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you are looking for a Software Engineering Intern, want to discuss a project, or just say hello — my inbox is always open!
          </p>
        </div>
        
        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div 
            className="contact-info-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card glass-panel">
              <h3 className="info-card-title">Direct Contact</h3>
              <p className="info-card-desc">
                Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within a few hours.
              </p>

              <div className="contact-items-list">
                {contactDetails.map((item) => (
                  <div key={item.id} className="contact-item-row glass-card">
                    <div className="contact-item-left">
                      <div className="contact-icon-box">{item.icon}</div>
                      <div className="contact-item-details">
                        <span className="contact-item-label">{item.label}</span>
                        {item.action ? (
                          <a href={item.action} className="contact-item-value-link">
                            {item.value}
                          </a>
                        ) : (
                          <span className="contact-item-value">{item.value}</span>
                        )}
                      </div>
                    </div>

                    <button 
                      className="copy-btn"
                      onClick={() => handleCopy(item.copyText, item.id)}
                      title="Copy to clipboard"
                    >
                      {copiedField === item.id ? (
                        <Check size={16} className="text-emerald" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Social Profiles Grid */}
              <div className="social-profiles-wrapper">
                <span className="social-heading">Connect On Social Platforms</span>
                <div className="social-grid">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card glass-card"
                    >
                      <div className="social-icon">
                        <i className={social.faIcon} style={{ fontSize: '1.2rem' }}></i>
                      </div>
                      <div className="social-meta">
                        <span className="social-name">{social.name}</span>
                        <span className="social-handle">{social.username}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="contact-form-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-card glass-panel">
              <h3 className="form-card-title">Send Me A Message</h3>

              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    className="form-success-alert"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <Check size={20} />
                    <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="e.g. John Doe"
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com"
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="Internship Opportunity / Project Inquiry"
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Hi Nadun, I noticed your portfolio and would like to discuss..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-full">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;