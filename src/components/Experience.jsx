import React, { useState } from 'react';
import "./css_style/Experience.css";

const experienceData = [
  {
    company: "LOCOMeX Inc.",
    role: "Software Engineering Intern",
    duration: "June 2024 – May 2025",
    tech: ["Python", "Django", "AWS", "Selenium", "PostgreSQL"],
    details: [
      "Built an Asset Management system backend using Django, handling document uploads, filtered search, and risk scoring features.",
      "Automated data extraction from websites using Selenium and scheduled it via cron jobs on EC2.",
      "Deployed multiple microservices and applications using AWS infrastructure for production-ready pipelines.",
      "Worked on a React webpage for the company products"
    ]
  },
  {
    company: "Walmart",
    role: "Technology Services Engineer I",
    duration: "July 2022 – July 2023",
    tech: ["Java", "Springboot", "Oracle SQL", "Shell Scripting"],
    details: [
      "Worked with the Store Systems Team - working with apps for goods tracking between the supplier, warehouse and the end customer.",
      "Streamlined inventory and invoice reconciliation by automating log analysis and data parsing scripts using Python and Shell.",
      "Led RCA and fixes for high-severity incidents, ensuring reduced downtime and faster resolution time.",
      "Collaborated with cross-functional teams to support internal tools and optimize backend performance.",
      "Worked closely to mentor new Interns to explain them Supply chain and Store Systems Operations"
    ]
  },
  {
    company: "Walmart",
    role: "Software Support Engineer Intern",
    duration: "June 2021 – Aug. 2021",
    tech: ["Java", "SQL", "Python"],
    details: [
      "Worked on invoice verification tools and conducted regression testing for payment processing services.",
      "Built Python scripts for internal automation and SQL views to improve team visibility into failed records."
    ]
  },
  {
    company: "Infotix Techno Solutions",
    role: "React JS Developer Intern",
    duration: "Jan. 2021 – Mar. 2021",
    tech: ["React", "HTML", "CSS"],
    details: [
      "Developed responsive UI components for a ticketing system.",
      "Integrated frontend with backend APIs and collaborated on issue tracking features."
    ]
  }
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <div className="experience-section full-page" id="experience">
  <div className="experience-wrapper">
    <h2 className="section-title-alt"><span>Where I’ve Worked</span></h2>
    <div className="experience-container">
      <div className="experience-tabs">
        {experienceData.map((exp, idx) => (
          <button
            key={idx}
            className={`tab-button ${idx === active ? "active" : ""}`}
            onClick={() => setActive(idx)}
          >
            {exp.company}
          </button>
        ))}
      </div>
      <div className="experience-content">
        <h3>
          {experienceData[active].role} <span className="highlight">@ {experienceData[active].company}</span>
        </h3>
        <p className="duration">{experienceData[active].duration}</p>
        <ul className="tech-stack">
          {experienceData[active].tech.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
        <ul className="responsibilities">
          {experienceData[active].details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    <a href="#projects" className="scroll-down" style={{ marginTop: "2rem" }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  </div>
</div>

  );
}
