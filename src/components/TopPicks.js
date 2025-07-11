// src/components/TopPicks.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/TopPicks.css';

const allPicks = {
  recruiter:  ['Experience','Skills','Projects','Contact'],
  networker:  ['Projects','Experience','Contact','Skills'],
  adventurer: ['Contact','Projects','Skills','Experience']
};

// Corrected mapping to your filenames in public/images/
const imageMap = {
  Experience: `${process.env.PUBLIC_URL}/images/experience_picture.jpeg`,
  Skills:     `${process.env.PUBLIC_URL}/images/skills_picture.jpeg`,
  Projects:   `${process.env.PUBLIC_URL}/images/projects_picture.jpeg`,
  Contact:    `${process.env.PUBLIC_URL}/images/contactme_picture.jpeg`
};

export default function TopPicks() {
  const { role } = useParams();
  const navigate = useNavigate();
  const picks = allPicks[role] || [];

  return (
    <section className="top-picks">
      <h2>Today's Top Picks for {role}</h2>
      <div className="picks-grid">
        {picks.map(item => (
          <div
            key={item}
            className="pick-card"
            style={{ backgroundImage: `url("${imageMap[item]}")` }}
            onClick={() => navigate(`/${role}/${item.toLowerCase()}`)}
            role="button"
            aria-label={`Go to ${item}`}
          >
            <div className="overlay">
              <h3>{item}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
