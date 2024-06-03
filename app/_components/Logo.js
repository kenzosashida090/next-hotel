import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png"
function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The React Hotel logo" /> *This does tree important things: Serve in modern formats like in webp when its necessary, includes lazyloads only when enters into the viewport  */}
      <Image src={logo} height="60" width="60" alt="The React Hotel logo" quality={100} /> 
      <span className="text-xl font-semibold text-primary-100">
        The Next Hotel
      </span>
    </Link>
  );
}

export default Logo;
