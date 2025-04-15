import React from 'react';
import { Facebook, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const galleryImages = [{
  src: "/lovable-uploads/3a12aebe-f22c-47dc-9c6c-cc74a9d5d80b.png",
  alt: "White Luxury Car"
}, {
  src: "/lovable-uploads/dc8ff153-9b84-4f0f-9688-0d5cc5866c99.png",
  alt: "Mercedes Interior"
}, {
  src: "/lovable-uploads/59d8bfe7-7810-45fb-abc9-90d9eda24ceb.png",
  alt: "Mercedes Interior with Red Detail"
}, {
  src: "/lovable-uploads/a17950f1-43df-41ef-be48-5806f94bf5bc.png",
  alt: "White Mercedes Front"
}, {
  src: "/lovable-uploads/8de3cef1-778a-418b-82ba-96e81a839902.png",
  alt: "Red Interior Detail"
}, {
  src: "/lovable-uploads/9dd34679-11ab-4d7c-af08-f9933eb0ad00.png",
  alt: "Brown Volvo Front"
}];
const Gallery = () => {
  return <section id="gallery" className="py-20 bg-autospa-black">
      <div className="container mx-auto px-4 bg-autospa-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-autospa-yellow">Our <span className="text-autospa-yellow">Work</span></h2>
          <p className="text-xl max-w-2xl mx-auto text-autospa-lightgray">
            See the difference our detailing services make with these transformations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => <div key={index} className="relative group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-autospa-black/70 z-10"></div>
                <img src={image.src} alt={image.alt} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                  <h3 className="font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>)}
        </div>
        
        {/* Social Media Section */}
        <div className="mt-12 text-center rounded-lg bg-autospa-black">
          <h3 className="text-2xl font-bold mb-6">See More of Our Work</h3>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/share/1B92uC2pnV/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-autospa-yellow hover:text-autospa-black">
                <Facebook className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/the_ultimate_autospa?igsh=MXhkZjd6bzh4cDJ3cA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-autospa-yellow hover:text-autospa-black">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.tiktok.com/@theultimateautospa?_t=ZM-8vXZzU9vcBj&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-autospa-yellow hover:text-autospa-black">
                {/* Custom TikTok icon since Lucide doesn't have one */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Gallery;