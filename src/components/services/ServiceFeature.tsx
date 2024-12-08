import React from 'react';

interface ServiceFeatureProps {
  feature: string;
}

export function ServiceFeature({ feature }: ServiceFeatureProps) {
  return (
    <li className="flex items-center text-gray-400">
      <span className="h-1.5 w-1.5 rounded-full bg-gold-500 mr-2" />
      {feature}
    </li>
  );
}