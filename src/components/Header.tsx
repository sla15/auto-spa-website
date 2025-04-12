
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const isMobile = useIsMobile();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Auto-hide header on scroll down, show on scroll up
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          if (showHeader) setShowHeader(false);
        } else {
          if (!showHeader) setShowHeader(true);
        }
      } else {
        setIsScrolled(false);
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, showHeader]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-autospa-black/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      } ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center animate-fade-in">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              <span className="text-autospa-yellow">The</span> Ultimate <span className="text-autospa-yellow">Auto Spa</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "About", "Gallery", "Testimonials", "Contact"].map((item, index) => (
            <a 
              key={item} 
              href={item === "Home" ? "#" : `#${item.toLowerCase()}`} 
              className="text-white hover:text-autospa-yellow font-medium transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="animate-fade-in" 
            style={{ animationDelay: '0.6s' }}
          >
            <Button className="bg-autospa-yellow text-autospa-black hover:bg-white flex items-center gap-2 animate-pulse">
              <PhoneCall size={18} />
              <span>Book Now</span>
            </Button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 animate-fade-in"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-autospa-black/95 absolute top-full left-0 w-full py-4 shadow-lg backdrop-blur-sm animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["Home", "Services", "About", "Gallery", "Testimonials", "Contact"].map((item, index) => (
              <a 
                key={item} 
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`} 
                className="text-white hover:text-autospa-yellow font-medium py-2 transition-colors animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <a href="#contact" onClick={toggleMenu}>
              <Button className="bg-autospa-yellow text-autospa-black hover:bg-white w-full flex items-center justify-center gap-2 animate-pulse">
                <PhoneCall size={18} />
                <span>Book Now</span>
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
