// src/components/Experience.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import '../styles/Experience.css';

const timelineData = [
  {
    timelineType: 'education',
    dateRange: 'Expected 2028',
    name: 'University of Nebraska–Lincoln',
    title: 'Bachelor of Science in Computer Science; Minor in Business',
    summaryPoints:
      'Student of the Jeffrey S. Raikes School—selective honors program focused on CS & business. Relevant Coursework: Java, SQL, Innovation Processes & SE (HTML, CSS, JS, Figma), Linear Algebra, Calculus II, Accounting.'
  },
  {
    timelineType: 'work',
    dateRange: 'May 2025 – August 2025',
    title: 'Full-Stack Software Engineering Intern',
    name: 'WoodmenLife, Omaha, NE',
    summaryPoints:
      'Built apps tracking volunteer hours for 300+ users; provisioned Azure SQL databases and authored C# backend services; deployed Azure Web Apps via CI/CD; automated Graph API data pulls; implemented parameterized queries & input sanitization for security.'
  },
  {
    timelineType: 'work',
    dateRange: 'January 2025 – May 2025',
    title: 'Software Engineering Intern',
    name: 'Signature Performance, Lincoln, NE',
    summaryPoints:
      'Integrated Apache Airflow for backend automation (–30% manual tasks); refactored React/TypeScript UI components for accessibility across 1,000+ users; contributed in Agile sprints for requirements & testing.'
  },
  {
    timelineType: 'work',
    dateRange: 'November 2024 – May 2025',
    title: 'Information Technology Intern',
    name: 'State of Nebraska, Lincoln, NE',
    summaryPoints:
      'Authored 100+ C# automation scripts with Selenium & Playwright (–70% test time); validated UI navigation in tests; resolved 35+ pre-prod bugs; managed CI/CD pipelines in Azure DevOps.'
  },
  {
    timelineType: 'work',
    dateRange: 'July 2023 – August 2023',
    title: 'Software Intern',
    name: 'Union Pacific, North Platte, NE',
    summaryPoints:
      'Worked with 45+ trains using data-driven methods to optimize safety measures; conducted big-data air-brake system testing at the world’s largest rail yard.'
  },
  {
    timelineType: 'work',
    dateRange: 'August 2022 – January 2023',
    title: 'Data Analyst Intern (Startup)',
    name: 'NWF Strategies (Remote)',
    summaryPoints:
      'Analyzed campaign data for Peltola, Mei & McDuffie to shape funding strategies; built dashboards to visualize key metrics.'
  },
  {
    timelineType: 'work',
    dateRange: 'May 2022 – August 2022',
    title: 'Intern (Engineering/Magnetometry)',
    name: 'University of Nebraska–Lincoln, Lincoln, NE',
    summaryPoints:
      'Selected for competitive research; collaborated with professors & PhD students; created programs for a Super Quantum Interference Device to calculate atomic magnetic moments.'
  },
  {
    timelineType: 'work',
    dateRange: 'August 2021 – June 2022',
    title: 'Software Developer (Competition)',
    name: 'University of Omaha Nebraska, Omaha, NE',
    summaryPoints:
      'Led a 3-person team through planning & stand-ups; built a video game in Python & Java demonstrating inclusive tech; won the Impact Award.'
  }
];

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div className="experience-page">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
        aria-label="Go back"
      >
        ← Back
      </button>

      <div className="timeline-container">
        <h2 className="timeline-title">
          📅 Experience &amp; Education Timeline
        </h2>
      </div>

      <VerticalTimeline>
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={{
              background:
                item.timelineType === 'work' ? '#e50914' : '#fff',
              color:
                item.timelineType === 'work' ? '#fff' : '#000'
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                item.timelineType === 'work' ? '#e50914' : '#fff'
              }`
            }}
            date={item.dateRange}
            iconStyle={{
              background:
                item.timelineType === 'work' ? '#e50914' : '#fff',
              color:
                item.timelineType === 'work' ? '#fff' : '#000'
            }}
            icon={
              item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />
            }
          >
            <h3 className="vertical-timeline-element-title">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.name}
            </h4>
            <p>{item.summaryPoints}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
