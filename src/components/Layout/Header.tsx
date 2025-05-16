import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface HeaderProps {
  toggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  // Handle scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-bold flex items-center">
          LUXE
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link font-medium hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link to="/products" className="nav-link font-medium hover:text-primary-600 transition-colors">
            All Products
          </Link>
          <Link to="/category/jewelry" className="nav-link font-medium hover:text-primary-600 transition-colors">
            Jewelry
          </Link>
          <Link to="/category/accessories" className="nav-link font-medium hover:text-primary-600 transition-colors">
            Accessories
          </Link>
          <Link to="/about" className="nav-link font-medium hover:text-primary-600 transition-colors">
            About
          </Link>
          <Link to="/contact" className="nav-link font-medium hover:text-primary-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Account"
          >
            <User size={20} />
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-slate-100 transition-colors relative"
            onClick={toggleCart}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="p-2 md:hidden rounded-full hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-6 animate-fadeIn">
          <nav className="flex flex-col space-y-6 text-lg">
            <Link to="/" className="font-medium py-2 border-b border-slate-100">
              Home
            </Link>
            <Link to="/products" className="font-medium py-2 border-b border-slate-100">
              All Products
            </Link>
            <Link to="/category/clothing" className="font-medium py-2 border-b border-slate-100">
              Clothing
            </Link>
            <Link to="/category/accessories" className="font-medium py-2 border-b border-slate-100">
              Accessories
            </Link>
            <Link to="/category/footwear" className="font-medium py-2 border-b border-slate-100">
              Footwear
            </Link>
            <Link to="/category/jewelry" className="font-medium py-2 border-b border-slate-100">
              Jewelry
            </Link>
            <Link to="/category/watches" className="font-medium py-2 border-b border-slate-100">
              Watches
            </Link>
            <Link to="/about" className="font-medium py-2 border-b border-slate-100">
              About
            </Link>
            <Link to="/contact" className="font-medium py-2 border-b border-slate-100">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;