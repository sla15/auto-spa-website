
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-autospa-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-autospa-yellow">The</span> Ultimate <span className="text-autospa-yellow">Auto Spa</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Providing premium car wash and detailing services since 2013. Our mission is to deliver the highest quality car care with unmatched customer service.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} The Ultimate Auto Spa. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-autospa-yellow transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-autospa-yellow transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-autospa-yellow transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-autospa-yellow transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-autospa-yellow transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-autospa-yellow transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-autospa-yellow transition-colors">Basic Pack - D300</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-autospa-yellow transition-colors">Premium - D1000</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-autospa-yellow transition-colors">Full Spa - D2500</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-autospa-yellow transition-colors">The Ultimate - D5000</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-autospa-yellow transition-colors">Book Appointment</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          <p className="text-sm text-gray-400">
            Designed with ❤️ for car enthusiasts
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-autospa-yellow text-autospa-black p-3 rounded-full hover:bg-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
