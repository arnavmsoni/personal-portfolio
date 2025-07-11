// src/components/Projects.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaDocker,
  FaAngular,
  FaGithub,
  FaGitlab,
  FaGoogle,
  FaJava,
  FaJenkins,
  FaMicrosoft,
  FaPython,
  FaVuejs
} from 'react-icons/fa';
import {
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiMaterialdesign,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiAwsamplify,
  SiFirebase,
  SiTerraform,
  SiArgo
} from 'react-icons/si';
import { GrDeploy, GrKubernetes } from 'react-icons/gr';

// map tech names to icons
const techIcons = {
  ReactJS: <FaReact />,
  NodeJS: <FaNodeJs />,
  AWS: <FaAws />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  'Ruby On Rails': <SiRubyonrails />,
  'Material UI': <SiMaterialdesign />,
  HTML5: <SiHtml5 />,
  CSS3: <SiCss3 />,
  jQuery: <SiJquery />,
  'AWS Amplify': <SiAwsamplify />,
  Cognito: <FaAws />,
  Lambda: <FaAws />,
  ECS: <FaAws />,
  Jenkins: <FaJenkins />,
  Docker: <FaDocker />,
  GraphQL: <FaDatabase />,
  'CI/CD': <FaGitlab />,
  GitLab: <FaGitlab />,
  GitHub: <FaGithub />,
  Heroku: <GrDeploy />,
  Netlify: <GrDeploy />,
  Firebase: <SiFirebase />,
  GCP: <FaGoogle />,
  Azure: <FaMicrosoft />,
  Kubernetes: <GrKubernetes />,
  Terraform: <SiTerraform />,
  ArgoCD: <SiArgo />,
  Java: <FaJava />,
  'Spring Boot': <FaJava />,
  Python: <FaPython />,
  'Express.js': <FaNodeJs />,
  Angular: <FaAngular />,
  'Vue.js': <FaVuejs />,
  'Next.js': <FaReact />,
  Gatsby: <FaReact />,
  'Nuxt.js': <FaVuejs />,
  Redux: <FaReact />,
  Vuex: <FaVuejs />,
  'Tailwind CSS': <SiCss3 />,
  Bootstrap: <SiCss3 />,
};

const projects = [
  {
    title: 'Market Data Sentiment Dashboard',
    description:
      'An interactive dashboard for real-time stock sentiment analysis using web scraping and the Reddit API, visualizing market mood to inform trading decisions.',
    image: '/images/MarketSentimentPicture.png',
    techUsed: ['Python', 'ReactJS', 'Streamlit', 'NLTK', 'Git'],
    link: 'https://github.com/arnavmsoni/market-sentiment-dashboard'
  },
  {
    title: 'Video Recipe Generator',
    description:
      'A web app that converts cooking video transcripts into step-by-step written recipes using the YouTube Transcript API and the OpenAI API.',
    image: '/images/VideoToRecipePicture.png',
    techUsed: ['Python', 'OpenAI API', 'YouTube API'],
    link: 'https://github.com/arnavmsoni/video-recipe-generator/tree/main'
  },
  {
    title: 'Medical Pricing Analysis',
    description:
      'A data cleaning and analysis tool that processes public hospital pricing CSVs in Python to uncover pricing trends and prepare datasets for visualization.',
    image: '/images/MedicalPricing.png',
    techUsed: ['Python', 'ReactJS'],
    link: 'https://github.com/arnavmsoni/medical-pricing-analysis'
  },
  {
    title: 'CalcuCoder',
    description:
      'A website offering a variety of web-based calculators and coding problem solvers to help developers quickly compute and prototype algorithms.',
    image: '/images/CalcucoderPicture.png',
    techUsed: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://calcucoder.com'
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="projects-grid">
        {projects.map((proj, idx) => {
          const cardContent = (
            <>
              <img
                src={proj.image}
                alt={proj.title}
                className="project-image"
              />
              <div className="project-details">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tech-used">
                  {proj.techUsed.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {techIcons[tech] || '🔧'} {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          );

          const commonProps = {
            key: idx,
            className: 'project-card',
            style: { '--delay': `${idx * 0.1}s` }
          };

          return proj.link ? (
            <a
              {...commonProps}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cardContent}
            </a>
          ) : (
            <div {...commonProps}>{cardContent}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
