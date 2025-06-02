import Image from "next/image";
import KellyBaldwin from "@/public/interior-1.webp";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row">
      <div className="w-full relative">
        <Image
          src={KellyBaldwin}
          alt="Kelly Baldwin"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="text-5xl font-serif tracking-widest relative mb-12 z-10">
            KELLY BALDWIN
            <span className="absolute -left-1 -z-10 -bottom-12 text-[180px] font-light opacity-3 tracking-normal select-none">
              KELLY
            </span>
          </h1>
          <p className="text-lg">
            Kelly is legendary for making the loftiest real estate goals
            possible - with abundant good humor - from Penthouses on the Park to
            Brownstones in Brooklyn, and everything in between.
          </p>
          {/* buttons for learn more and contact */}
          <div className="flex gap-4">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
            <Button size="lg">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
