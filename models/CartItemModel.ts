import Product from "./ProductModel";

export default interface CartItemModel {
  product: Product;
  quantity: number;
  total: number;
}
