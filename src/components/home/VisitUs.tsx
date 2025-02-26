import { homemadeApple } from "@/utils/fonts";
// import Image from "next/image";
// import Link from "next/link";

export default function VisitUs() {
  return (
    <section className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-xl shadow-lg w-full md:w-1/2 text-center md:text-left">
      <h2 className={`${homemadeApple.className} text-3xl text-liver`}>
        Find Your Cozy Spot.
      </h2>
      <address className="text-darkSlateGray mt-4 not-italic leading-relaxed">
        📍 123 Main Street, Your City <br />
        🕒 Mon-Sat: 7 AM - 7 PM | Sun: 8 AM - 5 PM
      </address>
      <p className="text-darkSlateGray mt-3">
        ☕ Dine In | Takeout | Order Ahead
      </p>
    </section>
  );
}
