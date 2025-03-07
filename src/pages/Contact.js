import React, { useState } from "react";
import emailjs from "emailjs-com";
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
    if (!validateForm() || formData.honeypot) return;
    setIsSending(true);
    setStatus("sending");

    emailjs
      .send(
        "service_4od54cr",
        "template_lbtk24d",
        formData,
        "eJQJsgtSu0xc7L8Kx"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "", honeypot: "" });
          setErrors({});
          setTimeout(() => {
            setStatus("");
            setIsSending(false);
          }, 3000);
        },
        (error) => {
          setStatus("error");
          setIsSending(false);
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">Get in Touch</h1>
      <form
        onSubmit={handleSubmit}
        className="contact-form"
        aria-label="Contact form"
      >
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
            className={errors.name ? "input-error" : ""}
            placeholder="Your name"
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
            className={errors.email ? "input-error" : ""}
            placeholder="Your email"
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
            className={errors.message ? "input-error" : ""}
            placeholder="Your message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <div className="form-group honeypot" style={{ display: "none" }}>
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={isSending} className="submit-button">
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p
            className={`status-message ${
              status === "success"
                ? "success"
                : status === "sending"
                ? "sending"
                : "error"
            }`}
            role="alert"
            aria-live="polite"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message sent!"
              : "Failed to send. Try again."}
          </p>
        )}
      </form>
    </div>
  );
}
