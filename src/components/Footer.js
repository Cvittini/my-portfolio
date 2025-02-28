import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a
            href="https://github.com/Cvittini"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-vittini-9523a4154/"
            target="_blank"
            rel="noopener noreferrer"

          title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:cvittini@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Gmail"
          >
            <SiGmail />
          </a>
        </div>
        <p className="rights">
          © {new Date().getFullYear()} Cristian Vittini. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
