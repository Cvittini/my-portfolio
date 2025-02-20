import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <section className="home">
        <h1>Web App Developer</h1>
        <h2>Turning Ideas into Interactive Experiences</h2>
        <p>
          You know that feeling when a website just clicks—smooth, fast, and
          effortlessly intuitive? That's what I build. I craft digital
          experiences that aren't just functional, but fluid, responsive, and
          engaging. Every pixel has a purpose, every animation tells a story,
          and every interaction feels seamless.
        </p>
        <a href="/projects" className="cta-button">View My Work</a>
        <a href="/contact" className="cta-button">Contact Me</a>
      </section>

      <section className="approach">
        <h1>My Approach</h1>
        <ul>
          <li><strong>Design with Purpose</strong> - UI that's clean, intuitive, and just makes sense.</li>
          <li><strong>Code with Precision</strong> - Scalable, efficient, and optimized for performance.</li>
          <li><strong>User First</strong> - Every project is crafted with the end-user in mind.</li>
        </ul>
      </section>
    </div>
  );
}
