import React from "react";

import { motion } from "framer-motion";

const SkillsCard = ({ data: { skill, img } }) => {
  return (
    //Skill Card Wrapper
    <motion.div
      className="flex items-center w-[80%] mb-5 cursor-pointer skills-card-wrapper"
      whileHover={{ y: -8 }}
    >
      <div className="flex flex-col gap-y-5">
        {/* Skill Logo */}
        <div className="img-wrapper max-w-[4rem] mx-auto">
          <img src={img} alt={skill} />
        </div>

        {/* Skill Content */}
        <div className="text-center">
          <h5 className="font-f-primary text-[1.5rem] font-bold mb-3">
            <span className="vertical-line"></span>
            {skill}
          </h5>
          <p className="font-f-secondary ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, corrupti.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
