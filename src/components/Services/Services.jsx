import ServicesCard from "../../components/UI/ServicesCard";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <motion.div className=" w-full py-[5rem]" id="services">
      <div className="text-center max-w-2xl mx-auto mb-10 section-title">
        <h3 className="lowercase mb-[-.5rem] opacity-[.5]">
          What I can offer?
        </h3>
        <h1 className="uppercase mb-3 font-bold leading-[3.5rem] relative">
          Services
        </h1>
      </div>
      <ServicesCard />
      <div className="text-center">
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#3A4750",
            marginTop: "3rem",
            color: "white",
            border: "1px solid #00ADB5",
            ":hover": {
              backgroundColor: "#00ADB5",
              border: "1px solid #303841",
            },
          }}
        >
          <Link to={"/projects-skills"} className="flex items-center">
            Checkout my work!
            <ArrowForwardIosIcon
              sx={{
                fontSize: "1.2rem",
                marginLeft: ".5rem",
              }}
            />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default Services;
