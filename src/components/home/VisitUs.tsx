import { homemadeApple } from "@/utils/fonts";
// import Image from "next/image";
// import Link from "next/link";

export default function VisitUs() {
  return (
    <section>
      <h2 className={`${homemadeApple.className}`}>Find Your Cozy Spot.</h2>
      <address>
        📍 123 Main Street, Your City <br />
        🕒 Mon-Sat: 7 AM - 7 PM | Sun: 8 AM - 5 PM
      </address>
      <p>☕ Dine In | Takeout | Order Ahead</p>
    </section>
  );
}
