import Image from "next/image";
import { Button } from "@/components/ui/button";
import Kelly from "@/public/kelly-3.webp";

export default function MeetKelly() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 justify-between lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-serif tracking-widest mb-4">
              MEET KELLY BALDWIN
            </h2>
            <div className="w-24 h-0.5 bg-black"></div>
            <p className="text-xl text-gray-600 mt-4 italic">
              &quot;Turning Houses into Homes, One Key at a Time.&quot;
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Meet your Real Estate and home expert in the greater Bay Area.
              Kelly is a Solano County native and has lived in the greater Bay
              Area for her entire life. A community expert and knowledgeable
              with all of the great neighborhoods, local businesses and schools.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Kelly&apos;s deep-rooted connection to the Bay Area, combined with her
              passion for helping families find their perfect home, makes her an
              invaluable partner in your real estate journey. She understands
              that buying or selling a home is one of life&apos;s most significant
              decisions, and she&apos;s committed to making the process enjoyable and
              stress-free while securing the best possible outcome for her
              clients.
            </p>
          </div>

          {/* Professional Highlights */}
          <div className="grid grid-cols-2 gap-8 w-full">
            <div>
              <h3 className="text-2xl font-serif mb-2">Bay Area</h3>
              <p className="text-gray-600">Native & Expert</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">Solano County</h3>
              <p className="text-gray-600">Local Specialist</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">100%</h3>
              <p className="text-gray-600">Client Focused</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-2">Lifetime</h3>
              <p className="text-gray-600">Bay Area Resident</p>
            </div>
          </div>

          <Button size="lg" className="mt-8">
            Learn More About Kelly
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
