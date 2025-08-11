import React, { useState } from "react";
import { Send, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./css_style/ChatPopup.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
  
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
  
    // basic validation
    if (!name || !email || !message) {
      setIsSending(false);   // ← reset before returning
      return;
    }
  
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name, email, message, title: "Portfolio Inquiry", time: new Date().toLocaleString() },
        { publicKey: PUBLIC_KEY }
      );
      alert("Thanks! Your message was sent.");
      setFormData({ name: "", email: "", message: "" });
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      alert("Couldn’t send. Please try again or use the fallback email link.");
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <div className="chat-wrapper" aria-live="polite">
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact form" : "Open contact form"}
      >
        <Mail size={22} />
      </button>

      {isOpen && (
        <form className="chat-popup" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            aria-label="Your name"
          />
          <textarea
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={4}
            aria-label="Your message"
          />
          <input
  type="email"
  placeholder="Your email"
  value={formData.email}
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
  required
/>
          <button type="submit" disabled={isSending} aria-busy={isSending}>
            <Send size={18} />
            <span style={{ marginLeft: 6 }}>{isSending ? "Sending..." : "Send"}</span>
          </button>

          {/* Fallback mail link */}
          <a
            className="fallback-mailto"
            href={`mailto:swetha.jagadeesan@nyu.edu?subject=Portfolio%20message&body=${encodeURIComponent(formData.message)}`}
          >
            or email me instead
          </a>
        </form>
      )}
    </div>
  );
}
