import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

export default function Home({ scrollToSection }) {
 
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
          <h2 className="hero-subtitle">Developer <br></br>&<br></br> Automation enthusiast</h2>
          <p className="hero-text">
           "From web apps to automation systems — I bring technical ideas to life."
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
