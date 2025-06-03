CREATE TABLE "featured_properties" (
	"id" serial PRIMARY KEY NOT NULL,
	"property_id" integer NOT NULL,
	"featured_type" varchar(50) NOT NULL,
	"priority" integer DEFAULT 0,
	"title" varchar(255),
	"description" text,
	"is_active" boolean DEFAULT true,
	"start_date" timestamp,
	"end_date" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "properties" (
	"id" serial PRIMARY KEY NOT NULL,
	"mls_number" varchar(50) NOT NULL,
	"address" varchar(255) NOT NULL,
	"city" varchar(100) NOT NULL,
	"state" varchar(2) DEFAULT 'CA' NOT NULL,
	"zip_code" varchar(10) NOT NULL,
	"county" varchar(100),
	"latitude" numeric(10, 8),
	"longitude" numeric(11, 8),
	"price" integer NOT NULL,
	"original_price" integer,
	"price_per_sqft" numeric(8, 2),
	"bedrooms" integer NOT NULL,
	"bathrooms" numeric(3, 1) NOT NULL,
	"half_baths" integer DEFAULT 0,
	"square_feet" integer,
	"lot_size_acres" numeric(8, 4),
	"lot_size_sqft" integer,
	"year_built" integer,
	"property_type" varchar(50) NOT NULL,
	"property_sub_type" varchar(50),
	"architectural_style" varchar(50),
	"listing_status" varchar(20) DEFAULT 'active' NOT NULL,
	"listing_date" timestamp NOT NULL,
	"days_on_market" integer,
	"sold_date" timestamp,
	"sold_price" integer,
	"public_description" text,
	"private_remarks" text,
	"features" text,
	"appliances" text,
	"garage" integer DEFAULT 0,
	"parking" varchar(100),
	"pool" boolean DEFAULT false,
	"fireplace" boolean DEFAULT false,
	"basement" boolean DEFAULT false,
	"elementary_school" varchar(100),
	"middle_school" varchar(100),
	"high_school" varchar(100),
	"school_district" varchar(100),
	"hoa_fee" integer,
	"hoa_frequency" varchar(20),
	"primary_photo" varchar(500),
	"photo_count" integer DEFAULT 0,
	"has_virtual_tour" boolean DEFAULT false,
	"virtual_tour_url" varchar(500),
	"slug" varchar(255),
	"meta_title" varchar(255),
	"meta_description" text,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "properties_mls_number_unique" UNIQUE("mls_number"),
	CONSTRAINT "properties_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "property_photos" (
	"id" serial PRIMARY KEY NOT NULL,
	"property_id" integer NOT NULL,
	"url" varchar(500) NOT NULL,
	"caption" varchar(255),
	"alt_text" varchar(255),
	"order" integer DEFAULT 0,
	"is_primary" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "property_views" (
	"id" serial PRIMARY KEY NOT NULL,
	"property_id" integer NOT NULL,
	"ip_address" varchar(45),
	"user_agent" text,
	"referrer" varchar(500),
	"viewed_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "featured_properties" ADD CONSTRAINT "featured_properties_property_id_properties_id_fk" FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "property_photos" ADD CONSTRAINT "property_photos_property_id_properties_id_fk" FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "property_views" ADD CONSTRAINT "property_views_property_id_properties_id_fk" FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "featured_properties_property_id_idx" ON "featured_properties" USING btree ("property_id");--> statement-breakpoint
CREATE INDEX "featured_properties_featured_type_idx" ON "featured_properties" USING btree ("featured_type");--> statement-breakpoint
CREATE INDEX "featured_properties_priority_idx" ON "featured_properties" USING btree ("priority");--> statement-breakpoint
CREATE INDEX "featured_properties_active_idx" ON "featured_properties" USING btree ("is_active");--> statement-breakpoint
CREATE INDEX "featured_properties_type_priority_idx" ON "featured_properties" USING btree ("featured_type","priority");--> statement-breakpoint
CREATE INDEX "featured_properties_active_type_idx" ON "featured_properties" USING btree ("is_active","featured_type");--> statement-breakpoint
CREATE INDEX "properties_price_idx" ON "properties" USING btree ("price");--> statement-breakpoint
CREATE INDEX "properties_bedrooms_idx" ON "properties" USING btree ("bedrooms");--> statement-breakpoint
CREATE INDEX "properties_bathrooms_idx" ON "properties" USING btree ("bathrooms");--> statement-breakpoint
CREATE INDEX "properties_city_idx" ON "properties" USING btree ("city");--> statement-breakpoint
CREATE INDEX "properties_zip_code_idx" ON "properties" USING btree ("zip_code");--> statement-breakpoint
CREATE INDEX "properties_county_idx" ON "properties" USING btree ("county");--> statement-breakpoint
CREATE INDEX "properties_location_idx" ON "properties" USING btree ("latitude","longitude");--> statement-breakpoint
CREATE INDEX "properties_property_type_idx" ON "properties" USING btree ("property_type");--> statement-breakpoint
CREATE INDEX "properties_listing_status_idx" ON "properties" USING btree ("listing_status");--> statement-breakpoint
CREATE INDEX "properties_price_bedrooms_idx" ON "properties" USING btree ("price","bedrooms");--> statement-breakpoint
CREATE INDEX "properties_city_price_idx" ON "properties" USING btree ("city","price");--> statement-breakpoint
CREATE INDEX "properties_status_active_idx" ON "properties" USING btree ("listing_status","is_active");--> statement-breakpoint
CREATE INDEX "properties_listing_date_idx" ON "properties" USING btree ("listing_date");--> statement-breakpoint
CREATE INDEX "properties_days_on_market_idx" ON "properties" USING btree ("days_on_market");--> statement-breakpoint
CREATE UNIQUE INDEX "properties_mls_number_idx" ON "properties" USING btree ("mls_number");--> statement-breakpoint
CREATE UNIQUE INDEX "properties_slug_idx" ON "properties" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "property_photos_property_id_idx" ON "property_photos" USING btree ("property_id");--> statement-breakpoint
CREATE INDEX "property_photos_order_idx" ON "property_photos" USING btree ("order");--> statement-breakpoint
CREATE INDEX "property_photos_primary_idx" ON "property_photos" USING btree ("is_primary");--> statement-breakpoint
CREATE INDEX "property_views_property_id_idx" ON "property_views" USING btree ("property_id");--> statement-breakpoint
CREATE INDEX "property_views_viewed_at_idx" ON "property_views" USING btree ("viewed_at");--> statement-breakpoint
CREATE INDEX "property_views_property_date_idx" ON "property_views" USING btree ("property_id","viewed_at");