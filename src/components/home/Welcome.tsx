"use client";

import { homemadeApple } from "@/utils/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.1);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 px-6 pt-12">
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <div
          className="absolute inset-0  opacity-30 md:opacity-100 md:relative w-full md:w-auto h-full min-h-[400px]"
          style={{ transform: `translateY(-${offset}px)` }}
        >
          <Image
            src="/barista-portrait.jpg"
            alt="Barista smiling"
            width={600}
            height={1200}
            className="w-full md:w-auto max-w-md md:max-w-lg h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="relative bg-white/90 md:bg-white/70 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg w-full md:w-1/2 text-center md:text-left">
        <h2
          className={`${homemadeApple.className} text-3xl sm:text-4xl text-liver`}
          style={{ lineHeight: "1.5em" }}
        >
          Welcome to The Cozy Bean Café!
        </h2>
        <p className="text-darkSlateGray mt-4 leading-relaxed">
          Nestled in the heart of [Your City], we craft every cup with love and
          passion. Whether you&apos;re here to fuel your day or unwind with
          friends, our café is your home away from home.
        </p>
      </div>
    </section>
  );
}
