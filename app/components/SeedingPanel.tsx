'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SeedingResult {
  success: boolean;
  message: string;
  data?: {
    processed?: number;
    inserted?: number;
    skipped?: number;
    errors?: number;
    featured?: number;
  };
  error?: string;
}

export default function SeedingPanel() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [result, setResult] = useState<SeedingResult | null>(null);

  const handleSeed = async (options: {
    limit?: number;
    batchSize?: number;
    skipExisting?: boolean;
    includeFeatured?: boolean;
    onlyFeatured?: boolean;
    seedAll?: boolean;
  } = {}) => {
    setIsSeeding(true);
    setResult(null);

    try {
      const params = new URLSearchParams();
      if (options.limit) params.set('limit', options.limit.toString());
      if (options.batchSize) params.set('batchSize', options.batchSize.toString());
      if (options.skipExisting !== undefined) params.set('skipExisting', options.skipExisting.toString());
      if (options.includeFeatured) params.set('includeFeatured', 'true');
      if (options.onlyFeatured) params.set('onlyFeatured', 'true');
      if (options.seedAll) params.set('seedAll', 'true');

      const response = await fetch(`/api/seed?${params.toString()}`, {
        method: 'POST',
      });

      const data: SeedingResult = await response.json();
      setResult(data);

    } catch (error) {
      setResult({
        success: false,
        message: 'Network error occurred',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsSeeding(false);
    }
  };

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg max-w-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
        <h3 className="font-semibold text-sm text-gray-900">Development Tools</h3>
      </div>
      
      <div className="space-y-2">
        <Button
          onClick={() => handleSeed({ limit: 20, includeFeatured: true })}
          disabled={isSeeding}
          size="sm"
          className="w-full text-xs"
        >
          {isSeeding ? 'Seeding...' : 'Seed 20 Properties + Featured'}
        </Button>
        
        <Button
          onClick={() => handleSeed({ limit: 50, batchSize: 25 })}
          disabled={isSeeding}
          size="sm"
          variant="outline"
          className="w-full text-xs"
        >
          {isSeeding ? 'Seeding...' : 'Seed 50 Properties'}
        </Button>
        
        <Button
          onClick={() => handleSeed({ seedAll: true, batchSize: 25, includeFeatured: true })}
          disabled={isSeeding}
          size="sm"
          variant="outline"
          className="w-full text-xs bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100"
        >
          {isSeeding ? 'Seeding ALL...' : 'Seed ALL Properties + Featured'}
        </Button>
        
        <Button
          onClick={() => handleSeed({ onlyFeatured: true })}
          disabled={isSeeding}
          size="sm"
          variant="outline"
          className="w-full text-xs"
        >
          {isSeeding ? 'Creating...' : 'Create Featured Only'}
        </Button>
      </div>

      {result && (
        <div className="mt-3 p-2 rounded text-xs">
          {result.success ? (
            <div className="bg-green-50 text-green-800 border border-green-200 rounded p-2">
              <div className="font-medium">{result.message}</div>
              {result.data && (
                <div className="mt-1 text-xs">
                  {result.data.processed && `Processed: ${result.data.processed} | `}
                  {result.data.inserted && `Inserted: ${result.data.inserted} | `}
                  {result.data.skipped && `Skipped: ${result.data.skipped} | `}
                  {result.data.errors && `Errors: ${result.data.errors} | `}
                  {result.data.featured && `Featured: ${result.data.featured}`}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-red-50 text-red-800 border border-red-200 rounded p-2">
              <div className="font-medium">{result.message}</div>
              {result.error && (
                <div className="mt-1 text-xs opacity-75">{result.error}</div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="mt-2 text-xs text-gray-500">
        Only visible in development mode
      </div>
    </div>
  );
} 