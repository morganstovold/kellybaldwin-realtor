import Image from "next/image";
import { Button } from "@/components/ui/button";
import BuyerHeroImage from "@/public/kelly-6.webp"; // Reusing existing image

export default function BuyerHero() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src={BuyerHeroImage}
          alt="Buyer Services with Kelly Baldwin"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16 bg-white">
        <div className="max-w-xl flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
            BUYER SERVICES
            <span className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light opacity-3 tracking-normal select-none hidden sm:block">
              BUYER
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            From first-time homebuyers to seasoned investors, I provide expert guidance 
            throughout your entire home buying journey. Let me help you find the perfect 
            property and negotiate the best terms in today's competitive Bay Area market.
          </p>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">Expert Local Market Knowledge</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">Skilled Negotiation & Advocacy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-gray-700">Personalized Home Search</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Search
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Get Pre-Qualified
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 