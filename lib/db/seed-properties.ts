import db, { schema } from "../db";
import { eq } from "drizzle-orm";

// API response interfaces
interface PropertyListResponse {
  PreviewCount: {
    Count: string;
    SessionNumber: string;
    SearchNumber: string;
    ResultString: Array<{
      LRID: number;
      Tmsp: string;
      Pt: string;
      Sort: number;
    }>;
    Quick5UP: Array<{
      LRID: string;
      Tmsp: string;
      Pt: string;
      Sort: number;
    }>;
  };
}

interface PropertyDetailResponse {
  ListingNumber: string;
  ListingRid: string;
  ListingType: string;
  PropertyType: string;
  PrimaryPicURL: string;
  HasAddlPics: string;
  VirtualTourURL: string;
  Status: string;
  StatusDate: string;
  SearchPrice: string;
  Beds: string;
  Baths: string;
  Sqft: string;
  Lotz: string;
  Acres: string;
  Year: string;
  Pool: string;
  GarageSpaces: string;
  SubType: string;
  Address: string;
  ListingOfficeName: string;
  ListingAgentName: string;
  MarketingRmks: string;
  Latitude: string;
  Longitude: string;
  Directions: string;
  OpenHouses: any[];
}

// Safe truncation helpers
function safeTruncate(text: string | null | undefined, maxLength: number): string | null {
  if (!text) return null;
  return text.length > maxLength ? text.slice(0, maxLength - 3) + '...' : text;
}

function parseVirtualTourUrl(tourUrlString: string): string | null {
  const safeTourUrlString = String(tourUrlString || '');
  if (!safeTourUrlString) return null;
  
  // The API returns multiple URLs separated by |, let's take the first valid one
  const urls = safeTourUrlString.split('|');
  for (const url of urls) {
    const cleanUrl = String(url || '').trim();
    if (cleanUrl.startsWith('http')) {
      // Truncate to fit our schema limit
      return safeTruncate(cleanUrl, 2000);
    }
  }
  
  // If no valid URL found, truncate the whole string
  return safeTruncate(safeTourUrlString, 2000);
}

// Helper function to clean JSON strings of invalid control characters
function cleanJsonString(jsonString: string): string {
  // Remove or replace common problematic control characters
  return jsonString
    // Remove null bytes
    .replace(/\0/g, '')
    // Replace other control characters (except \n, \r, \t) with spaces
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, ' ')
    // Fix common HTML entities that might break JSON
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    // Remove or escape unescaped quotes in strings (basic attempt)
    .replace(/([^\\])"/g, '$1\\"');
}

// Helper functions
function parsePrice(priceString: string): number {
  return parseInt(priceString.replace(/[^0-9]/g, '')) || 0;
}

function parseBedrooms(bedsString: string): number {
  return parseInt(bedsString) || 0;
}

function parseBathrooms(bathsString: string): number {
  // Format: "1 (1 0)" or "2.5"
  const match = bathsString.match(/^(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

function parseSquareFeet(sqftString: string): number {
  return parseInt(sqftString.replace(/[^0-9]/g, '')) || 0;
}

function parseYear(yearString: string): number {
  const year = parseInt(yearString);
  return year && year > 1800 ? year : 0;
}

function parseCoordinate(coordString: string): string | null {
  const coord = parseFloat(coordString.trim());
  return isNaN(coord) ? null : coord.toString();
}

function parseStatus(status: string): string {
  const statusMap: Record<string, string> = {
    'Active': 'active',
    'Pending': 'pending',
    'Sold': 'sold',
    'Withdrawn': 'withdrawn',
    'Expired': 'expired'
  };
  return statusMap[status] || 'active';
}

function generateSlug(address: string, listingNumber: string): string {
  // Ensure inputs are strings and handle any potential Symbol values
  const safeAddress = String(address || '');
  const safeListingNumber = String(listingNumber || '');
  
  const cleanAddress = safeAddress
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 50);
  return `${cleanAddress}-${safeListingNumber}`;
}

function parseAddress(fullAddress: string) {
  // Format: "1715 Sonoma Blvd #204, Vallejo, CA 94590"
  const safeAddress = String(fullAddress || '');
  const parts = safeAddress.split(', ');
  const address = String(parts[0] || '');
  const city = String(parts[1] || '');
  const stateZip = String(parts[2] || '');
  const [state, zipCode] = stateZip.split(' ');
  
  return {
    address: address.trim(),
    city: city.trim(),
    state: String(state || '').trim() || 'CA',
    zipCode: String(zipCode || '').trim()
  };
}

function mapPropertyType(apiType: string): string {
  const typeMap: Record<string, string> = {
    'Condominium': 'Condo',
    'Single Family Residential': 'Single Family',
    'Townhouse': 'Townhouse',
    'Mobile/Manufactured Home': 'Mobile Home',
    'Multi-Family': 'Multi-Family'
  };
  return typeMap[apiType] || apiType;
}

// API calling functions
async function fetchPropertyList(): Promise<PropertyListResponse> {
  const url = "https://rebareis.rapmls.com/scripts/mgrqispi.dll?APPNAME=ReBareis&PRGNAME=MLSLogin&ARGUMENT=3PeDsm13mllotO21PDOqbmAKsiAXwDX15x56B20ZCwx2As7bEqf87V3GVSreTx2C%2B8KxU1pdubwUbjGi0vF6tg%3D%3D&KeyRid=1&MLS_Origin=&isFeaturedListings=N&PageIDX=Y&cdn=2022-03-02T10:32:28.583";
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch property list: ${response.statusText}`);
  }
  
  const rawText = await response.text();
  const cleanedText = cleanJsonString(rawText);
  
  try {
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error('JSON parse error for property list:', error);
    console.error('First 500 chars of response:', rawText.slice(0, 500));
    throw new Error(`Failed to parse property list JSON: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

async function fetchPropertyDetail(lrid: number, tmsp: string): Promise<PropertyDetailResponse> {
  const url = `https://idxrebareis.rapmls.com/scripts/mgrqispi.dll?APPNAME=ReBareis&PRGNAME=IDXResultListing&ARGUMENTS=-ABARI,-N${lrid},-Lfalse&tmp=${tmsp}&cdn=2022-03-02T10:32:28.583&AgentId=D335758&OfficeId=`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch property detail for ${lrid}: ${response.statusText}`);
  }
  
  const rawText = await response.text();
  const cleanedText = cleanJsonString(rawText);
  
  try {
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error(`JSON parse error for property ${lrid}:`, error);
    console.error('First 500 chars of response:', rawText.slice(0, 500));
    throw new Error(`Failed to parse property detail JSON for ${lrid}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Main seeding function
export async function seedProperties(options: {
  limit?: number;
  batchSize?: number;
  skipExisting?: boolean;
} = {}) {
  const { limit, batchSize = 25, skipExisting = true } = options;
  
  console.log('🏠 Starting property seeding...');
  
  try {
    // Step 1: Fetch property list
    console.log('📋 Fetching property list...');
    const listResponse = await fetchPropertyList();
    const propertyCount = parseInt(listResponse.PreviewCount.Count);
    
    console.log(`Found ${propertyCount} properties in API`);
    
    // Combine Quick5UP and ResultString
    const allProperties = [
      ...listResponse.PreviewCount.Quick5UP.map(p => ({
        LRID: parseInt(p.LRID),
        Tmsp: p.Tmsp,
        Pt: p.Pt,
        Sort: p.Sort
      })),
      ...listResponse.PreviewCount.ResultString
    ];
    
    // Limit the properties to process (or process all if no limit)
    const propertiesToProcess = limit ? allProperties.slice(0, limit) : allProperties;
    const processingMessage = limit 
      ? `Processing ${propertiesToProcess.length} properties...`
      : `Processing ALL ${propertiesToProcess.length} properties...`;
    console.log(processingMessage);
    
    let processed = 0;
    let inserted = 0;
    let skipped = 0;
    let errors = 0;
    
    // Process in batches
    for (let i = 0; i < propertiesToProcess.length; i += batchSize) {
      const batch = propertiesToProcess.slice(i, i + batchSize);
      console.log(`\n📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(propertiesToProcess.length / batchSize)}`);
      
      // Process batch in parallel
      const batchPromises = batch.map(async (property) => {
        try {
          // Check if property already exists
          if (skipExisting) {
            const existing = await db
              .select({ id: schema.properties.id })
              .from(schema.properties)
              .where(eq(schema.properties.mlsNumber, property.LRID.toString()))
              .limit(1);
            
            if (existing.length > 0) {
              console.log(`⏭️  Skipping existing property ${property.LRID}`);
              skipped++;
              return;
            }
          }
          
          // Fetch detailed property information
          const detail = await fetchPropertyDetail(property.LRID, property.Tmsp);
          
          // Parse address components
          const addressParts = parseAddress(detail.Address);
          
          // Map API data to database schema
          const propertyData = {
            mlsNumber: String(detail.ListingNumber || ''),
            address: String(addressParts.address || ''),
            city: String(addressParts.city || ''),
            state: String(addressParts.state || 'CA'),
            zipCode: String(addressParts.zipCode || ''),
            county: 'Solano', // Default for this region
            latitude: parseCoordinate(detail.Latitude),
            longitude: parseCoordinate(detail.Longitude),
            price: parsePrice(detail.SearchPrice),
            originalPrice: parsePrice(detail.SearchPrice), // Same as current price initially
            bedrooms: parseBedrooms(detail.Beds),
            bathrooms: parseBathrooms(detail.Baths).toString(), // Convert to string for decimal field
            squareFeet: parseSquareFeet(detail.Sqft),
            lotSizeAcres: detail.Acres && parseFloat(detail.Acres) ? parseFloat(detail.Acres).toString() : null,
            yearBuilt: parseYear(detail.Year),
            propertyType: mapPropertyType(String(detail.SubType || '')),
            propertySubType: safeTruncate(String(detail.SubType || ''), 50),
            listingStatus: parseStatus(String(detail.Status || 'active')),
            listingDate: new Date(), // Use current date as we don't have exact listing date
            publicDescription: String(detail.MarketingRmks || ''), // This is already a text field (unlimited)
            garage: parseInt(detail.GarageSpaces) || 0,
            pool: String(detail.Pool || '').toLowerCase().includes('pool'),
            primaryPhoto: safeTruncate(String(detail.PrimaryPicURL || ''), 1000),
            photoCount: detail.HasAddlPics === 'true' ? 1 : 0,
            hasVirtualTour: Boolean(detail.VirtualTourURL),
            virtualTourUrl: parseVirtualTourUrl(String(detail.VirtualTourURL || '')),
            slug: generateSlug(String(detail.Address || ''), String(detail.ListingNumber || '')),
            metaTitle: safeTruncate(`${addressParts.address}, ${addressParts.city} - $${parsePrice(detail.SearchPrice).toLocaleString()}`, 255),
            metaDescription: safeTruncate(String(detail.MarketingRmks || ''), 160),
            isActive: String(detail.Status || '') === 'Active',
            createdAt: new Date(),
            updatedAt: new Date()
          };
          
          // Insert property
          await db.insert(schema.properties).values(propertyData);
          
          console.log(`✅ Inserted property ${detail.ListingNumber} - ${addressParts.address}`);
          inserted++;
          
        } catch (error) {
          console.error(`❌ Error processing property ${property.LRID}:`, error);
          
          // Log additional details for debugging
          if (error instanceof Error) {
            if (error.message.includes('JSON')) {
              console.error(`   └─ JSON parsing failed for property ${property.LRID}`);
            } else if (error.message.includes('value too long')) {
              console.error(`   └─ Database field too long for property ${property.LRID}`);
            } else if (error.message.includes('Failed to fetch')) {
              console.error(`   └─ Network/API error for property ${property.LRID}`);
            }
          }
          
          errors++;
        }
        
        processed++;
      });
      
      // Wait for batch to complete
      await Promise.all(batchPromises);
      
      // Add delay between batches to be respectful to the API
      if (i + batchSize < propertiesToProcess.length) {
        console.log('⏱️  Waiting 2 seconds before next batch...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    console.log('\n🎉 Property seeding completed!');
    console.log(`📊 Results:`);
    console.log(`   • Processed: ${processed}`);
    console.log(`   • Inserted: ${inserted}`);
    console.log(`   • Skipped: ${skipped}`);
    console.log(`   • Errors: ${errors}`);
    
    return {
      processed,
      inserted,
      skipped,
      errors
    };
    
  } catch (error) {
    console.error('💥 Fatal error during seeding:', error);
    throw error;
  }
}

// Utility function to seed featured properties
export async function seedFeaturedProperties(featuredType: string = 'homepage', count: number = 6) {
  console.log(`🌟 Setting up ${count} featured properties...`);
  
  try {
    // Get active properties sorted by price (descending) for luxury features
    const properties = await db
      .select()
      .from(schema.properties)
      .where(eq(schema.properties.isActive, true))
      .orderBy(schema.properties.price)
      .limit(count);
    
    if (properties.length === 0) {
      console.log('⚠️  No properties found to feature');
      return;
    }
    
    // Insert featured properties
    const featuredData = properties.map((property, index) => ({
      propertyId: property.id,
      featuredType,
      priority: count - index, // Higher priority for more expensive properties
      title: `Featured Property - ${property.address}`,
      description: property.publicDescription?.slice(0, 200) + '...' || null,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
    
    await db.insert(schema.featuredProperties).values(featuredData);
    
    console.log(`✅ Featured ${featuredData.length} properties`);
    
  } catch (error) {
    console.error('❌ Error setting up featured properties:', error);
    throw error;
  }
}

// CLI-friendly seeding function
export async function runPropertySeeding() {
  const args = process.argv.slice(2);
  const limit = parseInt(args.find(arg => arg.startsWith('--limit='))?.split('=')[1] || '50');
  const batchSize = parseInt(args.find(arg => arg.startsWith('--batch='))?.split('=')[1] || '25');
  const skipExisting = !args.includes('--force');
  const includeFeatured = args.includes('--featured');
  
  console.log('🚀 Starting property seeding with options:');
  console.log(`   • Limit: ${limit}`);
  console.log(`   • Batch size: ${batchSize}`);
  console.log(`   • Skip existing: ${skipExisting}`);
  console.log(`   • Include featured: ${includeFeatured}`);
  
  try {
    const results = await seedProperties({ limit, batchSize, skipExisting });
    
    if (includeFeatured && results.inserted > 0) {
      await seedFeaturedProperties();
    }
    
    console.log('\n🎯 Seeding completed successfully!');
    process.exit(0);
    
  } catch (error) {
    console.error('\n💥 Seeding failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  runPropertySeeding();
} 