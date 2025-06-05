import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Kelly from "@/public/kelly-3.webp";
import Link from "next/link";
import Awards from "./Awards";

export default function MeetKelly() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif tracking-widest mb-4">
                MEET KELLY BALDWIN
              </h2>
              <div className="w-24 h-0.5 bg-black"></div>
              <p className="text-xl text-gray-600 mt-4 italic">
                &quot;The Dedicated Realtor Making a Difference in Her
                Community&quot;
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Kelly Baldwin is a third-generation Realtor and branch manager
                for eXp Realty of California, Inc in Benicia. With experience
                spanning from mortgage and commercial real estate to residential
                homes, she&apos;s passionate about helping turn houses into
                homes and dreams into reality.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                A 30-year Benicia resident, Kelly lives with her husband James
                and their two children, deeply rooted in the community they
                serve.
              </p>
            </div>
            {/* Professional Highlights */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-serif mb-2">30+ Years</h3>
                <p className="text-gray-600">Benicia Resident</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2">
                  eXp Realty of California, Inc
                </h3>
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
            <Link className={buttonVariants()} href="/about">
              About Kelly
            </Link>

            <Awards variant="homepage" />
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
      </div>
    </section>
  );
}
