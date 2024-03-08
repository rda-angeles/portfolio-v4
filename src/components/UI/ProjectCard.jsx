import { Link } from "react-router-dom";
import { motion, transform } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

import "react-lazy-load-image-component/src/effects/blur.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const ProjectCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    bgcolor: "#303841",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div key={item.id} className="prod-card">
      {/* 
         {item.category === "Video Edit" ? (
        <>
          <Button onClick={handleOpen}>
            <div className="img-wrapper relative max-w-2xl">
              <div className="overlay"></div>
              <PlayCircleOutlineIcon
                sx={{
                  zIndex: "2",
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  fontSize: "4rem",
                }}
              />
              <LazyLoadImage
                src={item.img}
                effect="blur"
                className="shadow-black shadow-sm"
              />
            </div>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <iframe
                className="mx-auto"
                width="560"
                height="315"
                src={item.site}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
          </Modal>
        </>
      ) : (
        <Link to={`/project-details/${item.id}`}>
          <motion.div className=" cursor-pointer" whileHover={{ y: -10 }}>
         
            <div className="img-wrapper relative max-w-2xl">
              <LazyLoadImage
                src={item.img}
                effect="blur"
                className="shadow-black shadow-sm"
              />
            </div>
          </motion.div>
        </Link>
      )}
      
      
      */}

      <Link to={`/project-details/${item.id}`}>
        <motion.div className=" cursor-pointer" whileHover={{ y: -10 }}>
          {/* Project Image */}
          <div className="img-wrapper relative max-w-2xl">
            <LazyLoadImage
              src={item.img}
              effect="blur"
              className="shadow-black shadow-sm"
            />
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default ProjectCard;
