
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-autospa-black to-autospa-gray flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-autospa-black/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552148869-509f1cf15a6f?q=80')] bg-cover bg-center z-0"
          style={{ backgroundPosition: 'center 40%' }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              The <span className="text-autospa-yellow">Ultimate</span> Care For Your Vehicle
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Professional car wash and detailing services that leave your vehicle spotless and shining
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-autospa-yellow text-autospa-black hover:bg-white" asChild>
                <a href="#contact">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-autospa-yellow text-white hover:bg-autospa-yellow hover:text-autospa-black" asChild>
                <a href="#services">See Services</a>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="bg-autospa-black/70 backdrop-blur-sm border border-autospa-yellow/30 rounded-xl p-6 w-full max-w-md">
              <h3 className="text-2xl font-bold text-autospa-yellow mb-4">Why Choose Us</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-autospa-yellow p-3 rounded-lg">
                    <Droplets className="h-6 w-6 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold">Premium Products</h4>
                    <p className="text-gray-300">We use only the highest quality, eco-friendly products</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-autospa-yellow p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-autospa-black" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-semibold">Fast Service</h4>
                    <p className="text-gray-300">Quick turnaround without compromising quality</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
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
