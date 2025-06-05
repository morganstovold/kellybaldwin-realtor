import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import SellerHeroImage from "@/public/kelly-6.webp"; // Reusing existing image
import Link from "next/link";

export default function SellerHero() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src={SellerHeroImage}
          alt="Seller Services with Kelly Baldwin"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16 bg-white">
        <div className="max-w-xl flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
            FOR SELLERS
            <span className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light opacity-3 tracking-normal select-none hidden sm:block">
              SELLERS
            </span>
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Maximize your home&apos;s value with strategic marketing, expert
            pricing, and skilled negotiation. I&apos;ll help you sell your
            property quickly and for the best possible price in today&apos;s
            competitive Bay Area market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/contact"
            >
              Contact Kelly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
