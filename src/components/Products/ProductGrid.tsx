import React, { useEffect, useCallback, useRef } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  title?: string;
  description?: string;
  featured?: boolean;
  slider?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  title, 
  description,
  featured = false,
  slider = false
}) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const animationRef = useRef<number>();
  const speedRef = useRef(1);

  // Duplicate products for continuous scrolling
  const extendedProducts = slider ? [...products, ...products, ...products] : products;

  const scroll = useCallback(() => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const maxScroll = container.scrollWidth / 3;

      container.scrollLeft += speedRef.current;

      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      }
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!animationRef.current) {
      const animate = () => {
        scroll();
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [scroll]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  }, []);

  useEffect(() => {
    if (slider && !isPaused) {
      startAnimation();
    } else {
      stopAnimation();
    }

    return () => {
      stopAnimation();
    };
  }, [slider, isPaused, startAnimation, stopAnimation]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const scrollAmount = container.clientWidth;
      
      container.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container-custom py-12">
      {title && (
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
          {description && (
            <p className="text-slate-600 leading-relaxed">{description}</p>
          )}
        </div>
      )}
      
      {slider ? (
        <div className="relative">
          <div 
            ref={scrollContainer}
            className="flex overflow-x-hidden gap-6 pb-4 hide-scrollbar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {extendedProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="flex-none w-[280px] md:w-[320px]">
                <ProductCard 
                  product={product} 
                  featured={featured && product.isFeatured}
                />
              </div>
            ))}
          </div>
          
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors z-10"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      ) : (
        <div className={`grid grid-cols-1 ${featured ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-6 md:gap-8`}>
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              featured={featured && product.isFeatured}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;