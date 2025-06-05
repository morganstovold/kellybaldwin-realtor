import Link from "next/link";
import { Award, Star, TrendingUp } from "lucide-react";

interface AwardBannerProps {
  variant?: 'hero' | 'inline';
  showCTA?: boolean;
}

export default function AwardBanner({ variant = 'inline', showCTA = true }: AwardBannerProps) {
  if (variant === 'hero') {
    return (
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white py-4">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 rounded-full p-2">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">🏆 Agent of the Year 2025</div>
                <div className="text-sm opacity-90">Kelly Baldwin wins RateMyAgent&apos;s prestigious award</div>
              </div>
            </div>
            {showCTA && (
              <Link
                href="/awards/agent-of-the-year-2025"
                className="bg-white text-yellow-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
              >
                Read More →
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-6 my-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-500 text-white rounded-full p-3">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <Star className="w-4 h-4 text-yellow-600" />
              <span className="font-bold text-lg text-gray-900">RateMyAgent Agent of the Year 2025</span>
            </div>
            <p className="text-gray-700">
              Recognized for exceptional customer service and outstanding sales performance
            </p>
          </div>
        </div>
        {showCTA && (
          <Link
            href="/awards/agent-of-the-year-2025"
            className="inline-flex items-center bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors font-medium whitespace-nowrap"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            View Media Release
          </Link>
        )}
      </div>
    </div>
  );
} 