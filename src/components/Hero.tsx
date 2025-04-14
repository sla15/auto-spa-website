
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Clock, Award } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-autospa-black to-autospa-gray flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{
            backgroundImage: 'url("/lovable-uploads/17f2a38c-b30a-4476-aff7-c56fc44de7cc.png")',
            backgroundPosition: 'center 40%',
            transform: `translateY(${scrollPosition * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <TypeAnimation
                sequence={[
                  'The Ultimate Care',
                  1000,
                  'The Ultimate Care For Your Vehicle',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor={false}
              />
            </h1>
            <p className="text-xl md:text-2xl opacity-90">Let us give your vehicle the treatment it deserve!🚗🚖💛</p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-autospa-yellow text-autospa-black hover:bg-white animate-scale-in" style={{
              animationDelay: '0.3s'
            }} asChild>
                <a href="#contact">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-autospa-yellow text-white hover:bg-autospa-yellow hover:text-autospa-black animate-scale-in" style={{
              animationDelay: '0.5s'
            }} asChild>
                <a href="#services">See Services</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="bg-autospa-black/70 backdrop-blur-sm border border-autospa-yellow/30 rounded-xl p-6 w-full max-w-md animate-slide-in-right" style={{
            animationDelay: '0.5s'
          }}>
              <h3 className="text-2xl font-bold text-autospa-yellow mb-4">Why Choose Us</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-fade-in" style={{
                animationDelay: '0.7s'
              }}>
                  <div className="bg-autospa-yellow p-3 rounded-lg">
                    <Droplets className="h-6 w-6 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold">Premium Products</h4>
                    <p className="text-gray-300">We use only the highest quality, eco-friendly products</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 animate-fade-in" style={{
                animationDelay: '0.9s'
              }}>
                  <div className="bg-autospa-yellow p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold">Fast Service</h4>
                    <p className="text-gray-300">Quick turnaround without compromising quality</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 animate-fade-in" style={{
                animationDelay: '1.1s'
              }}>
                  <div className="bg-autospa-yellow p-3 rounded-lg">
                    <Award className="h-6 w-6 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold">Satisfaction Guaranteed</h4>
                    <p className="text-gray-300">100% satisfaction or we'll make it right</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
