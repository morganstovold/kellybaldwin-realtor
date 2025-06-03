import { notFound } from "next/navigation";
import Image from "next/image";
import { Home } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { getPropertiesSlugs, getPropertyBySlug } from "@/lib/db/queries";
import PropertyHero from "@/components/PropertyHero";
import Link from "next/link";

export const revalidate = 300;

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  try {
    const dbProperties = await getPropertiesSlugs();
    return dbProperties
      .filter((property) => property.slug && typeof property.slug === "string")
      .map((property) => ({
        slug: String(property.slug),
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return empty array on error to prevent build failure
  }
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const property = await getPropertyBySlug(params.slug);

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title:
      property.metaTitle ||
      `${property.address}, ${property.city} - ${formatPrice(property.price)}`,
    description:
      property.metaDescription ||
      `${property.bedrooms} bed, ${property.bathrooms} bath property for sale in ${property.city}, ${property.state}`,
  };
}

interface PropertyPageProps {
  params: {
    slug: string;
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Property Hero Section */}
      <PropertyHero property={property} />

      {/* Property Details Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            {property.publicDescription && (
              <div className="mb-12">
                <h2 className="text-2xl font-serif mb-6">
                  Property Description
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {property.publicDescription}
                  </p>
                </div>
              </div>
            )}

            {/* Property Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Property Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium">{property.propertyType}</span>
                  </div>

                  {property.yearBuilt && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Year Built</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                  )}

                  {property.lotSizeAcres && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Lot Size</span>
                      <span className="font-medium">
                        {property.lotSizeAcres} acres
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">MLS #</span>
                    <span className="font-medium">{property.mlsNumber}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Listed Date</span>
                    <span className="font-medium">
                      {formatDate(property.listingDate)}
                    </span>
                  </div>

                  {property.pool && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Pool</span>
                      <span className="font-medium">Yes</span>
                    </div>
                  )}

                  {property.fireplace && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Fireplace</span>
                      <span className="font-medium">Yes</span>
                    </div>
                  )}

                  {property.county && (
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">County</span>
                      <span className="font-medium">{property.county}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Virtual Tour */}
            {property.hasVirtualTour && property.virtualTourUrl && (
              <div className="mb-12">
                <h2 className="text-2xl font-serif mb-6">Virtual Tour</h2>
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <Home size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-serif mb-4">
                    Take a Virtual Tour
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Experience this property from the comfort of your home with
                    our interactive virtual tour.
                  </p>
                  <Link
                    href={property.virtualTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "lg" })}
                  >
                    Launch Virtual Tour
                  </Link>
                </div>
              </div>
            )}

            {/* Additional Photos Section */}
            {property.photos && property.photos.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-serif mb-6">Property Photos</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.photos.slice(0, 6).map((photo, index) => (
                    <div
                      key={photo.id}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={photo.url}
                        alt={`Property photo ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                {property.photos.length > 6 && (
                  <div className="text-center mt-6">
                    <Button variant="outline" size="lg">
                      View All {property.photos.length} Photos
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-6">
              <h3 className="text-xl font-serif mb-6">
                Interested in this property?
              </h3>

              <div className="space-y-4 mb-8">
                <Button size="lg" className="w-full">
                  Schedule a Showing
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  Share Property
                </Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium mb-4">Contact Kelly Baldwin</h4>
                <div className="text-sm text-gray-600 space-y-3">
                  <p>Licensed Real Estate Professional</p>
                  <p>Solano County Specialist</p>
                  <div className="pt-3 space-y-2">
                    <p>
                      <strong>Phone:</strong> (707) 555-0123
                    </p>
                    <p>
                      <strong>Email:</strong> kelly@kellybaldwinrealtor.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Property Summary */}
              <div className="border-t pt-6 mt-6">
                <h4 className="font-medium mb-4">Property Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price</span>
                    <span className="font-medium">
                      {formatPrice(property.price)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms</span>
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms</span>
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                  {property.squareFeet && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Square Feet</span>
                      <span className="font-medium">
                        {property.squareFeet.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium">{property.propertyType}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
