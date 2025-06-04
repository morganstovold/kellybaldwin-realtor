import { MapPin, Bed, Bath, Square, Home, Calendar } from "lucide-react";

export default function PropertyLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Property Hero Section Skeleton - Matching PropertyHero */}
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
          {/* Hero Image Skeleton */}
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 py-12 sm:p-8 md:p-12 lg:p-16">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Location Skeleton */}
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin size={16} className="mr-2" />
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Address Title Skeleton */}
            <div className="h-12 md:h-14 lg:h-16 w-full bg-gray-200 rounded animate-pulse"></div>
            
            {/* Price Skeleton */}
            <div className="h-10 md:h-12 w-48 bg-gray-200 rounded animate-pulse"></div>

            {/* Property Stats Row Skeleton - Matching the flex row layout */}
            <div className="flex flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <Bed size={16} />
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <Bath size={16} />
                <div className="h-4 w-14 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-2">
                <Square size={16} />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Description Preview Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
            </div>
            
            {/* Action Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="h-12 w-full sm:w-40 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 w-full sm:w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Details Content Skeleton */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2">
            {/* Description Section Skeleton */}
            <div className="mb-12">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>
              <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 bg-gray-200 rounded animate-pulse ${
                      i === 7 ? 'w-3/4' : 'w-full'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Property Details Section Skeleton */}
            <div className="mb-12">
              <div className="h-8 w-36 bg-gray-200 rounded animate-pulse mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-gray-100">
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-gray-100">
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Virtual Tour Section Skeleton */}
            <div className="mb-12">
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-6"></div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <Home size={48} className="mx-auto text-gray-300 mb-4" />
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
                <div className="h-4 w-80 bg-gray-200 rounded animate-pulse mx-auto mb-6"></div>
                <div className="h-12 w-40 bg-gray-200 rounded animate-pulse mx-auto"></div>
              </div>
            </div>

            {/* Photos Section Skeleton */}
            <div className="mb-12">
              <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-6"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="relative aspect-[4/3] rounded-lg bg-gray-200 animate-pulse"></div>
                ))}
              </div>
              <div className="text-center mt-6">
                <div className="h-12 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sticky top-6">
              <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>

              <div className="space-y-4 mb-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>

              <div className="border-t pt-6">
                <div className="h-5 w-36 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 w-44 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="space-y-2 pt-3">
                    <div className="h-4 w-36 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Property Summary Skeleton */}
              <div className="border-t pt-6 mt-6">
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 