"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const buyerTestimonials = [
  {
    content: "Kelly made our first home buying experience incredible. She was patient with all our questions, helped us understand the market, and found us the perfect starter home in Fairfield. We couldn't have asked for a better agent!",
    name: "Sarah & Mike Johnson",
    location: "First-Time Buyers, Fairfield",
    rating: 5
  },
  {
    content: "After months of searching, Kelly helped us find our dream home in Benicia. Her knowledge of the area and negotiation skills saved us thousands. She truly cares about her clients and goes above and beyond.",
    name: "The Rodriguez Family",
    location: "Family Home, Benicia", 
    rating: 5
  },
  {
    content: "Kelly's expertise in luxury properties is unmatched. She understood exactly what we were looking for and presented us with properties that fit our criteria perfectly. Professional, knowledgeable, and a pleasure to work with.",
    name: "David & Jennifer Chen",
    location: "Luxury Home, Vallejo",
    rating: 5
  },
  {
    content: "Moving from out of state was stressful, but Kelly made it seamless. She provided virtual tours, handled everything remotely, and we closed on our perfect home without any issues. Highly recommend!",
    name: "Mark Thompson",
    location: "Relocation, Vacaville",
    rating: 5
  }
];

export default function BuyerTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % buyerTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + buyerTestimonials.length) % buyerTestimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
              BUYER SUCCESS STORIES
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from satisfied buyers who found their perfect homes with Kelly's 
              expert guidance and dedicated service.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="bg-white rounded-lg shadow-xl p-8 lg:p-12 relative">
            <Quote className="text-gray-300 mb-6" size={48} />
            
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
              "{buyerTestimonials[activeTestimonial].content}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-4">
                  {[...Array(buyerTestimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div>
                  <p className="font-serif text-lg font-medium">
                    {buyerTestimonials[activeTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {buyerTestimonials[activeTestimonial].location}
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
              {buyerTestimonials.map((_, index) => (
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

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                98%
              </div>
              <div className="text-gray-600 text-sm tracking-wider uppercase">
                Buyer Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                150+
              </div>
              <div className="text-gray-600 text-sm tracking-wider uppercase">
                Homes Purchased
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                21
              </div>
              <div className="text-gray-600 text-sm tracking-wider uppercase">
                Days Average
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-serif text-black mb-2">
                95%
              </div>
              <div className="text-gray-600 text-sm tracking-wider uppercase">
                Close on Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 