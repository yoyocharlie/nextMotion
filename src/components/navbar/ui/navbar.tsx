"use client";

import Link from "next/link";
import { Logo } from "~/components/ui/logo";
import { NumberTicker } from "~/components/ui/number-ticker";
import { IoLogoGithub } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useGitHubRepoData } from "~/hooks/useGitHubRepoData";

export function Navbar() {
  const repoData = useGitHubRepoData("yoyocharlie", "nextMotion");
  return (
    <nav className="sticky left-0 top-0 z-50 flex w-full items-center bg-[#000000ab] px-5 backdrop-blur-lg">
      <div className="m-auto flex w-full max-w-[1800px] items-center justify-between py-2">
        <Link href="/" className="inline-block">
          <Logo className="w-28" />
        </Link>
        <Link
          className="group flex items-center gap-3 transition-all duration-300 hover:brightness-125"
          target="_blank"
          href={repoData.url}
        >
          <div className="flex items-center gap-1 rounded-[10px_5px_10px_5px] bg-accent px-2 py-1">
            <IoLogoGithub size={20} />
            <span className="hidden text-sm font-light sm:flex">
              Star us on GitHub
            </span>
          </div>
          <div className="flex w-12 items-center gap-1">
            <FaStar
              className="transition-all duration-300 ease-in-out group-hover:rotate-180"
              size={15}
            />
            <NumberTicker
              className="text-sm tracking-tighter"
              value={repoData.starCount}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
