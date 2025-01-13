import React from 'react';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mx-auto mb-6"></div>
      <p className="text-gray-700">Loading blog post...</p>
    </div>
  );
}
