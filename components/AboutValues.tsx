import { Heart, Eye, Handshake, Clock, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your needs, timeline, and budget always come first. I'm here to serve your best interests, not mine."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear, honest communication at every step. No surprises, no hidden fees, just straightforward guidance."
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Ethical practices and honest advice, even when it means recommending what's best for you over a quick sale."
  },
  {
    icon: Clock,
    title: "Responsiveness",
    description: "Quick responses to calls, texts, and emails because I know timing matters in real estate."
  },
  {
    icon: Shield,
    title: "Fiduciary Duty",
    description: "Professional obligation to protect your interests and maintain confidentiality throughout our relationship."
  },
  {
    icon: Lightbulb,
    title: "Education",
    description: "Empowering you with market knowledge and insights so you can make informed decisions with confidence."
  }
];

export default function AboutValues() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              MY VALUES
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The core principles that guide every interaction and ensure you receive 
              the exceptional service you deserve throughout your real estate journey.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif tracking-wider mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Promise Section */}
          <div className="text-center bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-serif tracking-wider mb-6">
              MY PROMISE TO YOU
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                When you choose to work with me, you&apos;re not just getting a real estate agent—
                you&apos;re gaining a trusted advisor, skilled negotiator, and dedicated advocate 
                who will be by your side every step of the way.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I promise to listen carefully to your needs, provide honest market insights, 
                negotiate fiercely on your behalf, and make the entire process as smooth and 
                stress-free as possible. Your success is my success, and I&apos;m committed to 
                exceeding your expectations.
              </p>
              <div className="pt-6">
                <div className="text-xl font-serif italic text-gray-800">
                  &quot;Turning Houses into Homes, One Key at a Time&quot;
                </div>
                <div className="text-gray-600 mt-2">
                  This isn&apos;t just my tagline—it&apos;s my commitment to you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 