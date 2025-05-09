
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageSquare, Phone, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl mb-6">
              <span className="lavanya text-white">Lavanya</span>
              <span className="luxe ml-1 text-brand-pink">Luxe</span>
            </div>
            <p className="text-gray-300 text-sm">
              A premium beauty salon offering a unique blend of traditional beauty practices and modern luxury services.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-brand-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-brand-pink transition-colors">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-pink transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-pink transition-colors text-sm">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-brand-pink transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-brand-pink transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium mb-6">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone size={18} className="text-brand-pink" />
                <a href="tel:+911234567890" className="hover:text-brand-pink transition-colors">
                  +91 12345 67890
                </a>
              </p>
              <p className="flex items-center gap-3 text-gray-300 text-sm">
                <Clock size={18} className="text-brand-pink" />
                Open 10 AM – 8 PM | Monday Closed
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-medium mb-6">Location</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lavanya Luxe Beauty Salon,<br />
              Sector 15, Gurgaon,<br />
              Haryana, India
            </p>
            <Link to="/contact" className="text-brand-pink hover:text-brand-pink/80 transition-colors text-sm">
              View on map →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>Copyright © {currentYear} Lavanya Luxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
