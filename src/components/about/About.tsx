import React from 'react';
import { AboutHero } from './AboutHero';
import { AboutFeatures } from './AboutFeatures';

export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-gray-400">Transforming Vehicles with Precision and Excellence</p>
        </div>

        <AboutHero />
        <AboutFeatures />
      </div>
    </section>
  );
}