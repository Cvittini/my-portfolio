import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar scrollToSection={scrollToSection} />

      <main>
        <section ref={homeRef} id="home" className="section">
          <Home />
        </section>

        <section ref={aboutRef} id="about" className="section">
          <About />
        </section>

        <section ref={skillsRef} id="skills" className="section">
          <Skills />
        </section>

        <section ref={projectsRef} id="projects" className="section">
          <Projects />
        </section>

        <section ref={contactRef} id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
