import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '../common/Button';

export function Hero() {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const navHeight = 80; // Height of the navbar
      const elementPosition = servicesSection.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&q=80"
        >
          <source src="https://player.vimeo.com/external/394678700.sd.mp4?s=1e739d5cd0f7b9077c36b52182ff541e23a56c11&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Premium Car Wrapping
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
          Transform your vehicle with our luxury wrapping services. Premium materials, expert installation.
        </p>
        <Button
          onClick={handleExploreClick}
          className="text-lg animate-fade-in-delay-2"
        >
          Explore Services
        </Button>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </section>
  );
}