import type { Metadata } from "next";
import { radioCanada } from "@/utils/fonts";
import NavBar from "@/components/NavBar";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "The Cozy Bean Café | Artisanal Coffee & Fresh Pastries in a Warm Atmosphere",
  description:
    "Welcome to The Cozy Bean Café – your neighborhood coffee spot for artisanal brews, fresh pastries, and a cozy ambiance. Explore our handcrafted menu, meet our passionate baristas, and find your perfect coffee moment. Visit us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${radioCanada.className} bg-champagne text-darkSlateGray max-w-[1600px] mx-auto`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
