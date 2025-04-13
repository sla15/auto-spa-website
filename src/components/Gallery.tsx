
import React from 'react';

const galleryImages = [
  {
    src: "/lovable-uploads/3a12aebe-f22c-47dc-9c6c-cc74a9d5d80b.png",
    alt: "White Luxury Car"
  },
  {
    src: "/lovable-uploads/dc8ff153-9b84-4f0f-9688-0d5cc5866c99.png",
    alt: "Mercedes Interior"
  },
  {
    src: "/lovable-uploads/59d8bfe7-7810-45fb-abc9-90d9eda24ceb.png",
    alt: "Mercedes Interior with Red Detail"
  },
  {
    src: "/lovable-uploads/a17950f1-43df-41ef-be48-5806f94bf5bc.png",
    alt: "White Mercedes Front"
  },
  {
    src: "/lovable-uploads/8de3cef1-778a-418b-82ba-96e81a839902.png",
    alt: "Red Interior Detail"
  },
  {
    src: "/lovable-uploads/9dd34679-11ab-4d7c-af08-f9933eb0ad00.png",
    alt: "Brown Volvo Front"
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
                  loading="lazy"
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
