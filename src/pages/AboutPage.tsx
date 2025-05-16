import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Luxury workshop" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-serif font-bold mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
              We believe that true luxury is about more than just premium materials—it's about craftsmanship, heritage, and the pursuit of perfection.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Philosophy</h2>
              <p className="text-slate-700 mb-6 leading-relaxed">
                At LUXE, we've spent over a decade curating the finest luxury products from around the world. Our passion for exceptional quality and design drives everything we do.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Each item in our collection is handpicked by our team of experts, who travel the globe to discover the most talented artisans and innovative designers. We believe that luxury should be timeless, sustainable, and meaningful.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Our commitment to excellence extends beyond our products to every aspect of the customer experience. From personalized service to meticulous packaging, we strive to exceed expectations at every turn.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6626784/pexels-photo-6626784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Luxury craftsmanship" 
                className="rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-lg max-w-xs">
                <p className="text-lg font-serif italic text-slate-700">
                  "We believe that true luxury lies in the details, in the hours spent perfecting a single stitch or selecting the perfect material."
                </p>
                <p className="mt-4 font-medium">Alexander Foster, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Our Journey</h2>
          
          <div className="space-y-20">
            {/* Year 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-5xl font-serif text-slate-200">2010</span>
                <h3 className="text-2xl font-medium mt-2 mb-4">The Beginning</h3>
                <p className="text-slate-700 leading-relaxed">
                  LUXE was founded with a simple mission: to connect discerning customers with extraordinary products. Starting with a small collection of handcrafted leather goods, we quickly gained recognition for our uncompromising commitment to quality.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.pexels.com/photos/844923/pexels-photo-844923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="LUXE beginnings" 
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
            
            {/* Year 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/5418899/pexels-photo-5418899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="LUXE expansion" 
                  className="rounded-xl shadow-md"
                />
              </div>
              <div>
                <span className="text-5xl font-serif text-slate-200">2015</span>
                <h3 className="text-2xl font-medium mt-2 mb-4">Expanding Horizons</h3>
                <p className="text-slate-700 leading-relaxed">
                  After five years of growth, we expanded our collection to include fine jewelry, premium apparel, and exclusive home accessories. This period marked our emergence as a destination for luxury across multiple categories.
                </p>
              </div>
            </div>
            
            {/* Year 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-5xl font-serif text-slate-200">2020</span>
                <h3 className="text-2xl font-medium mt-2 mb-4">Digital Transformation</h3>
                <p className="text-slate-700 leading-relaxed">
                  As the world changed, so did we. We embraced digital innovation while preserving our core values. Our online platform now offers the same personalized experience as our flagship stores, allowing us to share our collection with a global audience.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="LUXE digital transformation" 
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
            
            {/* Year 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="LUXE sustainability" 
                  className="rounded-xl shadow-md"
                />
              </div>
              <div>
                <span className="text-5xl font-serif text-slate-200">Today</span>
                <h3 className="text-2xl font-medium mt-2 mb-4">Sustainable Luxury</h3>
                <p className="text-slate-700 leading-relaxed">
                  Today, we're leading the way in sustainable luxury. We partner with artisans who share our commitment to ethical production and environmental responsibility. Our future is defined by our dedication to creating a positive impact through the power of exceptional craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Alexander Foster" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">Alexander Foster</h3>
              <p className="text-slate-600 mb-3">Founder & CEO</p>
              <p className="text-sm text-slate-700">
                With over 20 years in the luxury industry, Alexander's vision and passion drive our commitment to excellence.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sophia Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">Sophia Chen</h3>
              <p className="text-slate-600 mb-3">Creative Director</p>
              <p className="text-sm text-slate-700">
                Sophia's innovative approach to design has established LUXE as a leader in contemporary luxury.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                <img 
                  src="https://images.pexels.com/photos/3782164/pexels-photo-3782164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Marcus Reid" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">Marcus Reid</h3>
              <p className="text-slate-600 mb-3">Head of Curation</p>
              <p className="text-sm text-slate-700">
                Marcus travels the world to discover exceptional products and the artisans behind them.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="rounded-xl overflow-hidden mb-4 aspect-square">
                <img 
                  src="https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Isabella Martins" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">Isabella Martins</h3>
              <p className="text-slate-600 mb-3">Sustainability Officer</p>
              <p className="text-sm text-slate-700">
                Isabella ensures our commitment to ethical practices and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience the Difference</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Discover our curated collection of luxury products, each with its own unique story and unparalleled craftsmanship.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/category/all" className="btn-primary">
              Shop Collection
            </Link>
            <Link to="/contact" className="btn bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 focus:ring-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;