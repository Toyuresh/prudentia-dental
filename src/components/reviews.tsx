'use client';

import ElfsightWidget from "./ElfsightWidget";

export default function Reviews()
{
    return (
          
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-4C8.67 7 8 7.67 8 8.5S8.67 10 9.5 10s1.5-.67 1.5-1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              <h3 className="text-xl font-bold text-white">
                Patient Testimonials
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="ml-1 text-white font-medium">5.0</span>
              </div>
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJdV6SvZy5wjsR6lon_F6ZA7Y"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition-colors"
              >
                Leave a Review
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Widget */}
        <div className="p-6">
        <ElfsightWidget />
          {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
        </div>

        {/* review Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Powered by <span className="font-medium">Google Reviews</span>
            </p>
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJdV6SvZy5wjsR6lon_F6ZA7Y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center"
            >
              View All
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
}