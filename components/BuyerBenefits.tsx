import { Shield, MapPin, TrendingUp, Users, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Local Market Expertise",
    description: "Deep knowledge of Bay Area neighborhoods, schools, commute patterns, and market trends to help you make informed decisions."
  },
  {
    icon: Shield,
    title: "Buyer Advocacy",
    description: "I represent YOUR interests throughout the process, from offer strategy to contract negotiations and closing coordination."
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Comprehensive market reports and comparable sales data to ensure you're making competitive yet strategic offers."
  },
  {
    icon: Users,
    title: "Professional Network",
    description: "Access to my trusted network of lenders, inspectors, contractors, and other professionals to support your purchase."
  },
  {
    icon: Clock,
    title: "Responsive Communication",
    description: "Quick responses to your questions and updates throughout the process because timing is critical in real estate."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of experience helping buyers navigate competitive markets and secure homes at the best possible terms."
  }
];

export default function BuyerBenefits() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              WHY BUYERS CHOOSE KELLY
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When you work with me, you&apos;re getting more than just a real estate agent—
              you&apos;re gaining a dedicated advocate and trusted advisor.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-serif tracking-wider mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* First-Time Buyer Section */}
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-gray-200">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-serif tracking-wider mb-6">
                FIRST-TIME BUYER SPECIALIST
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Buying your first home can feel overwhelming, but it doesn&apos;t have to be. 
                I specialize in guiding first-time buyers through every step of the process, 
                explaining everything in detail and ensuring you feel confident and informed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Education First</h4>
                  <p className="text-gray-600 text-sm">
                    I&apos;ll teach you about the market, financing options, and what to expect 
                    so you can make informed decisions.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Patient Guidance</h4>
                  <p className="text-gray-600 text-sm">
                    No question is too small. I&apos;m here to support you with patience 
                    and understanding throughout your journey.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-lg tracking-wider mb-3">Lifetime Support</h4>
                  <p className="text-gray-600 text-sm">
                    My relationship with you doesn&apos;t end at closing. I&apos;m here for 
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