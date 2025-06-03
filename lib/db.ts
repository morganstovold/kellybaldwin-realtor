import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import { env } from "@/app/env";
import * as schema from "./db/schema";

// Create connection pool for better performance
const pool = new Pool({ connectionString: env.DATABASE_URL });

// Initialize Drizzle with schema
const db = drizzle(pool, { schema });

export default db;
export { schema };

// Export types for convenience
export type {
  Property,
  NewProperty,
  FeaturedProperty,
  NewFeaturedProperty,
  PropertyPhoto,
  NewPropertyPhoto,
  PropertyView,
  NewPropertyView,
} from "./db/schema";
