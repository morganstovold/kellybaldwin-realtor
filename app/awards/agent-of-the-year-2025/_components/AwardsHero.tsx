import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import AwardsImage from "@/public/kelly-3.webp";
import Link from "next/link";
import { Award } from "lucide-react";

export default function AwardsHero() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src={AwardsImage}
          alt="Kelly Baldwin - Award Winning Realtor"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16 bg-white">
        <div className="max-w-xl flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
            AWARDS & RECOGNITION
            <span className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 text-6xl sm:text-7xl md:text-[80px] lg:text-[100px] font-light opacity-3 tracking-normal select-none hidden sm:block">
              AWARDS
            </span>
          </h1>
          
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Recognized for excellence in customer service and real estate expertise 
            by RateMyAgent. Kelly&apos;s commitment to going above and beyond for her 
            clients has earned her multiple prestigious awards, including the 
            coveted Agent of the Year 2025.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="font-medium text-yellow-800">Latest Achievement</span>
            </div>
            <p className="text-sm text-yellow-700">
              RateMyAgent Agent of the Year 2025 - awarded for exceptional 
              dedication to customer service and outstanding sales performance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/awards/agent-of-the-year-2025"
            >
              View Media Release
            </Link>
            <Link
              className={buttonVariants({ variant: "default" })}
              href="/contact"
            >
              Work With Kelly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 