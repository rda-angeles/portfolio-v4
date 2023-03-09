import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectLists = ({ items }) => {
  return (
    <div
      className={
        items.length === 1
          ? "flex items-center justify-around"
          : "grid md:grid-cols-2 gap-5"
      }
    >
      {items.map((item) => (
        <ProjectCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProjectLists;
