import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b>HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express</b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "90",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "XD",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Fireworks",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    name: "Draggabble Todo App",
    image_path: "/images/draggabble.png",
    deployed_url: "#",
    github_url: "#",
    category: ["react"],
    description: "Simple Todo App with draggable cards",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Image galery",
    image_path: "/images/img_galery.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["node", "mongo", "react"],
    description: "Image galery app",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Pixabay Image Finder",
    image_path: "/images/pixa_img_find.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["node", "react"],
    description: "Pixabay image finder",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Coffee shop",
    image_path: "/images/shopcards.png",
    deployed_url: "#",
    github_url: "#",
    category: ["django", "react"],
    description: "Shop interface with Material UI",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "Weather app",
    image_path: "/images/weather_app.png",
    deployed_url: "#",
    github_url: "#",
    category: ["express"],
    description: "Weather app",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    name: "Netflix landing page",
    image_path: "/images/netflix.jpg",
    deployed_url: "#",
    github_url: "#",
    category: ["express"],
    description: "Netflix landing page",
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
];
