import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();
  const {
    id,
    name,
    price,
    originalPrice,
    imageUrl,
    category,
    inStock,
    isNew,
    isSale,
    salePercentage,
  } = product;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <div className={`product-card-wrapper ${featured ? 'md:col-span-2' : ''}`}>
      <div className="product-card group">
        {/* Sale or New Badge */}
        {isNew && (
          <div className="product-card-badge bg-primary-600">New</div>
        )}
        {isSale && !isNew && (
          <div className="product-card-badge bg-secondary-600">
            {salePercentage ? `${salePercentage}% Off` : 'Sale'}
          </div>
        )}
        
        {/* Product Image */}
        <Link to={`/product/${id}`} className="block relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="product-card-image"
            loading="lazy"
          />
          
          {/* Quick actions overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-2">
              <button 
                onClick={handleAddToCart}
                className="bg-white text-slate-900 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary-50"
                aria-label="Add to cart"
                disabled={!inStock}
              >
                <ShoppingBag size={20} />
              </button>
              <button 
                className="bg-white text-slate-900 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary-50"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
            </div>
          </div>
        </Link>
        
        {/* Product Details */}
        <div className="p-4">
          <Link to={`/category/${category}`} className="text-xs font-medium uppercase tracking-wider text-slate-500 hover:text-primary-600 transition-colors">
            {category}
          </Link>
          <h3 className="mt-1 font-sans">
            <Link to={`/product/${id}`} className="text-lg font-medium hover:text-primary-600 transition-colors">
              {name}
            </Link>
          </h3>
          <div className="mt-2 flex items-center">
            <span className="font-medium text-slate-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="ml-2 text-sm text-slate-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Stock Status */}
          {!inStock && (
            <div className="mt-2 text-sm text-secondary-600 font-medium">
              Out of Stock
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;