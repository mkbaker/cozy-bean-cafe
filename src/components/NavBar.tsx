import { homemadeApple } from "@/utils/fonts";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full sticky top-0 z-50 shadow-md bg-champagne  px-6 py-4 flex justify-between items-center">
      <Link
        href="/"
        className={`${homemadeApple.className} text-2xl font-bold text-liver hover:text-oldRose transition`}
      >
        the cozy bean café
      </Link>
      <div className="space-x-6 hidden md:flex items-center">
        <Link
          href="/menu"
          className="text-darkSlateGray hover:text-oldRose transition"
        >
          menu
        </Link>
        <Link
          href="/about"
          className="text-darkSlateGray hover:text-oldRose transition"
        >
          about
        </Link>
        <Link
          href="/locations"
          className="text-darkSlateGray hover:text-oldRose transition"
        >
          locations
        </Link>
        <Link
          href="/blog"
          className="text-darkSlateGray hover:text-oldRose transition"
        >
          blog
        </Link>
        <Link
          href="/order"
          className="text-white bg-tan px-4 py-2 rounded-lg hover:bg-liver transition"
        >
          order ahead
        </Link>
      </div>
    </nav>
  );
}
