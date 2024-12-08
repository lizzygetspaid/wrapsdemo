import React from 'react';
import { Shield, Sparkles, Clock, Award, Palette, Car } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Shield,
    title: "Paint Protection Film",
    description: "Preserve your vehicle's pristine appearance with our premium PPF solutions.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80",
    features: [
      "Self-healing technology",
      "UV protection",
      "10-year warranty",
      "Invisible protection"
    ]
  },
  {
    icon: Palette,
    title: "Color Change Wraps",
    description: "Transform your vehicle with our premium vinyl wrapping services.",
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80",
    features: [
      "Premium vinyl materials",
      "Custom color options",
      "Matte & gloss finishes",
      "Professional installation"
    ]
  },
  {
    icon: Car,
    title: "Chrome Delete",
    description: "Give your vehicle a sleek, modern look with chrome delete wrapping.",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80",
    features: [
      "Satin black finish",
      "Custom colors available",
      "Complete trim coverage",
      "Long-lasting results"
    ]
  },
  {
    icon: Award,
    title: "Commercial Wraps",
    description: "Transform your fleet into moving billboards with eye-catching designs.",
    image: "https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&q=80",
    features: [
      "Custom design service",
      "Fleet branding solutions",
      "High-visibility graphics",
      "Durable materials"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the pinnacle of automotive enhancement with our premium wrapping services.
            Each service is delivered with meticulous attention to detail and uncompromising quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}