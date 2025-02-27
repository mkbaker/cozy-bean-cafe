import { homemadeApple } from "@/utils/fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative w-full">
        <div className="relative w-full h-[75vh] md:h-[90vh] rounded-b-2xl overflow-hidden">
          <Image
            src="/latte-and-pastry.jpg"
            alt=""
            width={1600}
            height={900}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 bg-black/30 rounded-b-2xl">
          <h1
            className={`${homemadeApple.className} text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-champagne text-center`}
            style={{ lineHeight: "2em" }}
          >
            Your Cozy Coffee Escape Awaits.
          </h1>
          <p className="text-champagne text-sm sm:text-lg max-w-md text-center px-4 py-2 rounded-lg">
            Savor handcrafted coffee, freshly baked pastries, and a warm,
            inviting atmosphere.
          </p>
        </div>
      </section>
    </>
  );
}
