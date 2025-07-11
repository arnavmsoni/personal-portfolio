// src/components/Header.js
import React, { useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  const navigate = useNavigate();
  const { role } = useParams();  // e.g. "recruiter", "adventurer", etc.

  useEffect(() => {
    const onScroll = () => {
      document
        .querySelector('.header')
        ?.classList.toggle('scrolled', window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="header">
      <h1 onClick={() => navigate('/')}>ARNAV SONI</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to={`/${role}/experience`}>Professional</Link>
        <Link to={`/${role}/skills`}>Skills</Link>
        <Link to={`/${role}/projects`}>Projects</Link>
        <Link to={`/${role}/contact`}>Contact</Link>
      </nav>
    </header>
  );
}
