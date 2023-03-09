import "../stylesheets/contact/contact.scss";

import { motion } from "framer-motion";

const Contact = () => {
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
      Contact
    </motion.div>
  );
};

export default Contact;
