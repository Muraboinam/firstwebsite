import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, price, imageUrl, quantity } = item;
  
  const handleIncrement = () => {
    updateQuantity(id, quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };
  
  return (
    <div className="flex items-center space-x-4 py-3">
      <Link to={`/product/${id}`} className="w-20 h-20 flex-shrink-0 bg-slate-100 rounded-md overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </Link>
      
      <div className="flex-grow min-w-0">
        <Link to={`/product/${id}`} className="text-sm font-medium hover:text-primary-600 transition-colors line-clamp-1">
          {name}
        </Link>
        <div className="mt-1 text-sm text-slate-900 font-medium">
          ${price.toFixed(2)}
        </div>
        
        <div className="mt-2 flex items-center">
          <button 
            onClick={handleDecrement}
            className="p-1 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="mx-2 w-8 text-center text-sm">{quantity}</span>
          <button 
            onClick={handleIncrement}
            className="p-1 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="text-sm font-medium">
          ${(price * quantity).toFixed(2)}
        </div>
        
        <button 
          onClick={() => removeFromCart(id)}
          className="p-1 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-secondary-600"
          aria-label="Remove item"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;