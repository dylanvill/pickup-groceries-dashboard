'use client';

import { Button } from '@/@shadcn/components/ui/button';
import { Badge } from '@/@shadcn/components/ui/badge';
import { Category } from '@/lib/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategory === category.slug;
          return (
            <Button
              key={category.id}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.slug)}
              className="transition-all hover:scale-105"
            >
              {category.name}
              {isSelected && (
                <Badge variant="secondary" className="ml-2 h-4 w-4 rounded-full p-0">
                  ✓
                </Badge>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}