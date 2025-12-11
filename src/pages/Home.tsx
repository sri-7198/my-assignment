import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-gray-900 font-sans">
      <Header />
      <main className="max-w-[1200px] mx-auto px-12 py-12">
        <Hero />
        <section id="features" className="mt-10 grid grid-cols-3 gap-8">
          <FeatureCard
            title="Pixel perfect"
            description="Match Figma spacing, typography & colors."
          />
          <FeatureCard title="Accessibility" description="Keyboard & screen reader friendly." />
          <FeatureCard title="Interactions" description="Hover, focus & transitions." />
        </section>
      </main>
      <Footer />
    </div>
  );
}
