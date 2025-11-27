import { useQuery } from "@tanstack/react-query";
import getProducts from "./getProductsFunction";
import { useMemo } from "react";
import Product from "@models/Product";
import { GET_PRODUCTS_QUERY_KEY } from "@api/products/types/ProductQueryKeys";

const useGetProducts = () => {
  const query = useQuery({
    queryKey: [GET_PRODUCTS_QUERY_KEY],
    queryFn: getProducts,
  });

  const products = useMemo<Product[]>(() => {
    if (!query.data?.data) return [];

    return query.data.data.map(
      (product): Product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl,
        categories: product.categories,
      })
    );
  }, [query.data]);

  return { ...query, products };
};

export default useGetProducts;
