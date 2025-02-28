import React, { useState } from "react";
import "./navbar.css";
import { FaGithub, FaLinkedin, FaBars, FaFileDownload } from "react-icons/fa"; // Added FaFileDownload
import { SiGmail } from "react-icons/si";

function Navbar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <button onClick={() => scrollToSection("home")} className="nav-link">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="nav-link">
          About
        </button>
        <button onClick={() => scrollToSection("skills")} className="nav-link">
          Skills
        </button>
        <button onClick={() => scrollToSection("projects")} className="nav-link">
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
          href="/resume.pdf" // Replace with the actual path to your resume file
          download="Cristian_Vittini_Resume.pdf" // Suggested filename for download
          className="button-icon resume-icon"
          title="Download Resume" // Tooltip for accessibility
        >
          <FaFileDownload />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;