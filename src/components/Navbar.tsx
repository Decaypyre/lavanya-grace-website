
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Pricing', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book Appointment', path: '/book' },
    { name: 'Track My Appointment', path: '/track' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-5 lg:px-10",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1.5">
          <div className="text-xl">
            <span className="lavanya text-brand-pink">Lavanya</span>
            <span className="luxe ml-1 text-brand-black">Luxe</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-pink relative",
                location.pathname === link.path ? "text-brand-pink after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-brand-pink after:bottom-[-6px] after:left-0" : "text-gray-700"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/hire-us">
            <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white rounded-md px-6">
              Hire Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-5 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-pink",
                location.pathname === link.path ? "text-brand-pink" : "text-gray-700"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/hire-us" onClick={() => setIsMenuOpen(false)}>
            <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white w-full">
              Hire Us
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
