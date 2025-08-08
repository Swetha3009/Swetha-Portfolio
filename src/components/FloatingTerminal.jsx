import React, { useState } from "react";
import Terminal from "./Terminal";
import "./css_style/FloatingTerminal.css";

export default function FloatingTerminal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="terminal-overlay">
          <div className="terminal-container">
            <div className="floating-term-header">
              <span>Swetha's Dev Console</span>
              <button
                className="floating-close-btn"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            {/* Embedded mode: no extra wrapper/header inside Terminal */}
            <Terminal embedded />
          </div>
        </div>
      )}

      {!isOpen && (
        <button className="terminal-float-btn" onClick={() => setIsOpen(true)}>
          &gt;_
        </button>
      )}
    </>
  );
}
