import React, { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import emailjs from "emailjs-com";
import './css_style/ChatPopup.css';

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: formData.name,
      message: formData.message,
    }, "YOUR_USER_ID").then(
      () => alert("Message sent!"),
      () => alert("Failed to send message.")
    );

    setFormData({ name: "", message: "" });
    setIsOpen(false);
  };

  return (
    <div className="chat-wrapper">
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <form className="chat-popup" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <textarea
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button type="submit">
            <Send size={18} />
          </button>
        </form>
      )}
    </div>
  );
}
