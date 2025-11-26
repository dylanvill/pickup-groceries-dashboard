import dayjs from "dayjs";
import customerApiClient from "../../config/customerApiClient";
import { PaginationLinks, PaginationMeta } from "../../types/Pagination";
import ProductResource from "./types/ProductResource";

interface RawProductResource extends Omit<ProductResource, "createdAt"> {
  createdAt: string;
}

export interface ProductResponse {
  data: RawProductResource[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

const getProducts = async (): Promise<ProductResponse> => {
  try {
    const response = await customerApiClient.get("/products", {
      transformResponse: [
        (data: string) => {
          const response: ProductResponse = JSON.parse(data);

          const parseData = parseCreatedAt(response.data);

          return {
            ...response,
            data: parseData,
          };
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const parseCreatedAt = (products: RawProductResource[]) => {
  return products.map((product) => ({
    ...product,
    createdAt: dayjs(product.createdAt),
  }));
};

export default getProducts;
