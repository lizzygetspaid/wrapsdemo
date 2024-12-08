import React from 'react';
import { Car } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-gold-500" />
              <span className="ml-2 text-2xl font-bold">LUXURY WRAPS</span>
            </div>
            <p className="text-gray-400">
              Premium car wrapping services using the highest quality materials and expert installation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gold-500">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold-500">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Paint Protection Film</li>
              <li className="text-gray-400">Color Change Wraps</li>
              <li className="text-gray-400">Chrome Delete</li>
              <li className="text-gray-400">Commercial Wraps</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Luxury Lane</li>
              <li>Dubai, UAE</li>
              <li>+1 (234) 567-8900</li>
              <li>info@luxurywraps.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luxury Wraps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}