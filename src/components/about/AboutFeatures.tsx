import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { AboutFeature } from './AboutFeature';

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

export function AboutFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <AboutFeature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}