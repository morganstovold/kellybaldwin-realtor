import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function PropertiesHero() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src="/interior-2.webp"
          alt="Beautiful Bay Area Properties"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-xl flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
            FIND YOUR
            <br />
            DREAM HOME
            <span className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light opacity-3 tracking-normal select-none hidden sm:block">
              HOME
            </span>
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-gray-600">
            Discover exceptional properties throughout the greater Bay Area.
            From modern family homes to charming Victorians, explore our curated
            collection of premium listings in Solano County&apos;s most
            desirable neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="#properties-grid"
            >
              View All Properties
            </Link>
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
