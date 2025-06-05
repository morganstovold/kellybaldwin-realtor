import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import Kelly from "@/public/kelly-3.webp";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="h-full bg-white overflow-x-hidden">
      {/* Hero Section - Similar to homepage */}
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
          <Image
            src={Kelly}
            alt="Kelly Baldwin - Contact"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-xl flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-serif tracking-widest relative mb-8 sm:mb-12 z-10">
              CONTACT KELLY
              <span className="absolute -left-12 -z-10 -bottom-8 sm:-bottom-12 text-8xl sm:text-9xl md:text-[120px] lg:text-[160px] font-light opacity-3 tracking-normal select-none hidden sm:block">
                CONTACT
              </span>
            </h1>
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              Ready to start your real estate journey? Let&apos;s connect and discuss how I can help you achieve your goals in the Bay Area and Solano County.
            </p>
            
            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="tel:7073196392">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="default" size="lg" asChild>
                <a href="mailto:Kelly@BaldwinRealEstateTeam.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-12 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif tracking-widest mb-4">
              GET IN TOUCH
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              I&apos;m here to help with all your real estate needs. Available 7 days a week to serve you.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif tracking-wider mb-2">PHONE</h3>
                <p className="text-gray-600">(707) 319-6392</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif tracking-wider mb-2">EMAIL</h3>
                <p className="text-gray-600">Kelly@BaldwinRealEstateTeam.com</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif tracking-wider mb-2">OFFICE</h3>
                <p className="text-gray-600">560 1st Street B206, Benicia, CA 94510</p>
                <p className="text-sm text-gray-500">Serving Bay Area & Solano County</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-serif tracking-wider mb-2">AVAILABILITY</h3>
                <p className="text-gray-600">7 Days a Week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Form Introduction */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-serif tracking-widest mb-4">
                  SEND A MESSAGE
                </h2>
                <div className="w-24 h-0.5 bg-black mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Whether you&apos;re buying, selling, or have questions about the market, I&apos;d love to hear from you. Tell me about your real estate goals and let&apos;s start the conversation.
                </p>
              </div>

              {/* Kelly's Professional Info */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={Kelly}
                      alt="Kelly Baldwin"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif tracking-wider mb-1">Kelly Baldwin, Realtor®</h3>
                    <p className="text-gray-600 mb-3">Branch Manager - eXp Realty of California, Inc</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      &quot;The Dedicated Realtor Making a Difference in Her Community&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    I&apos;m interested in...
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="both">Both Buying and Selling</option>
                    <option value="investment">Investment Properties</option>
                    <option value="consultation">Market Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your real estate goals..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent bg-white"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif tracking-widest mb-6">
              READY TO GET STARTED?
            </h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Sometimes a conversation is the best way to begin. Let&apos;s discuss your real estate goals and how I can help make them a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-black">
                <a href="tel:7073196392">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (707) 319-6392
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:Kelly@BaldwinRealEstateTeam.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Kelly@BaldwinRealEstateTeam.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
