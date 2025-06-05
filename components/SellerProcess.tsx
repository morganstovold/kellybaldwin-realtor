import { Calculator, Camera, Users, FileText, Key, HandHeart } from "lucide-react";

const sellingSteps = [
  {
    step: "01",
    icon: Calculator,
    title: "Home Valuation & Pricing",
    description: "Comprehensive market analysis to determine your home's optimal listing price and develop a pricing strategy."
  },
  {
    step: "02", 
    icon: Camera,
    title: "Prepare Your Home",
    description: "Professional photography, staging consultation, and creating compelling marketing materials to showcase your home."
  },
  {
    step: "03",
    icon: Users,
    title: "Marketing & Exposure",
    description: "List on MLS and launch a multi-channel marketing campaign to reach the largest pool of qualified buyers."
  },
  {
    step: "04",
    icon: HandHeart,
    title: "Showings & Negotiations",
    description: "Coordinate showings, present offers, and negotiate terms to secure the best possible deal for your home."
  },
  {
    step: "05",
    icon: FileText,
    title: "Under Contract",
    description: "Navigate inspections, appraisals, and buyer requirements while protecting your interests through closing."
  },
  {
    step: "06",
    icon: Key,
    title: "Successful Closing",
    description: "Handle final details, coordinate the closing process, and celebrate your successful sale!"
  }
];

export default function SellerProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              THE HOME SELLING PROCESS
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to closing day, I'll guide you through 
              every step to ensure a smooth and successful sale.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellingSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-lg p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl font-serif text-gray-300 mr-4">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif tracking-wider mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line for larger screens */}
                {index < sellingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Market Results Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-serif tracking-wider mb-6">
                PROVEN RESULTS FOR SELLERS
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                My strategic approach to pricing, marketing, and negotiation consistently 
                delivers exceptional results for my sellers in the Bay Area market.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Strategic Pricing</h4>
                  <p className="text-gray-600 text-sm">
                    Data-driven market analysis ensures your home is priced 
                    competitively to attract serious buyers and maximize value.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Maximum Exposure</h4>
                  <p className="text-gray-600 text-sm">
                    Professional marketing across all major platforms reaches 
                    the largest pool of qualified buyers for your home.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Expert Negotiation</h4>
                  <p className="text-gray-600 text-sm">
                    Skilled negotiation and market knowledge help secure 
                    the best possible terms and price for your sale.
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