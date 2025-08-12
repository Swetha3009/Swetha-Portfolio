import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Copy } from "lucide-react";
import "./css_style/ContactFooter.css";

export default function ContactFooter() {
  const email = "swetha.jagadeesan@nyu.edu";
  const [copied, setCopied] = useState(false);

  // Add a little entrance animation trigger if you use IntersectionObserver elsewhere
  useEffect(() => {
    const el = document.querySelector(".contact-card");
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("reveal-in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      const area = document.createElement("textarea");
      area.value = email;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
      setCopied(true);
    } finally {
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section id="contact" className="contact-footer" aria-labelledby="contact-title">
      <div className="contact-wrap">
        <div className="contact-card" data-reveal="up">
          <p className="eyebrow">Let’s talk</p>
          <h2 className="contact-title" id="contact-title">
            Wanna connect with me regarding a role or for a coffee chat?
            <span> I’d love it.</span>
          </h2>
          <p className="contact-sub">
            Drop me a message — I usually reply within a day 🙂
          </p>

          <div className="contact-actions">
            <a
              className="btn primary"
              href={`mailto:${email}?subject=Hello%20Swetha&body=Hi%20Swetha,`}
            >
              <Mail size={18} /> Email me
            </a>

            <a
              className="btn outline"
              href={`${import.meta.env.BASE_URL}Swetha_Jagadeesan_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <button
              className="btn ghost"
              onClick={copyEmail}
              aria-live="polite"
              type="button"
            >
              <Copy size={18} />
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>

          <nav className="socials" aria-label="Social links">
            <a
              href="https://github.com/Swetha3009"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/swetha-jagadeesan/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </nav>
        </div>
      </div>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email copied to clipboard." : ""}
        </span>

      <div className="footer-bar" role="contentinfo">
        <div className="bar-inner">
          <span>© {new Date().getFullYear()} Swetha Jagadeesan</span>
          <span className="dot">•</span>
          <span>Built with React</span>
        </div>
      </div>
    </section>
  );
}
