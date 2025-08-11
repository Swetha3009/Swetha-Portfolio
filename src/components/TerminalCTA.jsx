// components/TerminalCTA.jsx
import React from "react";
import { TerminalSquare } from "lucide-react";

export default function TerminalCTA({ href = "#terminal" }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-terminal"));
  };

  return (
    <a href={href} className="btn btn-terminal" onClick={handleClick} aria-label="Open interactive terminal">
      <span className="term-icon"><TerminalSquare size={16} /></span>
      <span className="term-text">
        Try the terminal
        <span className="term-sample"><span className="prompt">$</span><span className="caret" /></span>
      </span>
    </a>
  );
}
