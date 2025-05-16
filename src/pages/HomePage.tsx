import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductGrid from '../components/Products/ProductGrid';
import { getFeaturedProducts, getNewProducts, getSaleProducts } from '../data/products';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  const saleProducts = getSaleProducts();
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div>
      {/* Hero Section with Parallax */}
      <section 
        className="parallax h-screen flex items-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
        }}
      >
        <div className="parallax-overlay"></div>
        <div className="container-custom parallax-content">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight text-white">
              Redefined Luxury for the Modern Age
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              Discover our curated collection of premium products designed for those who appreciate the extraordinary.
            </p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeIn}>
                <Link to="/category/all" className="btn-primary">
                  Shop Collection
                </Link>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Link to="/about" className="btn bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 focus:ring-white">
                  Our Story
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Collection */}
      <section className="py-24 bg-black">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent-400">Featured Collection</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most exclusive pieces, selected for their exceptional craftsmanship and timeless appeal.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {featuredProducts.slice(0, 3).map((product, index) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-slate-900"
              >
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-out-expo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500 ease-out-expo">
                    <h3 className="text-2xl font-serif text-white mb-2">{product.name}</h3>
                    <p className="text-accent-400 font-medium mb-4">${product.price.toFixed(2)}</p>
                    <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span>Shop Now</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link 
              to="/category/all" 
              className="inline-flex items-center px-8 py-4 border-2 border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-black transition-colors duration-300 rounded-full font-medium"
            >
              View All Featured Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center space-x-2 bg-primary-400/10 px-4 py-2 rounded-full mb-6">
              <span className="text-primary-400 font-medium">Explore Our Collections</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent">
              Shop by Category
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our carefully curated collections, each featuring exceptional pieces selected for their unique character and quality.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Clothing Category */}
            <motion.div variants={fadeIn} className="relative">
              <Link to="/category/clothing" className="group block relative overflow-hidden rounded-xl aspect-[3/4]">
                <img 
                  src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Clothing" 
                  className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700 ease-out-expo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500 ease-out-expo">
                    <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-primary-400 transition-colors duration-300">Clothing</h3>
                    <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-primary-400">
                      <span>Explore Collection</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-400 rounded-xl transition-colors duration-500"></div>
              </Link>
            </motion.div>
            
            {/* Accessories Category */}
            <motion.div variants={fadeIn} className="relative">
              <Link to="/category/accessories" className="group block relative overflow-hidden rounded-xl aspect-[3/4]">
                <img 
                  src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Accessories" 
                  className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700 ease-out-expo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500 ease-out-expo">
                    <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-secondary-400 transition-colors duration-300">Accessories</h3>
                    <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-secondary-400">
                      <span>Explore Collection</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary-400 rounded-xl transition-colors duration-500"></div>
              </Link>
            </motion.div>
            
            {/* Jewelry Category */}
            <motion.div variants={fadeIn} className="relative">
              <Link to="/category/jewelry" className="group block relative overflow-hidden rounded-xl aspect-[3/4]">
                <img 
                  src="https://images.pexels.com/photos/10984851/pexels-photo-10984851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jewelry" 
                  className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700 ease-out-expo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500 ease-out-expo">
                    <h3 className="text-3xl font-serif mb-4 text-white group-hover:text-accent-400 transition-colors duration-300">Jewelry</h3>
                    <div className="flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:text-accent-400">
                      <span>Explore Collection</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-400 rounded-xl transition-colors duration-500"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Parallax Banner */}
      <section 
        className="parallax py-32"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
        }}
      >
        <div className="parallax-overlay"></div>
        <motion.div 
          className="container-custom parallax-content text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Crafted with Excellence</h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
            Each piece in our collection is carefully selected and crafted to meet the highest standards of luxury and quality.
          </p>
          <Link to="/category/all" className="btn-primary">
            Explore Collection
          </Link>
        </motion.div>
      </section>
      
      {/* New Arrivals */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ProductGrid 
          products={newProducts} 
          title="New Arrivals" 
          description="The latest additions to our collection, featuring this season's most sought-after pieces."
        />
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/category/all" className="btn-outline inline-flex items-center">
            View All Products
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </motion.section>
      
      {/* Enhanced Sale Section */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 bg-accent-400/10 px-4 py-2 rounded-full mb-6">
              <Clock size={18} className="text-accent-400" />
              <span className="text-accent-400 font-medium">Limited Time Only</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-accent-400 via-accent-300 to-accent-400 bg-clip-text text-transparent">
              Exclusive Offers
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Don't miss out on these exceptional deals. Each piece has been carefully selected for this exclusive sale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-xl bg-slate-900">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out-expo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-accent-400 text-black px-4 py-2 rounded-full font-medium text-sm flex items-center space-x-1">
                      <Sparkles size={14} />
                      <span>{product.salePercentage}% OFF</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-medium text-white mb-2">{product.name}</h3>
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-2xl font-bold text-accent-400">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-slate-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <div className="transform group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-accent-400 transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/category/sale" 
              className="inline-flex items-center px-8 py-4 border-2 border-accent-400 text-accent-400 hover:bg-accent-400 hover:text-black transition-colors duration-300 rounded-full font-medium"
            >
              View All Sale Items
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </motion.section>
      
      {/* Newsletter */}
      <section className="py-16 bg-slate-50">
        <motion.div 
          className="container-custom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-4">Join Our Newsletter</h2>
            <p className="text-slate-600 mb-8">
              Be the first to know about new collections, exclusive offers, and insider events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;