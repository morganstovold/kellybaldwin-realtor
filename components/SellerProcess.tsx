import { Calculator, Camera, Users, FileText, Key, HandHeart, TrendingUp, Clipboard } from "lucide-react";

const sellingSteps = [
  {
    step: "01",
    icon: Calculator,
    title: "Comprehensive Market Analysis & Pricing Strategy",
    description: "We'll start with a detailed analysis of your home's value and develop a strategic pricing approach that maximizes your return.",
    details: [
      "Conduct a comprehensive comparative market analysis (CMA) using recent sales, active listings, and pending properties",
      "Evaluate your home's unique features, condition, and improvements that add value",
      "Analyze current market conditions, inventory levels, and buyer demand in your area",
      "Review pricing strategies: competitive pricing vs. premium pricing based on market conditions",
      "Discuss the relationship between price, marketing time, and final sale price",
      "Factor in your timeline, motivation, and financial goals to determine optimal list price",
      "Provide detailed market report with supporting data and recommended pricing strategy"
    ],
    timeline: "1-2 days",
    tip: "Pricing is the most important factor in marketing your home. A strategic price based on solid market data will generate more activity and often result in higher offers."
  },
  {
    step: "02", 
    icon: Camera,
    title: "Prepare Your Home for Maximum Market Appeal",
    description: "We'll enhance your home's presentation through staging, photography, and strategic improvements to attract qualified buyers.",
    details: [
      "Conduct detailed pre-listing consultation to identify improvement opportunities",
      "Provide staging recommendations to showcase your home's best features and maximize space",
      "Coordinate professional photography with high-quality equipment and optimal lighting",
      "Arrange virtual tours, floor plans, and aerial photography when beneficial",
      "Advise on cost-effective improvements that provide strong return on investment",
      "Handle all necessary inspections and disclosures to avoid delays later",
      "Create compelling listing description highlighting your home's unique selling points"
    ],
    timeline: "1-2 weeks",
    tip: "First impressions matter enormously. Investing in professional presentation can increase your sale price by thousands of dollars and reduce time on market."
  },
  {
    step: "03",
    icon: Users,
    title: "Launch Strategic Marketing Campaign",
    description: "Your home will be marketed through multiple channels to reach the largest pool of qualified buyers and maximize exposure.",
    details: [
      "List on MLS with complete information, professional photos, and detailed descriptions",
      "Syndicate to major real estate websites: Zillow, Realtor.com, Redfin, and more",
      "Implement targeted social media marketing on Facebook, Instagram, and LinkedIn",
      "Create custom property website with virtual tours and detailed information",
      "Design and distribute professional marketing materials and brochures",
      "Host open houses and private showings scheduled around your preferences",
      "Network with other agents and reach out to potential buyers in my database"
    ],
    timeline: "Ongoing during listing period",
    tip: "Today's buyers start their search online. Professional marketing materials and broad online exposure are essential to attract serious buyers quickly."
  },
  {
    step: "04",
    icon: HandHeart,
    title: "Manage Showings & Negotiate Winning Offers",
    description: "I'll coordinate all buyer activity and negotiate offers to secure the best possible terms and price for your home.",
    details: [
      "Schedule and coordinate showings around your availability and preferences",
      "Provide feedback from buyers and agents to gauge market response",
      "Present all offers promptly with detailed analysis and recommendations",
      "Negotiate price, terms, contingencies, and closing timeline to maximize your benefit",
      "Handle multiple offer situations strategically to create competitive bidding",
      "Review buyer qualifications, financing, and ability to close successfully",
      "Manage counteroffers and negotiations to reach acceptable terms for both parties"
    ],
    timeline: "2-6 weeks (varies by market conditions)",
    tip: "Not all offers are equal. I'll help you evaluate the complete package - price, terms, financing, and buyer strength - to choose the best offer."
  },
  {
    step: "05",
    icon: FileText,
    title: "Navigate Contract to Closing Successfully",
    description: "Once we accept an offer, I'll manage all aspects of the transaction to ensure a smooth closing that protects your interests.",
    details: [
      "Review and manage all contract contingencies and deadlines",
      "Coordinate buyer's inspection process and handle any repair negotiations",
      "Monitor appraisal process and provide supporting documentation if needed",
      "Ensure buyer's financing stays on track and communicate with their lender",
      "Handle title and escrow coordination, reviewing all documents for accuracy",
      "Manage any issues that arise and provide solutions to keep the transaction moving",
      "Prepare for final walk-through and coordinate any last-minute requirements"
    ],
    timeline: "30-45 days after offer acceptance",
    tip: "This period requires careful management of deadlines and details. I'll keep you informed of progress and handle any challenges that arise."
  },
  {
    step: "06",
    icon: Key,
    title: "Close Successfully & Transition Planning",
    description: "We'll handle all final closing details and help you plan your transition, whether you're buying another home or relocating.",
    details: [
      "Review final settlement statements and closing documents for accuracy",
      "Coordinate moving logistics and timeline with your closing date",
      "Ensure all agreed-upon repairs and requirements are completed before closing",
      "Handle final walk-through with buyers to confirm property condition",
      "Attend closing to review documents and ensure proper fund disbursement",
      "Provide you with all necessary documentation and warranty information",
      "Assist with 1031 exchanges or coordination with your next home purchase if applicable"
    ],
    timeline: "1-2 days",
    tip: "Proper coordination ensures a stress-free closing. I'll handle all the details so you can focus on your next chapter."
  }
];

export default function SellerProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              COMPLETE HOME SELLING GUIDE
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive step-by-step guide to selling your home successfully. Each step includes 
              detailed information, timelines, and expert strategies to maximize your return.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12">
            {sellingSteps.map((step, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Step Header */}
                <div className="bg-gray-50 px-8 py-6">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-serif text-gray-400 mr-4">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif tracking-wider">
                        {step.title}
                      </h3>
                    </div>
                    <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                      {step.timeline}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Details */}
                <div className="px-8 py-6">
                  <h4 className="font-serif text-lg tracking-wider mb-4">What This Involves:</h4>
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Expert Tip */}
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r">
                    <h5 className="font-medium text-green-900 mb-1">Expert Tip:</h5>
                    <p className="text-green-800 text-sm leading-relaxed">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Market Stats Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif tracking-wider mb-8 text-center">
              TYPICAL SELLING TIMELINE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl font-serif text-black mb-2">1-2 Weeks</div>
                <div className="text-gray-600 font-medium mb-2">Preparation Phase</div>
                <div className="text-gray-700 text-sm">
                  Market analysis, staging, photography, and listing preparation
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-black mb-2">2-6 Weeks</div>
                <div className="text-gray-600 font-medium mb-2">Active Marketing</div>
                <div className="text-gray-700 text-sm">
                  Showings, open houses, offer negotiations, and contract acceptance
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-black mb-2">4-6 Weeks</div>
                <div className="text-gray-600 font-medium mb-2">Closing Process</div>
                <div className="text-gray-700 text-sm">
                  Inspections, appraisals, financing, and closing coordination
                </div>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="text-center border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-serif tracking-wider mb-4">
                Ready to Sell Your Home?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
                Let's discuss your goals and create a personalized strategy to sell your home 
                for the best possible price in today's market.
              </p>
              <a 
                href="tel:+17073196392" 
                className="inline-flex items-center px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Contact Kelly Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 