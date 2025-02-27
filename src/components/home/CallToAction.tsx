import { homemadeApple } from "@/utils/fonts";
// import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg w-full md:w-1/2 text-center md:text-left">
      <h2 className={`${homemadeApple.className} text-3xl text-liver`}>
        Ready for Your Perfect Cup?
      </h2>
      <p className="text-darkSlateGray mt-4">
        Join us today or order ahead for a seamless coffee experience!
      </p>
      <Link
        href="/order"
        className="inline-block mt-4 text-white bg-tan px-4 py-2 rounded-lg hover:bg-liver transition float-right"
      >
        order ahead
      </Link>
    </section>
  );
}
