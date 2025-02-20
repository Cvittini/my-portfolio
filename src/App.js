import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

import Projects from "./pages/Projects.js";
import Skills from "./pages/Skills.js";
import Contact from "./pages/Contact.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
