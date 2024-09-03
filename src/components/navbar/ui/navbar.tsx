import Link from "next/link";
import { Logo } from "../../ui/logo";

export function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-50 flex h-16 w-full items-center bg-[#000000ab] px-5 backdrop-blur-lg">
      <div className="m-auto w-full max-w-[1800px]">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </nav>
  );
}
