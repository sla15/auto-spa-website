
import React from 'react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605072010036-32a7e31993ed",
    alt: "Exterior Detailing"
  },
  {
    src: "https://images.unsplash.com/photo-1552743310-1a4cafa3a0c5",
    alt: "Interior Detailing"
  },
  {
    src: "https://images.unsplash.com/photo-1563339019-fed6f8f9fdb9",
    alt: "Wheel Cleaning"
  },
  {
    src: "https://images.unsplash.com/photo-1514022364692-218d682a85fd",
    alt: "Paint Protection"
  },
  {
    src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f",
    alt: "Engine Cleaning"
  },
  {
    src: "https://images.unsplash.com/photo-1625595234473-c00c8abbf4e1",
    alt: "Car Wash"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-autospa-yellow">Work</span></h2>
          <p className="text-xl text-autospa-gray max-w-2xl mx-auto">
            See the difference our detailing services make with these transformations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-autospa-black/70 z-10"></div>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                  <h3 className="font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
