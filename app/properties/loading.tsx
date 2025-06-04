export default function PropertiesLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton - Matching PropertiesHero */}
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 md:h-96 lg:h-screen">
          {/* Hero Image Skeleton */}
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-xl flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            {/* Title Skeleton - Matching "FIND YOUR DREAM HOME" */}
            <div className="relative mb-8 sm:mb-12 z-10">
              <div className="h-12 lg:h-16 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-12 lg:h-16 w-56 bg-gray-200 rounded animate-pulse"></div>
              {/* Background text skeleton */}
              <div className="absolute -left-1 -z-10 -bottom-8 sm:-bottom-12 w-48 h-16 bg-gray-100 rounded animate-pulse opacity-30 hidden sm:block"></div>
            </div>
            
            {/* Description Skeleton */}
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            
            {/* Action Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="h-12 w-full sm:w-40 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 w-full sm:w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Filters Skeleton */}
      <div className="bg-gray-50 border-y">
        <div className="container mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center text-gray-700 mb-4 lg:mb-0">
              <div className="h-5 w-5 bg-gray-300 rounded animate-pulse mr-2"></div>
              <div className="h-5 w-28 bg-gray-200 rounded animate-pulse"></div>
            </div>
            
            {/* Filter Buttons Skeleton */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-20 bg-gray-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Properties Grid Skeleton */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Results Count Skeleton */}
        <div className="mb-12">
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-5 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Properties Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Property Image Skeleton */}
              <div className="relative aspect-[4/3] bg-gray-200 animate-pulse">
                <div className="absolute top-3 left-3">
                  <div className="h-6 w-16 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="p-6">
                {/* Address and Location Skeleton */}
                <div className="mb-3">
                  <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Price Skeleton */}
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4"></div>

                {/* Property Stats Skeleton */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-4 w-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-10 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Property Type Skeleton */}
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button Skeleton */}
        <div className="flex justify-center">
          <div className="h-12 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
