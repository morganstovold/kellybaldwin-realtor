import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar, Search } from "lucide-react";

export default function BuyerContact() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              READY TO FIND YOUR HOME?
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let&apos;s start your home buying journey today. I&apos;m here to guide you 
              through every step and help you find the perfect property.
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
              <div className="text-sm text-gray-600">kelly@kellybaldwin.com</div>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">Schedule</div>
              <div className="text-sm text-gray-600">Buyer Consultation</div>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">Browse</div>
              <div className="text-sm text-gray-600">Available Homes</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8">
              Schedule Buyer Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Get Pre-Qualified
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Search Properties
            </Button>
          </div>

          {/* Personal Note */}
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-serif tracking-wider mb-4">
                YOUR HOME BUYING JOURNEY STARTS HERE
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you&apos;re a first-time buyer, looking to upgrade, or relocating to the Bay Area, 
                I&apos;m committed to making your home buying experience smooth, successful, and enjoyable. 
                Let&apos;s discuss your goals and create a personalized plan to find your perfect home.
              </p>
              <div className="text-gray-600 italic">
                &quot;I&apos;m not just here to help you buy a house—I&apos;m here to help you find your home.&quot;
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