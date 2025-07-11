// src/components/Skills.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaRobot, FaNodeJs, FaDocker, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiNetlify, SiHeroku, SiHtml5, SiCss3 } from 'react-icons/si';

const iconMap = {
  'Ruby on Rails': <SiRubyonrails />,
  'TypeScript': <SiTypescript />,
  'PostgreSQL': <SiPostgresql />,
  'MySQL': <SiMysql />,
  'React': <FaReact />,
  'Node.js': <FaNodeJs />,
  'Python': <FaPython />,
  'Docker': <FaDocker />,
  'Git': <FaGitAlt />,
  'Java': <FaJava />,
  'HTML5': <SiHtml5 />,
  'CSS3': <SiCss3 />,
  'Netlify': <SiNetlify />,
  'Heroku': <SiHeroku />,
  'GitHub Copilot': <FaRobot />
};

export default function Skills() {
  const navigate = useNavigate();
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      let data = await getSkills();

      // Inject GitHub Copilot under "Tools & Practices" if missing
      const targetCategory = 'Tools & Practices';
      if (!data.some(s => s.name === 'GitHub Copilot')) {
        data = [
          ...data,
          {
            name: 'GitHub Copilot',
            description: 'AI-powered pair-programming assistant built into your editor.',
            category: targetCategory
          }
        ];
      }

      setSkillsData(data);
    }
    fetchSkills();
  }, []);

  if (!skillsData.length) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    acc[cat] = acc[cat] || [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.name] || <FaReact />}</div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
