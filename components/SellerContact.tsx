import { Button } from "@/components/ui/button";
import { Phone, Mail, Calculator, Home } from "lucide-react";

export default function SellerContact() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              READY TO SELL YOUR HOME?
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let&apos;s discuss your selling goals and create a customized marketing 
              strategy to get you the best possible price for your home.
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
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">Get Valuation</div>
              <div className="text-sm text-gray-600">Free Market Analysis</div>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">Schedule</div>
              <div className="text-sm text-gray-600">Home Consultation</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8">
              Get Free Home Valuation
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Schedule Listing Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Download Seller Guide
            </Button>
          </div>

          {/* Personal Note */}
          <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl lg:text-2xl font-serif tracking-wider mb-4">
                LET&apos;S MAXIMIZE YOUR HOME&apos;S VALUE
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Selling your home is a major decision, and you deserve an agent who will work 
                tirelessly to get you the best possible outcome. From strategic pricing to 
                comprehensive marketing to skilled negotiation, I&apos;m committed to exceeding 
                your expectations and making the process as smooth as possible.
              </p>
              <div className="text-gray-600 italic">
                &quot;Your success is my success. Let&apos;s work together to achieve your selling goals.&quot;
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