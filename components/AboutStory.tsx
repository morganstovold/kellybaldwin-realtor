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
              Third-generation Realtor with deep roots in Benicia and an
              unwavering commitment to community service.
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
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif tracking-wider mb-4">
                  A LIFELONG COMMITMENT
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  My real estate journey started in mortgage in 2001, providing
                  me with a solid foundation in finance before transitioning
                  into commercial real estate with a focus on 1031 Exchanges.
                  However, it was in residential real estate where I found my
                  true calling—helping families turn houses into homes and
                  dreams into reality.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For over 30 years, Benicia has been home to me, my husband
                  James, and our children James and Emily. Our home is filled
                  with laughter, love, and a deep sense of community that drives
                  everything I do.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Beyond real estate, I&apos;ve dedicated countless hours
                  volunteering with local organizations throughout Solano
                  County. This community involvement has given me an intimate
                  understanding of what makes each neighborhood special and
                  reinforced my passion for helping others find their perfect
                  place to call home.
                </p>
              </div>

              {/* Key Stats */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-serif text-black mb-1">
                      30+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years in Benicia
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-black mb-1">
                      3rd Gen
                    </div>
                    <div className="text-sm text-gray-600">Realtor Legacy</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-700 italic text-center">
                    &quot;Kelly&apos;s vibrant personality and professional
                    expertise make her a standout Realtor who goes above and
                    beyond for her clients and community.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
