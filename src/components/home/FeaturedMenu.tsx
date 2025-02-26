"use client";

import { homemadeApple } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.1); // Parallax effect on image
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative w-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 px-6 py-12">
        <div className="relative bg-white/90 md:bg-white/70 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-lg max-w-lg text-center md:text-left">
          <h2
            className={`${homemadeApple.className} text-3xl sm:text-4xl text-liver`}
            style={{ lineHeight: "1.5em" }}
          >
            Crafted with Care, Served with Love.
          </h2>
          <p className="text-darkSlateGray mt-4 leading-relaxed">
            Our menu features a selection of artisanal coffee, organic teas, and
            locally sourced pastries.
          </p>
          <dl className="mt-6 space-y-3">
            <dt className={`${homemadeApple.className} text-liver`}>
              Hazelnut Latte
            </dt>
            <dd>Smooth, nutty, and perfectly sweet.</dd>

            <dt className={`${homemadeApple.className} text-liver`}>
              Earl Grey Tea Latte
            </dt>
            <dd>A creamy twist on a classic.</dd>

            <dt className={`${homemadeApple.className} text-liver`}>
              Almond Croissant
            </dt>
            <dd>Flaky, buttery, and filled with almond goodness.</dd>
          </dl>

          <Link
            href="/menu"
            className="inline-block mt-6 text-white bg-tan px-4 py-2 rounded-lg hover:bg-liver transition float-right"
          >
            view full menu
          </Link>
        </div>
        <div
          className="relative w-full md:w-1/2 max-w-md md:max-w-lg overflow-hidden"
          style={{ transform: `translateY(-${offset}px)` }}
        >
          <Image
            src="/coffee-and-pastries.jpg"
            alt=""
            width={600}
            height={900}
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
