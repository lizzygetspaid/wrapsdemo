import React from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';
import { Button } from './Button';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className="fixed w-full bg-black/90 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-gold-500" />
            <span className="ml-2 text-2xl font-bold">LUXURY WRAPS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a onClick={(e) => handleNavClick(e, 'home')} href="#home" 
                className="hover:text-gold-500 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a onClick={(e) => handleNavClick(e, 'services')} href="#services" 
                className="hover:text-gold-500 px-3 py-2 text-sm font-medium transition-colors">Services</a>
              <a onClick={(e) => handleNavClick(e, 'about')} href="#about" 
                className="hover:text-gold-500 px-3 py-2 text-sm font-medium transition-colors">About</a>
              <a onClick={(e) => handleNavClick(e, 'contact')} href="#contact" 
                className="hover:text-gold-500 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              <Button variant="primary" onClick={() => window.location.href = 'tel:+1234567890'}>
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a onClick={(e) => handleNavClick(e, 'home')} href="#home" 
              className="block hover:text-gold-500 px-3 py-2 text-base font-medium transition-colors">Home</a>
            <a onClick={(e) => handleNavClick(e, 'services')} href="#services" 
              className="block hover:text-gold-500 px-3 py-2 text-base font-medium transition-colors">Services</a>
            <a onClick={(e) => handleNavClick(e, 'about')} href="#about" 
              className="block hover:text-gold-500 px-3 py-2 text-base font-medium transition-colors">About</a>
            <a onClick={(e) => handleNavClick(e, 'contact')} href="#contact" 
              className="block hover:text-gold-500 px-3 py-2 text-base font-medium transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}