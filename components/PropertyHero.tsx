import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Home, Calendar } from "lucide-react";

interface Property {
  id: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: string;
  squareFeet?: number | null;
  garage?: number | null;
  listingStatus: string;
  listingDate: Date;
  propertyType: string;
  primaryPhoto?: string | null;
  publicDescription?: string | null;
}

interface PropertyHeroProps {
  property: Property;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
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
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
        {property.primaryPhoto ? (
          <Image
            src={property.primaryPhoto}
            alt={property.address}
            fill
            className="object-cover object-center"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <Home size={120} className="text-gray-400" />
          </div>
        )}

        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 py-12 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-xl flex flex-col gap-4 sm:gap-6">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin size={16} className="mr-2" />
            <span>
              {property.city}, {property.state} {property.zipCode}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-tight">
            {property.address}
          </h1>

          {/* quick stats beds, baths, sqft */}

          <div className="text-3xl md:text-4xl font-serif text-black">
            {formatPrice(property.price)}
          </div>
          <div className="flex flex-row gap-6 justify-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Bed size={16} />
              <span>{property.bedrooms} beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath size={16} />
              <span>{property.bathrooms} baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Square size={16} />
              <span>{property.squareFeet} sqft</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Home size={16} />
              <span>{property.propertyType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Listed {formatDate(property.listingDate)}</span>
            </div>
          </div>

          {/* Description Preview */}
          {property.publicDescription && (
            <p className="text-base leading-relaxed text-gray-700 line-clamp-3">
              {property.publicDescription.slice(0, 200)}
              {property.publicDescription.length > 200 && "..."}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="w-full sm:w-auto">
              Schedule Viewing
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
