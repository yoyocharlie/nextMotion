import { ProfileCard } from "./profile-card";
import { Title } from "./title";

export function Hero() {
  return (
    <section className="relative flex h-[90vh] w-full items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
      <div className="container flex items-center xl:gap-56">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black"></div>
        <Title />
        <ProfileCard />
      </div>
    </section>
  );
}
