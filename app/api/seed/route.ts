import { NextRequest, NextResponse } from 'next/server';
import { seedProperties, seedFeaturedProperties } from '@/lib/db/seed-properties';

export async function POST(request: NextRequest) {
  try {
    // Parse query parameters
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const batchSize = parseInt(url.searchParams.get('batchSize') || '25');
    const skipExisting = url.searchParams.get('skipExisting') !== 'false';
    const includeFeatured = url.searchParams.get('includeFeatured') === 'true';
    const onlyFeatured = url.searchParams.get('onlyFeatured') === 'true';
    const seedAll = url.searchParams.get('seedAll') === 'true';

    console.log('🚀 API Seeding started with params:', {
      limit: seedAll ? 'ALL' : limit,
      batchSize,
      skipExisting,
      includeFeatured,
      onlyFeatured,
      seedAll
    });

    // If only creating featured properties
    if (onlyFeatured) {
      await seedFeaturedProperties('homepage', 6);
      return NextResponse.json({
        success: true,
        message: 'Featured properties created successfully',
        data: { featured: 6 }
      });
    }

    // Seed properties from API
    const results = await seedProperties({
      limit: seedAll ? undefined : limit, // undefined means no limit (seed all)
      batchSize,
      skipExisting
    });

    // Create featured properties if requested and we inserted new properties
    let featuredCount = 0;
    if (includeFeatured && results.inserted > 0) {
      await seedFeaturedProperties('homepage', 6);
      featuredCount = 6;
    }

    return NextResponse.json({
      success: true,
      message: seedAll ? 'All properties seeded successfully' : 'Properties seeded successfully',
      data: {
        ...results,
        featured: featuredCount
      }
    });

  } catch (error) {
    console.error('Seeding API Error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Failed to seed properties',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// GET endpoint to check seeding status
export async function GET() {
  return NextResponse.json({
    message: 'Property Seeding API',
    usage: {
      method: 'POST',
      parameters: {
        limit: 'Number of properties to process (default: 20)',
        batchSize: 'Batch size for API requests (default: 25)',
        skipExisting: 'Skip existing properties (default: true)',
        includeFeatured: 'Create featured properties (default: false)',
        onlyFeatured: 'Only create featured properties (default: false)',
        seedAll: 'Seed all properties (default: false)'
      },
      examples: [
        '/api/seed?limit=50&includeFeatured=true',
        '/api/seed?onlyFeatured=true',
        '/api/seed?limit=10&batchSize=3&skipExisting=false',
        '/api/seed?seedAll=true&includeFeatured=true',
        '/api/seed?seedAll=true&batchSize=30'
      ]
    }
  });
} 