import {
  fortytwo,
  tahitiwifi,
  troupesdemarine,
  clbs,
  vini,
} from "../assets/images";

import {
  brainwave,
  c,
  cplusplus,
  copyright,
  css,
  express,
  git,
  github,
  html,
  impressa,
  iphone,
  javascript,
  linkedin,
  mongodb,
  mooz,
  nextjs,
  nodejs,
  megamania,
  pirateplatformer,
  react,
  snapgram,
  tailwindcss,
  typescript,
  unrealengine,
  threejs,
  twitter,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: unrealengine,
    name: "UE5",
    type: "Games",
    url: "https://dev.epicgames.com/documentation/en-us/unreal-engine/",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Systems",
    url: "https://www.cprogramming.com/",
  },
  {
    imageUrl: cplusplus,
    name: "C++",
    type: "Systems",
    url: "https://isocpp.org/",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
    url: "https://www.typescriptlang.org/",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
    url: "https://www.mongodb.com/",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
    url: "https://expressjs.com/",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
    url: "https://reactjs.org/",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
    url: "https://nodejs.org/",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
    url: "https://nextjs.org/",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "3D",
    url: "https://threejs.org/",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
    url: "https://tailwindcss.com/",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
    url: "https://git-scm.com/",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
    url: "https://github.com/MannyUnchain3d/",
  },
];

export const experiences = [
  {
    title: "Cadet",
    company_name: "42 Bangkok",
    icon: fortytwo,
    iconBg: "#323232",
    date: "February 2022 - February 2024",
    city: "Bangkok, Thailand",
    url: "https://www.42bangkok.com/",
    points: [
      "Collaborated on 'ft_transcendence' a full-stack web application project featuring a real-time multiplayer game. My role involved coding the game's core functionality using JavaScript and leveraging the Three.js library to implement 3D graphics.",
      "Built 'Webserv' in C++, a web server project that efficiently handles HTTP requests and supports concurrent connections, enhancing my knowledge of network programming and server management.",
      "Developed 'Cub3D', a 3D perspective rendering project in C with MiniLibX, applying ray-casting to simulate a 3D environment from 2D map data, similar to the original Wolfenstein 3D game.",
      "Implemented 'Inception' using Docker, a multi-service architecture project to explore containerization and networking, advancing my DevOps skills.",
    ],
  },
  {
    title: "Customer Service Representative",
    company_name: "CLBS",
    icon: clbs,
    iconBg: "#bf7fbf",
    date: "May 2019 - September 2022",
    city: "Chiang Mai, Thailand",
    url: "https://clbs.co.th/",
    points: [
      "Processed incoming calls in French and English (100+ per day).",
      "Provided technical support for various products and services.",
      "Performed troubleshooting and resolved customer complaints.",
    ],
  },
  {
    title: "Sales Service Representative",
    company_name: "Tahiti Wifi",
    icon: tahitiwifi,
    iconBg: "#fffceb",
    date: "June 2018 - January 2023",
    city: "Fa'a'ā, Tahiti",
    url: "https://www.tahiti-wifi.com/",
    points: [
      "Sold pocket Wifi plans (mostly for tourists).",
      "Provided customer service and technical support.",
      "Translated the website from French to English.",
    ],
  },
  {
    title: "Corporate Relationship Officer",
    company_name: "Vini SAS",
    icon: vini,
    iconBg: "#ff6666",
    date: "February 2016 - June 2018",
    city: "Papeete, Tahiti",
    url: "https://www.vini.pf/",
    points: [
      "Managed over 100+ local and international corporate client's accounts.",
      "Promoted additional products and services through consultative selling and negotiations.",
      "Provided orientation and executed account opening for new clients.",
    ],
  },
  {
    title: "Sharpshooter",
    company_name: "French Marine Troops",
    icon: troupesdemarine,
    iconBg: "#4c4cff",
    date: "February 2009 - February 2014",
    city: "Poitiers, France",
    url: "https://www.defense.gouv.fr/terre/nos-unites/nos-brigades/9e-brigade-dinfanterie-marine/regiment-dinfanterie-chars-marine",
    points: [
      "Light Armored Vehicle pilot.",
      "Armorer.",
      "Ranked #1 at the corporal course graduation.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/mannyunchain3d",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/mannytetopata",
  },
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://twitter.com/mannyunchain3d",
  },
  {
    name: "Copyright",
    iconUrl: copyright,
    link: "",
  },
];

export const projects = [
  {
    iconUrl: pirateplatformer,
    theme: "btn-back-red",
    name: "Pirate Platformer",
    description:
      "Showcasing the integration of 2D pixel art with 3D backgrounds in Unreal Engine, featuring advanced animation techniques, dynamic AI, and Metroidvania-style gameplay mechanics.",
    link: "https://www.youtube.com/embed/vH-2KVxWD8s",
    isYoutube: true,
  },
  {
    iconUrl: megamania,
    theme: "btn-back-black",
    name: "Megamania",
    description: "Showcasing the creation of a 2D action platformer like Mega Man in Unreal Engine, including sprite sheets, character abilities, enemy AI, and dynamic level design using best practices.",
    link: "https://www.youtube.com/embed/nIqwR7lt_9M",
    isYoutube: true,
  },
  {
    iconUrl: brainwave,
    theme: "btn-back-blue",
    name: "Brainwave",
    description:
      "A modern and stylish UX/UI responsive landing page for a fictional AI chatbot. The page features sleek parallax effects, a bento box layout, and more. Made with React, JavaScript, and Tailwind CSS.",
    link: "https://brainwave.manny-teto.com/",
    isYoutube: false,
  },
  {
    iconUrl: iphone,
    theme: "btn-back-yellow",
    name: "iPhone 15 Pro",
    description:
      "A responsive iPhone 15 Pro landing page with smooth animations and clean look. Made with React, Three.js (React Three Fiber), GSAP, and Tailwind CSS.",
    link: "https://iphone.manny-teto.com/",
    isYoutube: false,
  },
  {
    iconUrl: impressa,
    theme: "btn-back-green",
    name: "Impressa",
    description:
      "AI-powered image processing SaaS platform. Built with Next.js, TypeScript, and MongoDB. Integrates Stripe for payments and Cloudinary for image transformations",
    link: "https://impressa.manny-teto.com/",
    isYoutube: false,
  },
  {
    iconUrl: mooz,
    theme: "btn-back-pink",
    name: "mooZ",
    description:
      "A Full Stack Video Calling App made with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Stream and Clerk.",
    link: "https://mooz.manny-teto.com/",
    isYoutube: false,
  },
];
