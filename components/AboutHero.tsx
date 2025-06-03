import Image from "next/image";
import { Button } from "@/components/ui/button";
import KellyPhoto from "@/public/kelly-6.webp";

export default function AboutHero() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src={KellyPhoto}
          alt="Kelly Baldwin"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16 bg-white">
        <div className="max-w-xl flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
            ABOUT KELLY
            <span className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 text-8xl sm:text-9xl md:text-[120px] lg:text-[140px] font-light opacity-3 tracking-normal select-none hidden sm:block">
              KELLY
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Solano County native with deep local knowledge and an unwavering 
            commitment to turning your real estate dreams into reality. Experience 
            the difference of working with someone who truly understands the Bay Area market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Properties
            </Button>
            <Button size="lg" className="w-full sm:w-auto">
              Contact Kelly
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 