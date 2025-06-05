import Image from "next/image";
import Link from "next/link";
import { Award, Star, TrendingUp } from "lucide-react";

const awards = [
  {
    id: "top20",
    title: "Top 20 Agent in the Nation",
    description: "Recognized for being in the Top 20% for customer satisfaction.",
    image: "/recognition-top20.svg",
  },
  {
    id: "trusted",
    title: "Trusted Agent Award",
    description:
      "Asks all customers for reviews whether positive or negative which may result in a more representative star rating.",
    image: "/recognition-trusted.svg",
  },
  {
    id: "priceExpert",
    title: "Price Expert Award",
    description:
      "Consistently meets client expectations for property purchase price.",
    image: "/recognition-priceExpert.svg",
  },
];

interface AwardsProps {
  variant?: "homepage" | "about" | "full";
  showHeader?: boolean;
}

export default function Awards({ variant = "full" }: AwardsProps) {
  if (variant === "homepage") {
    return (
      <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-600" />
            <h3 className="text-lg font-serif tracking-wider">
              RateMyAgent Awards
            </h3>
          </div>
          <Link
            href="/awards"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="flex justify-center space-x-4">
          {awards.slice(0, 3).map((award) => (
            <div
              key={award.id}
              className="group cursor-pointer"
              title={award.title}
            >
              <div className="w-16 h-16 relative">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 mr-1" />
            Agent of the Year 2025
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Featured Award Banner */}
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-8 mb-12 lg:mb-16 text-center">
            <div className="inline-flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4 mr-2" />
              LATEST ACHIEVEMENT
            </div>
            <h3 className="text-2xl lg:text-3xl font-serif tracking-wider mb-2">
              RateMyAgent Agent of the Year 2025
            </h3>
            <p className="text-gray-700 mb-4">
              Awarded for exceptional dedication to customer service and
              outstanding sales performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                href="/awards/agent-of-the-year-2025"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Read Full Media Release
                <TrendingUp className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center group hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-serif tracking-wider mb-2">
                  {award.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {award.description}
                </p>
              </div>
            ))}
          </div>

          {/* About RateMyAgent */}
          <div className="mt-12 lg:mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-serif tracking-wider text-center mb-4">
              About RateMyAgent Awards
            </h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              The RateMyAgent Awards recognize the nation&apos;s top real estate
              agents based on customer satisfaction ratings and overall sales
              performance. Unlike other industry awards that focus solely on
              transaction volume, these awards prioritize client reviews and
              customer service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
