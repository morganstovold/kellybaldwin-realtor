'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Check, X, Loader2 } from 'lucide-react';

export default function VirtualTourFixer() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFixVirtualTours = async () => {
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch('/api/fix-virtual-tours', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.results);
      } else {
        setError(data.error || 'Failed to fix virtual tour URLs');
      }
    } catch (err) {
      setError('Network error occurred while fixing virtual tour URLs');
      console.error('Error fixing virtual tours:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-lg shadow-lg border p-6 max-w-sm">
        <div className="flex items-center gap-3 mb-4">
          <Wrench size={20} className="text-blue-600" />
          <h3 className="font-medium text-gray-900">Database Tools</h3>
        </div>

        <Button
          onClick={handleFixVirtualTours}
          disabled={isLoading}
          className="w-full mb-4"
          variant="outline"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="mr-2 animate-spin" />
              Fixing Virtual Tours...
            </>
          ) : (
            <>
              <Wrench size={16} className="mr-2" />
              Fix Virtual Tour URLs
            </>
          )}
        </Button>

        {/* Success Result */}
        {result && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <Check size={16} className="text-green-600" />
              <span className="text-sm font-medium text-green-800">Success!</span>
            </div>
            <div className="text-xs text-green-700 space-y-1">
              <div>Total Properties: {result.total}</div>
              <div>Updated: {result.updated}</div>
              <div>Cleaned: {result.cleaned}</div>
              {result.errors > 0 && <div>Errors: {result.errors}</div>}
            </div>
          </div>
        )}

        {/* Error Result */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-2 mb-1">
              <X size={16} className="text-red-600" />
              <span className="text-sm font-medium text-red-800">Error</span>
            </div>
            <div className="text-xs text-red-700">{error}</div>
          </div>
        )}

        <div className="text-xs text-gray-500">
          Development only - fixes malformed virtual tour URLs in the database
        </div>
      </div>
    </div>
  );
} 