import { Button } from "@/components/ui/button";
import { Users, Trophy, Truck, CalendarClock } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-autospa-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg shadow-xl overflow-hidden w-full h-[500px]">
              <video autoPlay muted loop playsInline className="object-cover w-full h-full">
                <source src="https://player.vimeo.com/external/373392292.sd.mp4?s=cfebe916ddc9da8fd6a5e016cd8b097d0c57f72a" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-autospa-yellow p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-autospa-black font-bold text-xl">10+ Years of Excellence</p>
            </div>
          </div>
          
          <div className="space-y-6">
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
    </section>;
};
export default About;