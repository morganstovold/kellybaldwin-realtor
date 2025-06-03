import { Calculator, Camera, Users, FileText, Key, HandHeart } from "lucide-react";

const sellingSteps = [
  {
    step: "01",
    icon: Calculator,
    title: "Home Valuation",
    description: "Comprehensive market analysis to determine your home's optimal listing price."
  },
  {
    step: "02", 
    icon: Camera,
    title: "Marketing Preparation",
    description: "Professional photography, staging consultation, and creating compelling listing materials."
  },
  {
    step: "03",
    icon: Users,
    title: "Launch & Marketing",
    description: "List your home on MLS and launch multi-channel marketing campaign to reach qualified buyers."
  },
  {
    step: "04",
    icon: HandHeart,
    title: "Showings & Offers",
    description: "Coordinate showings, present offers, and negotiate terms to get you the best deal."
  },
  {
    step: "05",
    icon: FileText,
    title: "Under Contract",
    description: "Navigate inspections, appraisals, and buyer requirements while protecting your interests."
  },
  {
    step: "06",
    icon: Key,
    title: "Closing Success",
    description: "Handle final details, coordinate moving logistics, and celebrate your successful sale!"
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
              THE SELLING PROCESS
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

          {/* Timeline */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-serif tracking-wider mb-8">
              TYPICAL SELLING TIMELINE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-serif text-black mb-2">1-2 Weeks</div>
                <div className="text-gray-600 font-medium mb-2">Preparation</div>
                <div className="text-gray-700 text-sm">
                  Valuation, staging, photography, and marketing materials
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif text-black mb-2">2-6 Weeks</div>
                <div className="text-gray-600 font-medium mb-2">Active Marketing</div>
                <div className="text-gray-700 text-sm">
                  Showings, open houses, and offer negotiations
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif text-black mb-2">4-6 Weeks</div>
                <div className="text-gray-600 font-medium mb-2">Closing Process</div>
                <div className="text-gray-700 text-sm">
                  Inspections, appraisals, and final closing coordination
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors mr-4">
                Get Your Timeline
              </button>
              <button className="px-8 py-3 border border-black text-black rounded-md hover:bg-gray-50 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 