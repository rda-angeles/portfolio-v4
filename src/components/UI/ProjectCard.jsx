import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectCard = ({ item }) => {
  return (
    <div key={item.id} className="prod-card">
      {item.category === "Video Edit" ? (
        <iframe
          width="560"
          height="315"
          src={item.site}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
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
      )}
    </div>
  );
};

export default ProjectCard;
