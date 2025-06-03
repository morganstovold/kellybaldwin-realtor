import Image from "next/image";
import KellyPhoto2 from "@/public/kelly-2.webp";

export default function AboutStory() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              MY STORY
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Born and raised in Solano County, I've witnessed firsthand the growth 
              and transformation of the Bay Area real estate market.
            </p>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={KellyPhoto2}
                  alt="Kelly Baldwin Professional"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-100 rounded-lg -z-10"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif tracking-wider mb-4">
                  A LIFELONG LOCAL
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Growing up in Solano County gave me an intimate understanding of 
                  what makes each neighborhood special. From the historic charm of 
                  Benicia to the family-friendly communities of Fairfield, I know 
                  the unique character and hidden gems of every area.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  My journey in real estate began with a simple belief: every family 
                  deserves to find not just a house, but a true home. This philosophy 
                  drives everything I do, from the initial consultation to handing 
                  over the keys.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif tracking-wider mb-4">
                  PASSION MEETS EXPERTISE
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With years of experience in the Bay Area market, I've helped 
                  hundreds of families navigate one of life's biggest decisions. 
                  Whether you're a first-time buyer, growing family, or looking 
                  to downsize, I bring the expertise and personal attention that 
                  makes all the difference.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I believe in building relationships that last long after closing day. 
                  Many of my clients have become lifelong friends, and there's nothing 
                  more rewarding than seeing families thrive in their new homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 