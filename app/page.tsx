"use client";

import ProductCard from "@/components/shared/ProductCard";
import Product from "../models/Product";
import getProducts from "../api/functions/products/getProducts";
import { useQuery } from "@tanstack/react-query";
import { GET_PRODUCTS_QUERY_KEY } from "../api/functions/products/types/ProductQueryKeys";
import { useMemo } from "react";

export default function Home() {
  const { data } = useQuery({
    queryKey: [GET_PRODUCTS_QUERY_KEY],
    queryFn: getProducts,
  });

  const products = useMemo<Product[]>(() => {
    if (!data?.data) return [];

    return data.data.map(
      (product): Product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl,
        categories: product.categories,
      })
    );
  }, [data]);

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
