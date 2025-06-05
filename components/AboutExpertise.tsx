import { Home, Key, TrendingUp, Users, Heart, Eye, Handshake, Clock, Phone, Mail, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

const expertiseAreas = [
  {
    icon: Home,
    title: "First-Time Buyers",
    description: "Patient guidance through every step of your first home purchase."
  },
  {
    icon: Users,
    title: "Growing Families",
    description: "Finding homes in great school districts and family neighborhoods."
  },
  {
    icon: Key,
    title: "Luxury Properties",
    description: "White-glove service for high-end Bay Area properties."
  },
  {
    icon: TrendingUp,
    title: "Investment Properties",
    description: "Strategic guidance for building wealth through real estate."
  }
];

const coreValues = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication with no surprises."
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Honest advice, always in your best interest."
  },
  {
    icon: Clock,
    title: "Responsiveness", 
    description: "Quick responses when timing matters."
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your needs and timeline come first."
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
              HOW I HELP
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized expertise and unwavering principles that ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Expertise */}
            <div>
              <h3 className="text-2xl font-serif tracking-wider text-center mb-8">
                MY SPECIALIZATIONS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                    <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <area.icon className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="text-lg font-serif tracking-wider mb-3">
                      {area.title}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-serif tracking-wider text-center mb-8">
                MY CORE VALUES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          {/* Contact Integration */}
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-gray-200">
            <div className="text-center mb-8">
              <div className="text-2xl font-serif italic text-gray-800 mb-2">
                &quot;The Dedicated Realtor Making a Difference in Her Community&quot;
              </div>
              <p className="text-gray-600 mb-8">
                Ready to start your real estate journey? Let's connect.
              </p>
            </div>

            {/* Contact Info - 2 rows layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="tel:+17073196392" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Call or Text</div>
                  <div className="text-gray-700">(707) 319-6392</div>
                </div>
              </Link>

              <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">Service Area</div>
                  <div className="text-gray-700">Bay Area & Solano County</div>
                </div>
              </div>

              <Link href="mailto:Kelly@BaldwinRealEstateTeam.com" className="flex items-center p-4 bg-gray-50 rounded-lg md:col-span-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-gray-900 mb-1">Email</div>
                  <div className="text-gray-700 break-all">Kelly@BaldwinRealEstateTeam.com</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 