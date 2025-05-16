import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../Cart/CartDrawer';
import { useState } from 'react';

const Layout: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleCart={toggleCart} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Layout;