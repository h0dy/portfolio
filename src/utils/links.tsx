import pokedexcliImage from "@/assets/images/pokedexcli.png";
import portfolioImage from "@/assets/images/portfolio.png";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaAws,
  FaDiscord,
  FaDocker,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiDrizzle,
  SiExpress,
  SiGithubactions,
  SiMongodb,
  SiRabbitmq,
  SiSqlite,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import type { NavLink, Project, TechItem } from "./types";

import { Github, Instagram } from "lucide-react";
import { BsCCircle } from "react-icons/bs";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

export const navLinks: NavLink[] = [
  { href: "/projects", label: "projects" },
  { href: "/stats", label: "stats" },
  { href: "/contact", label: "contact" },
];

export const languages: TechItem[] = [
  {
    label: "javascript",
    icon: <IoLogoJavascript />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "typescript",
    icon: <TbBrandTypescript />,
    url: "https://www.typescriptlang.org/docs/",
  },
  {
    label: "python",
    icon: <FaPython />,
    url: "https://docs.python.org/3/",
  },
  {
    label: "golang",
    icon: <FaGolang />,
    url: "https://go.dev/doc/",
  },
  {
    label: "c language",
    icon: <BsCCircle />,
    url: "https://devdocs.io/c/",
  },
];

export const socials: TechItem[] = [
  {
    label: "Github",
    icon: <Github />,
    url: "https://github.com/h0dy",
  },
  {
    label: "Instagram",
    icon: <Instagram />,
    url: "https://Instagram.com/h0dy",
  },
  {
    label: "Discord",
    icon: <FaDiscord />,
    url: "https://discordapp.com/users/637722754791243873",
  },
];

export const techStack: TechItem[] = [
  {
    label: "React",
    icon: <FaReact />,
    url: "https://react.dev/",
  },
  {
    label: "Nextjs",
    icon: <RiNextjsLine />,
    url: "https://nextjs.org/",
  },
  {
    label: "Tailwindcss",
    icon: <RiTailwindCssFill />,
    url: "https://tailwindcss.com/",
  },
  {
    label: "NodeJS",
    icon: <FaNodeJs />,
    url: "https://nodejs.org/en",
  },
  {
    label: "ExpressJS",
    icon: <SiExpress />,
    url: "https://expressjs.com/",
  },
  {
    label: "RabbitMQ",
    icon: <SiRabbitmq />,
    url: "https://www.rabbitmq.com/",
  },
  {
    label: "MongoDB",
    icon: <SiMongodb />,
    url: "https://www.mongodb.com/",
  },
  {
    label: "PostegreSQL",
    icon: <BiLogoPostgresql />,
    url: "https://www.postgresql.org/",
  },
  {
    label: "SQLite",
    icon: <SiSqlite />,
    url: "https://www.sqlite.org/",
  },
  {
    label: "Drizzle",
    icon: <SiDrizzle />,
    url: "https://orm.drizzle.team/",
  },
];

export const infrastructureAndDevops: TechItem[] = [
  {
    label: "Amazon Web Services",
    icon: <FaAws />,
    url: "https://aws.amazon.com/",
  },
  {
    label: "Docker",
    icon: <FaDocker />,
    url: "https://aws.amazon.com/",
  },
  {
    label: "Github Actions",
    icon: <SiGithubactions />,
    url: "https://github.com/features/actions",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    label: "gator",
    description: "Gator is command-line blog aggregator",
    gitURL: "https://github.com/h0dy/gator",
    tags: ["Golang", "SQL", "PostgreSQL", "CLI"],
    featured: true,
  },
  {
    id: "2",
    label: "portfolio",
    image: portfolioImage,
    description: "you are in it :)",
    gitURL: "https://github.com/h0dy/hody-portfolio",
    projectURL: "https://hody.dev",
    tags: ["Tailwindcss", "React Router", "React", "Typescript", "Shadcn UI"],
    featured: true,
  },
  {
    id: "3",
    label: "Pokedex",
    description: "Pokedex is a command-line REPL",
    image: pokedexcliImage,
    gitURL: "https://github.com/h0dy/pokedexcli",
    tags: ["Golang", "CLI"],
    featured: true,
  },
];
