"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { AnimatedTooltip } from "~/components/ui/animated-tooltip";
import { BackgroundGradient } from "~/components/ui/background-gradient";
import { profileCard } from "../data";

export function ProfileCardMobile() {
  return (
    <div className="flex max-w-[400px] grow basis-1 justify-center lg:hidden">
      <BackgroundGradient containerClassName="w-fit">
        <Card className="rounded-3xl">
          <CardHeader className="flex-row items-center gap-10 border-b border-secondary p-4">
            <AnimatedTooltip
              items={[
                {
                  id: 1,
                  name: profileCard.tooltip.title,
                  designation: profileCard.tooltip.subTitle,
                  image: profileCard.tooltip.imagePath,
                },
              ]}
            />
            <div className="flex flex-col">
              <CardTitle>{profileCard.title}</CardTitle>
              <CardDescription>{profileCard.subTitle}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <p className="font-light">{profileCard.body}</p>
          </CardContent>
          <CardFooter>
            <div className="flex w-full gap-5">
              {profileCard.socialUrls.map((social, i) => (
                <Link
                  key={i}
                  className="group inline-block"
                  target="_blank"
                  href={social.url}
                >
                  <Button className="shadow-[-2px_-2px_#00000069_inset]">
                    {social.icon}
                  </Button>
                </Link>
              ))}
            </div>
          </CardFooter>
        </Card>
      </BackgroundGradient>
    </div>
  );
}
