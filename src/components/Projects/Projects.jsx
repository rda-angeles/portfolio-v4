import { useEffect, useState } from "react";

import ProjectLists from "../../components/UI/ProjectLists";

const Projects = ({ projects }) => {
  // const tabBtns = [
  //   {
  //     id: 1,
  //     btnName: "React Js",
  //   },
  //   {
  //     id: 2,
  //     btnName: "Vue Js",
  //   },
  //   {
  //     id: 3,
  //     btnName: "Video Edit",
  //   },
  // ];

  // const [tabActive, setTabActive] = useState(tabBtns[0].btnName);
  const [items, setItems] = useState(projects);

  // const activeTab = (btnName) => {
  //   setTabActive(btnName);

  //   if (btnName === "React Js") {
  //     const filterValue = projects.filter(
  //       (item) => item.category === "React Js"
  //     );

  //     setItems(filterValue);
  //   }

  //   if (btnName === "Vue Js") {
  //     const filterValue = projects.filter((item) => item.category === "Vue Js");

  //     setItems(filterValue);
  //   }

  //   if (btnName === "Video Edit") {
  //     const filterValue = projects.filter(
  //       (item) => item.category === "Video Edit"
  //     );

  //     setItems(filterValue);
  //   }
  // };

  // useEffect(() => {
  //   if (tabActive === "React Js") {
  //     const filterValue = projects.filter(
  //       (item) => item.category === "React Js"
  //     );

  //     setItems(filterValue);
  //   }
  // }, []);

  return (
    <div className=" px-5 lg:px-10 py-[5rem] container mx-auto">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-10 section-title">
        <h3 className="lowercase mb-[-.5rem] opacity-[.5]">
          Want to see my Project?
        </h3>
        <h1 className="uppercase mb-3 font-bold leading-[3.5rem] relative">
          My works
        </h1>
      </div>

      <div className="content-wrapper">
        {/* Button Wrapper */}
        {/* <div className="text-center mb-10 grid place-items-center md:grid-cols-3 gap-3 tab-btn-wrapper">
          {tabBtns.map((button) => (
            <button
              className={
                tabActive === button.btnName
                  ? "tab-button tab-active"
                  : "tab-button"
              }
              key={button.id}
              onClick={() => {
                activeTab(button.btnName);
              }}
            >
              <h3 className=""> {button.btnName}</h3>
            </button>
          ))}
        </div> */}

        {/* Projects Wrapper */}
        <div>
          <ProjectLists items={items} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
