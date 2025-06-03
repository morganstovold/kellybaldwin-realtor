import { Home, Key, TrendingUp, Users, MapPin, Heart } from "lucide-react";

const expertiseAreas = [
  {
    icon: Home,
    title: "First-Time Buyers",
    description: "Guiding new buyers through every step with patience and expertise, making the journey smooth and stress-free."
  },
  {
    icon: Key,
    title: "Luxury Homes",
    description: "Specializing in high-end properties with discretion, attention to detail, and white-glove service."
  },
  {
    icon: TrendingUp,
    title: "Investment Properties",
    description: "Helping investors identify profitable opportunities and build wealth through strategic real estate decisions."
  },
  {
    icon: Users,
    title: "Growing Families",
    description: "Finding the perfect homes for expanding families with excellent schools and family-friendly neighborhoods."
  },
  {
    icon: MapPin,
    title: "Relocation Services",
    description: "Supporting families moving to the Bay Area with comprehensive relocation assistance and local insights."
  },
  {
    icon: Heart,
    title: "Downsizing",
    description: "Helping empty nesters and retirees find the perfect right-sized home for their next chapter."
  }
];

export default function AboutExpertise() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              MY EXPERTISE
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized knowledge and personalized service across all aspects 
              of Bay Area real estate to meet your unique needs.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-serif tracking-wider mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif tracking-wider mb-4">
              WHAT SETS ME APART
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My approach combines deep local knowledge with cutting-edge technology, 
              comprehensive market analysis with personal relationships, and proven 
              negotiation skills with genuine care for your success. I don't just 
              sell houses—I help you find your perfect home and build lasting wealth 
              through real estate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 