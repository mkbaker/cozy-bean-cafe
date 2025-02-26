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
    <section className="relative w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 px-6 py-12">
      <div
        className="relative w-full md:w-1/2 max-w-md md:max-w-lg overflow-hidden"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src="/barista-portrait.jpg"
          alt="Barista smiling"
          width={600}
          height={1200}
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div
        className="relative md:absolute md:right-10 bg-white/80 md:bg-white/60 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg max-w-lg"
        style={{ transform: `translateY(-${offset * 0.2}px)` }}
      >
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
