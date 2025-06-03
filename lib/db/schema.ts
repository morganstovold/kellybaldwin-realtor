import { pgTable, serial, varchar, text, integer, decimal, boolean, timestamp, index, uniqueIndex } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Properties table with comprehensive real estate data
export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  mlsNumber: varchar("mls_number", { length: 50 }).unique().notNull(),
  
  // Basic property info
  address: varchar("address", { length: 255 }).notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 2 }).notNull().default("CA"),
  zipCode: varchar("zip_code", { length: 10 }).notNull(),
  county: varchar("county", { length: 100 }),
  
  // Geographic coordinates for mapping
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  
  // Property details
  price: integer("price").notNull(),
  originalPrice: integer("original_price"),
  pricePerSqft: decimal("price_per_sqft", { precision: 8, scale: 2 }),
  
  // Physical characteristics
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: decimal("bathrooms", { precision: 3, scale: 1 }).notNull(),
  halfBaths: integer("half_baths").default(0),
  squareFeet: integer("square_feet"),
  lotSizeAcres: decimal("lot_size_acres", { precision: 8, scale: 4 }),
  lotSizeSqft: integer("lot_size_sqft"),
  yearBuilt: integer("year_built"),
  
  // Property type and style
  propertyType: varchar("property_type", { length: 50 }).notNull(), // Single Family, Condo, Townhouse, etc.
  propertySubType: varchar("property_sub_type", { length: 50 }),
  architecturalStyle: varchar("architectural_style", { length: 50 }),
  
  // Listing details
  listingStatus: varchar("listing_status", { length: 20 }).notNull().default("active"), // active, pending, sold, withdrawn
  listingDate: timestamp("listing_date").notNull(),
  daysOnMarket: integer("days_on_market"),
  soldDate: timestamp("sold_date"),
  soldPrice: integer("sold_price"),
  
  // Descriptions and features
  publicDescription: text("public_description"),
  privateRemarks: text("private_remarks"),
  features: text("features"), // JSON string of features array
  appliances: text("appliances"), // JSON string of appliances
  
  // Additional details
  garage: integer("garage").default(0),
  parking: varchar("parking", { length: 100 }),
  pool: boolean("pool").default(false),
  fireplace: boolean("fireplace").default(false),
  basement: boolean("basement").default(false),
  
  // School information
  elementarySchool: varchar("elementary_school", { length: 100 }),
  middleSchool: varchar("middle_school", { length: 100 }),
  highSchool: varchar("high_school", { length: 100 }),
  schoolDistrict: varchar("school_district", { length: 100 }),
  
  // HOA and fees
  hoaFee: integer("hoa_fee"),
  hoaFrequency: varchar("hoa_frequency", { length: 20 }), // monthly, quarterly, annually
  
  // Media
  primaryPhoto: varchar("primary_photo", { length: 1000 }),
  photoCount: integer("photo_count").default(0),
  hasVirtualTour: boolean("has_virtual_tour").default(false),
  virtualTourUrl: varchar("virtual_tour_url", { length: 2000 }),
  
  // SEO and metadata
  slug: varchar("slug", { length: 255 }).unique(),
  metaTitle: varchar("meta_title", { length: 255 }),
  metaDescription: text("meta_description"),
  
  // System fields
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ([
  // Primary search indexes
  index("properties_price_idx").on(table.price),
  index("properties_bedrooms_idx").on(table.bedrooms),
  index("properties_bathrooms_idx").on(table.bathrooms),
  
  // Location indexes
  index("properties_city_idx").on(table.city),
  index("properties_zip_code_idx").on(table.zipCode),
  index("properties_county_idx").on(table.county),
  
  // Geographic index for proximity searches
  index("properties_location_idx").on(table.latitude, table.longitude),
  
  // Property type and status indexes
  index("properties_property_type_idx").on(table.propertyType),
  index("properties_listing_status_idx").on(table.listingStatus),
  
  // Composite indexes for common search combinations
  index("properties_price_bedrooms_idx").on(table.price, table.bedrooms),
  index("properties_city_price_idx").on(table.city, table.price),
  index("properties_status_active_idx").on(table.listingStatus, table.isActive),
  
  // Date-based indexes
  index("properties_listing_date_idx").on(table.listingDate),
  index("properties_days_on_market_idx").on(table.daysOnMarket),
  
  // Unique constraints
  uniqueIndex("properties_mls_number_idx").on(table.mlsNumber),
  uniqueIndex("properties_slug_idx").on(table.slug),
]));

// Featured properties table
export const featuredProperties = pgTable("featured_properties", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull().references(() => properties.id, { onDelete: "cascade" }),
  
  // Featured details
  featuredType: varchar("featured_type", { length: 50 }).notNull(), // "homepage", "luxury", "new-listing", etc.
  priority: integer("priority").default(0), // Higher number = higher priority
  title: varchar("title", { length: 255 }),
  description: text("description"),
  
  // Display settings
  isActive: boolean("is_active").default(true),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  
  // System fields
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  // Indexes for featured properties
  propertyIdIdx: index("featured_properties_property_id_idx").on(table.propertyId),
  featuredTypeIdx: index("featured_properties_featured_type_idx").on(table.featuredType),
  priorityIdx: index("featured_properties_priority_idx").on(table.priority),
  activeIdx: index("featured_properties_active_idx").on(table.isActive),
  
  // Composite indexes
  typePriorityIdx: index("featured_properties_type_priority_idx").on(table.featuredType, table.priority),
  activeTypeIdx: index("featured_properties_active_type_idx").on(table.isActive, table.featuredType),
}));

// Property photos table for multiple images
export const propertyPhotos = pgTable("property_photos", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull().references(() => properties.id, { onDelete: "cascade" }),
  
  // Photo details
  url: varchar("url", { length: 500 }).notNull(),
  caption: varchar("caption", { length: 255 }),
  altText: varchar("alt_text", { length: 255 }),
  order: integer("order").default(0),
  isPrimary: boolean("is_primary").default(false),
  
  // System fields
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  propertyIdIdx: index("property_photos_property_id_idx").on(table.propertyId),
  orderIdx: index("property_photos_order_idx").on(table.order),
  primaryIdx: index("property_photos_primary_idx").on(table.isPrimary),
}));

// Property views/analytics table
export const propertyViews = pgTable("property_views", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull().references(() => properties.id, { onDelete: "cascade" }),
  
  // View tracking
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  referrer: varchar("referrer", { length: 500 }),
  
  // System fields
  viewedAt: timestamp("viewed_at").defaultNow().notNull(),
}, (table) => ({
  propertyIdIdx: index("property_views_property_id_idx").on(table.propertyId),
  viewedAtIdx: index("property_views_viewed_at_idx").on(table.viewedAt),
  propertyDateIdx: index("property_views_property_date_idx").on(table.propertyId, table.viewedAt),
}));

// Relations
export const propertiesRelations = relations(properties, ({ many }) => ({
  featuredProperties: many(featuredProperties),
  photos: many(propertyPhotos),
  views: many(propertyViews),
}));

export const featuredPropertiesRelations = relations(featuredProperties, ({ one }) => ({
  property: one(properties, {
    fields: [featuredProperties.propertyId],
    references: [properties.id],
  }),
}));

export const propertyPhotosRelations = relations(propertyPhotos, ({ one }) => ({
  property: one(properties, {
    fields: [propertyPhotos.propertyId],
    references: [properties.id],
  }),
}));

export const propertyViewsRelations = relations(propertyViews, ({ one }) => ({
  property: one(properties, {
    fields: [propertyViews.propertyId],
    references: [properties.id],
  }),
}));

// Type exports for TypeScript
export type Property = typeof properties.$inferSelect;
export type NewProperty = typeof properties.$inferInsert;
export type FeaturedProperty = typeof featuredProperties.$inferSelect;
export type NewFeaturedProperty = typeof featuredProperties.$inferInsert;
export type PropertyPhoto = typeof propertyPhotos.$inferSelect;
export type NewPropertyPhoto = typeof propertyPhotos.$inferInsert;
export type PropertyView = typeof propertyViews.$inferSelect;
export type NewPropertyView = typeof propertyViews.$inferInsert;
