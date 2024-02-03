import React from "react";
import Myself from "../../assets/myself.png";

import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import CV from "../../assets/RDAAngelesCV2024.pdf";
import "../../stylesheets/hero/about.scss";
const About = () => {
  return (
    <div
      className=" about-section px-4 py-[5rem] lg:px-0 bg-c-secondary w-full"
      id="about"
    >
      <div>
        <div className="content grid place-items-center  container mx-auto lg:grid-cols-2">
          {/* Image */}
          <div className="img-wrapper max-w-md">
            <img src={Myself} alt="" className="shadow-xl rounded-full" />
          </div>

          {/* Profile */}
          <div className="text-justify mt-8 lg:mt-0">
            <h1 className="font-f-secondary font-bold mb-4 text-center text-5xl lg:text-left">
              About me.
            </h1>
            <p className="text-sm leading-[1.5rem]">
              I am a graduate of Computer Science with 4 years of experience
              working as a Front-End Developer in the industry where I have
              gained and enhanced my skills in developing user interfaces,
              testing, debugging, and optimizing web functionalities.
            </p>
            <p className="mt-3 text-sm leading-[1.5rem] ">
              I am passionate in programming, always aiming for career
              advancement and professional development, hard-working in nature,
              great team player, I have an enthuasiastic demeanour and
              commitment to the things I am assigned to do. I am always willing
              and keen to learn more so I can continue to improve my skills, not
              only technical but also interpersonal.
            </p>

            <div className="text-center lg:text-left">
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#00ADB5",
                  marginTop: "1rem",
                  color: "white",
                  border: "1px solid #3A4750",
                  ":hover": {
                    backgroundColor: "#303841",
                    border: "1px solid #303841",
                  },
                }}
              >
                <a href={CV} download="Angeles_CV">
                  Download CV
                  <DownloadIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
