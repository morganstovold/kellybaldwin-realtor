import { desc, asc, eq, and, or, gte, lte, like, inArray, sql, count } from "drizzle-orm";
import db, { schema } from "../db";
import type { Property, FeaturedProperty } from "./schema";

const { properties, featuredProperties, propertyPhotos } = schema;

// Property search parameters interface
export interface PropertySearchParams {
  city?: string;
  zipCode?: string;
  county?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  maxBedrooms?: number;
  minBathrooms?: number;
  maxBathrooms?: number;
  propertyType?: string;
  minSquareFeet?: number;
  maxSquareFeet?: number;
  minYearBuilt?: number;
  maxYearBuilt?: number;
  hasPool?: boolean;
  hasFireplace?: boolean;
  hasBasement?: boolean;
  listingStatus?: string;
  maxDaysOnMarket?: number;
  latitude?: number;
  longitude?: number;
  radiusMiles?: number;
  limit?: number;
  offset?: number;
  sortBy?: "price" | "priceDesc" | "newest" | "oldest" | "bedrooms" | "bathrooms" | "squareFeet";
}

// Get properties with comprehensive filtering and sorting
export async function searchProperties(params: PropertySearchParams = {}) {
  const {
    city,
    zipCode,
    county,
    minPrice,
    maxPrice,
    minBedrooms,
    maxBedrooms,
    minBathrooms,
    maxBathrooms,
    propertyType,
    minSquareFeet,
    maxSquareFeet,
    minYearBuilt,
    maxYearBuilt,
    hasPool,
    hasFireplace,
    hasBasement,
    listingStatus = "active",
    maxDaysOnMarket,
    latitude,
    longitude,
    radiusMiles,
    limit = 50,
    offset = 0,
    sortBy = "newest"
  } = params;

  // Build where conditions
  const conditions = [
    eq(properties.isActive, true),
    eq(properties.listingStatus, listingStatus)
  ];

  // Location filters
  if (city) conditions.push(eq(properties.city, city));
  if (zipCode) conditions.push(eq(properties.zipCode, zipCode));
  if (county) conditions.push(eq(properties.county, county));

  // Price filters
  if (minPrice) conditions.push(gte(properties.price, minPrice));
  if (maxPrice) conditions.push(lte(properties.price, maxPrice));

  // Bedroom/bathroom filters
  if (minBedrooms) conditions.push(gte(properties.bedrooms, minBedrooms));
  if (maxBedrooms) conditions.push(lte(properties.bedrooms, maxBedrooms));
  if (minBathrooms) conditions.push(gte(properties.bathrooms, minBathrooms.toString()));
  if (maxBathrooms) conditions.push(lte(properties.bathrooms, maxBathrooms.toString()));

  // Property type filter
  if (propertyType) conditions.push(eq(properties.propertyType, propertyType));

  // Square footage filters
  if (minSquareFeet) conditions.push(gte(properties.squareFeet, minSquareFeet));
  if (maxSquareFeet) conditions.push(lte(properties.squareFeet, maxSquareFeet));

  // Year built filters
  if (minYearBuilt) conditions.push(gte(properties.yearBuilt, minYearBuilt));
  if (maxYearBuilt) conditions.push(lte(properties.yearBuilt, maxYearBuilt));

  // Feature filters
  if (hasPool !== undefined) conditions.push(eq(properties.pool, hasPool));
  if (hasFireplace !== undefined) conditions.push(eq(properties.fireplace, hasFireplace));
  if (hasBasement !== undefined) conditions.push(eq(properties.basement, hasBasement));

  // Days on market filter
  if (maxDaysOnMarket) conditions.push(lte(properties.daysOnMarket, maxDaysOnMarket));

  // Proximity search (if coordinates provided)
  if (latitude && longitude && radiusMiles) {
    // Use Haversine formula for radius search
    const radiusKm = radiusMiles * 1.60934;
    conditions.push(
      sql`(6371 * acos(cos(radians(${latitude})) * cos(radians(${properties.latitude})) * cos(radians(${properties.longitude}) - radians(${longitude})) + sin(radians(${latitude})) * sin(radians(${properties.latitude})))) <= ${radiusKm}`
    );
  }

  // Determine sort order
  let orderBy;
  switch (sortBy) {
    case "price":
      orderBy = asc(properties.price);
      break;
    case "priceDesc":
      orderBy = desc(properties.price);
      break;
    case "oldest":
      orderBy = asc(properties.listingDate);
      break;
    case "bedrooms":
      orderBy = desc(properties.bedrooms);
      break;
    case "bathrooms":
      orderBy = desc(properties.bathrooms);
      break;
    case "squareFeet":
      orderBy = desc(properties.squareFeet);
      break;
    case "newest":
    default:
      orderBy = desc(properties.listingDate);
      break;
  }

  const result = await db
    .select()
    .from(properties)
    .where(and(...conditions))
    .orderBy(orderBy)
    .limit(limit)
    .offset(offset);

  return result;
}

// Get total count for pagination
export async function getPropertiesCount(params: PropertySearchParams = {}) {
  const conditions = [
    eq(properties.isActive, true),
    eq(properties.listingStatus, params.listingStatus || "active")
  ];

  // Add same filters as searchProperties (simplified for count)
  if (params.city) conditions.push(eq(properties.city, params.city));
  if (params.zipCode) conditions.push(eq(properties.zipCode, params.zipCode));
  if (params.minPrice) conditions.push(gte(properties.price, params.minPrice));
  if (params.maxPrice) conditions.push(lte(properties.price, params.maxPrice));
  if (params.minBedrooms) conditions.push(gte(properties.bedrooms, params.minBedrooms));
  if (params.maxBedrooms) conditions.push(lte(properties.bedrooms, params.maxBedrooms));
  if (params.propertyType) conditions.push(eq(properties.propertyType, params.propertyType));

  const result = await db
    .select({ count: count() })
    .from(properties)
    .where(and(...conditions));

  return result[0]?.count || 0;
}

export async function getPropertiesSlugs() {
  return await db
    .select({
      slug: properties.slug
    })
    .from(properties)
    .where(and(
      eq(properties.isActive, true),
      sql`${properties.slug} IS NOT NULL`
    ));
}

// Get property by ID with photos
export async function getPropertyById(id: number) {
  const property = await db
    .select()
    .from(properties)
    .where(and(eq(properties.id, id), eq(properties.isActive, true)))
    .limit(1);

  if (!property[0]) return null;

  const photos = await db
    .select()
    .from(propertyPhotos)
    .where(eq(propertyPhotos.propertyId, id))
    .orderBy(asc(propertyPhotos.order));

  return {
    ...property[0],
    photos
  };
}

// Get property by slug with photos
export async function getPropertyBySlug(slug: string) {
  const property = await db
    .select()
    .from(properties)
    .where(and(eq(properties.slug, slug), eq(properties.isActive, true)))
    .limit(1);

  if (!property[0]) return null;

  const photos = await db
    .select()
    .from(propertyPhotos)
    .where(eq(propertyPhotos.propertyId, property[0].id))
    .orderBy(asc(propertyPhotos.order));

  return {
    ...property[0],
    photos
  };
}

// Get featured properties
export async function getFeaturedProperties(featuredType?: string, limit: number = 10) {
  const conditions = [
    eq(featuredProperties.isActive, true),
    eq(properties.isActive, true),
    eq(properties.listingStatus, "active")
  ];

  if (featuredType) {
    conditions.push(eq(featuredProperties.featuredType, featuredType));
  }

  const result = await db
    .select({
      property: properties,
      featured: featuredProperties
    })
    .from(featuredProperties)
    .innerJoin(properties, eq(featuredProperties.propertyId, properties.id))
    .where(and(...conditions))
    .orderBy(desc(featuredProperties.priority), desc(properties.listingDate))
    .limit(limit);

  return result.map(row => ({
    ...row.property,
    featuredInfo: row.featured
  }));
}

// Get recent listings
export async function getRecentListings(limit: number = 10) {
  return await db
    .select()
    .from(properties)
    .where(and(
      eq(properties.isActive, true),
      eq(properties.listingStatus, "active")
    ))
    .orderBy(desc(properties.listingDate))
    .limit(limit);
}

// Get price reduced properties
export async function getPriceReducedProperties(limit: number = 10) {
  return await db
    .select()
    .from(properties)
    .where(and(
      eq(properties.isActive, true),
      eq(properties.listingStatus, "active"),
      sql`${properties.price} < ${properties.originalPrice}`
    ))
    .orderBy(desc(properties.listingDate))
    .limit(limit);
}

// Get properties by city with counts
export async function getPropertiesByCity() {
  return await db
    .select({
      city: properties.city,
      count: count(),
      avgPrice: sql<number>`avg(${properties.price})`,
      minPrice: sql<number>`min(${properties.price})`,
      maxPrice: sql<number>`max(${properties.price})`
    })
    .from(properties)
    .where(and(
      eq(properties.isActive, true),
      eq(properties.listingStatus, "active")
    ))
    .groupBy(properties.city)
    .orderBy(desc(count()));
}

// Search properties by text (description, address, etc.)
export async function searchPropertiesByText(searchTerm: string, limit: number = 20) {
  const searchPattern = `%${searchTerm}%`;
  
  return await db
    .select()
    .from(properties)
    .where(and(
      eq(properties.isActive, true),
      eq(properties.listingStatus, "active"),
      or(
        like(properties.address, searchPattern),
        like(properties.city, searchPattern),
        like(properties.publicDescription, searchPattern),
        like(properties.features, searchPattern)
      )
    ))
    .orderBy(desc(properties.listingDate))
    .limit(limit);
}

// Get similar properties (same city, similar price range, same property type)
export async function getSimilarProperties(propertyId: number, limit: number = 6) {
  const baseProperty = await db
    .select()
    .from(properties)
    .where(eq(properties.id, propertyId))
    .limit(1);

  if (!baseProperty[0]) return [];

  const property = baseProperty[0];
  const priceRange = property.price * 0.2; // 20% price range

  return await db
    .select()
    .from(properties)
    .where(and(
      eq(properties.isActive, true),
      eq(properties.listingStatus, "active"),
      eq(properties.city, property.city),
      eq(properties.propertyType, property.propertyType),
      gte(properties.price, property.price - priceRange),
      lte(properties.price, property.price + priceRange),
      sql`${properties.id} != ${propertyId}`
    ))
    .orderBy(desc(properties.listingDate))
    .limit(limit);
}

// Update property view count
export async function recordPropertyView(propertyId: number, ipAddress?: string, userAgent?: string, referrer?: string) {
  return await db.insert(schema.propertyViews).values({
    propertyId,
    ipAddress,
    userAgent,
    referrer
  });
}

// Get property view analytics
export async function getPropertyViewStats(propertyId: number, days: number = 30) {
  const since = new Date();
  since.setDate(since.getDate() - days);

  return await db
    .select({
      totalViews: count(),
      uniqueIPs: sql<number>`count(distinct ${schema.propertyViews.ipAddress})`
    })
    .from(schema.propertyViews)
    .where(and(
      eq(schema.propertyViews.propertyId, propertyId),
      gte(schema.propertyViews.viewedAt, since)
    ));
} 