import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white p-12 rounded-2xl shadow-sm">
      <h2 className="text-4xl font-extrabold mb-4">Pixel-perfect desktop UI</h2>
      <p className="text-lg text-gray-600 mb-6">
        Implement the Figma layout exactly for desktop screens with smooth transitions &
        accessibility.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 border rounded-md font-medium hover:bg-gray-50">
          See Features
        </button>
        <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:brightness-95">
          Pricing
        </button>
      </div>
    </section>
  );
}
