import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AboutFeature({ icon: Icon, title, description }: AboutFeatureProps) {
  return (
    <div className="bg-black/50 p-8 rounded-lg transform transition-all duration-300 hover:-translate-y-2">
      <Icon className="h-12 w-12 text-gold-500 mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}