import { BarChart3, TrendingUp, Calculator, MapPin, Clock, Target } from "lucide-react";

const pricingFactors = [
  {
    icon: BarChart3,
    title: "Comparative Market Analysis",
    description: "Detailed analysis of recent sales of similar properties in your neighborhood"
  },
  {
    icon: TrendingUp,
    title: "Current Market Trends",
    description: "Real-time market conditions, inventory levels, and buyer demand patterns"
  },
  {
    icon: Calculator,
    title: "Property Condition Assessment",
    description: "Evaluation of your home's unique features, upgrades, and condition"
  },
  {
    icon: MapPin,
    title: "Location Premium",
    description: "Impact of schools, amenities, commute access, and neighborhood desirability"
  },
  {
    icon: Clock,
    title: "Timing Strategy",
    description: "Optimal listing timing based on seasonal patterns and market cycles"
  },
  {
    icon: Target,
    title: "Pricing Psychology",
    description: "Strategic pricing to attract maximum buyer interest and competition"
  }
];

export default function SellerPricing() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              STRATEGIC PRICING
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pricing your home correctly from the start is crucial for a successful sale. 
              I use comprehensive market analysis and proven strategies to maximize your return.
            </p>
          </div>

          {/* Pricing Factors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pricingFactors.map((factor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                  <factor.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-serif tracking-wider mb-4">
                  {factor.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif tracking-wider mb-6">
                THE IMPORTANCE OF CORRECT PRICING
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-2 text-red-600">
                    Overpriced Homes
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Sit on market longer</li>
                    <li>• Become stale listings</li>
                    <li>• Eventually sell for less</li>
                    <li>• Generate fewer showings</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-2 text-green-600">
                    Correctly Priced Homes
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Generate immediate interest</li>
                    <li>• Attract multiple offers</li>
                    <li>• Sell closer to asking price</li>
                    <li>• Close faster with fewer issues</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
              <h4 className="text-xl font-serif tracking-wider mb-6 text-center">
                MY PRICING PROMISE
              </h4>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  I'll provide you with a comprehensive market analysis that includes:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Detailed comparable sales report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Current active competition analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Market trend projections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>Recommended pricing strategy</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-black font-medium italic">
                    "The right price attracts the right buyers and maximizes your return."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif tracking-wider mb-6">
              GET YOUR FREE HOME VALUATION
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Curious about your home's current market value? I'll provide a comprehensive 
              analysis with no obligation, so you can make informed decisions about your next move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Request Home Valuation
              </button>
              <button className="px-8 py-3 border border-black text-black rounded-md hover:bg-gray-50 transition-colors">
                Schedule Pricing Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 