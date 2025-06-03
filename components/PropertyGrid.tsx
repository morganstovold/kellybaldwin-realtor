"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Camera,
  Grid3X3,
  List,
} from "lucide-react";
import House1 from "@/public/house-1.jpg";
import House2 from "@/public/house-2.jpg";
import House3 from "@/public/house-3.jpg";
import Interior1 from "@/public/interior-1.webp";
import Interior2 from "@/public/interior-2.webp";
import Interior3 from "@/public/interior-3.webp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const properties = [
  {
    id: 1,
    title: "Modern Family Home",
    address: "1234 Maple Street, Fairfield, CA 94534",
    price: "$825,000",
    pricePerSqft: "$344",
    bedrooms: 4,
    bathrooms: 3,
    sqft: "2,400",
    yearBuilt: 2018,
    lotSize: "7,200 sqft",
    propertyType: "Single Family",
    status: "For Sale",
    daysOnMarket: 12,
    images: [House1, Interior1],
    features: [
      "2-Car Garage",
      "Granite Counters",
      "Hardwood Floors",
      "Central AC",
    ],
    description:
      "Beautiful modern home in desirable Fairfield neighborhood. Open floor plan with updated kitchen and spacious master suite.",
    mlsNumber: "MLS-12345",
    neighborhood: "Green Valley",
  },
  {
    id: 2,
    title: "Charming Victorian",
    address: "567 Oak Avenue, Benicia, CA 94510",
    price: "$950,000",
    pricePerSqft: "$452",
    bedrooms: 3,
    bathrooms: 2,
    sqft: "2,100",
    yearBuilt: 1895,
    lotSize: "5,800 sqft",
    propertyType: "Single Family",
    status: "For Sale",
    daysOnMarket: 8,
    images: [House2, Interior2],
    features: [
      "Historic Character",
      "Original Hardwood",
      "Bay Views",
      "Garden",
    ],
    description:
      "Stunning Victorian home with original character and modern updates. Located in historic Benicia with bay views.",
    mlsNumber: "MLS-23456",
    neighborhood: "Historic Benicia",
  },
  {
    id: 3,
    title: "Contemporary Townhome",
    address: "890 Pine Court, Vallejo, CA 94591",
    price: "$675,000",
    pricePerSqft: "$365",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: "1,850",
    yearBuilt: 2020,
    lotSize: "N/A",
    propertyType: "Townhome",
    status: "For Sale",
    daysOnMarket: 5,
    images: [House3, Interior3],
    features: [
      "HOA Pool",
      "Attached Garage",
      "Quartz Counters",
      "Open Concept",
    ],
    description:
      "Modern townhome in gated community with resort-style amenities. Move-in ready with designer finishes throughout.",
    mlsNumber: "MLS-34567",
    neighborhood: "Hillcrest",
  },
  {
    id: 4,
    title: "Luxury Estate",
    address: "456 Hillside Drive, Vacaville, CA 95688",
    price: "$1,250,000",
    pricePerSqft: "$416",
    bedrooms: 5,
    bathrooms: 4,
    sqft: "3,000",
    yearBuilt: 2015,
    lotSize: "1.2 acres",
    propertyType: "Single Family",
    status: "For Sale",
    daysOnMarket: 20,
    images: [House1, Interior1],
    features: ["Swimming Pool", "Wine Cellar", "3-Car Garage", "Guest House"],
    description:
      "Stunning luxury estate on over an acre with pool, guest house, and panoramic valley views.",
    mlsNumber: "MLS-45678",
    neighborhood: "Alamo Creek",
  },
  {
    id: 5,
    title: "Cozy Starter Home",
    address: "123 Elm Street, Dixon, CA 95620",
    price: "$485,000",
    pricePerSqft: "$323",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,500",
    yearBuilt: 1985,
    lotSize: "6,000 sqft",
    propertyType: "Single Family",
    status: "For Sale",
    daysOnMarket: 15,
    images: [House2, Interior2],
    features: [
      "Updated Kitchen",
      "Large Yard",
      "Covered Patio",
      "Storage Shed",
    ],
    description:
      "Perfect starter home with updated kitchen and large backyard. Great for first-time buyers or investors.",
    mlsNumber: "MLS-56789",
    neighborhood: "Downtown Dixon",
  },
  {
    id: 6,
    title: "Waterfront Condo",
    address: "789 Marina Way, Rio Vista, CA 94571",
    price: "$599,000",
    pricePerSqft: "$599",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,000",
    yearBuilt: 2010,
    lotSize: "N/A",
    propertyType: "Condo",
    status: "For Sale",
    daysOnMarket: 3,
    images: [House3, Interior3],
    features: ["Water Views", "Boat Dock", "Balcony", "HOA Amenities"],
    description:
      "Beautiful waterfront condo with stunning river views and private boat dock. Resort-style living year-round.",
    mlsNumber: "MLS-67890",
    neighborhood: "Marina District",
  },
];

export default function PropertyGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("newest");

  const sortedProperties = [...properties].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          parseInt(a.price.replace(/[$,]/g, "")) -
          parseInt(b.price.replace(/[$,]/g, ""))
        );
      case "price-high":
        return (
          parseInt(b.price.replace(/[$,]/g, "")) -
          parseInt(a.price.replace(/[$,]/g, ""))
        );
      case "newest":
        return a.daysOnMarket - b.daysOnMarket;
      case "sqft":
        return (
          parseInt(b.sqft.replace(/,/g, "")) -
          parseInt(a.sqft.replace(/,/g, ""))
        );
      default:
        return 0;
    }
  });

  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-serif tracking-wider mb-2">
              AVAILABLE PROPERTIES
            </h2>
            <p className="text-gray-600">
              {properties.length} properties found in Bay Area & Solano County
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest Listed</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="sqft">Square Footage</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-2 ${
                  viewMode === "grid"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-3 py-2 ${
                  viewMode === "list"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }
        >
          {sortedProperties.map((property) => (
            <div
              key={property.id}
              className={
                viewMode === "grid"
                  ? "group cursor-pointer bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                  : "group cursor-pointer bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col lg:flex-row"
              }
            >
              <div
                className={
                  viewMode === "grid"
                    ? "relative overflow-hidden"
                    : "relative overflow-hidden lg:w-1/3 flex-shrink-0"
                }
              >
                <div
                  className={
                    viewMode === "grid"
                      ? "aspect-[4/3]"
                      : "aspect-[4/3] lg:aspect-square"
                  }
                >
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-black text-white px-2 py-1 text-xs font-medium rounded">
                    {property.status}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="bg-black/70 text-white px-2 py-1 text-xs rounded flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    {property.images.length}
                  </span>
                </div>
              </div>

              <div className={viewMode === "grid" ? "p-6" : "p-6 flex-1"}>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-serif text-black mb-1">
                      {property.price}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={14} className="mr-1 flex-shrink-0" />
                      <span>{property.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                    <div className="flex items-center">
                      <Bed size={14} className="mr-1" />
                      <span>{property.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={14} className="mr-1" />
                      <span>{property.bathrooms} bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={14} className="mr-1" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 space-y-1">
                    <div>
                      Built: {property.yearBuilt} • {property.propertyType}
                    </div>
                    <div>
                      {property.pricePerSqft}/sqft • MLS: {property.mlsNumber}
                    </div>
                  </div>

                  {viewMode === "list" && (
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-gray-700 text-sm mb-2">
                        {property.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {property.features.slice(0, 4).map((feature) => (
                          <span
                            key={feature}
                            className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <Link
                      href={`/properties/${property.id}`}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button size="sm" className="flex-1 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      Schedule Tour
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button size="sm" className="bg-black text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-serif tracking-wider mb-4">
            DIDN&apos;T FIND WHAT YOU&apos;RE LOOKING FOR?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kelly has access to off-market properties and can help you find
            exactly what you need. Let&apos;s discuss your requirements and
            discover more options together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Kelly Directly</Button>
            <Button size="lg" variant="outline">
              Set Up Custom Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
