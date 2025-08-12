import React from "react";
import "./css_style/Skills.css";

const skillIcons = import.meta.glob("../assets/*.png", { eager: true, query: "?url", import: "default" });

const skills = [
  // Programming Languages
  { name: "Python", icon: "Python.png" },
  { name: "Java", icon: "Java.png" },
  { name: "C++", icon: "cpp.png" },
  { name: "Haskell", icon: "Haskell.png" },

  // Frontend
  { name: "HTML5", icon: "HTML5.png" },
  { name: "CSS3", icon: "CSS3.png" },
  { name: "React", icon: "React.png" },

  // Backend & Frameworks
  { name: "Django", icon: "Django.png" },
  { name: "Node.js", icon: "Node.js.png" },
  { name: "SpringBoot", icon: "Spring.png" },

  // Databases & Caching
  { name: "PostgreSQL", icon: "PostgresSQL.png" },
  { name: "MySQL", icon: "MySQL.png" },
  { name: "Redis", icon: "Redis.png" },

  // Cloud & DevOps
  { name: "AWS", icon: "AWS.png" },
  { name: "Linux", icon: "Linux.png" },

  // Tools
  { name: "Git", icon: "Git.png" },
  { name: "Jira", icon: "Jira.png" },
  { name: "VSCode", icon: "VSCode.png" },

  // { name: "Cassandra", icon: "Apache-Cassandra.png" },
];

export default function Skills() {
  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title-alt"><span>Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => {
          const url = skillIcons[`../assets/${skill.icon}`];
          return (
            <div className="skill-card" key={idx}>
              <img src={url} alt={skill.name} className="skill-icon" />
              <p className="skill-name">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
