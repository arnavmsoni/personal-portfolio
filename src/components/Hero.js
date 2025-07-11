// src/components/Hero.js

import React from 'react';
import '../styles/Hero.css';

export default function Hero({
  title,
  description,
  linkedinLink,
  backgroundImage
}) {
  return (
    <section
      className="hero"
      style={{
        background: backgroundImage
          ? `url(${backgroundImage}) center/cover no-repeat`
          : undefined
      }}
    >
      <div className="hero-content">
        <div className="banner-top">
          <h2 className="banner-headline">{title}</h2>
          <div className="banner-buttons">
          <a
              href={linkedinLink}
              className="more-info-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="banner-description">{description}</p>
      </div>
    </section>
  );
}
