import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import KellyPhoto from "@/public/kelly-4.webp";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MediaReleaseHero() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        <Image
          src={KellyPhoto}
          alt="Kelly Baldwin - RateMyAgent Agent of the Year 2025"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16 bg-white">
        <div className="max-w-xl flex flex-col gap-6 text-center lg:text-left">
          {/* Back Link */}
          <Link
            href="/awards"
            className="inline-flex items-center text-gray-600 hover:text-black mb-4 transition-colors self-start"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Awards
          </Link>
          
          <h1 className="text-3xl lg:text-4xl font-serif tracking-widest relative mb-6 sm:mb-8 z-10">
            AGENT OF THE YEAR 2025
            <span className="absolute -left-1 -z-10 -bottom-6 sm:-bottom-8 text-5xl sm:text-6xl md:text-[60px] lg:text-[80px] font-light opacity-3 tracking-normal select-none hidden sm:block">
              2025
            </span>
          </h1>
          
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h2 className="text-lg font-medium text-yellow-800 mb-2">
              🏆 RateMyAgent&apos;s Prestigious Recognition
            </h2>
            <p className="text-sm text-yellow-700">
              Kelly Baldwin has been named RateMyAgent&apos;s Agent of the Year 2025, 
              recognizing her exceptional dedication to customer service and 
              outstanding sales performance.
            </p>
          </div>
          
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            This prestigious award celebrates real estate professionals who go 
            above and beyond for their clients. Unlike other industry awards that 
            focus solely on transaction volume, RateMyAgent Awards prioritize 
            customer satisfaction and service excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className={buttonVariants({ variant: "default" })}
              href="/contact"
            >
              Work With Kelly
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/awards"
            >
              View All Awards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 