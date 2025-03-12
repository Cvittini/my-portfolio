import React, { useState } from "react";
import "./Projects.css";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("components");

  const projects = {
    components: [
      {
        id: 1,
        title: "custom Button",
        url: "",
      },
      {
        id: 2,
        title: "form Component",
        url: "",
      },
    ],

    webapps: [
      {
        id: 1,
        title: "Task Manager",
        url: "",
      },
    ],

    webstores: [
      {
        id: 1,
        title: "E-commerce",
        url: "",
      },
    ],
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-box">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "components" ? "active" : ""}`}
            onClick={() => setActiveTab("components")}
          >
            Components
          </button>
          <button
            className={`tab ${activeTab === "webapps" ? "active" : ""}`}
            onClick={() => setActiveTab("webapps")}
          >
            Web Apps
          </button>
          <button
            className={`tab ${activeTab === "webstores" ? "active" : ""}`}
            onClick={() => setActiveTab("webstores")}
          >
            Web Stores
          </button>
        </div>

        <div className="tab-content">
          {projects[activeTab].map((project) => (
            <div key={project.id} className="project-card">
              <div className="preview-container">
                <iframe
                  src={project.url}
                  title={project.title}
                  className="project-preview"
                  sandbox="allow-scripts allow-same-origin"
                  loading="lazy"
                />
                <div className="overlay">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-link"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
