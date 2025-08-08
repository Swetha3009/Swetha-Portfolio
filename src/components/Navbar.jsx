import React from "react";
import { Home } from "lucide-react"; // home icon from lucide-react
import "./css_style/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* HOME ICON BUTTON */}
        <a href="#hero" className="nav-logo home-button">
          <Home size={24} strokeWidth={2.5} />
        </a>

        <div className="nav-links">
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
