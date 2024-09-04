import { BackgroundGradient } from "~/components/ui/background-gradient";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";
import { WobbleCard } from "~/components/ui/wobble-card";

type Card = {
  title1: string;
  text1: string;
  title2: string;
  text2: string;
};

type ProjectProps = {
  tech: string[];
  description: string;
  cards: Card;
};

export function Project({ tech, description, cards }: ProjectProps) {
  return (
    <div>
      <p className="mb-8 text-muted-foreground">{description}</p>
      <div className="mb-8 flex flex-wrap gap-2">
        {tech.map((text) => (
          <Badge
            key={text}
            className="h-5 cursor-default rounded-sm border-none shadow-[2px_2px_#00000069_inset] transition-all duration-100 ease-in-out hover:translate-x-[-1px] hover:bg-white hover:shadow-[1px_1px_#00000069_inset]"
          >
            {text}
          </Badge>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <BackgroundGradient containerClassName="hidden lg:block">
          <Image
            src="/images/cs-flashcards/cs-flashcards-6.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-full w-full rounded-3xl object-cover"
          />
        </BackgroundGradient>
        <WobbleCard containerClassName="w-full bg-neutral-900" className="pt-2">
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-neutral-800 md:text-xl lg:text-3xl">
            {cards.title1}
          </h2>
          <p className="mt-4 text-left text-sm text-neutral-200">
            {cards.text2}
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-2 md:h-40 xl:h-40 h-20 w-full bg-green-900"
          className="py-2 xl:py-5"
        >
          <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] text-green-950 text-opacity-60 md:text-xl lg:text-3xl">
            {cards.title2}
          </h2>
          <div className="mt-4 max-w-[700px] text-left text-sm text-neutral-200">
            {cards.text2}
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
