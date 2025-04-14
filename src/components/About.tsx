
import { Button } from "@/components/ui/button";
import { Users, Trophy, Truck, CalendarClock } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { opacity: textOpacity, ref: textRef } = useScrollAnimation();
  const { opacity: sliderOpacity, ref: sliderRef } = useScrollAnimation();
  
  return (
    <section id="about" className="py-20 bg-autospa-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="relative transition-opacity duration-500"
            ref={sliderRef}
            style={{ opacity: sliderOpacity }}
          >
            <div className="rounded-lg shadow-xl overflow-hidden w-full">
              <BeforeAfterSlider
                beforeImage="/lovable-uploads/9e0992ea-19e9-4370-95e0-1ba738b3297a.png"
                afterImage="/lovable-uploads/6518f147-2688-43ff-b43a-5f69038a8e8d.png"
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-autospa-yellow p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-autospa-black font-bold text-xl">10+ Years of Excellence</p>
            </div>
          </div>
          
          <div 
            className="space-y-6 transition-opacity duration-500"
            ref={textRef}
            style={{ opacity: textOpacity }}
          >
            <h2 className="text-4xl font-bold">About <span className="text-autospa-yellow">The Ultimate Auto Spa</span></h2>
            <p className="text-gray-300 text-lg">Founded in 2024, The Ultimate Auto Spa has been providing exceptional car wash and detailing services to car enthusiasts and everyday drivers alike. Our mission is simple: to deliver the highest quality car care with unmatched customer service.</p>
            <p className="text-gray-300 text-lg">
              What sets us apart is our attention to detail, use of premium products, and a team of passionate professionals who treat every vehicle as if it were their own.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="bg-autospa-yellow p-3 rounded-full">
                  <Users className="h-5 w-5 text-autospa-black" />
                </div>
                <div>
                  <h4 className="font-bold">Expert Team</h4>
                  <p className="text-sm text-gray-400">Highly trained staff</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-autospa-yellow p-3 rounded-full">
                  <Trophy className="h-5 w-5 text-autospa-black" />
                </div>
                <div>
                  <h4 className="font-bold">Top Quality</h4>
                  <p className="text-sm text-gray-400">Premium results</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-autospa-yellow p-3 rounded-full">
                  <Truck className="h-5 w-5 text-autospa-black" />
                </div>
                <div>
                  <h4 className="font-bold">Mobile Service</h4>
                  <p className="text-sm text-gray-400">We come to you</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-autospa-yellow p-3 rounded-full">
                  <CalendarClock className="h-5 w-5 text-autospa-black" />
                </div>
                <div>
                  <h4 className="font-bold">Convenient Hours</h4>
                  <p className="text-sm text-gray-400">Open 7 days a week</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-autospa-yellow text-autospa-black hover:bg-white hover:text-autospa-black mt-4">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
