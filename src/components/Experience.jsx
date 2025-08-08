import React, { useEffect, useState } from "react";
import "./css_style/Experience.css";

const experienceData = [
  {
    company: "LOCOMeX Inc.",
    icon: "🚀",
    role: "Software Engineering Intern",
    duration: "June 2024 – May 2025",
    tech: ["Python", "Django", "AWS", "Selenium", "PostgreSQL"],
    details: [
      "Built an Asset Management system backend using Django, handling document uploads, filtered search, and risk scoring features.",
      "Automated data extraction from websites using Selenium and scheduled it via cron jobs on EC2.",
      "Deployed multiple microservices and applications using AWS infrastructure for production-ready pipelines.",
      "Worked on a React webpage for the company products."
    ]
  },
  {
    company: "Walmart",
    icon: "🛒",
    role: "Technology Services Engineer I",
    duration: "July 2022 – July 2023",
    tech: ["Java", "Spring Boot", "Oracle SQL", "Shell"],
    details: [
      "Worked with Store Systems apps for goods tracking across the supply chain.",
      "Automated log analysis & data parsing scripts using Python and Shell for faster reconciliation.",
      "Led RCA and fixes for high-severity incidents to reduce downtime.",
      "Collaborated cross-functionally to improve backend performance.",
      "Mentored new interns on supply chain & store systems operations."
    ]
  },
  {
    company: "Walmart",
    icon: "🧪",
    role: "Software Support Engineer Intern",
    duration: "June 2021 – Aug. 2021",
    tech: ["Java", "SQL", "Python"],
    details: [
      "Worked on invoice verification tools and regression testing for payment processing services.",
      "Built Python automation and SQL views to improve visibility into failed records."
    ]
  },
  {
    company: "Infotix Techno Solutions",
    icon: "💻",
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

  // simple reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("reveal-in")),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onKeyNav = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((p) => (p + 1) % experienceData.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((p) => (p - 1 + experienceData.length) % experienceData.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  };

  const exp = experienceData[active];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-wrapper">
        <h2 className="section-title-alt"><span>Where I’ve Worked</span></h2>

        <div className="experience-container">
          {/* Left: tabs */}
          <div className="tabs-col" role="tablist" aria-label="Companies" onKeyDown={onKeyNav}>
            {experienceData.map((item, idx) => {
              const selected = idx === active;
              return (
                <button
                  key={item.company + idx}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${idx}`}
                  id={`tab-${idx}`}
                  tabIndex={selected ? 0 : -1}
                  className={`tab-button ${selected ? "active" : ""}`}
                  onClick={() => setActive(idx)}
                >
                  <span className="tab-deco" aria-hidden />
                  <span className="tab-icon" aria-hidden>{item.icon}</span>
                  <span className="tab-texts">
                    <span className="tab-company">{item.company}</span>
                    <span className="tab-duration">{item.duration}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: panel */}
          <div
            className="exp-card"
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            data-reveal="right"
          >
            <h3 className="exp-role">
              {exp.role} <span className="at">@ {exp.company}</span>
            </h3>

            <p className="exp-dates">{exp.duration}</p>

            <ul className="tech-pills">
              {exp.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <ul className="exp-list">
              {exp.details.map((d, i) => (
                <li key={i}>
                  <span className="chev" aria-hidden>▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="#projects" className="scroll-down" aria-label="Scroll to Projects">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
