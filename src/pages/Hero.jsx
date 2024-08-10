import "../stylesheets/hero/hero.scss";
import { motion } from "framer-motion";
import About from "../components/About/About";
import Socials from "../components/UI/Socials";
// import MySelf from "../assets/Me.png";
// import Services from "../components/Services/Services";
// import Button from "@mui/material/Button";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  return (
    <motion.div
      className="flex items-center justify-around flex-col text-3xl bg-c-primary text-white"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <div className="h-screen hero-section relative" id="hero">
        {/* Content Wrapper */}
        <div className="content-wrapper h-full">
          <div className="content  flex items-center flex-col justify-center h-full max-w-xl">
            <div className="text-center">
              <h3 className="opacity-70 uppercase tracking-wider mb-[-1rem]">
                Hello, My name is
              </h3>
              <h1 className="text-5xl my-2 lg:text-7xl text-c-tertiary font-bold">
                Nikko Angeles
              </h1>
              <h4 className="text-lg">I am a Frontend Web Developer.</h4>
              {/* <Button
                variant="text"
                sx={{
                  color: "white",
                  backgroundColor: "#3A4750",
                }}
              >
                Lets Talk{" "}
                <ArrowForwardIosIcon
                  sx={{ fontSize: "1.2rem", marginLeft: ".3rem" }}
                />
              </Button> */}
              <div className="mt-5">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      {/* <Services /> */}
    </motion.div>
  );
};

export default Hero;
