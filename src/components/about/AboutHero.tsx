import React from 'react';

export function AboutHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="relative group">
        <div className="absolute inset-0 bg-gold-500 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6"></div>
        <img
          src="https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&q=80"
          alt="Our Workshop"
          className="relative rounded-lg shadow-xl transform transition-transform group-hover:-translate-y-2"
        />
      </div>
      
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-white">Dubai's Premier Car Wrapping Service</h3>
        <p className="text-gray-400">
          Since our establishment, we have been at the forefront of automotive aesthetics, 
          providing premium car wrapping services to discerning clients throughout Dubai. 
          Our commitment to excellence and attention to detail has made us the preferred 
          choice for those seeking to enhance their vehicle's appearance.
        </p>
        <p className="text-gray-400">
          We combine innovative techniques with premium materials to deliver stunning 
          results that exceed expectations. Our team of certified professionals ensures 
          that every project is executed with precision and care.
        </p>
      </div>
    </div>
  );
}