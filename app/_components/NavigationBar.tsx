'use client';

import { StoreBranding } from './StoreBranding';
import { SearchBar } from './SearchBar';
import { Cart } from './Cart';
import { CategoryFilter } from './CategoryFilter';
import { CartItem, Category } from '@/lib/types';

interface NavigationBarProps {
  onSearch: (query: string) => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function NavigationBar({
  onSearch,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  categories,
  selectedCategory,
  onCategoryChange,
}: NavigationBarProps) {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Branding */}
          <StoreBranding />

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Cart */}
          <Cart
            items={cartItems}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        </div>

        {/* Categories Filter - Below the main navbar */}
        <div className="pb-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </div>
    </header>
  );
}