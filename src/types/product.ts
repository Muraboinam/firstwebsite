export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  tags: string[];
  imageUrl: string;
  images?: string[];
  description: string;
  features?: string[];
  inStock: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  isSale?: boolean;
  salePercentage?: number;
  rating?: number;
  reviewCount?: number;
}

export type ProductCategory = 
  | 'all'
  | 'clothing'
  | 'accessories'
  | 'footwear'
  | 'jewelry'
  | 'watches'
  | 'bags';