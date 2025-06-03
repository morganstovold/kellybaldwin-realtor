import { Calculator, FileText, MapPin, TrendingUp, Book, Users } from "lucide-react";

const resources = [
  {
    icon: Calculator,
    title: "Mortgage Calculator",
    description: "Calculate monthly payments and determine what you can afford",
    action: "Use Calculator"
  },
  {
    icon: FileText,
    title: "First-Time Buyer Guide",
    description: "Comprehensive guide covering the entire home buying process",
    action: "Download Guide"
  },
  {
    icon: MapPin,
    title: "Neighborhood Guides", 
    description: "Detailed information about Bay Area communities and amenities",
    action: "Explore Areas"
  },
  {
    icon: TrendingUp,
    title: "Market Reports",
    description: "Current market conditions and trends in your area of interest",
    action: "View Reports"
  },
  {
    icon: Book,
    title: "Buyer Checklist",
    description: "Step-by-step checklist to keep your home search organized",
    action: "Get Checklist"
  },
  {
    icon: Users,
    title: "Lender Network",
    description: "Trusted mortgage professionals for pre-qualification",
    action: "Get Connected"
  }
];

export default function BuyerResources() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              BUYER RESOURCES
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access helpful tools, guides, and resources to support your 
              home buying journey and make informed decisions.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                  <resource.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-serif tracking-wider mb-4">
                  {resource.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {resource.description}
                </p>
                <button className="text-black font-medium hover:underline">
                  {resource.action} →
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-serif tracking-wider text-center mb-12">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h4 className="font-serif text-lg tracking-wider mb-3">
                  How much do I need for a down payment?
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Down payment requirements vary by loan type. Conventional loans can be as low as 3%, 
                  FHA loans 3.5%, and VA loans 0% for qualified veterans. I'll help you explore all options.
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-lg tracking-wider mb-3">
                  What are closing costs?
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Closing costs typically range from 2-5% of the purchase price and include fees for 
                  inspections, appraisals, title insurance, and loan processing.
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-lg tracking-wider mb-3">
                  How long does the buying process take?
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  From accepted offer to closing typically takes 30-45 days. Finding the right home 
                  can take anywhere from a few weeks to several months depending on your criteria.
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-lg tracking-wider mb-3">
                  Should I get pre-approved?
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Absolutely! Pre-approval shows sellers you're serious and can close the deal. 
                  It also helps you understand your budget and shop with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 