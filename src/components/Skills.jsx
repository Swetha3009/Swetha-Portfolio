import React, { useCallback } from "react";
import "./css_style/Skills.css";

/* Load all images in /assets as URLs */
const skillIcons = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const categories = [
  {
    title: "Cloud Infrastructure",
    sub: "Cloud & DevOps foundations",
    emoji: "☁️",
    items: [
      { label: "AWS", icon: "AWS.png" },
      { label: "Docker", icon: "Docker.png" },
      { label: "Kubernetes", icon: "Kubernetes.png" },
      { label: "Jenkins", icon: "Jenkins.png" },
      { label: "GitHub Actions", icon: "GitHubActions.png" },
      { label: "Linux", icon: "Linux.png" },
    ],
  },
  {
    title: "Frontend Development",
    sub: "Modern web apps",
    emoji: "🎨",
    items: [
      { label: "React.js", icon: "React.png" },
      { label: "HTML5", icon: "HTML5.png" },
      { label: "CSS3", icon: "CSS3.png" },
      { label: "JavaScript", icon: "JavaScript.png" },
      { label: "TypeScript", icon: "TypeScript.svg" },
      { label: "Vite", icon: "Vite.png" },
    ],
  },
  {
    title: "Backend Development",
    sub: "Server-side & APIs",
    emoji: "🧠",
    items: [
      { label: "Python", icon: "Python.png" },
      { label: "Java", icon: "Java.png" },
      { label: "C++", icon: "cpp.png" },
      { label: "Django", icon: "Django.png" },
      { label: "Node.js", icon: "Node.js.png" },
      { label: "Spring Boot", icon: "Spring.png" },
    ],
  },
  {
    title: "Database & Storage",
    sub: "Data management",
    emoji: "🗄️",
    items: [
      { label: "PostgreSQL", icon: "PostgresSQL.png" },
      { label: "MySQL", icon: "MySQL.png" },
      { label: "Redis", icon: "Redis.png" },
      { label: "MongoDB", icon: "MongoDB.png" },
      { label: "Cassandra", icon: "Apache-Cassandra.png" },
    ],
  },
  {
    title: "Data & ML Libraries",
    sub: "Analysis, modeling & visualization",
    emoji: "📊",
    items: [
      { label: "NumPy", icon: "NumPy.svg" },
      { label: "Pandas", icon: "Pandas.png" },
      { label: "scikit-learn", icon: "scikit-learn.png" },
      { label: "Matplotlib", icon: "Matplotlib.png" },
      { label: "PyTorch", icon: "PyTorch.png" },
    ],
  },
  {
    title: "Dev Tools",
    sub: "Workflow & collaboration",
    emoji: "🛠️",
    items: [
      { label: "Git", icon: "Git.png" },
      { label: "Jira", icon: "Jira.png" },
      { label: "VSCode", icon: "VSCode.png" },
      { label: "Postman", icon: "Postman.png" },
      { label: "Confluence", icon: "Confluence.png" },
    ],
  },
];

export default function Skills() {
  // Subtle 3D tilt for each card (desktop)
  const handleCardMove = useCallback((e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tiltX", `${(-py * 5).toFixed(2)}deg`);
    el.style.setProperty("--tiltY", `${(px * 6).toFixed(2)}deg`);
  }, []);
  const resetCardMove = useCallback((e) => {
    const el = e.currentTarget;
    el.style.setProperty("--tiltX", `0deg`);
    el.style.setProperty("--tiltY", `0deg`);
  }, []);

  // Pointer-follow highlight for each skill item
  const handleItemMove = useCallback((e) => {
    const t = e.currentTarget;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title-alt"><span>Technical Skills</span></h2>

      <div className="skillcats-wrap">
        <div className="skillcats-grid" data-animate>
          {categories.map((cat) => (
            <article
              className="skillcat-card"
              key={cat.title}
              onMouseMove={handleCardMove}
              onMouseLeave={resetCardMove}
            >
              <header className="skillcat-head">
                <div className="skillcat-head-icon" aria-hidden>{cat.emoji}</div>
                <div>
                  <h3 className="skillcat-title">{cat.title}</h3>
                  <p className="skillcat-sub">{cat.sub}</p>
                </div>
              </header>

              <ul className="skillcat-list" aria-label={cat.title}>
                {cat.items.map((it) => {
                  const url = it.icon ? skillIcons[`../assets/${it.icon}`] : undefined;
                  return (
                    <li
                      className="skillcat-item"
                      key={it.label}
                      onMouseMove={handleItemMove}
                    >
                      {url ? (
                        <img src={url} alt="" className="skillcat-item-icon" />
                      ) : (
                        <span className="skillcat-dot" aria-hidden />
                      )}
                      <span>{it.label}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
