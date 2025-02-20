import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
       
        <div className="social-icons">
          <a
            className="button-icon"
            href="https://www.linkedin.com/in/cristian-vittini-9523a4154/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            className="button-icon"
            href="https://github.com/Cvittini"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
