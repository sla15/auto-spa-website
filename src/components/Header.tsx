
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-autospa-black/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              <span className="text-autospa-yellow">The</span> Ultimate <span className="text-autospa-yellow">Auto Spa</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-autospa-yellow font-medium transition-colors">Home</a>
          <a href="#services" className="text-white hover:text-autospa-yellow font-medium transition-colors">Services</a>
          <a href="#about" className="text-white hover:text-autospa-yellow font-medium transition-colors">About</a>
          <a href="#gallery" className="text-white hover:text-autospa-yellow font-medium transition-colors">Gallery</a>
          <a href="#testimonials" className="text-white hover:text-autospa-yellow font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="text-white hover:text-autospa-yellow font-medium transition-colors">Contact</a>
          <Button className="bg-autospa-yellow text-autospa-black hover:bg-white flex items-center gap-2">
            <PhoneCall size={18} />
            <span>Book Now</span>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-autospa-black/95 absolute top-full left-0 w-full py-4 shadow-lg backdrop-blur-sm">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-autospa-yellow font-medium py-2 transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-white hover:text-autospa-yellow font-medium py-2 transition-colors" onClick={toggleMenu}>Services</a>
            <a href="#about" className="text-white hover:text-autospa-yellow font-medium py-2 transition-colors" onClick={toggleMenu}>About</a>
            <a href="#gallery" className="text-white hover:text-autospa-yellow font-medium py-2 transition-colors" onClick={toggleMenu}>Gallery</a>
            <a href="#testimonials" className="text-white hover:text-autospa-yellow font-medium py-2 transition-colors" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="text-white hover:text-autospa-yellow font-medium py-2 transition-colors" onClick={toggleMenu}>Contact</a>
            <Button className="bg-autospa-yellow text-autospa-black hover:bg-white w-full flex items-center justify-center gap-2">
              <PhoneCall size={18} />
              <span>Book Now</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
