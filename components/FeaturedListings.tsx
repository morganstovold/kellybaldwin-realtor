import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import House1 from "@/public/house-1.jpg";
import House2 from "@/public/house-2.jpg";
import House3 from "@/public/house-3.jpg";

const featuredProperties = [
  {
    id: 1,
    title: "Modern Family Home",
    address: "Fairfield, Solano County",
    price: "$825,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "2,400",
    image: House1,
  },
  {
    id: 2,
    title: "Charming Victorian",
    address: "Benicia, Solano County", 
    price: "$950,000",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "2,100",
    image: House2,
  },
  {
    id: 3,
    title: "Contemporary Townhome",
    address: "Vallejo, Solano County",
    price: "$675,000", 
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: "1,850",
    image: House3,
  }
];

export default function FeaturedListings() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif tracking-widest mb-4">
            FEATURED LISTINGS
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exceptional properties throughout the greater Bay Area. From modern family homes 
            to charming Victorians, find your dream home in Solano County's most desirable neighborhoods.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-serif mb-1">{property.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={16} className="mr-1" />
                    <span>{property.address}</span>
                  </div>
                </div>

                <div className="text-2xl font-serif text-black">
                  {property.price}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed size={16} className="mr-1" />
                    <span>{property.bedrooms} bed</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    <span>{property.bathrooms} bath</span>
                  </div>
                  <div className="flex items-center">
                    <Square size={16} className="mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="mr-4">
            View All Properties
          </Button>
          <Button size="lg">
            Schedule a Showing
          </Button>
        </div>
      </div>
    </section>
  );
} 