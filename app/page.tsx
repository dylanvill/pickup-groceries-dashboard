"use client";

import ProductCard from "@/components/shared/ProductCard";
import useGetProducts from "@api/products/getProducts/useGetProducts";

export default function Home() {
  const { products } = useGetProducts();

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
