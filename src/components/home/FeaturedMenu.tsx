import { homemadeApple } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <section className="relative w-full flex flex-row justify-between">
        <div className="">
          <h2 className={`${homemadeApple.className}`}>
            Crafted with Care, Served with Love.
          </h2>
          <p>
            Our menu features a selection of artisanal coffee, organic teas, and
            locally sourced pastries.
          </p>
          <dl>
            <dt className={`${homemadeApple.className}`}>Hazelnut Latte</dt>
            <dd>Smooth, nutty, and perfectly sweet.</dd>

            <dt className={`${homemadeApple.className}`}>
              Earl Grey Tea Latte
            </dt>
            <dd>A creamy twist on a classic.</dd>

            <dt className={`${homemadeApple.className}`}>Almond Croissant</dt>
            <dd>Flaky, buttery, and filled with almond goodness.</dd>
          </dl>

          <Link href="/menu">View Full Menu</Link>
        </div>
        <Image
          src="/coffee-and-pastries.jpg"
          alt=""
          width={600}
          height={1200}
        />
      </section>
    </>
  );
}
