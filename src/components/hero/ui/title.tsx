import { GlowText } from "./glow-text";
import { rotatingWords, title } from "../data";
import { FlipWords } from "~/components/ui/flip-words";

export function Title() {
  return (
    <div className="relative grow basis-1">
      <h1 className="mb-4 text-nowrap text-48-96 font-bold">
        {title.plainText}
        {/* This is the cool glowy bit */}
        <GlowText text={title.glowText} />
      </h1>
      <div className="mb-8 text-xl font-light text-muted-foreground">
        {title.subTitle}
        <FlipWords words={rotatingWords} />
      </div>
    </div>
  );
}
