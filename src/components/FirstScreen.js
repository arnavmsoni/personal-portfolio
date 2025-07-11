import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FirstScreen.css';

export default function FirstScreen() {
  const navigate = useNavigate();
  return (
    <main className="first-screen">
      <h1>ARNAV SONI</h1>
      <button
        className="fade-in"
        onClick={() => navigate('/profiles')}
        aria-label="Proceed to profiles"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" width="48" height="48">
          <path d="M4 11h12l-5.5-5.5L12 4l8 8-8 8-1.5-1.5L16 13H4v-2z"/>
        </svg>
      </button>
    </main>
  );
}
