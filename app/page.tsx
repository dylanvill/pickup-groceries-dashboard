"use client";

import { ProductCard as OldProductCard } from "@/components/ProductCard";
import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/lib/types";

export default function Home() {
  // Static sample products data - placeholder for future integration
  const products: Product[] = [
    {
      id: "1",
      name: "Fresh Organic Bananas",
      price: 2.99,
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop",
      category: "fruits",
      description:
        "Sweet, ripe organic bananas perfect for smoothies or snacking.",
      inStock: true,
      rating: 4.5,
    },
    {
      id: "2",
      name: "Greek Yogurt",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1571212515416-fbb88c3704ac?w=300&h=300&fit=crop",
      category: "dairy",
      description: "Creamy Greek yogurt packed with protein and probiotics.",
      inStock: true,
      rating: 4.8,
    },
    {
      id: "3",
      name: "Organic Spinach",
      price: 3.49,
      image:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop",
      category: "vegetables",
      description: "Fresh organic baby spinach leaves, perfect for salads.",
      inStock: true,
      rating: 4.3,
    },
    {
      id: "4",
      name: "Artisan Sourdough Bread",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
      category: "bakery",
      description: "Handcrafted sourdough bread with a crispy crust.",
      inStock: false,
      rating: 4.7,
    },
    {
      id: "5",
      name: "Fresh Atlantic Salmon",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1499125562588-29fb8a56b4d1?w=300&h=300&fit=crop",
      category: "meat",
      description: "Premium Atlantic salmon fillet, sustainably sourced.",
      inStock: true,
      rating: 4.6,
    },
    {
      id: "6",
      name: "Organic Apple Juice",
      price: 3.99,
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop",
      category: "beverages",
      description: "Pure organic apple juice, no added sugars.",
      inStock: true,
      rating: 4.2,
    },
  ];

  // Placeholder callback - for future integration
  const handleAddToCart = (product: Product) => {
    // TODO: Implement add to cart logic
    console.log("Add to cart:", product.name);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id}>
                <OldProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                />
                <ProductCard />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
