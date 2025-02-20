import React from "react";
import "./Skills.css";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaPython } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Skills & Technologies</h1>
      <div className="skills-container">
        <div className="skills-section">
          <h2>Front-End Development</h2>
          <ul className="skills-list">
            <li><ImHtmlFive className="html-icon" /> HTML5</li>
            <li><FaCss3Alt className="css-icon" /> CSS3</li>
            <li><FaJs className="js-icon" /> JavaScript (ES6+)</li>
            <li><FaReact className="react-icon" /> React</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2>Styling & UI Frameworks</h2>
          <ul className="skills-list">
            <li><FaCss3Alt className="css-icon" /> Tailwind CSS</li>
            <li><FaReact className="react-icon" /> Bootstrap</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2>Version Control & Tools</h2>
          <ul className="skills-list">
            <li><FaGit className="git-icon" /> Git</li>
            <li><FaGithub className="github-icon" /> GitHub</li>
            <li><VscVscode className="vscode-icon" /> VS Code</li>
          </ul>
        </div>

        <div className="skills-section">
          <h2>Learning & Growth</h2>
          <ul className="skills-list">
            <li><FaPython className="python-icon" /> Python</li>
            <li>Prompt Engineering</li>
          </ul>
        </div>
      </div>
    </div>
  );
}