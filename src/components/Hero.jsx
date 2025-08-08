import React from "react";
import Lottie from "lottie-react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import computerData from "../assets/lottie/computer_open_lottie.json";
import "./css_style/Hero.css";

export default function Hero() {
  return (
    <header id="hero" className="hero">
      {/* animated background layers */}
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
              strings={[
                "Software Engineer",
                "Cloud Developer",
                "Backend Developer",
                "ML Enthusiast",
              ]}
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
              href="/Swetha_Jagadeesan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload aria-hidden /> <span>Resume</span>
            </a>

            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/swetha-jagadeesan-972b821b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              className="btn btn-ghost"
              href="https://github.com/Swetha3009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          <a href="#about" className="scroll-cue" aria-label="Scroll to About">
            <span>Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Right: lottie */}
        <div className="hero-art">
  <img
    src={`${import.meta.env.BASE_URL}Swetha_ghibli.webp`}
    width={360}
    height={480}
    alt="Swetha"
    className="hero-photo"
    loading="eager"
    decoding="async"
  />
      </div>

      </div>
    </header>
  );
}
