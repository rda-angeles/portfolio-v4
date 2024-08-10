import "../stylesheets/contact/contact.scss";

import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactImg from "../assets/contact.jpg";
// import Socials from "../components/UI/Socials";

const Contact = () => {
  const socials = [
    {
      id: 1,
      name: "Facebook",
      icon: (
        <FacebookIcon
          sx={{ fontSize: "1.5rem", color: "#00ADB5", marginRight: ".2rem" }}
        />
      ),
      path: "https://www.facebook.com/NikkoAquinoAngeles/",
    },
    {
      id: 2,
      name: "Github",
      icon: (
        <GitHubIcon
          sx={{ fontSize: "1.5rem", color: "#00ADB5", marginRight: ".2rem" }}
        />
      ),
      path: "https://github.com/rda-angeles",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: (
        <LinkedInIcon
          sx={{ fontSize: "1.5rem", color: "#00ADB5", marginRight: ".2rem" }}
        />
      ),
      path: "https://www.linkedin.com/in/rae-dominique-angeles-332122201/",
    },
  ];
  return (
    <motion.div
      className="lg:h-screen flex flex-col items-center justify-around text-white py-[7rem] px-5 lg:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="text-center max-w-2xl mx-auto ">
        <h1 className="uppercase mb-12 font-bold leading-[3.5rem]">
          How you can reach me?
        </h1>
        {/* <p className="mb-6 ">Contact</p> */}
      </div>

      <div className="container mx-auto grid place-items-center lg:grid-cols-2 gap-x-6">
        <div className="img-wrapper mb-12 md: max-w-xl lg:max-w-[50rem]">
          <LazyLoadImage
            src={ContactImg}
            alt="Map"
            effect="blur"
            className="rounded-3xl shadow-c-tertiary shadow-lg"
          />
        </div>

        {/* Contact Content */}

        <div className="text-center lg:text-left">
          <p className="mb-5 text-xl">
            <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
              <LocationOnIcon
                sx={{
                  fontSize: "1.5rem",
                  marginRight: ".2rem",
                  color: "#00ADB5",
                }}
              />
              Location:
            </span>
            Cavite, Philippines
          </p>

          <p className="my-10 text-xl">
            <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
              <LocalPhoneIcon
                sx={{
                  fontSize: "1.5rem",
                  marginRight: ".2rem",
                  color: "#00ADB5",
                }}
              />
              Phone:
            </span>
            <a href="tel:+(+63)977 812 0096"> (+63) 977 812 0096</a>
          </p>

          <p className="my-10 text-xl">
            <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
              <EmailIcon
                sx={{
                  fontSize: "1.5rem",
                  marginRight: ".2rem",
                  color: "#00ADB5",
                }}
              />
              Email:
            </span>
            <a href="mailto: raedominique.angeles@gmail.com">
              raedominique.angeles@gmail.com
            </a>
          </p>

          {socials.map((social) => (
            <p className="mb-10 text-xl">
              <span className="font-f-secondary font-bold mr-1 flex-initial items-center">
                {social.icon}
                {social.name}:
              </span>
              <a
                href={social.path}
                target="_blank"
                rel="noreferrer"
                className="font-f-secondary text-[1rem]"
              >
                {social.path}
              </a>
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
