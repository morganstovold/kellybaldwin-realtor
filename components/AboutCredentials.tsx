import { Award, GraduationCap, Shield, Star } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Top Producer",
    description: "Consistently ranked among the top 10% of agents in Solano County"
  },
  {
    icon: GraduationCap,
    title: "Certified Buyer Representative",
    description: "CBR designation focusing on buyer representation and advocacy"
  },
  {
    icon: Shield,
    title: "Seller Representative Specialist",
    description: "SRS certification for advanced seller representation skills"
  },
  {
    icon: Star,
    title: "5-Star Client Rating",
    description: "Maintaining exceptional client satisfaction across all platforms"
  }
];

const stats = [
  { number: "200+", label: "Homes Sold" },
  { number: "$85M+", label: "In Sales Volume" },
  { number: "15", label: "Days Average" },
  { number: "98%", label: "Client Satisfaction" }
];

const affiliations = [
  "National Association of REALTORS®",
  "California Association of REALTORS®", 
  "Solano County Association of REALTORS®",
  "Women's Council of REALTORS®",
  "Certified Residential Specialist",
  "Bay Area Real Estate Information Services"
];

export default function AboutCredentials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              CREDENTIALS & ACHIEVEMENTS
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional qualifications and proven track record that demonstrate 
              my commitment to excellence in real estate.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <credential.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-serif tracking-wider mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {credential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Affiliations */}
          <div className="text-center">
            <h3 className="text-2xl font-serif tracking-wider mb-8">
              PROFESSIONAL AFFILIATIONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {affiliations.map((affiliation, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm font-medium border border-gray-200"
                >
                  {affiliation}
                </div>
              ))}
            </div>
          </div>

          {/* Recognition Quote */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8 lg:p-12">
            <blockquote className="text-xl lg:text-2xl font-serif italic text-gray-800 mb-6 leading-relaxed">
              &quot;Excellence in real estate isn&apos;t just about closing deals—it&apos;s about 
              building trust, providing exceptional service, and creating lasting 
              relationships with every client.&quot;
            </blockquote>
            <div className="text-gray-600 font-medium">
              — Kelly Baldwin, REALTOR®
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 