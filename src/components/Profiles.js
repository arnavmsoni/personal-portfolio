import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profiles.css';

const profiles = [
  { role: 'recruiter',  img: 'https://sumanthsamala.com/static/media/blue.9b293a4a6ef065903a8f.png' },
  { role: 'networker',  img: 'https://sumanthsamala.com/static/media/grey.bbfd7fb8e095529e355c.png' },
  { role: 'adventurer', img: 'https://sumanthsamala.com/static/media/red.6138d0c52611186c9d03.png' }
];

export default function Profiles() {
  const navigate = useNavigate();
  return (
    <section className="profiles">
      <h1>Who's Watching?</h1>
      <div className="profile-container">
        {profiles.map(p => (
          <button
            key={p.role}
            className="profile"
            onClick={() => navigate(`/${p.role}`)}
          >
            <img src={p.img} alt={p.role}/>
            <p>{p.role.charAt(0).toUpperCase()+p.role.slice(1)}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
