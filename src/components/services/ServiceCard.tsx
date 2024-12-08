import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '../common/Button';
import { ServiceFeature } from './ServiceFeature';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export function ServiceCard({ icon: Icon, title, description, features, image }: ServiceCardProps) {
  return (
    <div className="group bg-zinc-900 rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
        <Icon className="absolute top-4 right-4 h-8 w-8 text-gold-500" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <ServiceFeature key={index} feature={feature} />
          ))}
        </ul>
        
        <Button variant="primary" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  );
}