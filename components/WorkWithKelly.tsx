import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import BackgroundImage from "@/public/interior-1.webp";
import Link from "next/link";

export default function WorkWithKelly() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={BackgroundImage}
          alt="Kelly Baldwin Real Estate"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-serif tracking-widest mb-6">
          WORK WITH KELLY
        </h2>
        <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>

        <p className="text-xl md:text-2xl italic mb-4">
          &quot;Turning Houses into Homes, One Key at a Time&quot;
        </p>

        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Ready to make your Bay Area real estate dreams a reality? Let&apos;s
          start your journey today.
        </p>

        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/contact"
        >
          Contact Kelly
        </Link>
      </div>
    </section>
  );
}
