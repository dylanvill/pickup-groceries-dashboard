"use client";

import ProductCard from "@/components/shared/ProductCard";
import Product from "../models/Product";
import getProducts from "../api/functions/products/getProducts";

export default function Home() {
  const data = getProducts().then((r) => {
    console.log(r);
  }); // Placeholder for future dynamic data fetching

  // Static sample products data - placeholder for future integration
  const products: Product[] = [
    {
      id: 1,
      name: "Fresh Organic Bananas",
      description:
        "Sweet, ripe organic bananas perfect for smoothies or snacking. Grown sustainably and packed with potassium and vitamins.",
      price: 2.99,
      imageUrl:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop",
      categories: ["fruits", "organic"],
    },
    {
      id: 2,
      name: "Greek Yogurt",
      description:
        "Creamy Greek yogurt packed with protein and probiotics. Perfect for breakfast or as a healthy snack.",
      price: 5.99,
      imageUrl:
        "https://images.unsplash.com/photo-1571212515416-fbb88c3704ac?w=300&h=300&fit=crop",
      categories: ["dairy", "protein"],
    },
    {
      id: 3,
      name: "Organic Spinach",
      description:
        "Fresh organic baby spinach leaves, perfect for salads, smoothies, or cooking. Rich in iron and vitamins.",
      price: 3.49,
      imageUrl:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop",
      categories: ["vegetables", "organic", "leafy-greens"],
    },
    {
      id: 4,
      name: "Artisan Sourdough Bread",
      description:
        "Handcrafted sourdough bread with a crispy crust and soft interior. Made with traditional fermentation methods.",
      price: 4.99,
      imageUrl:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
      categories: ["bakery", "bread"],
    },
    {
      id: 5,
      name: "Fresh Atlantic Salmon",
      description:
        "Premium Atlantic salmon fillet, sustainably sourced. Rich in omega-3 fatty acids and perfect for grilling.",
      price: 12.99,
      imageUrl:
        "https://images.unsplash.com/photo-1499125562588-29fb8a56b4d1?w=300&h=300&fit=crop",
      categories: ["seafood", "protein", "fresh"],
    },
    {
      id: 6,
      name: "Organic Apple Juice",
      description:
        "Pure organic apple juice made from freshly pressed apples. No added sugars or preservatives.",
      price: 3.99,
      imageUrl:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop",
      categories: ["beverages", "organic", "juice"],
    },
    {
      id: 7,
      name: "Red Bell Peppers",
      description:
        "Crisp and sweet red bell peppers, locally grown. Perfect for salads, stir-fries, or roasting.",
      price: 4.49,
      imageUrl:
        "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop",
      categories: ["vegetables", "fresh", "peppers"],
    },
    {
      id: 8,
      name: "Organic Strawberries",
      description:
        "Juicy organic strawberries, perfect for desserts, smoothies, or eating fresh. Sweet and flavorful.",
      price: 6.99,
      imageUrl:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&h=300&fit=crop",
      categories: ["fruits", "organic", "berries"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {products.map((product) => (
              <div key={product.id} className="h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
