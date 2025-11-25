export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface SearchFilters {
  category: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}