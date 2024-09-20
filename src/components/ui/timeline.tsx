"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { sectionHeading } from "../projects/data";
import { SectionHeading } from "./section-heading";
import { TimelineHeading } from "./timeline-heading";

type ProjectUrls = {
  site?: {
    url: string;
    icon: JSX.Element;
  };
  repo?: {
    owner: string;
    name: string;
    showStarCount: boolean;
  };
};

type Card = {
  title: string;
  text: string;
};

export type TimelineEntry = {
  title: string;
  description: string;
  tech: string[];
  cards: { a: Card; b: Card };
  imageUrl?: string;
  videoUrl?: string;
  projectUrls?: ProjectUrls;
};

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
      <SectionHeading
        title={sectionHeading.title}
        subTitle={sectionHeading.subTitle}
      />
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item) => (
          <TimelineHeading key={item.title} entry={item} />
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
