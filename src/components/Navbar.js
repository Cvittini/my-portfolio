import React, { useState } from "react";
import "./navbar.css";
import { FaGithub, FaLinkedin, FaBars, FaFileDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    scrollToSection(section); // Scroll to section
    if (isMenuOpen) toggleMenu(); // Close menu if open (mobile)
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <button onClick={() => handleNavClick("home")} className="nav-link">
          Home
        </button>
        <button onClick={() => handleNavClick("about")} className="nav-link">
          About
        </button>
        <button onClick={() => handleNavClick("skills")} className="nav-link">
          Skills
        </button>
        <button onClick={() => handleNavClick("projects")} className="nav-link">
          Projects
        </button>
        <button onClick={() => handleNavClick("contact")} className="nav-link">
          Contact
        </button>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/Cvittini"
          target="_blank"
          rel="noopener noreferrer"
          className="button-icon"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-vittini-9523a4154/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-icon"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:cvittini@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="button-icon"
          title="Gmail"
        >
          <SiGmail />
        </a>
        <a
          href="/resume.pdf"
          download="Cristian_Vittini_Resume.pdf"
          className="button-icon resume-icon"
          title="Download Resume"
        >
          <FaFileDownload />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;