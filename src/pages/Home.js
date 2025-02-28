import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      <section className="hero">
        <img src="/Hero Image.JPG" alt="Cristian Vittini" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Cristian Vittini</span>
          </h1>
          <h2 className="hero-subtitle">
            Front-End Developer | Crafting Seamless Digital Experiences
          </h2>
          <p className="hero-text">
            I'm passionate about building responsive and dynamic web
            applications using technologies like HTML5, CSS3, JavaScript, and
            React. My focus is on delivering high-quality code, intuitive user
            interfaces, and bringing creative ideas to life through technology.
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
