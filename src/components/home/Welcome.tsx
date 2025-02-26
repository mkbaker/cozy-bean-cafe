import { homemadeApple } from "@/utils/fonts";
import Image from "next/image";

export default function Welcome() {
  return (
    <>
      <section className="relative w-full flex flex-row">
        <Image src="/barista-portrait.jpg" alt="" width={600} height={1200} />
        <div className="">
          <h2 className={`${homemadeApple.className}`}>
            Welcome to The Cozy Bean Café!
          </h2>
          <p>
            Nestled in the heart of [Your City], we craft every cup with love
            and passion. Whether you&apos;re here to fuel your day or unwind
            with friends, our café is your home away from home.
          </p>
        </div>
      </section>
    </>
  );
}
