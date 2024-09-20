import { title } from "../data";
import { Logo } from "~/components/ui/logo";

export function Title() {
  function parseForHighlightedWords(text: string) {
    const wordsAndSpaces = text.split(/(\s+)/);

    return wordsAndSpaces.map((chunk, index) => {
      const isHighlighted = title.highlight
        .map((word) => word.toLowerCase())
        .includes(chunk.trim().toLowerCase());

      return (
        <span
          key={index}
          className={`${isHighlighted ? "text-white drop-shadow-[0px_0px_3px_white]" : ""}`}
        >
          {chunk}
        </span>
      );
    });
  }
  return (
    <div className="w-full grow basis-1">
      {/* Use cool glowy text */}
      {/* <h1 className="text-nowrap text-center text-48-96 font-bold">
        {title.plainText}
        <GlowText text={title.glowText} />
      </h1> */}

      {/* Or use a logo */}
      <h1 className="text-nowrap text-center text-48-96 font-bold">
        {title.plainText}
        <Logo className="m-auto w-full max-w-[600px]" glow />
      </h1>
      <div className="mb-8 text-center text-xl font-light text-muted-foreground">
        {parseForHighlightedWords(title.subTitle)}
      </div>
    </div>
  );
}
