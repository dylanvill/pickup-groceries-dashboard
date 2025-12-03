import { Card, CardContent, CardFooter } from "@shadcn/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Button } from "@shadcn/components/ui/button";
import ProductModel from "@/models/ProductModel";
import AppBody from "@/components/typography/AppBody";
import AppLarge from "@components/typography/AppLarge";
import { useCart } from "@store/useCart";
import ProductImage from "./ProductImage";
import { useFormatCurrency } from "../../../utils/formatCurrency";
import useToast from "../../../hooks/useToast";

interface ProductCardProps {
  product: ProductModel;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showBasicToast } = useToast();

  const formattedCurrency = useFormatCurrency(product.price);

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: 1,
      total: product.price,
    });
    showBasicToast(`${product.name} has been added to your cart.`, "success");
  };

  return (
    <Card className="overflow-hidden gap-0 py-0 h-full flex flex-col">
      <ProductImage src={product?.imageUrl} alt={product.name} />

      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <AppBody className="mb-0">{product.name}</AppBody>
          <div className="flex items-center justify-between">
            <AppLarge>{formattedCurrency}</AppLarge>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button onClick={handleAddToCart} className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
