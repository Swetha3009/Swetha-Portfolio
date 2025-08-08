import React from 'react';
import "./css_style/Projects.css";
import projects from '../data/projects';

export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title-alt"><span>My Work</span></h2>

      <div className="project-wrapper">
        {projects.map((project, idx) => (
          <div className={`project-row ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
            <div className="project-img-container">
              <img src={project.image} alt={project.title} className="project-image-showcase" />
            </div>
            <div className="project-description-container">
              <p className="featured-label">Featured Project</p>
              <h3 className="project-title-showcase">{project.title}</h3>
              <p className="project-description-showcase">{project.description}</p>
              <ul className="project-tech-stack">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="glow-button">GitHub</a>
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="glow-button">Live Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="learn-more-button">
        <a
          href="https://github.com/Swetha3009?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn projects"
        >
          More Projects
        </a>
      </div>
    </div>
  );
}
