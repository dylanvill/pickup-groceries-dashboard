import { Dayjs } from "dayjs";

interface ProductResource {
  id: number;
  name: string;
  description: string;
  price: number;
  categories: string[];
  imageUrl?: string;
  createdAt: Dayjs;
}

export default ProductResource;
