import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronDown, SlidersHorizontal, Search } from 'lucide-react';

const AllProductsPage: React.FC = () => {
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [displayProducts, setDisplayProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = [...products];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = filtered.filter(p => p.isNew).concat(
          filtered.filter(p => !p.isNew)
        );
        break;
      case 'featured':
      default:
        filtered = filtered.filter(p => p.isFeatured).concat(
          filtered.filter(p => !p.isFeatured)
        );
        break;
    }
    
    setDisplayProducts(filtered);
  }, [sortOption, searchQuery]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Luxury collection" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Our Collection
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Discover our curated selection of luxury items, each piece carefully chosen for its exceptional quality and timeless design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <div className="sticky top-16 bg-white border-b border-slate-200 z-30">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
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

              <div className="relative flex-grow md:flex-grow-0 md:w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              </div>
            </div>

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
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="py-4 border-t border-slate-200 mt-4 grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Under $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>$100 - $500</span>
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

              {/* Categories */}
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Clothing</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Accessories</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Jewelry</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Watches</span>
                  </label>
                </div>
              </div>

              {/* Status */}
              <div>
                <h3 className="font-medium mb-3">Status</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>In Stock</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>Sale</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 mr-2" />
                    <span>New Arrival</span>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-end space-x-4">
                <button className="btn-outline flex-1">Clear All</button>
                <button className="btn-primary flex-1">Apply Filters</button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-custom py-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={`/product/${product.id}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="absolute top-4 right-4 bg-secondary-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
                      {product.salePercentage}% Off
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-medium w-full text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-sm text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {displayProducts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium mb-4">No products found</h2>
            <p className="text-slate-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProductsPage;