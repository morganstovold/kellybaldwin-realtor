import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, TrendingUp } from "lucide-react";
import MediaReleaseHero from "@/components/MediaReleaseHero";

export const metadata = {
  title:
    "Kelly Baldwin Wins RateMyAgent's Agent of the Year Award 2025 | Media Release",
  description:
    "Kelly Baldwin has been named RateMyAgent's Agent of the Year 2025, recognizing her dedication to exceptional customer service and sales performance.",
};

export default function AgentOfTheYearMediaRelease() {
  return (
    <div className="min-h-screen bg-white">
      <MediaReleaseHero />

      {/* Main Content */}
      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-serif tracking-wider mb-8">
          Kelly Baldwin Wins RateMyAgent&apos;s
          <br />
          <span className="text-yellow-600">
            &quot;Benicia & Solano County Agent of the Year Award 2025&quot;
          </span>
        </h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p className="text-xl font-medium text-gray-900 mb-8">
            RateMyAgent – the easiest review marketing platform for real estate
            agents – has announced Kelly Baldwin as the winner of the Agent of
            the Year Award 2025.
          </p>

          <p>
            The fifth annual awards ceremony was held yesterday (March 5th)
            virtually over Zoom, with RateMyAgent CEO Jim Crisera and US Chief
            Revenue Officer Stephanie Holtan as hosts.
          </p>

          <p>
            The RateMyAgent Awards recognizes the nation&apos;s top real estate
            agents and Realtors® and celebrates their dedication to the highest
            standards of customer service.
          </p>

          <p>
            The event is the only real estate industry wide awards where
            customer satisfaction is the cornerstone of the selection criteria,
            rather than solely transaction volume.
          </p>

          <p>
            Award winners and nominees are the most highly recommended
            performers by local sellers and buyers. They are selected based on
            customer satisfaction ratings across the country and overall sales
            performance.
          </p>

          <p>
            Eligibility for these awards is open to any real estate professional
            using the RateMyAgent platform for collecting client reviews,
            irrespective of whether they make use of RateMyAgent&apos;s
            extensive features.
          </p>

          {/* Quote Box */}
          <div className="bg-gray-50 border-l-4 border-yellow-500 p-6 my-8">
            <blockquote className="text-lg italic text-gray-800">
              &quot;The RateMyAgent Awards acknowledge real estate agents who go
              above and beyond for their clients,&quot;
            </blockquote>
            <cite className="text-sm text-gray-600 not-italic">
              — Jim Crisera, RateMyAgent CEO
            </cite>
          </div>

          <p>
            &quot;Performance-based reviews are essential in enabling agents to
            stand out, and they&apos;re also the main criteria toward receiving
            a RateMyAgent Award.&quot;
          </p>

          <p>
            &quot;We&apos;re striving to push the standard for customer service
            and tonight is about recognising your exceptional efforts.
            Congratulations to every winner and nominee of this year&apos;s
            awards. Your dedication to excellence is what drives this industry
            forward, and we can&apos;t wait for another year of raising the bar
            for real estate professionals nationwide,&quot; said Crisera.
          </p>

          {/* Kelly's Quote */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 my-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/kelly-3.webp"
                  alt="Kelly Baldwin"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <blockquote className="text-lg italic text-gray-800 mb-3">
                  &quot;I am truly honored to receive this recognition from
                  RateMyAgent. This award reflects not just my dedication, but
                  the trust my clients have placed in me throughout my career.
                  As a third-generation Realtor and 30-year Benicia resident,
                  helping families find their perfect home in our beautiful
                  community is more than just my profession—it&apos;s my
                  passion.&quot;
                </blockquote>
                <cite className="text-sm text-gray-600 not-italic font-medium">
                  — Kelly Baldwin, Branch Manager - eXp Realty of California, Inc
                </cite>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Showcase */}
        <div className="mt-12 lg:mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif tracking-wider text-center mb-8">
            Kelly&apos;s RateMyAgent Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 relative">
                <Image
                  src="/recognition-top20.svg"
                  alt="Top 20 Agent Award"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-medium text-sm">Top 20 in Nation</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 relative">
                <Image
                  src="/recognition-trusted.svg"
                  alt="Trusted Agent Award"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-medium text-sm">Trusted Agent</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 relative">
                <Image
                  src="/recognition-priceExpert.svg"
                  alt="Price Expert Award"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-medium text-sm">Price Expert</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-medium text-sm">Agent of the Year 2025</h3>
            </div>
          </div>
        </div>

        {/* Contact/About Section */}
        <div className="mt-12 lg:mt-16 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-xl font-serif tracking-wider text-center mb-6">
            About Kelly Baldwin
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-gray-600 mb-2" />
              <h3 className="font-medium mb-1">Experience</h3>
              <p className="text-sm text-gray-600">
                Third-generation Realtor
                <br />
                30-year Benicia resident
              </p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-8 h-8 text-gray-600 mb-2" />
              <h3 className="font-medium mb-1">Expertise</h3>
              <p className="text-sm text-gray-600">
                Branch Manager - eXp Realty of California, Inc
                <br />
                560 1st Street B206, Benicia, CA 94510
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-gray-600 mb-2" />
              <h3 className="font-medium mb-1">Recognition</h3>
              <p className="text-sm text-gray-600">
                Multiple RateMyAgent Awards
                <br />
                Agent of the Year 2025
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Kelly
            </Link>
          </div>
        </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
