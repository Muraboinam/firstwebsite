import React, { useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Star, ShoppingBag, Heart, ArrowLeft, Share2, ChevronLeft, ChevronRight, ArrowRight, Mail } from 'lucide-react';
import ProductCard from '../components/Products/ProductCard';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id || '');
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  
  if (!product) {
    return (
      <div className="container-custom py-32 text-center">
        <h1 className="text-3xl font-medium mb-6">Product Not Found</h1>
        <p className="text-slate-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/category/all" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  const { 
    name, 
    price, 
    originalPrice, 
    category, 
    description, 
    features, 
    imageUrl, 
    images = [imageUrl], 
    inStock, 
    isNew, 
    isSale, 
    salePercentage, 
    rating = 5, 
    reviewCount = 0 
  } = product;
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };
  
  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setMousePosition({ x, y });
  };
  
  // Get related products
  const relatedProducts = getProductsByCategory(category)
    .filter(p => p.id !== id)
    .slice(0, 4);
  
  return (
    <div className="pt-24">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 py-4">
        <div className="container-custom">
          <nav className="text-sm text-slate-500 flex items-center">
            <button onClick={() => navigate(-1)} className="flex items-center hover:text-primary-600 transition-colors">
              <ArrowLeft size={14} className="mr-1" />
              <span>Back</span>
            </button>
            <span className="mx-2">/</span>
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/category/${category}`} className="hover:text-primary-600 transition-colors">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{name}</span>
          </nav>
        </div>
      </div>
      
      {/* Product Detail */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div 
              ref={imageRef}
              className="relative overflow-hidden bg-slate-100 rounded-xl mb-4 aspect-square cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <div 
                className="w-full h-full transition-transform duration-200"
                style={{
                  transform: isZoomed ? 'scale(2)' : 'scale(1)',
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                }}
              >
                <img 
                  src={images[activeImage]} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Navigation */}
              {!isZoomed && images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-slate-50 transition-colors"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-slate-50 transition-colors"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex space-x-2">
                {isNew && (
                  <span className="bg-primary-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    New
                  </span>
                )}
                {isSale && (
                  <span className="bg-secondary-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                    {salePercentage ? `${salePercentage}% Off` : 'Sale'}
                  </span>
                )}
              </div>
            </div>
            
            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {images.map((img, index) => (
                  <button 
                    key={index}
                    className={`aspect-square rounded-md overflow-hidden ${
                      index === activeImage ? 'ring-2 ring-primary-600' : 'hover:opacity-80'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img 
                      src={img} 
                      alt={`${name} - view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <Link to={`/category/${category}`} className="text-sm font-medium uppercase tracking-wider text-slate-500 hover:text-primary-600 transition-colors">
                {category}
              </Link>
              <h1 className="text-3xl md:text-4xl font-serif mb-4">{name}</h1>
              
              {/* Price */}
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-medium text-slate-900">
                  ${price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="ml-3 text-lg text-slate-500 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
                {isSale && salePercentage && (
                  <span className="ml-3 text-sm font-medium text-secondary-600">
                    Save {salePercentage}%
                  </span>
                )}
              </div>
              
              {/* Ratings */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(rating) ? 'text-accent-500 fill-accent-500' : 'text-slate-300'} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-slate-600">
                  {rating.toFixed(1)} ({reviewCount} reviews)
                </span>
              </div>
              
              {/* Description */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                {description}
              </p>
              
              {/* Features */}
              {features && features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Add to Cart */}
              <div className="mt-8 space-y-4">
                {/* Quantity */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center border border-slate-300 rounded-md">
                    <button 
                      className="px-3 py-2 border-r border-slate-300 hover:bg-slate-50 transition-colors"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      min="1"
                      className="w-12 text-center border-none focus:ring-0"
                    />
                    <button 
                      className="px-3 py-2 border-l border-slate-300 hover:bg-slate-50 transition-colors"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="btn-primary flex-1 flex items-center justify-center"
                    onClick={handleAddToCart}
                    disabled={!inStock}
                  >
                    <ShoppingBag size={18} className="mr-2" />
                    {inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                  <button className="btn-outline flex items-center justify-center">
                    <Heart size={18} className="mr-2" />
                    Add to Wishlist
                  </button>
                </div>
              </div>
              
              {/* Stock Status */}
              <div className="mt-6">
                <p className={`text-sm font-medium ${inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
              
              {/* Share */}
              <div className="mt-8 flex items-center space-x-4 pt-6 border-t border-slate-200">
                <span className="text-sm font-medium">Share:</span>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Share on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Share on Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Share on Pinterest">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                    </svg>
                  </button>
                  <button className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Share via Email">
                    <Mail size={16} />
                  </button>
                  <button className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors" aria-label="Share via link">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="bg-slate-50 py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif">You May Also Like</h2>
            <Link to={`/category/${category}`} className="flex items-center text-sm font-medium hover:text-primary-600 transition-colors">
              <span>View All</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;