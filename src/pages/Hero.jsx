import "../stylesheets/hero/hero.scss";
import MySelf from "../assets/Me.png";
import { motion } from "framer-motion";
import About from "../components/About/About";
import Services from "../components/Services/Services";

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
          <div className="content  flex items-center flex-col justify-center h-full w-full">
            <div className="text-center">
              <h3 className="opacity-70 uppercase tracking-wider">
                Hello, My name is
              </h3>
              <h1 className="text-5xl my-2 lg:text-7xl">Nikko Angeles</h1>
              <p className="">I am a Frontend Developer.</p>

              <div className="mt-5">{/* <Socials /> */}</div>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Services />
    </motion.div>
  );
};

export default Hero;
