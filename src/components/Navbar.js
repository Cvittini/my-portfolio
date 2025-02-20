import React from "react";
import "./navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Navbar({ scrollToSection }) {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <button onClick={() => scrollToSection("home")} className="nav-link">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="nav-link">
          About
        </button>
        <button onClick={() => scrollToSection("skills")} className="nav-link">
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="nav-link"
        >
          Projects
        </button>
        <button onClick={() => scrollToSection("contact")} className="nav-link">
          Contact
        </button>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/Cvittini"
          target="_blank"
          rel="noopener noreferrer"
          className="button-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-vittini-9523a4154/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:cvittini@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button-icon"
        >
          <SiGmail />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
