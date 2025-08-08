// import React from 'react'

// export default function About() {
//   return (
//     <div className="about-section" id="about">
//       <h2 className="section-title">Meet Swetha</h2>
//       <div className="about-content">
//       <div className="image-glass">
//   <img src="/profile.jpeg" alt="Swetha Jagadeesan" className="about-image" />
// </div>
//         <div className="about-texts">
//           <p>
//             I'm a passionate software engineer with a strong foundation in backend systems, cloud infrastructure, and machine learning.
//             I enjoy solving complex problems, building scalable APIs, and deploying full-stack applications.
//           </p>
//           <p>
//             I’ve worked at startups and large tech companies, and my recent experience includes developing backend services using Python/Django,
//             automating data pipelines with Selenium, and deploying ML models using Docker & Kubernetes on AWS.
//           </p>
//           <p>
//             Outside of coding, I enjoy mentoring juniors, speaking at tech meetups, and sprinting on the track 🏃‍♀️.
//           </p>
//         </div>
//         {/* Scroll Arrow */}
//   <a href="#experience" className="scroll-down">
//     <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
//       <path d="M6 9l6 6 6-6" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   </a>
//       </div>

      

//     </div>
//   )
// }


import React from "react";
import { FaDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./css_style/About.css";
// If you don’t want react-icons, tell me and I’ll swap to inline SVGs.

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title about-title" data-animate>Meet Swetha</h2>

      <div className="about-card">
        {/* Left: Photo */}
        <div className="about-photoWrap">
          <div className="image-glass">
            <img
              src="/profile.jpeg"
              alt="Swetha Jagadeesan, Software Engineer"
              className="about-image"
              width={220}
              height={220}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* quick facts under photo */}
          <ul className="about-facts">
            <li><FaMapMarkerAlt aria-hidden /> New York, USA</li>
            <li>Developer</li>
          </ul>
        </div>

        {/* Right: Copy */}
        <div className="about-texts">
          <p>
            I’m a software engineer focused on backend systems, cloud
            infrastructure, and machine learning. I love turning messy
            requirements into clean, scalable APIs and production-ready services.
          </p>
          <p>
            Recently, I’ve built backend services with <strong>Python/Django</strong>,
            automated data pipelines with <strong>Selenium</strong>, and deployed
            ML workloads using <strong>Docker</strong> & <strong>Kubernetes on AWS</strong>.
          </p>
          <p>
            Outside code, I mentor juniors, speak at tech meetups, and sprint on
            the track 🏃‍♀️.
          </p>

          {/* mini skills strip */}
          <div className="mini-skills" aria-label="Top skills">
            <span>Python</span><span>Django</span><span>AWS</span>
            <span>PostgreSQL</span><span>React</span><span>Docker</span>
          </div>

          {/* stats row */}
          <div className="about-stats" aria-label="Quick stats">
            <div className="stat"><span className="num">8+</span><span>Projects</span></div>
            <div className="stat"><span className="num">5+</span><span>Years coding</span></div>
            <div className="stat"><span className="num">4+</span><span>Prod deployments</span></div>
          </div>

          {/* secondary CTA */}
          <div className="about-ctas">
            <a href="/Swetha_Jagadeesan_Resume.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">
              <FaDownload aria-hidden /> Resume
            </a>
            <a href="mailto:sj4378@nyu.edu" className="btn btn-ghost">
              <FaEnvelope aria-hidden /> Contact
            </a>
          </div>
          <div className="timeline">
  <div className="timeline-item">
    <span className="icon">💼</span>
    <p>Walmart <br /><small>2022 – 2023</small></p>
  </div>
  <div className="timeline-item">
    <span className="icon">🎓</span>
    <p>NYU <br /><small>2023 – 2025</small></p>
  </div>
  <div className="timeline-item">
    <span className="icon">🚀</span>
    <p>LOCOMeX <br /><small>2024 – 2025</small></p>
  </div>
</div>
          {/* scroll arrow */}
          <a href="#experience" className="scroll-down" aria-label="Scroll to experience">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#8ab4f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
