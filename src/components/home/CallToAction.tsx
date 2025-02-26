import { homemadeApple } from "@/utils/fonts";
// import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section>
      <h2 className={`${homemadeApple.className}`}>
        Ready for Your Perfect Cup?
      </h2>
      <p>Join us today or order ahead for a seamless coffee experience!</p>
      <Link href="/order">Order Ahead</Link>
    </section>
  );
}
