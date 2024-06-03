import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The react hotel. Welcome to your home!.</h1>
      <Link href="/cabins">Explore cabins</Link>  {/*Work as a SPA and no hard reload of the entire page and avoid downloading all the bundle again */}
    </div>
  );
}
