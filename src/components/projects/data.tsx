import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import type { TimelineEntry } from "../ui/timeline";

export const sectionHeading = {
  title: "What I'm working on",
  subTitle: "Let's dive into what I've been up to.",
};

export const timelineData: TimelineEntry[] = [
  {
    title: "cs-flashcards",
    projectUrls: [
      {
        url: "https://github.com/yoyocharlie/cs-flashcards-open",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    imageUrl: "/images/cs-flashcards.png",
    description: `A fullstack flashcards web app that I maintain as a valuable learning resource for both myself and the developer community. By open-sourcing this project, I aim to share knowledge and provide a practical tool for others to learn and grow in their development journey.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "tRPC",
      "Prisma",
      "Docker",
      "Vercel Postgres",
    ],
    cards: {
      a: {
        title: "Comprehensive Learning Tool",
        text: `Built with TypeScript and Next.js, this app offers a robust
              platform to enhance your development skills. It's
              open-sourced to provide a practical tool and valuable knowledge to
              developers at any stage.`,
      },
      b: {
        title: "Easy Integration with Your DB of Choice",
        text: `Effortlessly integrate with your preferred database, including
              SQLite for local use. Utilizing Prisma and tRPC, this app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.`,
      },
    },
  },
  {
    title: "nextMotion",
    projectUrls: [
      {
        url: "https://next-motion-five.vercel.app/",
        icon: <RiExternalLinkLine size={20} />,
      },
      {
        url: "https://github.com/yoyocharlie/nextMotion",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    imageUrl: "/images/nextMotion.png",
    description: `An open-source, opinionated portfolio template for creating a modern, reactive SPA portfolio.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Aceternity UI",
      "Framer Motion",
    ],
    cards: {
      a: {
        title: "Modern Reactive UI",
        text: `This portfolio template offers a clean, modern, and fully responsive design. Built to be sleek and dynamic, it leverages the latest front-end technologies to ensure a smooth and engaging user experience, perfect for showcasing your projects and skills.`,
      },
      b: {
        title: "Easy Customization & Integration",
        text: `Seamlessly customize the portfolio to fit your unique style and preferences. With support for easy integration into various data sources, this opinionated template is designed to simplify the process of building a single-page application (SPA) portfolio that truly reflects your work.`,
      },
    },
  },
  {
    title: "Simple Joys (WIP)",
    projectUrls: [
      {
        url: "https://simplejoysmedia.com",
        icon: <RiExternalLinkLine size={20} />,
      },
    ],
    videoUrl: "/images/simple-joys-video.mp4",
    description: `A cinematography portfolio built with Next.js and Sanity.io for fast page speeds and quick delivery of high quality assets.`,
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "tRPC",
      "Sanity",
    ],
    cards: {
      a: {
        title: "Fast & Responsive Performance",
        text: `Built with Next.js, this cinematography portfolio ensures lightning-fast page speeds and smooth navigation. High-quality video and image assets load efficiently, offering a seamless viewing experience without compromising on performance.`,
      },
      b: {
        title: "Powered by Sanity.io",
        text: `Leveraging Sanity.io, this portfolio delivers dynamic content and high-resolution assets with ease. Update your work in real-time and enjoy the flexibility of a powerful CMS, ensuring that your portfolio stays current and visually stunning.`,
      },
    },
  },
];
