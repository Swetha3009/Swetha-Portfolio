import React from "react";
import "./css_style/Skills.css";

const skills = [
    { name: "AWS", icon: "src/assets/AWS.png" },
    { name: "C++", icon: "src/assets/cpp.png" },
    { name: "CSS3", icon: "src/assets/CSS3.png" },
    { name: "Django", icon: "src/assets/Django.png" },
    { name: "Git", icon: "src/assets/Git.png" },
    { name: "Haskell", icon: "src/assets/Haskell.png" },
    { name: "HTML5", icon: "src/assets/HTML5.png" },
    { name: "Java", icon: "src/assets/Java.png" },
    { name: "Jira", icon: "src/assets/Jira.png" },
    { name: "Linux", icon: "src/assets/Linux.png" },
    { name: "MySQL", icon: "src/assets/MySQL.png" },
    { name: "Node.js", icon: "src/assets/Node.js.png" },
    { name: "PostgresSQL", icon: "src/assets/PostgresSQL.png" },
    { name: "Python", icon: "src/assets/Python.png" },
    { name: "React", icon: "src/assets/React.png" },
    { name: "Redis", icon: "src/assets/Redis.png" },
    { name: "SpringBoot", icon: "src/assets/Spring.png" },
    { name: "VSCode", icon: "src/assets/VSCode.png" }
  
  // { name: "Cassendra", icon: "src/assets/Apache-Cassandra.png" },
  
];

export default function Skills() {
  return (
    <div className="skills-section" id="skills">
      <h2 className="section-title-alt">
        <span>Skills</span>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
