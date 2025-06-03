import { Search, FileText, Home, Key, HandHeart, CheckCircle } from "lucide-react";

const buyingSteps = [
  {
    step: "01",
    icon: FileText,
    title: "Get Pre-Qualified",
    description: "We'll connect you with trusted lenders to determine your budget and strengthen your offers."
  },
  {
    step: "02", 
    icon: Search,
    title: "Search & Tour Homes",
    description: "Using my deep local knowledge, we'll identify properties that match your criteria and schedule private showings."
  },
  {
    step: "03",
    icon: HandHeart,
    title: "Make an Offer",
    description: "I'll help you craft competitive offers with strategic terms to stand out in today's market."
  },
  {
    step: "04",
    icon: Home,
    title: "Under Contract",
    description: "Navigate inspections, appraisals, and negotiations while I protect your interests every step of the way."
  },
  {
    step: "05",
    icon: Key,
    title: "Close & Celebrate",
    description: "Complete the final walkthrough, sign documents, and receive the keys to your new home!"
  },
  {
    step: "06",
    icon: CheckCircle,
    title: "Ongoing Support",
    description: "My service doesn't end at closing. I'm here for life with home maintenance tips and market updates."
  }
];

export default function BuyerProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              THE BUYING PROCESS
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'll guide you through every step of the home buying process, ensuring 
              you feel confident and informed from start to finish.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyingSteps.map((step, index) => (
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
                {index < buyingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-serif tracking-wider mb-4">
              READY TO START YOUR HOME SEARCH?
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Every successful home purchase starts with understanding your needs, budget, 
              and timeline. Let's schedule a consultation to discuss your goals and create 
              a personalized plan for finding your perfect home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Schedule Buyer Consultation
              </button>
              <button className="px-8 py-3 border border-black text-black rounded-md hover:bg-gray-50 transition-colors">
                Download Buyer Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 