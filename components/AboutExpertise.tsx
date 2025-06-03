import { Home, Key, TrendingUp, Users, MapPin, Heart, Eye, Handshake, Clock } from "lucide-react";

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

const coreValues = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear, honest communication at every step with no surprises or hidden fees."
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Ethical practices and honest advice, even when it means what's best for you over a quick sale."
  },
  {
    icon: Clock,
    title: "Responsiveness", 
    description: "Quick responses to calls, texts, and emails because timing matters in real estate."
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your needs, timeline, and budget always come first in every decision we make."
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
              EXPERTISE & APPROACH
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized knowledge across all aspects of Bay Area real estate, 
              guided by unwavering principles that ensure your success.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif tracking-wider text-center mb-12">
              MY SPECIALIZATIONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                      <area.icon className="w-8 h-8 text-black" />
                    </div>
                    <h4 className="text-xl font-serif tracking-wider mb-4">
                      {area.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif tracking-wider text-center mb-12">
              MY CORE VALUES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-serif tracking-wider mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Promise Section */}
          <div className="text-center bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-serif tracking-wider mb-6">
              MY PROMISE TO YOU
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              When you choose to work with me, you're gaining a trusted advisor, skilled negotiator, 
              and dedicated advocate who combines deep local knowledge with cutting-edge technology, 
              comprehensive market analysis with personal relationships, and proven negotiation skills 
              with genuine care for your success.
            </p>
            <div className="text-xl font-serif italic text-gray-800">
              "Turning Houses into Homes, One Key at a Time"
            </div>
            <div className="text-gray-600 mt-2">
              This isn't just my tagline—it's my commitment to you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 