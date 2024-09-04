import { GlowText } from "./glow-text";
import { rotatingWords, title } from "../data";
import { FlipWords } from "~/components/ui/flip-words";
import { Logo } from "~/components/ui/logo";

export function Title() {
  return (
    <div className="relative grow basis-1">
      {/* Use cool glowy text */}
      {/* <h1 className="text-nowrap text-center text-48-96 font-bold lg:text-left">
        {title.plainText}
        <GlowText text={title.glowText} />
      </h1> */}

      {/* Or use a logo */}
      <h1 className="text-nowrap text-center text-48-96 font-bold">
        {title.plainText}
        <Logo className="m-auto w-[400px]" glow />
      </h1>
      {/* <div className="mb-8 text-center text-xl font-light text-muted-foreground lg:text-left">
        <span className="block lg:inline-block">{title.subTitle}</span>
        <FlipWords words={rotatingWords} />
      </div> */}
    </div>
  );
}
