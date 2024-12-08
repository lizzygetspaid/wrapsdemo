import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "We use only the highest quality materials from trusted manufacturers, ensuring your vehicle gets the best protection and finish possible."
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Our certified technicians bring years of experience and meticulous attention to detail to every project we undertake."
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "We pride ourselves on delivering exceptional service and ensuring complete satisfaction with every transformation we perform."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your time and deliver projects within the agreed timeframe without compromising on quality."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-gray-400">Transforming Vehicles with Precision and Excellence</p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-black/50 p-8 rounded-lg transform transition-all duration-300 hover:-translate-y-2"
              >
                <Icon className="h-12 w-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}