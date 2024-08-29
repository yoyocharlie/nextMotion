import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import { Badge } from "../ui/badge";
import { WobbleCard } from "../ui/wobble-card";

export const sectionHeading = {
  title: "Projects",
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
            <Badge className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/cs-flashcards/cs-flashcards-dark-1.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/cs-flashcards/cs-flashcards-2.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/cs-flashcards/cs-flashcards-4.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/cs-flashcards/cs-flashcards-5.jpg"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Modern UI",
    content: (
      <div>
        <p className="mb-8 text-muted-foreground">This very website!</p>
        <div className="mb-8 flex flex-wrap gap-2">
          {tech["Modern UI"].map((text) => (
            <Badge className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/modern-ui/modern-ui-1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <WobbleCard
            containerClassName="col-span-1 md:h-44 lg:h-60 h-20 w-full"
            className="pt-2"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Open-source
            </h2>
            <p className="mt-4 text-left text-sm text-neutral-200">
              Useful as a learning resource or as a good project template that
              requires modern ui with too many animations
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-2 md:h-44 lg:h-60 h-20 w-full bg-rose-600"
            className="pt-2"
          >
            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
              Check it out on GitHub
            </h2>
            <div className="mt-4 text-left text-sm text-neutral-200">
              Random text here for now
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
          {tech["Gena"].map((text) => (
            <Badge className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/gena/gena-1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/gena/gena-2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/gena/gena-3.jpg"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/gena/gena-4.jpg"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
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
          {tech["Gena"].map((text) => (
            <Badge className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/biscuit/biscuit-1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/biscuit/biscuit-2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/biscuit/biscuit-3.jpg"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Simple Joys (WIP)",
    content: (
      <div>
        <p className="mb-8 text-muted-foreground">
          Firstly, An order management system for customers to order
          manufacturing labels from our printing facility. Secondly, an order
          flow management system for our printing facility to process orders.
        </p>
        <div className="mb-8 flex flex-wrap gap-2">
          {tech["Gena"].map((text) => (
            <Badge className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
              {text}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/simple-joys/simple-joys-1.jpg"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <Image
            src="/images/simple-joys/simple-joys-2.jpg"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
];
