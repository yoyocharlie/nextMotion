import { cn } from "~/lib/utils";

type SectionHeadingProps = {
  title: string;
  subTitle?: string;
  className?: string;
};

export function SectionHeading({
  title,
  subTitle,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 md:flex-row md:items-baseline md:gap-5`}
    >
      <h2
        className={`gradient-text text-center text-24-40 font-extrabold ${cn(className)}`}
      >
        {title}
      </h2>
      {subTitle && (
        <p className="text-center text-lg font-light text-muted-foreground">
          {subTitle}
        </p>
      )}
    </div>
  );
}
