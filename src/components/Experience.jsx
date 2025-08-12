// components/Experience.jsx
import React, { useEffect, useState } from "react";
import "./css_style/Experience.css";

const experienceData = [
  {
    company: "LOCOMeX Inc.",
    icon: "🚀",
    role: "Software Engineer",
    duration: "Jan 2024 – May 2025",
    tech: ["Python", "Django", "AWS EKS", "Selenium", "PostgreSQL", "S3"],
    details: [
      "Designed and shipped Django REST APIs for asset intake, filtered search, and risk scoring; modeled data in PostgreSQL and enforced request validation.",
      "Implemented secure document uploads to S3 (pre-signed URLs) and batched processing for large files.",
      "Containerized services and deployed to AWS EKS with rolling updates, readiness/liveness probes, and HPA for predictable scaling.",
      "Built headless Selenium crawlers (retry/backoff, CSS/XPath hardening) on EC2; cron-scheduled jobs normalized data into the ingestion schema.",
      "Added observability with structured logs and CloudWatch metrics; tuned queries and caching to reduce p95 latency under load."
    ]
  },
  {
    company: "Walmart",
    icon: "🛒",
    role: "Technology Services Engineer I",
    duration: "July 2022 – July 2023",
    tech: ["Java", "Spring Boot", "Oracle SQL", "Linux", "Python", "Shell"],
    details: [
      "Operated and stabilized Spring Boot microservices in production - triaged incidents via logs/metrics and performed RCA across upstream/downstream services.",
      "Automated 10+ operational workflows with Python/Shell (log triage, health checks, release guards), cutting manual toil and improving response time.",
      "Wrote Oracle SQL scripts/views to reconcile transactional data and flag anomalies; reduced reconciliation time during peak events.",
      "Partnered with platform & app teams to harden rollout procedures and alerts, improving service reliability and MTTR.",
      "Authored runbooks and mentored new interns on microservice patterns, on-call hygiene, and tooling."
    ]
  },
  {
    company: "Walmart",
    icon: "🧪",
    role: "Software Support Engineer Intern",
    duration: "June 2021 – Aug. 2021",
    tech: ["Java", "Spring", "Cassandra", "Linux", "Shell", "SQL"],
    details: [
      "Integrated Apache Cassandra into a Spring service with well-chosen partition/cluster keys; improved read performance under peak traffic.",
      "Built Shell utilities to monitor daily SKU file ingestion and storage thresholds; alerted on missing/late files to protect data quality.",
      "Contributed regression test cases and log instrumentation for payment/settlement flows.",
      "Assisted with Linux service unit configs and deployment scripts to smooth promotion from staging to prod."
    ]
  },
  {
    company: "Infotix Techno Solutions",
    icon: "💻",
    role: "React JS Developer Intern",
    duration: "Jan. 2021 – Mar. 2021",
    tech: ["React", "Node.js", "REST APIs", "HTML", "CSS"],
    details: [
      "Implemented responsive React components (hooks, controlled forms) for HR & project-management features.",
      "Integrated REST endpoints with error states and optimistic UI updates; coordinated API contracts with backend.",
      "Applied a11y basics (semantic regions, focus outlines, color contrast) and trimmed render cost for smoother interactions.",
      "Styled with modular CSS and utility classes to keep bundles small and layouts consistent."
    ]
  }
];

export default function Experience() {
  const [active, setActive] = useState(0);

  // Tabs orientation (vertical desktop / horizontal mobile) + Safari-safe listener
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const set = () => {
      const el = document.querySelector(".tabs-col");
      if (el) el.setAttribute("aria-orientation", mq.matches ? "horizontal" : "vertical");
    };
    set();
    if (mq.addEventListener) {
      mq.addEventListener("change", set);
      return () => mq.removeEventListener("change", set);
    } else {
      mq.addListener(set);
      return () => mq.removeListener(set);
    }
  }, []);

  // Reveal-on-scroll for the panel
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("reveal-in")),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Keyboard navigation for tabs (ArrowUp/Down on desktop, Left/Right on mobile; Home/End)
  const onKeyNav = (e) => {
    const horiz = window.matchMedia("(max-width: 900px)").matches;
    const go = (delta) => {
      const n = (active + delta + experienceData.length) % experienceData.length;
      setActive(n);
      requestAnimationFrame(() => document.getElementById(`tab-${n}`)?.focus());
    };
    if ((horiz && e.key === "ArrowRight") || (!horiz && e.key === "ArrowDown")) { e.preventDefault(); go(+1); }
    if ((horiz && e.key === "ArrowLeft")  || (!horiz && e.key === "ArrowUp"))   { e.preventDefault(); go(-1); }
    if (e.key === "Home") { e.preventDefault(); setActive(0); requestAnimationFrame(() => document.getElementById("tab-0")?.focus()); }
    if (e.key === "End")  { e.preventDefault(); const n = experienceData.length - 1; setActive(n); requestAnimationFrame(() => document.getElementById(`tab-${n}`)?.focus()); }
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

            <ul className="tech-pills" aria-label="Tech stack">
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
