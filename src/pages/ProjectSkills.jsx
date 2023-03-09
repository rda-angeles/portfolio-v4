import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

import "../stylesheets/project-skills/project-skills.scss";

import { motion } from "framer-motion";
import { skills, projects } from "../assets/data-projects-skills";

const ProjectSkills = () => {
  return (
    <motion.div
      className="flex items-center flex-col text-3xl text-white pt-[5rem]"
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      exit={{
        y: "100%",
        transition: { duration: 0.6, ease: "easeOut" },
      }}
    >
      
      <Skills skills={skills} />
      <Projects projects={projects} />
    </motion.div>
  );
};

export default ProjectSkills;
