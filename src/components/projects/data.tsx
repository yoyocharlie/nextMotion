"use client";

import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import { Badge } from "../ui/badge";
import { WobbleCard } from "../ui/wobble-card";
import { BackgroundGradient } from "../ui/background-gradient";
import Link from "next/link";

export const sectionHeading = {
  title: "PROJECTS",
  subTitle: "Let's dive into what I've been up to.",
};

const tech = {
  "cs-flashcards": [
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "shadcn/ui",
    "tRPC",
    "Prisma",
    "Docker",
    "Vercel Postrgres",
  ],
  "Modern UI": [
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Aceternity UI",
    "Framer Motion",
  ],
  Gena: [
    "JavaScript",
    "Next.js",
    "TailwindCSS",
    "Ant Design",
    "Express.js",
    "MongoDB",
  ],
};

export const timelineData = [
  {
    title: "cs-flashcards",
    projectUrls: [
      {
        url: "https://cs-flashcards.vercel.app",
        icon: <RiExternalLinkLine size={20} />,
      },
      {
        url: "https://github.com/yoyocharlie/cs-flashcards-open",
        icon: <IoLogoGithub size={20} />,
      },
    ],
    content: (
      <div>
        <p className="mb-8 text-muted-foreground">
          A fullstack flashcards web app that I maintain as a valuable learning
          resource for both myself and the developer community. By open-sourcing
          this project, I aim to share knowledge and provide a practical tool
          for others to learn and grow in their development journey.
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {tech["cs-flashcards"].map((text) => (
            <Badge
              key={text}
              className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
            >
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <BackgroundGradient>
            <Image
              src="/images/cs-flashcards/cs-flashcards-6.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-full w-full rounded-3xl object-cover"
            />
          </BackgroundGradient>
          <WobbleCard
            containerClassName="w-full bg-neutral-900"
            className="pt-2"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-neutral-800 md:text-xl lg:text-3xl">
              Comprehensive Learning Tool
            </h2>
            <p className="mt-4 text-left text-sm text-neutral-200">
              Built with TypeScript and Next.js, this app offers a robust
              platform to enhance your development skills. It&apos;s
              open-sourced to provide a practical tool and valuable knowledge to
              developers at any stage.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-2 md:h-40 xl:h-40 h-20 w-full bg-green-900"
            className="py-2 xl:py-5"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-green-950 text-opacity-60 md:text-xl lg:text-3xl">
              Easy Integration with Your DB of Choice
            </h2>
            <div className="mt-4 max-w-[700px] text-left text-sm text-neutral-200">
              Effortlessly integrate with your preferred database, including
              SQLite for local use. Utilizing Prisma and tRPC, this app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.
            </div>
          </WobbleCard>
        </div>
      </div>
    ),
  },
  {
    title: "nextMotion",
    projectUrls: [
      {
        url: "https://modern-ui-starter.vercel.app",
        icon: <RiExternalLinkLine size={20} />,
      },
    ],
    content: (
      <div>
        <p className="mb-8 text-muted-foreground">This very website!</p>
        <div className="mb-8 flex flex-wrap gap-2">
          {tech["Modern UI"].map((text) => (
            <Badge
              key={text}
              className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
            >
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <BackgroundGradient>
            <Image
              src="/images/modern-ui/modern-ui-2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-full w-full rounded-3xl object-cover"
            />
          </BackgroundGradient>
          <WobbleCard containerClassName="w-full bg-blue-950" className="pt-2">
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-blue-950 md:text-xl lg:text-3xl">
              Comprehensive Learning Tool
            </h2>
            <p className="mt-4 text-left text-sm text-neutral-200">
              Built with TypeScript and Next.js, this app offers a robust
              platform to enhance your development skills. It&apos;s
              open-sourced to provide a practical tool and valuable knowledge to
              developers at any stage.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-2 md:h-40 xl:h-40 h-20 w-full bg-violet-950"
            className="py-2 xl:py-5"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-violet-950 md:text-xl lg:text-3xl">
              Easy Integration with Your DB of Choice
            </h2>
            <div className="mt-4 max-w-[700px] text-left text-sm text-neutral-200">
              Effortlessly integrate with your preferred database, including
              SQLite for local use. Utilizing Prisma and tRPC, this app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.
            </div>
          </WobbleCard>
        </div>
      </div>
    ),
  },
  {
    title: "Simple Joys (WIP)",
    projectUrls: [
      {
        url: "https://simplejoysmedia.com",
        icon: <RiExternalLinkLine size={20} />,
      },
    ],
    content: (
      <div>
        <p className="mb-8 text-muted-foreground">
          Firstly, An order management system for customers to order
          manufacturing labels from our printing facility. Secondly, an order
          flow management system for our printing facility to process orders.
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {tech.Gena.map((text) => (
            <Badge
              key={text}
              className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
            >
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <BackgroundGradient>
            <video
              className="h-full w-full rounded-3xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/images/simple-joys/simple-joys-video.mp4"
                type="video/mp4"
              />
              Your browser does not support this video.
            </video>
          </BackgroundGradient>
          <WobbleCard containerClassName="w-full bg-cyan-900" className="pt-2">
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-cyan-900 md:text-xl lg:text-3xl">
              Comprehensive Learning Tool
            </h2>
            <p className="mt-4 text-left text-sm text-neutral-200">
              Built with TypeScript and Next.js, this app offers a robust
              platform to enhance your development skills. It&apos;s
              open-sourced to provide a practical tool and valuable knowledge to
              developers at any stage.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-2 md:h-40 xl:h-40 h-20 w-full bg-slate-800"
            className="py-2 xl:py-5"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-slate-950 text-opacity-60 md:text-xl lg:text-3xl">
              Easy Integration with Your DB of Choice
            </h2>
            <div className="mt-4 max-w-[700px] text-left text-sm text-neutral-200">
              Effortlessly integrate with your preferred database, including
              SQLite for local use. Utilizing Prisma and tRPC, this app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.
            </div>
          </WobbleCard>
        </div>
      </div>
    ),
  },
  {
    title: "Gena",
    content: (
      <div>
        <p className="mb-8 text-muted-foreground">
          Firstly, An order management system for customers to order
          manufacturing labels from our printing facility. Secondly, an order
          flow management system for our printing facility to process orders.
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {tech.Gena.map((text) => (
            <Badge
              key={text}
              className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
            >
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <BackgroundGradient>
            <Image
              src="/images/gena/gena-5.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-full w-full rounded-3xl object-cover"
            />
          </BackgroundGradient>
          <WobbleCard
            containerClassName="w-full bg-neutral-900"
            className="pt-2"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-neutral-800 md:text-xl lg:text-3xl">
              Comprehensive Learning Tool
            </h2>
            <p className="mt-4 text-left text-sm text-neutral-200">
              Built with TypeScript and Next.js, this app offers a robust
              platform to enhance your development skills. It&apos;s
              open-sourced to provide a practical tool and valuable knowledge to
              developers at any stage.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-2 md:h-40 xl:h-40 h-20 w-full bg-green-900"
            className="py-2 xl:py-5"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-green-950 text-opacity-60 md:text-xl lg:text-3xl">
              Easy Integration with Your DB of Choice
            </h2>
            <div className="mt-4 max-w-[700px] text-left text-sm text-neutral-200">
              Effortlessly integrate with your preferred database, including
              SQLite for local use. Utilizing Prisma and tRPC, this app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.
            </div>
          </WobbleCard>
        </div>
      </div>
    ),
  },
  {
    title: "Biscuit",
    content: (
      <div>
        <p className="mb-8 text-muted-foreground">
          Firstly, An order management system for customers to order
          manufacturing labels from our printing facility. Secondly, an order
          flow management system for our printing facility to process orders.
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {tech.Gena.map((text) => (
            <Badge
              key={text}
              className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
            >
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <BackgroundGradient>
            <Image
              src="/images/biscuit/biscuit-4.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-full w-full rounded-3xl object-cover"
            />
          </BackgroundGradient>
          <WobbleCard
            containerClassName="w-full bg-neutral-900"
            className="pt-2"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-neutral-800 md:text-xl lg:text-3xl">
              Comprehensive Learning Tool
            </h2>
            <p className="mt-4 text-left text-sm text-neutral-200">
              Built with TypeScript and Next.js, this app offers a robust
              platform to enhance your development skills. It&apos;s
              open-sourced to provide a practical tool and valuable knowledge to
              developers at any stage.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-2 md:h-40 xl:h-40 h-20 w-full bg-green-900"
            className="py-2 xl:py-5"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-green-950 text-opacity-60 md:text-xl lg:text-3xl">
              Easy Integration with Your DB of Choice
            </h2>
            <div className="mt-4 max-w-[700px] text-left text-sm text-neutral-200">
              Effortlessly integrate with your preferred database, including
              SQLite for local use. Utilizing Prisma and tRPC, this app offers a
              flexible and scalable backend setup, making it easy to adapt and
              manage your data needs as you develop and expand your project.
            </div>
          </WobbleCard>
        </div>
      </div>
    ),
  },
];
