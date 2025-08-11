import React, { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import "./css_style/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // inside Navbar component
React.useEffect(() => {
  const ids = ["about","experience","projects","skills","contact"];
  const links = new Map(ids.map(id => [id, document.querySelector(`.nav-links a[href="#${id}"]`)]));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      const link = links.get(e.target.id);
      if (!link) return;
      if (e.isIntersecting) link.classList.add("active");
      else link.classList.remove("active");
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 });

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });
  return () => obs.disconnect();
}, []);


  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo home-button" aria-label="Home">
          <Home size={24} strokeWidth={2.5} />
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
