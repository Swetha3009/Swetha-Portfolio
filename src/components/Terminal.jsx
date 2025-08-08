import React, { useState } from "react";
import "./css_style/Terminal.css";
import projects from "../data/projects"; // import your projects array

export default function Terminal() {
  const [history, setHistory] = useState([
    "Welcome to Swetha's Portfolio Terminal! Type 'help' to see commands."
  ]);
  const [input, setInput] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      return `Scrolling to ${id} section...`;
    }
    return `Section '${id}' not found.`;
  };

  const changeTheme = (theme) => {
    document.documentElement.style.setProperty("--accent-color",
      theme === "purple" ? "#9f7aea" : theme === "teal" ? "#4fd1c5" : "#ffffff"
    );
    return `Theme changed to ${theme}.`;
  };

  const commands = {
    help: () =>
      "Commands: help, about, skills, projects, contact, resume, goto <section>, theme <purple/ teal>, social <linkedin/ github>, clear",
    about: () =>
      "I'm Swetha Jagadeesan, Software Engineer | Cloud & Backend Developer.",
    skills: () => scrollToSection("skills"),
    projects: () =>
      projects
        .map((p) => `${p.title} → ${p.github}`)
        .join("\n"),
    contact: () =>
      "Email: sj4378@nyu.edu | LinkedIn: linkedin.com/in/swetha-jagadeesan",
    resume: () => {
      window.open("/Swetha_Jagadeesan_Resume.pdf", "_blank");
      return "Opening resume...";
    },
    clear: () => {
      setHistory([]);
      return "";
    },
    goto: (args) => scrollToSection(args[0]),
    theme: (args) => changeTheme(args[0]),
    social: (args) => {
      const links = {
        github: "https://github.com/Swetha3009",
        linkedin: "https://www.linkedin.com/in/swetha-jagadeesan/"
      };
      if (links[args[0]]) {
        window.open(links[args[0]], "_blank");
        return `Opening ${args[0]}...`;
      }
      return "Social link not found.";
    }
  };

  const handleCommand = (cmd) => {
    const args = cmd.trim().split(" ");
    const command = args[0].toLowerCase();
    const output = commands[command]
      ? commands[command](args.slice(1))
      : `Command not found: ${command}`;
    return output;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const output = handleCommand(input);
    if (output !== "") {
      setHistory([...history, `$ ${input}`, output]);
    }
    setInput("");
  };

  return (
    <div className="terminal">
      {history.map((line, i) => (
        <div key={i} className="terminal-line">{line}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <span className="prompt">$ </span>
        <input
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}
