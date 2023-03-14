import React from "react";
import SkillsCard from "../UI/SkillsCard";

const Skills = ({ skills }) => {
  return (
    <div className="w-full px-10 py-[5rem] bg-c-secondary">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-[4rem] section-title">
        <h3 className="lowercase mb-[-.5rem] opacity-[.5]">What I can do?</h3>
        <h1 className="uppercase mb-3 font-bold leading-[3.5rem] relative">
          Skills
        </h1>
      </div>
      {/* Skills Cards */}
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto">
        {skills.map((skill) => (
          <SkillsCard data={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
