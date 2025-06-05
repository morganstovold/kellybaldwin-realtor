import { Search, FileText, Home, Key, HandHeart, CheckCircle, Users, Calculator } from "lucide-react";

const buyingSteps = [
  {
    step: "01",
    icon: FileText,
    title: "Get Pre-Qualified & Understand Your Budget",
    description: "Before you start looking at homes, it's crucial to understand exactly what you can afford and get pre-qualified with a lender.",
    details: [
      "I'll connect you with trusted local lenders who offer competitive rates and excellent service",
      "Review your credit score, income, debts, and assets to determine your buying power",
      "Get pre-qualified for a specific loan amount with a pre-qualification letter",
      "Understand different loan types: conventional, FHA, VA, jumbo, and first-time buyer programs",
      "Calculate your monthly payment including principal, interest, taxes, insurance, and HOA fees",
      "Factor in closing costs (typically 2-3% of purchase price) and moving expenses",
      "Determine your down payment options - from 3% conventional to 0% VA loans"
    ],
    timeline: "1-3 days",
    tip: "Getting pre-qualified first shows sellers you're serious and gives you confidence when making offers in competitive markets."
  },
  {
    step: "02", 
    icon: Search,
    title: "Define Your Needs & Start Your Home Search",
    description: "Together, we'll create a detailed profile of your ideal home and begin the search process using my extensive market knowledge.",
    details: [
      "Complete a detailed buyer consultation to understand your must-haves vs. nice-to-haves",
      "Discuss preferred neighborhoods, school districts, commute requirements, and lifestyle needs",
      "Set up custom MLS searches that automatically notify you of new listings matching your criteria",
      "Review market trends and recent sales in your target areas to set realistic expectations",
      "Schedule private showings and coordinate tours around your availability",
      "Provide detailed neighborhood insights including walkability, amenities, and future development plans",
      "Access off-market and coming-soon properties through my professional network"
    ],
    timeline: "2-8 weeks (varies by market and preferences)",
    tip: "The Bay Area market moves fast. Being flexible on timing and having clear priorities helps you act quickly when the right home appears."
  },
  {
    step: "03",
    icon: HandHeart,
    title: "Make Strategic Offers That Win",
    description: "When you find 'the one,' I'll help you craft a competitive offer with strategic terms that stand out to sellers.",
    details: [
      "Analyze recent comparable sales and current market conditions to determine offer price",
      "Structure offer terms strategically: price, contingencies, closing timeline, and earnest money",
      "Include personal touches like buyer letters when appropriate and effective",
      "Navigate escalation clauses and backup offer strategies in competitive situations",
      "Negotiate inspection periods, appraisal contingencies, and financing timelines",
      "Coordinate with your lender to ensure financing contingency dates are realistic",
      "Present offers professionally with complete documentation and quick response times"
    ],
    timeline: "1-3 days per offer",
    tip: "In competitive markets, it's not always the highest offer that wins. Terms, timing, and presentation matter just as much as price."
  },
  {
    step: "04",
    icon: Home,
    title: "Navigate the Contract Period Successfully",
    description: "Once your offer is accepted, we'll manage all contingencies and requirements to protect your interests through closing.",
    details: [
      "Order and coordinate professional home inspections within the specified timeframe",
      "Review inspection reports and advise on repair requests or renegotiation strategies",
      "Monitor appraisal process and address any valuation concerns with supporting data",
      "Ensure your lender stays on track with underwriting and loan processing requirements",
      "Review and approve HOA documents, CC&Rs, and any applicable disclosures",
      "Coordinate final walk-through inspection 24-48 hours before closing",
      "Handle any last-minute issues or requirements that arise during escrow"
    ],
    timeline: "30-45 days typically",
    tip: "This period requires careful attention to deadlines. I'll create a timeline and keep you informed of all important dates and requirements."
  },
  {
    step: "05",
    icon: Key,
    title: "Close on Your New Home",
    description: "We'll handle all final details to ensure a smooth closing and successful transfer of ownership.",
    details: [
      "Review final closing disclosure (CD) and settlement statements for accuracy",
      "Coordinate final walk-through to ensure property condition meets contract terms",
      "Attend closing appointment with you to review and sign all necessary documents",
      "Ensure all closing costs and funds are properly allocated and documented",
      "Verify that all seller requirements and repairs have been completed as agreed",
      "Coordinate key transfer, garage remotes, and any access codes or security information",
      "Provide you with important contact information for utilities, services, and warranties"
    ],
    timeline: "1-2 days",
    tip: "The final walk-through is your last chance to identify any issues. We'll make sure everything is exactly as it should be before you sign."
  },
  {
    step: "06",
    icon: CheckCircle,
    title: "Ongoing Support & Home Ownership Success",
    description: "My commitment to you doesn't end at closing. I'm here to support your long-term homeownership success.",
    details: [
      "Provide resources for home maintenance, local contractors, and service providers",
      "Send periodic market updates showing your home's current estimated value",
      "Offer guidance on home improvements that add value and enhance your lifestyle",
      "Assist with refinancing decisions when market conditions make it beneficial",
      "Help evaluate whether to stay, refinance, or sell when your needs change",
      "Provide referrals to my trusted network of professionals for ongoing home needs",
      "Serve as your real estate resource for friends and family members"
    ],
    timeline: "Lifetime relationship",
    tip: "Homeownership is a journey, not just a transaction. I'm here to help you make smart decisions and maximize your investment over time."
  }
];

export default function BuyerProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              COMPLETE HOME BUYING GUIDE
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive step-by-step guide to help you navigate the home buying process 
              with confidence. Each step includes detailed information, timelines, and expert tips.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-12">
            {buyingSteps.map((step, index) => (
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
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                    <h5 className="font-medium text-blue-900 mb-1">Expert Tip:</h5>
                    <p className="text-blue-800 text-sm leading-relaxed">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif tracking-wider mb-4">
              Ready to Start Your Home Buying Journey?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Every successful home purchase starts with the right guidance. Let's discuss your goals 
              and create a personalized plan for finding and securing your perfect home.
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
    </section>
  );
} 