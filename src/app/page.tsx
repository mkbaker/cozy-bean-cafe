// "use client";
import Hero from "@/components/home/Hero";
import Welcome from "@/components/home/Welcome";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import VisitUs from "@/components/home/VisitUs";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <FeaturedMenu />
      <div className="w-full flex flex-row justify-between">
        <VisitUs />
        <CallToAction />
      </div>
    </>
  );
}
