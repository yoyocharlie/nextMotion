import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const title = {
  plainText: "Welcome to",
  glowText: "Modern UI",
  subTitle: "From a passionate Fullstack Developer",
};

export const profileCard = {
  title: "Jacob Pixler",
  subTitle: "Fullstack Software Developer",
  body: "Passionate about building scalable, user-friendly web applications. Always exploring new technologies and best practices to improve development processes.",
  socialUrls: [
    {
      url: "",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      url: "",
      icon: <IoLogoGithub size={20} />,
    },
  ],
  tooltip: {
    imagePath: "https://avatars.githubusercontent.com/u/106707326?v=4",
    title: "Hey...",
    subTitle: "That's me!",
  },
};
