import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

export default function Home({ scrollToSection }) { // Accept prop
  return (
    <div className="home-container">
      <section className="hero">
        <img
          src="/Hero Image.JPG"
          alt="Cristian Vittini"
          className="hero-image"
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
        />
        <div className="hero-content">
          <h1 className="hero-title">
            Cristian <span className="highlight">Vittini</span>
          </h1>
          <h2 className="hero-subtitle">Front-End Developer</h2>
          <p className="hero-text">
            I build clean, responsive web applications with HTML, CSS,
            JavaScript, and React. From trucking to tech, I bring a no-excuses
            approach to coding—delivering functional, precise solutions fast.
          </p>
          <div className="cta-container">
            <button
              className="cta-button primary"
              onClick={() => scrollToSection("projects")}
            >
              See My Projects
              <FaArrowRight className="button-icon" />
            </button>
            <button
              className="cta-button secondary"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
              <FaArrowRight className="button-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}