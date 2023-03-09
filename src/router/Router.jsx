import { Routes, Route } from "react-router-dom";

import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import ProjectSkills from "../pages/ProjectSkills";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects-skills" element={<ProjectSkills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;
