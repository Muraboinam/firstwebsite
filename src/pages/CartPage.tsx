import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Trash2, ShoppingBag, ArrowLeft, ChevronRight, Lock } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  
  const shipping = 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };
  
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="container-custom py-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-8">Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-slate-400" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet.
              Browse our collection to find something you'll love.
            </p>
            <Link to="/category/all" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100">
                  <h2 className="text-xl font-medium">Items ({totalItems})</h2>
                </div>
                
                <div className="divide-y divide-slate-100">
                  {cart.map(item => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      {/* Product Image */}
                      <Link to={`/product/${item.id}`} className="w-24 h-24 bg-slate-100 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      
                      {/* Product Details */}
                      <div className="flex-grow min-w-0">
                        <Link to={`/product/${item.id}`} className="text-lg font-medium hover:text-primary-600 transition-colors">
                          {item.name}
                        </Link>
                        <p className="text-sm text-slate-500 mt-1">
                          Category: {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-6">
                          {/* Quantity */}
                          <div className="flex items-center">
                            <span className="text-sm text-slate-500 mr-2">Qty:</span>
                            <div className="flex items-center border border-slate-300 rounded-md">
                              <button 
                                className="px-3 py-2 border-r border-slate-300 hover:bg-slate-50 transition-colors"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <input 
                                type="number" 
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                min="1"
                                className="w-12 text-center border-none focus:ring-0"
                              />
                              <button 
                                className="px-3 py-2 border-l border-slate-300 hover:bg-slate-50 transition-colors"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          
                          {/* Price */}
                          <div>
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                            {item.originalPrice && (
                              <span className="ml-2 text-sm text-slate-500 line-through">
                                ${item.originalPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                          
                          {/* Remove Button */}
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-500 hover:text-secondary-600 transition-colors flex items-center"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} className="mr-1" />
                            <span className="text-sm">Remove</span>
                          </button>
                        </div>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-right ml-auto">
                        <span className="font-medium text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-slate-50 border-t border-slate-200">
                  <Link to="/category/all" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center">
                    <ArrowLeft size={16} className="mr-2" />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-28">
                <div className="px-6 py-4 border-b border-slate-100">
                  <h2 className="text-xl font-medium">Order Summary</h2>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-slate-200 pt-4 flex justify-between">
                      <span className="text-lg font-medium">Total</span>
                      <span className="text-lg font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Discount Code */}
                  <div className="mb-6">
                    <label htmlFor="discountCode" className="block text-sm font-medium text-slate-700 mb-2">
                      Discount Code
                    </label>
                    <div className="flex">
                      <input 
                        type="text" 
                        id="discountCode" 
                        placeholder="Enter code" 
                        className="flex-grow px-4 py-3 border border-slate-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                      <button className="bg-slate-800 text-white px-4 rounded-r-md hover:bg-slate-700 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <button className="btn-primary w-full mb-4 flex items-center justify-center">
                    <Lock size={16} className="mr-2" />
                    Proceed to Checkout
                  </button>
                  
                  {/* Payment Icons */}
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-xs text-slate-500">We accept:</span>
                    <div className="flex space-x-2">
                      <div className="w-8 h-5 bg-slate-800 rounded"></div>
                      <div className="w-8 h-5 bg-slate-800 rounded"></div>
                      <div className="w-8 h-5 bg-slate-800 rounded"></div>
                      <div className="w-8 h-5 bg-slate-800 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Security Note */}
                  <p className="text-xs text-slate-500 text-center">
                    Your transaction is secure. We use industry-standard encryption to protect your data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* You May Also Like */}
        {cart.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif">You May Also Like</h2>
              <Link to="/category/all" className="text-primary-600 hover:text-primary-700 transition-colors flex items-center">
                <span>View All</span>
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            {/* This would be a product grid component */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Add ProductCard components here */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;