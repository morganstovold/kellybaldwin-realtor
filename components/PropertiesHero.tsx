import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Home } from "lucide-react";

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

        {/* Property Stats Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Home size={16} className="text-gray-600" />
                <span className="text-gray-800 font-medium">
                  Premium Properties
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-600" />
                <span className="text-gray-800">Solano County & Bay Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-xl flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
            FIND YOUR
            <br />
            DREAM HOME
            <span className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light opacity-3 tracking-normal select-none hidden sm:block">
              HOME
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-gray-600">
            Discover exceptional properties throughout the greater Bay Area.
            From modern family homes to charming Victorians, explore our curated
            collection of premium listings in Solano County's most desirable
            neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="#properties-grid">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Properties
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Schedule Viewing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
