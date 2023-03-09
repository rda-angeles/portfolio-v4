import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Contact from "../pages/Contact";
import Hero from "../pages/Hero";
import ProjectSkills from "../pages/ProjectSkills";

const Router = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence initial={false} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/projects-skills" element={<ProjectSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default Router;
