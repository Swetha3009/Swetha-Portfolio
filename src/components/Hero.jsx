import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "./css_style/Hero.css";
import TerminalCTA from "../components/TerminalCTA";

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div aria-hidden className="hero-bg">
        <div className="hero-glow hero-glow--tl" />
        <div className="hero-glow hero-glow--br" />
        <div className="hero-noise" />
      </div>

      <div className="hero-inner">
        {/* Left: content */}
        <div className="hero-copy">
          <h1 className="hero-title">
            Hi, I’m <span className="hero-name">Swetha Jagadeesan</span>
          </h1>

          <h2 className="hero-subtitle" aria-live="polite">
            <ReactTyped
              strings={["Software Engineer","Backend and Cloud Developer","ML Enthusiast"]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1400}
              loop
            />
          </h2>

          <p className="hero-description">
            I build scalable backend systems, deploy ML models, and craft clean,
            accessible UIs. Let’s build something amazing.
          </p>

          <div className="hero-ctas">
            <a
              className="btn btn-primary"
              href={`${import.meta.env.BASE_URL}Swetha_Jagadeesan_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload aria-hidden /> <span>Resume</span>
            </a>

            <a className="btn btn-ghost" href="https://www.linkedin.com/in/swetha-jagadeesan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>

            <a className="btn btn-ghost" href="https://github.com/Swetha3009" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>

            <TerminalCTA />
          </div>

          <a href="#about" className="scroll-cue" aria-label="Scroll to About">
            <span>Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right: image column */}
        <div className="hero-art">
          <div className="hero-frame">
            <img
              src={`${import.meta.env.BASE_URL}Swetha_ghibli.webp`}
              width={360}
              height={480}
              alt="Swetha"
              className="hero-photo"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              sizes="(max-width: 960px) 260px, 360px"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
