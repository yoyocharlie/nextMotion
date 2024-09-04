import Link from "next/link";
import { Logo } from "~/components/ui/logo";

export function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-50 flex w-full items-center bg-[#000000ab] px-5 backdrop-blur-lg">
      <div className="m-auto flex w-full max-w-[1800px] items-center py-2">
        <Link href="/" className="inline-block">
          <Logo className="w-28" />
        </Link>
      </div>
    </nav>
  );
}
