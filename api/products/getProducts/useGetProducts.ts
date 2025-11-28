import { useQuery } from "@tanstack/react-query";
import getProducts from "./getProductsFunction";
import { useMemo } from "react";
import ProductModel from "@/models/ProductModel";
import { GET_PRODUCTS_QUERY_KEY } from "@api/products/types/ProductQueryKeys";

const useGetProducts = () => {
  const query = useQuery({
    queryKey: [GET_PRODUCTS_QUERY_KEY],
    queryFn: getProducts,
  });

  const products = useMemo<ProductModel[]>(() => {
    if (!query.data?.data) return [];

    return query.data.data.map(
      (product): ProductModel => ({
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
