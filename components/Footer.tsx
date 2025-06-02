import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-light tracking-[0.3em] text-black mb-2">
                KELLY BALDWIN
              </h2>
              <div className="w-24 h-px bg-black/30 mb-4"></div>
              <p className="text-lg font-serif italic text-gray-600 mb-6">
                &quot;Turning Houses into Homes, One Key at a Time&quot;
              </p>
              <p className="text-gray-700 leading-relaxed max-w-md">
                Your trusted Bay Area real estate expert with deep local knowledge 
                and a commitment to making your real estate experience both enjoyable 
                and successful.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {/* <a href="#" className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors">
                <Instagram className="w-5 h-5 text-black" />
              </a> */}
              <Link href="https://www.instagram.com/kellybaldwin_realtor" className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors">
                <Instagram className="w-5 h-5 text-black" />
              </Link>
              <Link href="https://www.facebook.com/kelly.nicole.796774" className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors">
                <Facebook className="w-5 h-5 text-black" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-medium tracking-wider text-black mb-6">
              CONTACT
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">(707) 319-6392</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">kelly@kellybaldwin.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <div className="text-gray-700">
                  <div>Bay Area</div>
                  <div>Solano County</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium tracking-wider text-black mb-6">
              SERVICES
            </h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-700 hover:text-black transition-colors">
                About Kelly
              </a>
              <Link href="/properties" className="block text-gray-700 hover:text-black transition-colors">
                Featured Properties
              </Link>
              <a href="#" className="block text-gray-700 hover:text-black transition-colors">
                Buyer Services
              </a>
              <a href="#" className="block text-gray-700 hover:text-black transition-colors">
                Seller Services
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2024 Kelly Baldwin Real Estate. All rights reserved.
            </div>
            <div className="flex space-x-8 text-sm text-gray-600">
              <a href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Equal Housing Opportunity
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
