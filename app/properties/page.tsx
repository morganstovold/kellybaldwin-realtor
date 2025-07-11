import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Square, Home, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { searchProperties } from "@/lib/db/queries";
import PropertiesHero from "@/components/PropertiesHero";
import Footer from "@/components/Footer";

interface PropertiesPageProps {
  searchParams: Promise<{
    city?: string;
    minPrice?: string;
    maxPrice?: string;
    bedrooms?: string;
    propertyType?: string;
    page?: string;
  }>;
}

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || "1");
  const limit = 12;
  const offset = (currentPage - 1) * limit;

  // Parse search parameters
  const searchFilters = {
    city: resolvedSearchParams.city,
    minPrice: resolvedSearchParams.minPrice
      ? parseInt(resolvedSearchParams.minPrice)
      : undefined,
    maxPrice: resolvedSearchParams.maxPrice
      ? parseInt(resolvedSearchParams.maxPrice)
      : undefined,
    minBedrooms: resolvedSearchParams.bedrooms
      ? parseInt(resolvedSearchParams.bedrooms)
      : undefined,
    propertyType: resolvedSearchParams.propertyType,
    limit,
    offset,
    sortBy: "newest" as const,
  };

  // Fetch properties from database
  const properties = await searchProperties(searchFilters);

  // Helper functions
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatBathrooms = (bathrooms: string) => {
    const num = parseFloat(bathrooms);
    return num === 1 ? "1 bath" : `${num} baths`;
  };

  return (
    <div className="h-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <PropertiesHero />

      {/* Search Filters */}
      <div className="bg-gray-50 border-y">
        <div className="container mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center text-gray-700 mb-4 lg:mb-0">
              <Search size={20} className="mr-2" />
              <span className="font-medium">Filter Properties:</span>
            </div>
            <Link
              className={buttonVariants({
                variant: searchFilters.city ? "default" : "outline",
              })}
              href="/properties"
            >
              All Cities
            </Link>
            <Link
              className={buttonVariants({
                variant:
                  searchFilters.city === "Vallejo" ? "default" : "outline",
              })}
              href="/properties?city=Vallejo"
            >
              Vallejo
            </Link>
            <Link
              className={buttonVariants({
                variant:
                  searchFilters.city === "Fairfield" ? "default" : "outline",
              })}
              href="/properties?city=Fairfield"
            >
              Fairfield
            </Link>
            <Link
              className={buttonVariants({
                variant:
                  searchFilters.city === "Benicia" ? "default" : "outline",
              })}
              href="/properties?city=Benicia"
            >
              Benicia
            </Link>
            <Link
              className={buttonVariants({
                variant:
                  searchFilters.propertyType === "Single Family"
                    ? "default"
                    : "outline",
              })}
              href="/properties?propertyType=Single Family"
            >
              Single Family
            </Link>
            <Link
              className={buttonVariants({
                variant:
                  searchFilters.propertyType === "Condo"
                    ? "default"
                    : "outline",
              })}
              href="/properties?propertyType=Condo"
            >
              Condos
            </Link>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div
        id="properties-grid"
        className="container mx-auto px-6 lg:px-8 py-16"
      >
        {properties.length > 0 ? (
          <>
            {/* Results Count */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-2">Available Properties</h2>
              <p className="text-gray-600">
                Showing {properties.length} properties
                {resolvedSearchParams.city &&
                  ` in ${resolvedSearchParams.city}`}
                {resolvedSearchParams.propertyType &&
                  ` of type ${resolvedSearchParams.propertyType}`}
              </p>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {properties.map((property) => (
                <Link
                  key={property.id}
                  href={`/properties/${property.slug}`}
                  className="group cursor-pointer block"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="relative aspect-[4/3]">
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
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            property.listingStatus === "active"
                              ? "bg-green-100 text-green-800"
                              : property.listingStatus === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {property.listingStatus.charAt(0).toUpperCase() +
                            property.listingStatus.slice(1)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-lg font-serif mb-2 group-hover:text-gray-700 transition-colors">
                          {property.address}
                        </h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin size={14} className="mr-1" />
                          <span>
                            {property.city}, {property.state}
                          </span>
                        </div>
                      </div>

                      <div className="text-xl font-serif text-black mb-4">
                        {formatPrice(property.price)}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Bed size={14} className="mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath size={14} className="mr-1" />
                          <span>{formatBathrooms(property.bathrooms)}</span>
                        </div>
                        {property.squareFeet && (
                          <div className="flex items-center">
                            <Square size={14} className="mr-1" />
                            <span>{property.squareFeet.toLocaleString()}</span>
                          </div>
                        )}
                      </div>

                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {property.propertyType}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Placeholder */}
            {properties.length === limit && (
              <div className="flex justify-center">
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={`/properties?${new URLSearchParams({
                    ...resolvedSearchParams,
                    page: (currentPage + 1).toString(),
                  }).toString()}`}
                >
                  Load More Properties
                </Link>
              </div>
            )}
          </>
        ) : (
          // No properties found
          <div className="text-center py-24">
            <Home size={80} className="mx-auto text-gray-300 mb-6" />
            <h3 className="text-2xl font-serif text-gray-600 mb-4">
              No Properties Found
            </h3>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              {resolvedSearchParams.city || resolvedSearchParams.propertyType
                ? "Try adjusting your search filters to see more results."
                : "Properties will appear here once they are added to the database."}
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                className={buttonVariants({ variant: "outline" })}
                href="/properties"
              >
                Clear Filters
              </Link>
              <Link
                className={buttonVariants({ variant: "outline" })}
                href="/contact"
              >
                Contact Kelly
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

// Generate metadata
export async function generateMetadata({ searchParams }: PropertiesPageProps) {
  const { city, propertyType } = await searchParams;

  let title = "Properties for Sale - Kelly Baldwin Realtor";
  let description =
    "Browse available properties in Solano County and the greater Bay Area with Kelly Baldwin, your trusted real estate professional.";

  if (city) {
    title = `Properties for Sale in ${city} - Kelly Baldwin Realtor`;
    description = `Find your dream home in ${city} with Kelly Baldwin. Browse the latest listings and schedule a showing today.`;
  }

  if (propertyType) {
    title = `${propertyType} Properties for Sale - Kelly Baldwin Realtor`;
    description = `Explore ${propertyType.toLowerCase()} properties for sale in Solano County with Kelly Baldwin.`;
  }

  return {
    title,
    description,
  };
}
