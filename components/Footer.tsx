import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-light tracking-widest text-black">
                KB
              </span>
              <Separator
                orientation="vertical"
                className="h-6 sm:h-8 opacity-30"
              />
              <span className="text-lg sm:text-2xl font-normal tracking-wider text-black">
                Kelly Baldwin
              </span>
            </div>
            <p className="text-base sm:text-lg italic text-gray-600 mb-3 sm:mb-4 font-serif">
              &quot;Turning Houses into Homes, One Key at a Time&quot;
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md">
              Your trusted Bay Area real estate expert. Solano County native
              with deep local knowledge and a commitment to making your real
              estate experience enjoyable and successful.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-base sm:text-lg font-serif mb-4 sm:mb-6 text-black">
              Contact Kelly
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-black text-sm sm:text-base">
                    Direct Line
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    (707) 555-0123
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-black text-sm sm:text-base">
                    Email
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base break-all">
                    kelly@kellybaldwin.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mt-1 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-black text-sm sm:text-base">
                    Service Area
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Greater Bay Area
                    <br />
                    Solano County
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-base sm:text-lg font-serif mb-4 sm:mb-6 text-black">
              Quick Links
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="#"
                className="block text-gray-700 hover:text-black transition-colors text-sm sm:text-base"
              >
                About Kelly
              </a>
              <Link
                href="/properties"
                className="block text-gray-700 hover:text-black transition-colors text-sm sm:text-base"
              >
                {" "}
                Properties{" "}
              </Link>
              <a
                href="#"
                className="block text-gray-700 hover:text-black transition-colors text-sm sm:text-base"
              >
                Buyer Services
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-black transition-colors text-sm sm:text-base"
              >
                Seller Services
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-black transition-colors text-sm sm:text-base"
              >
                Market Reports
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-black transition-colors text-sm sm:text-base"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Heart className="w-3 sm:w-4 h-3 sm:h-4" />
              <p className="text-xs sm:text-sm text-center sm:text-left">
                © 2024 Kelly Baldwin Real Estate. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <a
                href="#"
                className="hover:text-black transition-colors text-center sm:text-left"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-black transition-colors text-center sm:text-left"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-black transition-colors text-center sm:text-left"
              >
                Equal Housing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
