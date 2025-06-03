import Image from "next/image";
import { Button } from "@/components/ui/button";
import InteriorImage from "@/public/interior-2.webp";

export default function PropertiesHero() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src={InteriorImage}
          alt="Luxury Interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16 bg-white">
        <div className="max-w-xl flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
            PROPERTIES
            <span className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 text-8xl sm:text-9xl md:text-[120px] lg:text-[140px] font-light opacity-3 tracking-normal select-none hidden sm:block">
              HOMES
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Explore our curated collection of exceptional properties throughout 
            the Bay Area. From charming family homes to luxury estates, discover 
            your perfect match in Solano County&apos;s most desirable neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Schedule Tour
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