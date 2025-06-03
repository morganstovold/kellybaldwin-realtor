import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Home } from "lucide-react";
import { getFeaturedProperties } from "@/lib/db/queries";

export default async function FeaturedListings() {
  // Fetch featured properties from database
  const featuredProperties = await getFeaturedProperties('homepage', 6);

  // Helper function to format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Helper function to format bathrooms
  const formatBathrooms = (bathrooms: string) => {
    const num = parseFloat(bathrooms);
    return num === 1 ? '1 bath' : `${num} baths`;
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif tracking-widest mb-4">
            FEATURED LISTINGS
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exceptional properties throughout the greater Bay Area. From modern family homes 
            to charming Victorians, find your dream home in Solano County&apos;s most desirable neighborhoods.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.length > 0 ? (
            featuredProperties.map((property) => (
              <Link 
                key={property.id} 
                href={`/properties/${property.slug}`}
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                  <div className="aspect-[4/3] relative">
                    {property.primaryPhoto ? (
                      <Image
                        src={property.primaryPhoto}
                        alt={property.address}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Home size={48} className="text-gray-400" />
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        property.listingStatus === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : property.listingStatus === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {property.listingStatus.charAt(0).toUpperCase() + property.listingStatus.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-serif mb-1 group-hover:text-gray-700 transition-colors">
                      {property.address}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={16} className="mr-1" />
                      <span>{property.city}, {property.state}</span>
                    </div>
                  </div>

                  <div className="text-2xl font-serif text-black">
                    {formatPrice(property.price)}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{property.bedrooms} {property.bedrooms === 1 ? 'bed' : 'beds'}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" />
                      <span>{formatBathrooms(property.bathrooms)}</span>
                    </div>
                    {property.squareFeet && (
                      <div className="flex items-center">
                        <Square size={16} className="mr-1" />
                        <span>{property.squareFeet.toLocaleString()} sqft</span>
                      </div>
                    )}
                  </div>

                  {/* Property Type */}
                  <div className="text-sm text-gray-500">
                    {property.propertyType}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            // Fallback when no featured properties exist
            <div className="col-span-full text-center py-12">
              <Home size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-serif text-gray-600 mb-2">
                No Featured Properties Available
              </h3>
              <p className="text-gray-500 mb-6">
                Featured properties will appear here once they are added to the database.
              </p>
              <Link href="/properties">
                <Button variant="outline">
                  View All Properties
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/properties">
            <Button size="lg" variant="outline">
              View All Properties
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg">
              Schedule a Showing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 