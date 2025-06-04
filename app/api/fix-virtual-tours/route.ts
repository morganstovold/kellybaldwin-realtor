import { NextRequest, NextResponse } from 'next/server';
import db, { schema } from '@/lib/db';
import { eq, isNotNull } from 'drizzle-orm';

// Function to extract the first valid HTTP URL from virtual tour string
function cleanVirtualTourUrl(dirtyUrl: string | null): string | null {
  if (!dirtyUrl || dirtyUrl.trim() === '') {
    return null;
  }

  // Split by common delimiters (|, @, ^)
  const segments = dirtyUrl.split(/[\|@\^]/);
  
  // Look for the first segment that starts with http
  for (const segment of segments) {
    const trimmed = segment.trim();
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      // Remove any trailing parameters that might be malformed
      try {
        const url = new URL(trimmed);
        return url.toString();
      } catch {
        // If URL parsing fails, just return the trimmed string if it looks like a URL
        if (trimmed.includes('.')) {
          return trimmed;
        }
      }
    }
  }
  
  return null;
}

export async function POST(request: NextRequest) {
  try {
    console.log('🔧 Starting virtual tour URL cleanup...');
    
    // Get all properties that have virtual tour URLs
    const properties = await db
      .select({
        id: schema.properties.id,
        virtualTourUrl: schema.properties.virtualTourUrl,
        mlsNumber: schema.properties.mlsNumber,
        address: schema.properties.address
      })
      .from(schema.properties)
      .where(isNotNull(schema.properties.virtualTourUrl));

    console.log(`📋 Found ${properties.length} properties with virtual tour URLs`);

    let updated = 0;
    let cleaned = 0;
    let errors = 0;

    // Process each property
    for (const property of properties) {
      try {
        const cleanedUrl = cleanVirtualTourUrl(property.virtualTourUrl);
        
        // Only update if the URL changed
        if (cleanedUrl !== property.virtualTourUrl) {
          await db
            .update(schema.properties)
            .set({ 
              virtualTourUrl: cleanedUrl,
              hasVirtualTour: cleanedUrl !== null,
              updatedAt: new Date()
            })
            .where(eq(schema.properties.id, property.id));
          
          console.log(`✅ Updated property ${property.mlsNumber}: "${property.virtualTourUrl}" → "${cleanedUrl}"`);
          updated++;
          
          if (cleanedUrl === null) {
            cleaned++;
          }
        }
      } catch (error) {
        console.error(`❌ Error processing property ${property.id}:`, error);
        errors++;
      }
    }

    const results = {
      total: properties.length,
      updated,
      cleaned,
      errors,
      timestamp: new Date().toISOString()
    };

    console.log('🎉 Virtual tour URL cleanup completed!');
    console.log(`📊 Results:`, results);

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${properties.length} properties. Updated ${updated} URLs, cleaned ${cleaned} empty URLs.`,
      results
    });

  } catch (error) {
    console.error('💥 Fatal error during virtual tour cleanup:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fix virtual tour URLs',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Also support GET for testing
export async function GET() {
  return NextResponse.json({
    message: 'Virtual Tour URL Fixer',
    description: 'POST to this endpoint to clean up virtual tour URLs in the database',
    examples: {
      before: 'Virtual Tour Branded^https://my.matterport.com/show/?m=123|3D Showcase^https://example.com',
      after: 'https://my.matterport.com/show/?m=123'
    }
  });
} 