import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../assets/data-projects-skills";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ProjectSkillsDetails = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id == id);
  const navigateBack = useNavigate();
  return (
    <div className="h-screen flex items-center justify-around">
      <div className="flex flex-col mt-[5rem] container mx-auto lg:mt-0">
        {/* Back button */}
        <div className="mb-5">
          <button
            onClick={() => navigateBack(-1)}
            className="flex items-center text-white"
          >
            <ArrowBackIosNewIcon
              sx={{
                color: "#00ADB5",
              }}
            />
            <p className="text-sm">Back</p>
          </button>
        </div>

        {/* Project DETAILS */}
        <div className="project-details-container grid grid-cols-1 place-items-center lg:grid-cols-4">
          {/* Left - Project Details */}
          <div className="project-detail order-2 flex items-center lg:ml-12  lg:order-1 lg:col-span-2">
            <div className="content text-center lg:text-left max-w-[35rem] lg:max-w-none text-white">
              <h1 className="flex items-center text-5xl mb-4 lg:text-6xl lg:text-left">
                {project.projName}

                <div className="img-wrapper max-w-[8rem] mb-8 ml-3">
                  <img src={project.logo} alt={project.projName} />
                </div>
              </h1>

              <p className="text-sm font-f-secondary leading-[1.5rem] text-justify px-5 lg:pr-5 lg:pl-0 lg:text-[.9rem]">
                {project.desc}
              </p>

              <a href={project.site} target="_blank">
                <p className="mt-5 text-sm">
                  <span className="mr-1 font-bold text-lg">Site:</span>
                  {project.site}
                </p>
              </a>
              <a href={project.github} target="_blank">
                <p className="text-sm">
                  <span className="mr-1 font-bold text-lg ">Github:</span>
                  {project.github}
                </p>
              </a>
            </div>
          </div>
          {/* Right - Poster */}
          <div className="col-span-2">
            <LazyLoadImage
              src={project.img}
              effect="blur"
              width="100%"
              className="rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkillsDetails;
