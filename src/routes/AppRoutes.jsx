import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
