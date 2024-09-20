import { motion } from "framer-motion";
import { LinkPreview } from "./link-preview";
import { Button } from "./button";
import { Project } from "../projects/ui/project";
import Link from "next/link";
import type { TimelineEntry } from "./timeline";
import { useGitHubRepoData } from "~/hooks/useGitHubRepoData";
import { NumberTicker } from "./number-ticker";
import { FaStar } from "react-icons/fa";

type TimelineHeadingProps = {
  entry: TimelineEntry;
};

export function TimelineHeading({ entry }: TimelineHeadingProps) {
  const repo = useGitHubRepoData(
    entry.projectUrls?.repo?.owner,
    entry.projectUrls?.repo?.name,
  );
  const site = entry.projectUrls?.site;

  return (
    <div className="flex justify-start pt-10 md:gap-10 md:pt-20">
      <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
        <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black md:left-3">
          <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-400 p-2" />
        </div>
        <motion.h3
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px" }}
          className="hidden text-xl font-bold md:block md:pl-20 md:text-5xl"
        >
          {entry.title}
          <div className="mt-2 flex w-full gap-5">
            {site && (
              <LinkPreview className="flex" url={site.url}>
                <Button className="shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                  {site.icon}
                </Button>
              </LinkPreview>
            )}
            {repo.url && (
              <div className="group flex items-center gap-3">
                <LinkPreview className="flex" url={repo.url}>
                  <Button className="shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                    {repo.icon}
                  </Button>
                </LinkPreview>
                {entry.projectUrls?.repo?.showStarCount && (
                  <motion.div
                    initial={{ display: "hidden" }}
                    whileInView={{ display: "flex" }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="gap-1"
                  >
                    <FaStar
                      className="transition-all duration-200 ease-in-out group-hover:rotate-180"
                      color="gold"
                      size={20}
                    />
                    <NumberTicker
                      className="text-[20px]"
                      value={repo.starCount}
                    />
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.h3>
      </div>

      <div className="relative w-full pl-14 pr-4 md:pl-4">
        <h3 className="mb-4 block space-y-4 text-left text-2xl font-bold md:hidden">
          <span>{entry.title}</span>
          <div className="flex w-full gap-5">
            {site && (
              <Link href={site.url} target="_blank">
                <Button className="shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                  {site.icon}
                </Button>
              </Link>
            )}
            {repo.url && (
              <div className="flex items-center gap-3">
                <Link href={repo.url} target="_blank">
                  <Button className="shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]">
                    {repo.icon}
                  </Button>
                </Link>
                {entry.projectUrls?.repo?.showStarCount && (
                  <motion.div
                    initial={{ display: "hidden" }}
                    whileInView={{ display: "flex" }}
                    viewport={{ once: true, margin: "-60px" }}
                    className="gap-1"
                  >
                    <FaStar color="gold" size={20} />
                    <NumberTicker className="text-sm" value={repo.starCount} />
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </h3>
        <Project {...entry} />
      </div>
    </div>
  );
}
