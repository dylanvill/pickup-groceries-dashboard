"use client";

import { Button } from "@/@shadcn/components/ui/button";
import { Badge } from "@/@shadcn/components/ui/badge";
import { Category } from "@/lib/types";

export function CategoryFilter() {
  // Internal state - placeholder for future implementation
  const selectedCategory = "all";

  // Internal data - placeholder categories
  const categories: Category[] = [
    { id: "all", name: "All Products", slug: "all" },
    { id: "fruits", name: "Fruits", slug: "fruits" },
    { id: "vegetables", name: "Vegetables", slug: "vegetables" },
    { id: "dairy", name: "Dairy", slug: "dairy" },
    { id: "meat", name: "Meat & Seafood", slug: "meat" },
    { id: "bakery", name: "Bakery", slug: "bakery" },
    { id: "beverages", name: "Beverages", slug: "beverages" },
  ];

  // Internal callback - placeholder for future implementation
  const onCategoryChange = (category: string) => {
    // TODO: Implement category change logic
    console.log("Category changed to:", category);
  };

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
              className="transition-all hover:scale-105">
              {category.name}
              {isSelected && (
                <Badge
                  variant="secondary"
                  className="ml-2 h-4 w-4 rounded-full p-0">
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
