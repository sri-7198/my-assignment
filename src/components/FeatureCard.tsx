import React from 'react';

export default function FeatureCard({ title, description }) {
  return (
    <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
