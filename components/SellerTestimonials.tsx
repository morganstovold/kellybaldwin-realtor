"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const sellerTestimonials = [
  {
    content: "Kelly sold our home in just 12 days for over asking price! Her marketing strategy was incredible - professional photos, social media campaigns, and she had buyers lined up before we even went live. Couldn't be happier!",
    name: "Tom & Lisa Martinez",
    location: "Sold in Benicia - $875,000",
    rating: 5
  },
  {
    content: "We were nervous about selling in this market, but Kelly's expertise and pricing strategy were spot on. She guided us through every step and made the process so much easier than we expected. Highly recommend!",
    name: "Robert Kim",
    location: "Sold in Vallejo - $650,000", 
    rating: 5
  },
  {
    content: "Kelly's attention to detail is amazing. From staging advice to professional photography, she made our home look incredible online. We had multiple offers within the first week and closed above asking price.",
    name: "The Williams Family",
    location: "Sold in Fairfield - $720,000",
    rating: 5
  },
  {
    content: "Moving out of state was stressful, but Kelly handled everything perfectly. She coordinated repairs, managed showings, and kept us updated throughout the entire process. True professional who gets results!",
    name: "Angela Thompson",
    location: "Sold in Vacaville - $580,000",
    rating: 5
  }
];

export default function SellerTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % sellerTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + sellerTestimonials.length) % sellerTestimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              SELLER SUCCESS STORIES
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from satisfied sellers who achieved their goals with 
              strategic marketing and expert guidance.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12 relative">
            <Quote className="text-gray-300 mb-6" size={48} />
            
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
              &quot;{sellerTestimonials[activeTestimonial].content}&quot;
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-4">
                  {[...Array(sellerTestimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div>
                  <p className="font-serif text-lg font-medium">
                    {sellerTestimonials[activeTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {sellerTestimonials[activeTestimonial].location}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {sellerTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Seller Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                98%
              </div>
              <div className="text-gray-600 text-sm tracking-wider uppercase">
                Of List Price
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                18 Days
              </div>
              <div className="text-gray-600 text-sm tracking-wider uppercase">
                Average on Market
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                200+
              </div>
              <div className="text-gray-600 text-sm tracking-wider uppercase">
                Homes Sold
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                95%
              </div>
              <div className="text-gray-600 text-sm tracking-wider uppercase">
                Seller Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 