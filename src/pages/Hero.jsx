import "../stylesheets/hero/hero.scss";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="h-screen flex items-center justify-around text-3xl bg-c-primary text-white"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      Hero
    </motion.div>
  );
};

export default Hero;
