import { Search, FileText, Home, Key, HandHeart, CheckCircle } from "lucide-react";

const buyingSteps = [
  {
    step: "01",
    icon: FileText,
    title: "Define Your Needs & Budget",
    description: "Determine your priorities, must-haves vs. nice-to-haves, and establish a realistic budget for your home purchase."
  },
  {
    step: "02", 
    icon: Search,
    title: "Get Pre-Approved",
    description: "Work with a trusted lender to get pre-approved for a mortgage and understand your financing options."
  },
  {
    step: "03",
    icon: Home,
    title: "Search & Tour Homes",
    description: "Use online tools and work with me to find and tour properties that match your criteria and budget."
  },
  {
    step: "04",
    icon: HandHeart,
    title: "Make an Offer",
    description: "When you find the right home, I'll help you craft a competitive offer and negotiate the best terms."
  },
  {
    step: "05",
    icon: CheckCircle,
    title: "Inspections & Due Diligence",
    description: "Conduct thorough inspections and review all documents to ensure you're making a sound investment."
  },
  {
    step: "06",
    icon: Key,
    title: "Close on Your Home",
    description: "Finalize all paperwork, complete the transaction, and receive the keys to your new home!"
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
              THE HOME BUYING PROCESS
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purchasing a home is one of life's most significant investments. I'll guide you 
              through every step to make the process smooth and successful.
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

          {/* First-Time Buyers Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-serif tracking-wider mb-6">
                FIRST-TIME BUYER SPECIALIST
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Buying your first home can feel overwhelming, but it doesn't have to be. 
                I specialize in guiding first-time buyers through every step, explaining 
                everything in detail so you feel confident and informed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Patient Guidance</h4>
                  <p className="text-gray-600 text-sm">
                    No question is too small. I'm here to support you with patience 
                    and understanding throughout your journey.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Local Expertise</h4>
                  <p className="text-gray-600 text-sm">
                    Deep knowledge of Bay Area neighborhoods, schools, and market 
                    trends to help you make informed decisions.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Lifetime Support</h4>
                  <p className="text-gray-600 text-sm">
                    My relationship with you doesn't end at closing. I'm here for 
                    ongoing advice and future real estate needs.
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