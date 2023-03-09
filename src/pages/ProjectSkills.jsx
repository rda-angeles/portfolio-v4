import Skills from "../components/Skills/Skills";

import "../stylesheets/project-skills/project-skills.scss";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-around text-3xl bg-c-primary text-white"
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      exit={{
        y: window.innerWidth,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
    >
      <Skills />
      Projects
    </motion.div>
  );
};

export default Projects;
