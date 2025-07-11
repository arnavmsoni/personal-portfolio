// src/components/ContactMe.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SectionPage.css';
import '../styles/ContactMe.css';

export default function ContactMe() {
  const navigate = useNavigate();

  return (
    <div className="section-page">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        ← Back
      </button>

      <div className="contact-section">
        <div className="contact-card">
          <img
            className="profile-photo"
            src="/images/profilepic2025.png"
            alt="Arnav Soni"
          />
          <div className="contact-details">
            <h1 className="name">Arnav Soni</h1>
            <p className="title">Full-Stack Developer</p>
            <p className="description">
              I’m an Azure-savvy full-stack developer with deep expertise in Java, C#, Python, and React.js. I build scalable web and mobile applications end-to-end, from UI/UX to backend APIs and cloud infrastructure.
            </p>
            <p className="email-line">
              Feel free to reach out to me at{' '}
              <a href="mailto:arnavsoni2028@gmail.com">arnavsoni2028@gmail.com</a>.
            </p>
            <div className="contact-links">
              <a
                className="info-button"
                href="https://www.linkedin.com/in/arnavmsoni/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
