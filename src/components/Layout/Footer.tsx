import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube as YouTube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">LUXE</h3>
            <p className="mb-6 text-slate-400">
              Curating the finest luxury products from around the world since 2010. Every item is
              handpicked for its exceptional quality and design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YouTube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/all" className="text-slate-400 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/category/new" className="text-slate-400 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/category/sale" className="text-slate-400 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/category/clothing" className="text-slate-400 hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-slate-400 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category/footwear" className="text-slate-400 hover:text-white transition-colors">
                  Footwear
                </Link>
              </li>
              <li>
                <Link to="/category/jewelry" className="text-slate-400 hover:text-white transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/category/watches" className="text-slate-400 hover:text-white transition-colors">
                  Watches
                </Link>
              </li>
              <li>
                <Link to="/category/bags" className="text-slate-400 hover:text-white transition-colors">
                  Bags
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-slate-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  123 Luxury Avenue<br />
                  New York, NY 10001<br />
                  United States
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-slate-400 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-slate-400 hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-slate-400 flex-shrink-0" />
                <a href="mailto:info@luxe.example" className="text-slate-400 hover:text-white transition-colors">
                  info@luxe.example
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-slate-500 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-slate-500 text-sm hover:text-white transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;