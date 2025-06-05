import Image from "next/image";
import { Button } from "@/components/ui/button";
import Kelly from "@/public/kelly-3.webp";

export default function MeetKelly() {
  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 justify-between lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-serif tracking-widest mb-4">
              MEET KELLY BALDWIN
            </h2>
            <div className="w-24 h-0.5 bg-black"></div>
            <p className="text-xl text-gray-600 mt-4 italic">
              &quot;The Dedicated Realtor Making a Difference in Her Community&quot;
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Meet Kelly Baldwin, a third-generation Realtor and now a branch manager for 
              eXp Realty in Benicia. With a career spanning years of dedication, Kelly has 
              established herself as a trustworthy and passionate real estate professional.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Her journey began in the mortgage industry in 2001, providing her with a solid 
              foundation in finance before transitioning into commercial real estate with a 
              focus on 1031 Exchanges. However, it was in residential real estate where she 
              found her true calling, helping turn houses into homes and dreams into reality.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              For over 30 years, Kelly has cherished her life in the picturesque town of 
              Benicia, where she lives with her supportive husband, James, and their two 
              wonderful children, James and Emily.
            </p>
          </div>
          {/* Professional Highlights */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-2">30+ Years</h3>
              <p className="text-gray-600">Benicia Resident</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">eXp Realty</h3>
              <p className="text-gray-600">Branch Manager</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">3rd Generation</h3>
              <p className="text-gray-600">Realtor</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">Community</h3>
              <p className="text-gray-600">Volunteer</p>
            </div>
          </div>
          <Button size="lg" className="mt-8">
            About Kelly
          </Button>
        </div>

        <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={Kelly}
            alt="Kelly Baldwin - Professional Headshot"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
