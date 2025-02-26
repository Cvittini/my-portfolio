import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm() || formData.honeypot) return; // Honeypot check
    setIsSending(true);
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
      setIsSending(false);
      setErrors({});
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            aria-required="true"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <div className="form-group honeypot" style={{ display: "none" }}>
          <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} />
        </div>
        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p
            className={`status-message ${status === "success" ? "success" : status === "sending" ? "sending" : ""}`}
            role="alert"
            aria-live="polite"
          >
            {status === "sending" ? "Sending..." : "Message sent successfully!"}
          </p>
        )}
      </form>
    </div>
  );
}