import React from "react";
import SkillsCard from "../UI/SkillsCard";

const Skills = ({ skills }) => {
  return (
    <div className="w-full px-10 py-[5rem] bg-c-secondary">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto ">
        <h1 className="uppercase mb-3 font-bold">What I can do?</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque beatae
          autem quos nesciunt deleniti esse reiciendis repellat similique
          aliquid distinctio?
        </p>
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
