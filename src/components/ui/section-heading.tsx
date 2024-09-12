type SectionHeadingProps = {
    title: string;
    subTitle?: string
}

export function SectionHeading({ title, subTitle }: SectionHeadingProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-baseline md:gap-5">
            <h2 className="gradient-text text-24-40 text-center font-extrabold">
                {title}
            </h2>
            {subTitle && <p className="font-light text-lg text-muted-foreground">
                {subTitle}
            </p>}
        </div>
    )
}