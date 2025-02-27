// "use client";
import Hero from "@/components/home/Hero";
import Welcome from "@/components/home/Welcome";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import VisitUs from "@/components/home/VisitUs";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col mb-6">
      <Hero />
      <Welcome />
      <FeaturedMenu />
      <div className="w-full flex flex-col md:flex-row gap-6 justify-between px-6 py-12">
        <VisitUs />
        <CallToAction />
      </div>
    </div>
  );
}
