
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    before: "https://images.unsplash.com/photo-1621255269518-97905211f2f6",
    after: "https://images.unsplash.com/photo-1605072010036-32a7e31993ed",
    title: "Exterior Detailing"
  },
  {
    before: "https://images.unsplash.com/photo-1600496761449-8ccb428b7087",
    after: "https://images.unsplash.com/photo-1552743310-1a4cafa3a0c5",
    title: "Interior Detailing"
  },
  {
    before: "https://images.unsplash.com/photo-1597007071451-2f48451fa2ed",
    after: "https://images.unsplash.com/photo-1563339019-fed6f8f9fdb9",
    title: "Wheel Cleaning"
  },
  {
    before: "https://images.unsplash.com/photo-1596447761853-23f9935c4c39",
    after: "https://images.unsplash.com/photo-1514022364692-218d682a85fd",
    title: "Paint Protection"
  }
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ before: string; after: string; title: string } | null>(null);

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-autospa-yellow">Work</span></h2>
          <p className="text-xl text-autospa-gray max-w-2xl mx-auto">
            See the difference our detailing services make with these before and after transformations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => openModal(image)}
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-autospa-black/50 z-10"></div>
                <img 
                  src={image.after} 
                  alt={image.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 bg-gradient-to-t from-autospa-black/90 to-transparent">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-300">Click to see before/after</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-autospa-black text-white">
            {selectedImage && (
              <div className="grid md:grid-cols-2 gap-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-autospa-yellow">Before</h3>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={selectedImage.before} 
                      alt={`${selectedImage.title} Before`} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-autospa-yellow">After</h3>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={selectedImage.after} 
                      alt={`${selectedImage.title} After`} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 mt-4">
                  <h2 className="text-2xl font-bold">{selectedImage.title} Transformation</h2>
                  <p className="text-gray-300 mt-2">
                    Experience the difference professional detailing makes. Our meticulous process ensures your vehicle looks its absolute best.
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
