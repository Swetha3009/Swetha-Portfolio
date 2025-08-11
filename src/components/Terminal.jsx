import React, { useEffect, useMemo, useRef, useState } from "react";
import "./css_style/Terminal.css";
import projects from "../data/projects";

const SECTIONS = ["about", "experience", "projects", "skills", "contact"];
const THEMES = { purple: "#9f7aea", teal: "#4fd1c5", rose: "#f43f5e", amber: "#f59e0b" };

const BANNER = `
███████╗██╗    ██╗███████╗████████╗██╗  ██╗ █████╗
██╔════╝██║    ██║██╔════╝╚══██╔══╝██║  ██║██╔══██╗
███████╗██║ █╗ ██║█████╗     ██║   ███████║███████║
╚════██║██║███╗██║██╔══╝     ██║   ██╔══██║██╔══██║
███████║╚███╔███╔╝███████╗   ██║   ██║  ██║██║  ██║
╚══════╝ ╚══╝╚══╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
Welcome to Swetha's Portfolio Terminal!
`.trim();

const INITIAL_HISTORY = [BANNER, "Type 'help' to see commands."];

export default function Terminal({ embedded = false }) {
  // restore theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("term_theme");
    if (savedTheme) document.documentElement.style.setProperty("--accent-color", savedTheme);
  }, []);

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("term_history");
    return saved ? JSON.parse(saved) : INITIAL_HISTORY;
  });
  const [input, setInput] = useState("");
  const [histIndex, setHistIndex] = useState(null);

  // NEW: simple “current working dir” + current project
  const [cwd, setCwd] = useState("/");
  const [currentProject, setCurrentProject] = useState(null);

  const boxRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("term_history", JSON.stringify(history));
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [history]);

  const projectNames = useMemo(() => projects.map((p) => p.title.toLowerCase()), []);

  const setTheme = (name) => {
    if (name === "random") {
      const keys = Object.keys(THEMES);
      name = keys[(Math.random() * keys.length) | 0];
    }
    const val = THEMES[name];
    if (!val) return `Theme '${name}' not found.`;
    document.documentElement.style.setProperty("--accent-color", val);
    localStorage.setItem("term_theme", val);
    return `Theme set to ${name}.`;
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return `Section '${id}' not found.`;
    section.scrollIntoView({ behavior: "smooth" });
    return `Scrolling to ${id}...`;
  };

  const listProjects = () =>
    projects
      .map((p, i) => `${String(i + 1).padStart(2, "0")}. ${p.title} — ${p.github || p.link || "no link"}`)
      .join("\n");

  const projectDetails = (idx) => {
    const p = projects[idx];
    if (!p) return "Project not found.";
    const tech = Array.isArray(p.tech) ? p.tech.join(", ") : (p.tech || "");
    return [
      `# ${p.title}`,
      p.description ? p.description : "",
      tech ? `Tech: ${tech}` : "",
      p.github ? `GitHub: ${p.github}` : p.link ? `Link: ${p.link}` : "No link",
      "",
      "Try: open   | back   | ls projects",
    ].filter(Boolean).join("\n");
  };

  const openProject = (arg) => {
    // if no arg, try current project
    if (!arg && currentProject != null) {
      const p = projects[currentProject];
      const href = p.github || p.link;
      if (!href) return "This project has no link.";
      window.open(href, "_blank");
      return `Opening ${p.title}...`;
    }

    if (!arg) return "Usage: open <number|name>";

    let p = null;
    if (/^\d+$/.test(arg)) {
      p = projects[Number(arg) - 1];
    } else {
      const idx = projectNames.findIndex((n) => n.includes(arg.toLowerCase()));
      if (idx >= 0) p = projects[idx];
    }
    if (!p) return "Project not found.";
    const href = p.github || p.link;
    if (!href) return "This project has no link.";
    window.open(href, "_blank");
    return `Opening ${p.title}...`;
  };

  const findProjects = (term) => {
    if (!term) return "Usage: find <keyword>";
    const t = term.toLowerCase();
    const matches = projects.filter(
      (p) =>
        p.title.toLowerCase().includes(t) ||
        (p.description && p.description.toLowerCase().includes(t)) ||
        (Array.isArray(p.tech) && p.tech.join(" ").toLowerCase().includes(t))
    );
    if (!matches.length) return "No matches.";
    return matches.map((p) => `• ${p.title} — ${p.github || p.link || "no link"}`).join("\n");
  };

  // ---- HELP / COMMANDS ----
  const HELP = {
    help: "help — list commands",
    man: "man <cmd> — command details",
    about: "about — brief intro",
    ls: "ls projects — list projects",
    cd: "cd <number> — enter a project; cd .. — go back",
    open: "open [n|name] — open project link (defaults to current project)",
    info: "info — details about the current project",
    find: "find <term> — search projects",
    linkedin: "linkedin — open LinkedIn profile",
    github: "github — open GitHub profile",
    resume: "resume — open resume PDF",
    skills: "skills — scroll to skills",
    goto: "goto <section> — about|experience|projects|skills|contact",
    theme: "theme <purple|teal|rose|amber|random>",
    contact: "contact — email & LinkedIn",
    clear: "clear — clear output (keeps banner)",
    banner: "banner — print ASCII banner",
    date: "date — current time",
    whoami: "whoami — a fun easter egg",
  };
  
  const man = (cmd) => HELP[cmd] || `No manual entry for '${cmd}'.`;

  const commands = {
    help: () => Object.values(HELP).join("\n"),
    man: ([c]) => man(c),
    about: () => "I'm Swetha Jagadeesan — Software Engineer (Cloud & Backend). I love to code, eat good food, and travel!",

    // NEW: ls subcommand
    ls: ([what]) => {
      if (!what || what === "projects") return listProjects();
      return `Unknown target for ls: ${what}`;
    },

    // NEW: cd to project number, cd .. to back
    cd: ([target]) => {
      if (!target) return "Usage: cd <number>|..";
      if (target === "..") {
        setCurrentProject(null);
        setCwd("/");
        return "Back to /";
      }
      if (/^\d+$/.test(target)) {
        const idx = Number(target) - 1;
        if (!projects[idx]) return "Project not found.";
        setCurrentProject(idx);
        setCwd(`/projects/${target}`);
        return projectDetails(idx);
      }
      return "Usage: cd <number>|..";
    },

    // convenience
    back: () => commands.cd([".."]),
    info: () => (currentProject != null ? projectDetails(currentProject) : "Not inside a project."),

    projects: () => listProjects(), // keep old alias if you want
    open: ([arg]) => openProject(arg),
    find: ([term]) => findProjects(term),
    skills: () => scrollToSection("skills"),
    contact: () => "Email: sj4378@nyu.edu | LinkedIn: linkedin.com/in/swetha-jagadeesan",

    // use Vite BASE_URL so GH Pages path works
    resume: () => { window.open(`${import.meta.env.BASE_URL}Swetha_Jagadeesan_Resume.pdf`, "_blank"); return "Opening resume..."; },

    clear: () => { setHistory(INITIAL_HISTORY); return ""; },
    goto: ([id]) => scrollToSection(id),
    theme: ([name]) => setTheme(name),
    linkedin: () => {
      window.open("https://www.linkedin.com/in/swetha-jagadeesan/", "_blank");
      return "Opening LinkedIn…";
    },
    github: () => {
      window.open("https://github.com/Swetha3009", "_blank");
      return "Opening GitHub…";
    },
    banner: () => BANNER,
    date: () => new Date().toLocaleString(),
    whoami: () => "swetha@portfolio:~$ Developer -- likes travel, food and dance",
  };

  const run = (raw) => {
    const parts = raw.trim().split(/\s+/);
    const cmd = (parts[0] || "").toLowerCase();
    const args = parts.slice(1);
    if (!cmd) return "";
    const fn = commands[cmd];
    if (!fn) return `Command not found: ${cmd}`;
    return fn(args);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const output = run(text);
    if (output !== "") setHistory((h) => [...h, `${cwd}$ ${text}`, output]);
    setInput("");
    setHistIndex(null);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const cmds = history.filter((l) => l.includes("$ "));
      if (!cmds.length) return;
      const idx = histIndex === null ? cmds.length - 1 : Math.max(histIndex - 1, 0);
      setHistIndex(idx);
      setInput(cmds[idx].split("$ ").pop() || "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const cmds = history.filter((l) => l.includes("$ "));
      if (!cmds.length || histIndex === null) return;
      const idx = Math.min(histIndex + 1, cmds.length - 1);
      setHistIndex(idx);
      setInput(cmds[idx].split("$ ").pop() || "");
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const [first, ...rest] = input.trim().split(/\s+/);
      if (!first) return;

      const numbers = Array.from({ length: projects.length }, (_, i) => String(i + 1));
      const pool =
        first.toLowerCase() === "goto" ? SECTIONS
        : first.toLowerCase() === "open" ? [...projectNames, ...numbers]
        : first.toLowerCase() === "theme" ? [...Object.keys(THEMES), "random"]
        : first.toLowerCase() === "ls" ? ["projects"]
        : first.toLowerCase() === "cd" ? ["..", ...numbers]
        : Object.keys(commands);

      const token = rest.length ? rest[rest.length - 1] : first;
      const matches = pool.filter((x) => x.toLowerCase().startsWith(token.toLowerCase()));
      if (!matches.length) return;

      if (rest.length) {
        rest[rest.length - 1] = matches[0];
        setInput(`${first} ${rest.join(" ")}`);
      } else {
        setInput(matches[0]);
      }
    }
    if ((e.ctrlKey && e.key.toLowerCase() === "l") || (e.metaKey && e.key.toLowerCase() === "k")) {
      e.preventDefault();
      setHistory(INITIAL_HISTORY);
    }
  };

  return (
    <div
      className={`terminal ${embedded ? "terminal--embedded" : "terminal-wrapper"}`}
      ref={boxRef}
      onClick={() => inputRef.current?.focus()}
      role="region"
      aria-label="Developer console"
    >
      {history.map((line, i) => (
        <div key={i} className="terminal-line">{line}</div>
      ))}
      <form onSubmit={onSubmit}>
        <span className="prompt">{cwd}$ </span>
        <input
          ref={inputRef}
          className="terminal-input"
          value={input}
          onChange={(e) => { setInput(e.target.value); setHistIndex(null); }}
          onKeyDown={onKeyDown}
          spellCheck="false"
          autoFocus
          aria-label="Terminal input"
        />
      </form>
    </div>
  );
}
