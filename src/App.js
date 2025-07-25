// src/App.js
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

import FirstScreen from './components/FirstScreen';
import Profiles    from './components/Profiles';
import Hero        from './components/Hero';
import TopPicks    from './components/TopPicks';
import ContactMe   from './components/ContactMe';
import Experience  from './components/Experience';
import Skills      from './components/Skills';
import Projects    from './components/Projects';

function RolePage({ role }) {
  const bgMap = {
    recruiter:  '/images/suits_brilliant.gif',
    adventurer: '/images/Adventurer.gif',
    networker:  '/images/Networker.gif'
  };
  const backgroundImage = bgMap[role] || '';

  const description = `
Dynamic and results-driven Software Engineer with expertise in Java, C#, React.JS, Python, and cloud technologies.
Passionate about building scalable web applications, optimizing performance, and delivering high-quality solutions.
Experienced in creating user-friendly web tools, building backend services and databases, and streamlining processes to enhance efficiency.
Recent achievements include building a Flask-based Video-to-Recipe generator that transforms YouTube cooking tutorials into step-by-step recipes,
developing a full-stack Medical Pricing Analysis tool to clean, analyze, and visualize hospital procedure cost data,
and implementing a Python-powered stock sentiment analysis engine that scrapes Reddit and news sources to inform trading strategies.
Proficient in leveraging Azure, SQL databases, and C# backends to deliver seamless experiences and impactful results.
  `;

  return (
    <>
      {/* Hero + TopPicks only—Header is now in App */}
      <Hero
        title="Arnav Soni — Software Engineer"
        description={description}
        linkedinLink="https://www.linkedin.com/in/arnavmsoni/"
        backgroundImage={backgroundImage}
      />
      <TopPicks />
    </>
  );
}

function RolePageWrapper() {
  const { role } = useParams();
  return <RolePage role={role} />;
}

export default function App() {
  return (
    <div className="App">
      <Header />        {/* ← Always visible */}
      <ScrollToTop />
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<FirstScreen />} />

        {/* Profiles page */}
        <Route path="/profiles" element={<Profiles />} />

        {/* Role-based Hero splash + TopPicks */}
        <Route path="/:role"           element={<RolePageWrapper />} />
        <Route path="/:role/experience" element={<Experience />} />
        <Route path="/:role/skills"     element={<Skills />} />
        <Route path="/:role/projects"   element={<Projects />} />
        <Route path="/:role/contact"    element={<ContactMe />} />

        {/* Fallback to landing page */}
        <Route path="*" element={<FirstScreen />} />
      </Routes>
    </div>
  );
}
