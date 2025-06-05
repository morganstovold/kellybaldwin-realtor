import { buttonVariants } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export default function AboutContact() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              LET&apos;S WORK TOGETHER
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your real estate journey? I&apos;d love to learn about your 
              goals and show you how I can help make them a reality.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">Call Me</div>
              <div className="text-sm text-gray-600">(707) 319-6392</div>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">Email Me</div>
              <div className="text-sm text-gray-600">Kelly@BaldwinRealEstateTeam.com</div>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">Service Area</div>
              <div className="text-sm text-gray-600">Bay Area & Solano County</div>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">Availability</div>
              <div className="text-sm text-gray-600">7 Days a Week</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link className={buttonVariants({ variant: "outline" })} href="/contact">
              Contact Kelly
            </Link>
            <Link className={buttonVariants({ variant: "outline" })} href="/properties">
              View All Properties
            </Link>
          </div>

          {/* Personal Note */}
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-serif tracking-wider mb-4">
                READY TO GET STARTED?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you&apos;re buying your first home, selling to upgrade, or exploring 
                investment opportunities, I&apos;m here to guide you through every step. Let&apos;s 
                schedule a no-obligation consultation to discuss your goals and create a 
                personalized plan for your success.
              </p>
              <div className="text-gray-600 italic">
                &quot;I look forward to helping you with your real estate journey and turning 
                your dreams into reality.&quot;
              </div>
              <div className="text-gray-700 font-medium mt-2">
                — Kelly Baldwin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 