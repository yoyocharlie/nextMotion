"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Spotlight } from "./spotlight";
import { sectionHeading } from "../projects/data";
import Link from "next/link";
import { Button } from "./button";
import { LinkPreview } from "./link-preview";

interface TimelineEntry {
  title: string;
  projectUrls: {
    url: string;
    icon: JSX.Element;
  }[];
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-200px" }}
        >
          <Spotlight className="left-0 top-0" fill="white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, margin: "-200px" }}
        >
          <h2 className="text-28-50 relative mb-4 font-extrabold">
            <span className="absolute left-0 mx-auto box-content w-fit select-none border bg-[#ffffff5f] bg-clip-text font-extrabold text-transparent blur-lg">
              {sectionHeading.title}
            </span>
            <span className="relative left-0 top-0 font-extrabold">
              {sectionHeading.title}
            </span>
          </h2>
          <p className="text-muted-foreground">{sectionHeading.subTitle}</p>
        </motion.div>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black md:left-3">
                <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
              </div>
              <motion.h3
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-200px" }}
                className="hidden text-xl font-bold md:block md:pl-20 md:text-5xl"
              >
                {item.title}
                <div className="flex w-full gap-5">
                  {item.projectUrls?.map((project, i) => (
                    <LinkPreview key={i} url={project.url}>
                      <Button className="shadow-[2px_2px_#00000069_inset] transition-all group-hover/card:shadow-[-1px_-1px_#00000069_inset]">
                        {project.icon}
                      </Button>
                    </LinkPreview>
                  ))}
                </div>
              </motion.h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
