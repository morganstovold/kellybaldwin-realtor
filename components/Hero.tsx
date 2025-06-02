import Image from "next/image";
import KellyBaldwin from "@/public/interior-1.webp";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src={KellyBaldwin}
          alt="Kelly Baldwin"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-xl flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
            KELLY BALDWIN
            <span className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 text-8xl sm:text-9xl md:text-[120px] lg:text-[180px] font-light opacity-3 tracking-normal select-none hidden sm:block">
              KELLY
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Your trusted Bay Area real estate expert. Solano County native with 
            deep local knowledge and a commitment to making your real estate 
            experience enjoyable and successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
            <Button size="lg" className="w-full sm:w-auto">Contact Kelly</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
