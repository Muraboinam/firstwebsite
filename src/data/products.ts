import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Luxe Cashmere Sweater',
    price: 299.99,
    originalPrice: 349.99,
    category: 'clothing',
    tags: ['sweater', 'cashmere', 'luxury'],
    imageUrl: 'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6347535/pexels-photo-6347535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6347541/pexels-photo-6347541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Indulge in the ultimate luxury with our premium cashmere sweater. Crafted from the finest yarn for exceptional softness and warmth.',
    features: ['100% Grade-A Cashmere', 'Ethically sourced', 'Dry clean only', 'Ribbed cuffs and hem'],
    inStock: true,
    isFeatured: true,
    isSale: true,
    salePercentage: 15,
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: 'p2',
    name: 'Signature Leather Tote',
    price: 599.99,
    category: 'bags',
    tags: ['bag', 'leather', 'tote'],
    imageUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Our signature tote crafted from premium full-grain leather. Spacious, sophisticated, and built to last a lifetime.',
    features: ['Full-grain Italian leather', 'Hand-stitched details', 'Interior pockets', 'Magnetic closure'],
    inStock: true,
    isFeatured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 84
  },
  {
    id: 'p3',
    name: 'Precision Automatic Watch',
    price: 1299.99,
    originalPrice: 1499.99,
    category: 'watches',
    tags: ['watch', 'automatic', 'luxury'],
    imageUrl: 'https://images.pexels.com/photos/9979925/pexels-photo-9979925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/9979925/pexels-photo-9979925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/9979910/pexels-photo-9979910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Swiss-made automatic movement with exceptional precision. Sapphire crystal face with exhibition case back.',
    features: ['Swiss automatic movement', 'Sapphire crystal', '100m water resistance', 'Genuine alligator strap'],
    inStock: true,
    isFeatured: true,
    isSale: true,
    salePercentage: 13,
    rating: 4.9,
    reviewCount: 32
  },
  {
    id: 'p4',
    name: 'Diamond Pendant Necklace',
    price: 2499.99,
    category: 'jewelry',
    tags: ['necklace', 'diamond', 'gold'],
    imageUrl: 'https://images.pexels.com/photos/10984851/pexels-photo-10984851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/10984851/pexels-photo-10984851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/11144008/pexels-photo-11144008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Stunning 18k gold pendant with a brilliant-cut 1.2 carat diamond. Timeless elegance for any occasion.',
    features: ['1.2 carat brilliant-cut diamond', '18k solid gold', 'Adjustable 18-20" chain', 'Conflict-free diamond'],
    inStock: true,
    isNew: true,
    rating: 5.0,
    reviewCount: 18
  },
  {
    id: 'p5',
    name: 'Italian Leather Loafers',
    price: 449.99,
    category: 'footwear',
    tags: ['shoes', 'leather', 'loafers'],
    imageUrl: 'https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6046237/pexels-photo-6046237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Handcrafted in Florence from the finest calfskin leather. The epitome of comfort and sophistication.',
    features: ['Hand-stitched construction', 'Calfskin leather upper', 'Leather soles', 'Cushioned insole'],
    inStock: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 62
  },
  {
    id: 'p6',
    name: 'Silk Evening Scarf',
    price: 129.99,
    originalPrice: 159.99,
    category: 'accessories',
    tags: ['scarf', 'silk', 'evening'],
    imageUrl: 'https://images.pexels.com/photos/5858163/pexels-photo-5858163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/5858163/pexels-photo-5858163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5858166/pexels-photo-5858166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Luxurious 100% mulberry silk scarf with hand-rolled edges. Adds instant elegance to any outfit.',
    features: ['100% mulberry silk', 'Hand-rolled edges', 'Unique pattern', 'Gift box included'],
    inStock: true,
    isSale: true,
    salePercentage: 20,
    rating: 4.8,
    reviewCount: 41
  },
  {
    id: 'p7',
    name: 'Limited Edition Sunglasses',
    price: 379.99,
    category: 'accessories',
    tags: ['sunglasses', 'limited', 'acetate'],
    imageUrl: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Limited edition acetate frame sunglasses with polarized lenses. Only 500 pairs available worldwide.',
    features: ['Limited edition of 500', 'Italian acetate frames', 'Polarized lenses', 'UV 400 protection'],
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 26
  },
  {
    id: 'p8',
    name: 'Merino Wool Cardigan',
    price: 199.99,
    originalPrice: 249.99,
    category: 'clothing',
    tags: ['cardigan', 'wool', 'merino'],
    imageUrl: 'https://images.pexels.com/photos/6764035/pexels-photo-6764035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6764035/pexels-photo-6764035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    description: 'Luxuriously soft merino wool cardigan with mother-of-pearl buttons. Perfect layering piece for any season.',
    features: ['100% extra-fine merino wool', 'Mother-of-pearl buttons', 'Ribbed cuffs and hem', 'Regular fit'],
    inStock: true,
    isSale: true,
    salePercentage: 20,
    rating: 4.7,
    reviewCount: 53
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.isSale);
};