import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/Products/ProductGrid';
import { getProductsByCategory } from '../data/products';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { category = 'all' } = useParams<{ category: string }>();
  const [products, setProducts] = useState(getProductsByCategory(category));
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Update products when category changes
  useEffect(() => {
    setProducts(getProductsByCategory(category));
  }, [category]);
  
  // Handle sorting
  useEffect(() => {
    let sortedProducts = [...getProductsByCategory(category)];
    
    switch (sortOption) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sortedProducts = sortedProducts.filter(p => p.isNew).concat(
          sortedProducts.filter(p => !p.isNew)
        );
        break;
      case 'featured':
      default:
        sortedProducts = sortedProducts.filter(p => p.isFeatured).concat(
          sortedProducts.filter(p => !p.isFeatured)
        );
        break;
    }
    
    setProducts(sortedProducts);
  }, [category, sortOption]);
  
  const getCategoryTitle = () => {
    switch (category) {
      case 'all': return 'All Products';
      case 'clothing': return 'Clothing';
      case 'accessories': return 'Accessories';
      case 'footwear': return 'Footwear';
      case 'jewelry': return 'Jewelry';
      case 'watches': return 'Watches';
      case 'bags': return 'Bags';
      default: return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };
  
  return (
    <div className="pt-24">
      {/* Category Header */}
      <div className="bg-slate-100 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-serif mb-4">{getCategoryTitle()}</h1>
          <p className="text-slate-600 max-w-3xl">
            Discover our curated collection of {getCategoryTitle().toLowerCase()}, 
            crafted with exceptional materials and attention to detail.
          </p>
        </div>
      </div>
      
      {/* Filters and Sorting */}
      <div className="border-b border-slate-200 sticky top-16 bg-white z-20">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Filter Toggle */}
            <button 
              className="flex items-center space-x-2 text-sm font-medium py-2 px-4 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal size={16} />
              <span>Filters</span>
              <ChevronDown 
                size={16} 
                className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {/* Sort Options */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-slate-500">Sort by:</span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="py-2 pl-3 pr-8 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="py-4 border-t border-slate-200 mt-4 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fadeIn">
              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Under $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>$100 - $250</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>$250 - $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>$500 - $1000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Over $1000</span>
                  </label>
                </div>
              </div>
              
              {/* Material */}
              <div>
                <h3 className="font-medium mb-3">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Leather</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Cashmere</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Silk</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Gold</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Silver</span>
                  </label>
                </div>
              </div>
              
              {/* Status */}
              <div>
                <h3 className="font-medium mb-3">Status</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>New Arrivals</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Sale</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>In Stock</span>
                  </label>
                </div>
              </div>
              
              {/* Filter Actions */}
              <div className="flex items-end justify-start md:justify-end space-x-3">
                <button className="btn-outline">Clear All</button>
                <button className="btn-primary">Apply Filters</button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="py-12">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="container-custom py-16 text-center">
            <h2 className="text-2xl font-medium mb-4">No products found</h2>
            <p className="text-slate-600 mb-8">
              We couldn't find any products matching your criteria.
              Try changing your filters or check back later for new arrivals.
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                setSortOption('featured');
                setIsFilterOpen(false);
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;