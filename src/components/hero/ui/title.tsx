import { GlowText } from "./glow-text";
import { title } from "../data";

export function Title() {
  return (
    <div className="relative grow basis-1 text-center">
      <h1 className="text-48-96 mb-4 text-nowrap font-bold">
        {title.plainText}
        {/* This is the cool glowy bit */}
        <GlowText text={title.glowText} />
      </h1>
      <p className="mb-8 text-xl font-light text-muted-foreground">
        {title.subTitle}
      </p>
    </div>
  );
}
