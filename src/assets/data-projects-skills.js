import ReactJsLogo from "./reactjs.png";
import NextJsLogo from "./next-js.svg";
import VueJsLogo from "./vuejs.png";
import NodeJsLogo from "./nodejs.png";
import HTMLCssJsLogo from "./htmlcssjs.png";
import ScssLogo from "./scss.png";
import TailwindLogo from "./tailwind.png";
import ReduxLogo from "./redux.png";
import TypescriptLogo from "./typescript.svg";

import PedalDeck from "./pedal-deck.png";
import PedalDeckLogo from "./pedal-deck-logo.png";
import Siroter from "./siroter-le-delicieux.png";
import SiroterLogo from "./sld-cafe-logo-v1.png";
import MovieZone from "./moviezone.png";
import MovieZoneLogo from "./moviezonelogo.png";
import HMILogo from "./hmi-logo.png";
import HMIWebsite from "./hmi-website.png";
import HMIPortal from "./hmi-portal.png";
import NetflixCloneLogo from "./netflix-clone.png";

import CodeIcon from "@mui/icons-material/Code";
// import SubicRide from "./subic-ride.png";
// import SampalocRide from "./sampaloc-ride.png";
// import LagunaLoopReverseRide from "./laguna_loop.jpg";

// import VideocamIcon from "@mui/icons-material/Videocam";
// Skills
export const skills = [
  {
    id: 1,
    skill: "HTML, Css, JavaScript",
    desc: "I can transform a website design into a working website from scratch with these skills.",
    img: HTMLCssJsLogo,
  },
  {
    id: 2,
    skill: "Typescript",
    desc: "Used typed programming language for specifying types of data to make code refactoring much faster and efficient.",
    img: TypescriptLogo,
  },
  {
    id: 3,
    skill: "Scss",
    desc: "I can style a website using advanced version of CSS which provides more clean and manageable way of styling.",
    img: ScssLogo,
  },
  {
    id: 4,
    skill: "Tailwind Css",
    desc: "Styled a website using a utility class for quicker and maintainable application.",
    img: TailwindLogo,
  },
  {
    id: 5,
    skill: "React Js",
    desc: "Used a javascript library that lets you create interactive user interfaces quickly and easily, will help users use it with ease. ",
    img: ReactJsLogo,
  },
  {
    id: 6,
    skill: "Next Js",
    desc: "Used a javascript framework built on top of React that help creates user interfaces with the use of React components plus additional features and optimizations.",
    img: NextJsLogo,
  },
  {
    id: 7,
    skill: "Redux",
    desc: "Used a state management tool for managing and updating an application state with events called 'actions'. ",
    img: ReduxLogo,
  },
  {
    id: 8,
    skill: "Vue Js",
    desc: "Used a javascript library that lets you create interactive user interfaces quickly and easily, will help users use it with ease.  ",
    img: VueJsLogo,
  },
  {
    id: 9,
    skill: "Node Js",
    desc: "Used a JavaScript runtime environment for server-side rendering or back-end application which can provide back-end API services. ",
    img: NodeJsLogo,
  },
];

export const projects = [
  {
    id: 1,
    projName: "Pedal Deck",
    site: "https://pedal-deck.web.app/home",
    github: "https://github.com/rda-angeles/pedal-deck",
    desc: "A frontend design of an e-commerce website that allows user to browse and buy a bicycle of their choice",
    img: PedalDeck,
    logo: PedalDeckLogo,
    category: "React Js",
  },
  {
    id: 2,
    projName: "Siroter Le Délicieux Café",
    site: "https://siroter-le-delicieux-cafe.vercel.app/",
    github: "https://github.com/rda-angeles/sld-cafe",
    desc: "A frontend design of a coffee shop website that allows users to determine its shop information as well as look into its different services and products that the shop offers.",
    img: Siroter,
    logo: SiroterLogo,
    category: "React Js",
  },
  {
    id: 3,
    projName: "Movie Zone",
    site: "https://movie-zone-nu.vercel.app/",
    github: "https://github.com/rda-angeles/sld-cafe",
    desc: "A very informative website that allows users to browse their favorite movies as well as look its movie information.",
    img: MovieZone,
    logo: MovieZoneLogo,
    category: "React Js",
  },

  {
    id: 4,
    projName: "Netflix Clone",
    site: "https://netflix-clone-chi-neon.vercel.app/",
    github: "https://github.com/rda-angeles/netflix-clone",
    desc: "A netflix clone web application where users can create an account, log in using their created account and saved movies/shows. Created account and saved movie/show is stored in Firebase",
    img: NetflixCloneLogo,
    logo: MovieZoneLogo,
    category: "React Js",
  },

  {
    id: 5,
    projName: "Health Maintenance, Inc. Website",
    site: "https://www.hmi.com.ph/",
    desc: "A company website that helps users know what the company is all about, who are the management team and its services. Also, the website allows users to search their affiliated facilities and physicians.",
    github: "",
    logo: HMILogo,
    img: HMIWebsite,
    category: "Vue Js",
  },

  {
    id: 6,
    projName: "Health Maintenance, Inc. Portal",
    site: "https://portal.hmi.com.ph/",
    desc: "A Progressive Web App that allows users to view utilities/transaction history from their previous activity. Users can also view their profile as well as their dependencies.",
    github: "",
    logo: HMILogo,
    img: HMIPortal,
    category: "Vue Js",
  },

  // {
  //   id: 6,
  //   projName: "Subic Ride 2022",
  //   site: "https://www.youtube.com/embed/7MMdJl_kZn8",
  //   category: "Video Edit",
  //   img: SubicRide,
  // },
  // {
  //   id: 7,
  //   projName: "Sampaloc Ride",
  //   site: "https://www.youtube.com/embed/jgX7VyQq9UQ",
  //   category: "Video Edit",
  //   img: SampalocRide,
  // },
  // {
  //   id: 8,
  //   projName: "Laguna Loop Ride (Reverse)",
  //   site: "https://www.youtube.com/embed/PfJRr4bMJZM",
  //   category: "Video Edit",
  //   img: LagunaLoopReverseRide,
  // },
];

export const services = [
  {
    id: 1,
    service: "Web Development",
    desc: "I can create and develop a website that is also responsive so that users can use it with ease. ",
    icon: <CodeIcon sx={{ fontSize: "4rem" }} />,
  },
  // {
  //   id: 2,
  //   service: "Video Editing",
  //   desc: "organize raw footage, dialogue, sound effects, graphics, and special effects to create a finished film or video product",
  //   icon: <VideocamIcon sx={{ fontSize: "4rem" }} />,
  // },
];
