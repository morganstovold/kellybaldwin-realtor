import { Camera, Globe, Share2, Users, MapPin, TrendingUp } from "lucide-react";

const marketingFeatures = [
  {
    icon: Camera,
    title: "Professional Photography",
    description: "High-quality photos and virtual tours that showcase your home's best features"
  },
  {
    icon: Globe,
    title: "MLS & Online Exposure",
    description: "Maximum visibility on all major real estate websites and platforms"
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Targeted social media campaigns to reach potential buyers in your area"
  },
  {
    icon: Users,
    title: "Open Houses & Showings",
    description: "Strategic open houses and private showings to generate qualified interest"
  },
  {
    icon: MapPin,
    title: "Local Network",
    description: "Leverage my extensive local network of agents and potential buyers"
  },
  {
    icon: TrendingUp,
    title: "Market Analytics",
    description: "Track performance and adjust strategy based on real-time market data"
  }
];

export default function SellerMarketing() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              COMPREHENSIVE MARKETING
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your home deserves maximum exposure. I use a multi-channel marketing 
              approach to ensure your property reaches qualified buyers quickly.
            </p>
          </div>

          {/* Marketing Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {marketingFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-serif tracking-wider mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Marketing Results */}
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-serif tracking-wider text-center mb-8">
              PROVEN MARKETING RESULTS
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                  98%
                </div>
                <div className="text-gray-600 text-sm tracking-wider uppercase">
                  Of List Price
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                  18 Days
                </div>
                <div className="text-gray-600 text-sm tracking-wider uppercase">
                  Average on Market
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                  200+
                </div>
                <div className="text-gray-600 text-sm tracking-wider uppercase">
                  Homes Sold
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                  95%
                </div>
                <div className="text-gray-600 text-sm tracking-wider uppercase">
                  Seller Satisfaction
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My comprehensive marketing strategy consistently delivers results above market averages. 
                From professional presentation to strategic pricing and targeted buyer outreach, 
                every aspect is designed to sell your home quickly and for top dollar.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Digital Excellence</h4>
                  <p className="text-gray-600 text-sm">
                    Professional photography, virtual tours, and premium online listings 
                    that make your home stand out from the competition.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Strategic Pricing</h4>
                  <p className="text-gray-600 text-sm">
                    Data-driven pricing strategy based on current market conditions 
                    and comparable sales to maximize your return.
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