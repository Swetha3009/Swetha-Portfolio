import React from 'react';
import "./css_style/Projects.css";
import projects from '../data/projects';

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title-alt"><span>My Work</span></h2>

      <div className="project-wrapper">
        {projects.map((project, idx) => (
          <div className={`project-row ${idx % 2 ? 'right' : 'left'}`} key={project.title || idx}>
            <div className="project-img-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image-showcase"
                loading="lazy"
              />
            </div>

            <div className="project-description-container">
              <p className="featured-label">Featured Project</p>
              <h3 className="project-title-showcase">{project.title}</h3>
              <p className="project-description-showcase">{project.description}</p>

              <ul className="project-tech-stack">
                {project.tech?.map((t) => <li key={t}>{t}</li>)}
              </ul>

              <div className="project-links">
                {project.github && (
                  <a className="glow-button" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {project.demo && (
                  <a className="glow-button demo" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="learn-more-button">
        <a
          href="https://github.com/Swetha3009?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="social-btn projects"
        >
          More Projects
        </a>
      </div>
    </div>
  );
}
