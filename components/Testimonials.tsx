"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const buyerTestimonials = [
  {
    id: 1,
    name: "Maria & James Rodriguez",
    location: "Fairfield Family Home",
    content: "Kelly made our home buying experience truly enjoyable! As first-time buyers, we were nervous about the process, but Kelly walked us through every step with patience and care. Her knowledge of Solano County neighborhoods helped us find the perfect home for our growing family.",
    rating: 5
  },
  {
    id: 2,
    name: "Jennifer Chen",
    location: "Benicia Victorian",
    content: "Kelly's expertise and dedication exceeded all our expectations. She took the time to understand exactly what we were looking for and guided us to this beautiful Victorian home. Her thoroughness during inspections and negotiations gave us complete confidence.",
    rating: 5
  },
  {
    id: 3,
    name: "David & Susan Miller",
    location: "Vallejo Townhome",
    content: "Working with Kelly felt like having a trusted friend guide us through the home buying process. Her local knowledge of schools, neighborhoods, and community resources was invaluable. She truly turned what could have been stressful into an exciting journey!",
    rating: 5
  }
];

const sellerTestimonials = [
  {
    id: 1,
    name: "Robert & Linda Thompson",
    location: "Fairfield Ranch Home",
    content: "Kelly's personalized marketing strategy and attention to detail were exceptional. She helped us prepare our home beautifully for showings and guided us through every step of the selling process. We sold for more than we expected and felt supported throughout!",
    rating: 5
  },
  {
    id: 2,
    name: "Alexandra Morrison",
    location: "Benicia Waterfront Home",
    content: "From our initial consultation to closing, Kelly exceeded every expectation. Her thorough market analysis and staging advice made all the difference. She kept us informed throughout the entire process and made selling our home completely stress-free.",
    rating: 5
  },
  {
    id: 3,
    name: "Mark & Patricia Wilson",
    location: "Suisun City Home",
    content: "Kelly's approach is so refreshing - she truly listens to your needs and crafts a plan that works for your situation. Her knowledge of the local market and professional network resulted in a smooth, successful sale. We couldn't have asked for better service!",
    rating: 5
  }
];

export default function Testimonials() {
  const [activeBuyerTestimonial, setActiveBuyerTestimonial] = useState(0);
  const [activeSellerTestimonial, setActiveSellerTestimonial] = useState(0);

  const nextBuyerTestimonial = () => {
    setActiveBuyerTestimonial((prev) => (prev + 1) % buyerTestimonials.length);
  };

  const prevBuyerTestimonial = () => {
    setActiveBuyerTestimonial((prev) => (prev - 1 + buyerTestimonials.length) % buyerTestimonials.length);
  };

  const nextSellerTestimonial = () => {
    setActiveSellerTestimonial((prev) => (prev + 1) % sellerTestimonials.length);
  };

  const prevSellerTestimonial = () => {
    setActiveSellerTestimonial((prev) => (prev - 1 + sellerTestimonials.length) % sellerTestimonials.length);
  };

  const TestimonialCard = ({ testimonial, onPrev, onNext }: { 
    testimonial: typeof buyerTestimonials[0], 
    onPrev: () => void, 
    onNext: () => void 
  }) => (
    <div className="bg-white rounded-lg shadow-xl p-8 relative min-h-[300px] flex flex-col justify-between">
      <div>
        <Quote className="text-gray-300 mb-4" size={40} />
        <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
          &quot;{testimonial.content}&quot;
        </blockquote>
      </div>
      
      <div>
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <div>
          <p className="font-serif text-lg font-medium">{testimonial.name}</p>
          <p className="text-gray-600">{testimonial.location}</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={onPrev}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={onNext}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif tracking-widest mb-4">
            CLIENT TESTIMONIALS
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from Kelly&apos;s satisfied clients throughout the Bay Area who have successfully 
            bought and sold homes with her expert guidance and personalized, enjoyable service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Buyer Testimonials */}
          <div>
            <h3 className="text-2xl font-serif text-center mb-8 text-black">
              BUYER TESTIMONIALS
            </h3>
            <TestimonialCard
              testimonial={buyerTestimonials[activeBuyerTestimonial]}
              onPrev={prevBuyerTestimonial}
              onNext={nextBuyerTestimonial}
            />
          </div>

          {/* Seller Testimonials */}
          <div>
            <h3 className="text-2xl font-serif text-center mb-8 text-black">
              SELLER TESTIMONIALS
            </h3>
            <TestimonialCard
              testimonial={sellerTestimonials[activeSellerTestimonial]}
              onPrev={prevSellerTestimonial}
              onNext={nextSellerTestimonial}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join Kelly&apos;s satisfied clients?
          </p>
          <Button size="lg">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
} 