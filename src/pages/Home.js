import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

export default function Home({ scrollToSection }) {
  return (
    <div className="home-container">
      <section className="hero">
        <img
          src="/E9DIZLCh2e7cFfbJ-generated_image.jpg"
          alt="Cristian Vittini"
          className="hero-image"
          onError={(e) => (e.target.src = "/fallback-image.jpg")} // Optional fallback
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Cristian Vittini</span>
          </h1>
          <h2 className="hero-subtitle">
            Front-End Developer | Crafting Seamless Digital Experiences
          </h2>
          <p className="hero-text">
            I'm passionate about building responsive, dynamic web applications
            with HTML5, CSS3, JavaScript, and React, delivering high-quality
            code and intuitive user interfaces.
          </p>
          <div className="cta-container">
            <button
              className="cta-button primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <FaArrowRight className="button-icon" />
            </button>
            <button
              className="cta-button secondary"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
              <FaArrowRight className="button-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}