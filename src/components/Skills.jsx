import React from "react";
import "./css_style/Skills.css";

const skillIcons = import.meta.glob("../assets/*.png", { eager: true, query: "?url", import: "default" });

const skills = [
  { name: "AWS", icon: "AWS.png" },
  { name: "C++", icon: "cpp.png" },
  { name: "CSS3", icon: "CSS3.png" },
  { name: "Django", icon: "Django.png" },
  { name: "Git", icon: "Git.png" },
  { name: "Haskell", icon: "Haskell.png" },
  { name: "HTML5", icon: "HTML5.png" },
  { name: "Java", icon: "Java.png" },
  { name: "Jira", icon: "Jira.png" },
  { name: "Linux", icon: "Linux.png" },
  { name: "MySQL", icon: "MySQL.png" },
  { name: "Node.js", icon: "Node.js.png" },
  { name: "PostgreSQL", icon: "PostgresSQL.png" },
  { name: "Python", icon: "Python.png" },
  { name: "React", icon: "React.png" },
  { name: "Redis", icon: "Redis.png" },
  { name: "SpringBoot", icon: "Spring.png" },
  { name: "VSCode", icon: "VSCode.png" },
  // { name: "Cassandra", icon: "Apache-Cassandra.png" },
];

export default function Skills() {
  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title-alt"><span>Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => {
          const url = skillIcons[`../assets/${skill.icon}`]; // resolve to built URL
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
