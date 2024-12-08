import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1633078654544-61b3455b9161?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1621993202323-f438eec934ff?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-xl text-gray-400">Browse through our latest projects</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg aspect-video">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}