import ReactJsLogo from "./reactjs.png";
import VueJsLogo from "./vuejs.png";
import NodeJsLogo from "./nodejs.png";
import HTMLCssJsLogo from "./htmlcssjs.png";
import ScssLogo from "./scss.png";
import TailwindLogo from "./tailwind.png";

import PedalDeck from "./pedal-deck.png";
import PedalDeckLogo from "./pedal-deck-logo.png";
import Siroter from "./siroter-le-delicieux.png";
import SiroterLogo from "./sld-cafe-logo-v1.png";
import MovieZone from "./moviezone.png";
import MovieZoneLogo from "./moviezonelogo.png";


import CodeIcon from "@mui/icons-material/Code";
import VideocamIcon from "@mui/icons-material/Videocam";
// Skills
export const skills = [
  {
    id: 1,
    skill: "HTML, Css, JavaScript",
    img: HTMLCssJsLogo,
  },
  {
    id: 2,
    skill: "Scss",
    img: ScssLogo,
  },
  {
    id: 3,
    skill: "Tailwind Css",
    img: TailwindLogo,
  },
  {
    id: 4,
    skill: "React Js",
    img: ReactJsLogo,
  },
  {
    id: 5,
    skill: "Vue Js",
    img: VueJsLogo,
  },
  {
    id: 6,
    skill: "Node Js",
    img: NodeJsLogo,
  },
];

export const projects = [
  {
    id: 1,
    projName: "Pedal Deck",
    site: "https://pedal-deck.web.app/home",
    github: "https://github.com/rda-angeles/pedal-deck",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, sapiente! Maiores eos, veniam saepe culpa quibusdam qui neque odit cumque atque, fugit autem fuga nihil quasi, ut laborum laboriosam ex accusamus facere sint. Itaque labore mollitia inventore minima exercitationem, impedit ut explicabo necessitatibus blanditiis odit corrupti quibusdam quaerat natus hic.",
    img: PedalDeck,
    logo: PedalDeckLogo,
    category: "React Js",
  },
  {
    id: 2,
    projName: "Siroter Le Délicieux Café",
    site: "https://siroter-le-delicieux-cafe.web.app/",
    github: "https://github.com/rda-angeles/sld-cafe",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, sapiente! Maiores eos, veniam saepe culpa quibusdam qui neque odit cumque atque, fugit autem fuga nihil quasi, ut laborum laboriosam ex accusamus facere sint. Itaque labore mollitia inventore minima exercitationem, impedit ut explicabo necessitatibus blanditiis odit corrupti quibusdam quaerat natus hic.",
    img: Siroter,
    logo: SiroterLogo,
    category: "React Js",
  },
  {
    id: 3,
    projName: "Movie Zone",
    site: "https://movie-zone-nu.vercel.app/",
    github: "https://github.com/rda-angeles/sld-cafe",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, sapiente! Maiores eos, veniam saepe culpa quibusdam qui neque odit cumque atque, fugit autem fuga nihil quasi, ut laborum laboriosam ex accusamus facere sint. Itaque labore mollitia inventore minima exercitationem, impedit ut explicabo necessitatibus blanditiis odit corrupti quibusdam quaerat natus hic.",
    img: MovieZone,
    logo: MovieZoneLogo,
    category: "React Js",
  },

  // {
  //   id: 2,
  //   projName: "HMI Portal",
  //   site: "https://pedal-deck.web.app/home",
  //   github: "https://github.com/rda-angeles/pedal-deck",
  //   img: "",
  //   category: "Vue Js",
  // },
  {
    id: 4,
    projName: "Subic Ride 2022",
    site: "https://www.youtube.com/embed/7MMdJl_kZn8",
    category: "Video Edit",
  },
  {
    id: 5,
    projName: "Subic Ride",
    site: "https://www.youtube.com/embed/jgX7VyQq9UQ",
    category: "Video Edit",
  },
];

export const services = [
  {
    id: 1,
    service: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at ipsum rerum quaerat doloremque nulla, sapiente provident velit reiciendis corrupti.",
    icon: <CodeIcon sx={{ fontSize: "4rem" }} />,
  },
  {
    id: 2,
    service: "Video Editing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at ipsum rerum quaerat doloremque nulla, sapiente provident velit reiciendis corrupti.",
    icon: <VideocamIcon sx={{ fontSize: "4rem" }} />,
  },
];
