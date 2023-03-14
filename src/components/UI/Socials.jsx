import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const Socials = () => {
  const socials = [
    {
      id: 1,
      icon: <FacebookIcon sx={{ fontSize: "1.7rem" }} />,
      path: "https://www.facebook.com/NikkoAquinoAngeles/",
    },
    {
      id: 2,
      icon: <GitHubIcon sx={{ fontSize: "1.7rem" }} />,
      path: "https://github.com/rda-angeles",
    },
    {
      id: 3,
      icon: <LinkedInIcon sx={{ fontSize: "1.7rem" }} />,
      path: "https://www.linkedin.com/in/rae-dominique-angeles-332122201/",
    },
  ];
  return (
    <div className="grid grid-cols-3 place-items-center max-w-[10rem] mx-auto">
      {socials.map((social) => (
        <motion.div whileHover={{ scale: 1.2 }} key={social.id}>
          <a href={social.path} target="_blank">
            {social.icon}
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
