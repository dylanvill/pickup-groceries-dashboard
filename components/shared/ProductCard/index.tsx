import { Card, CardContent, CardFooter } from "@shadcn/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Button } from "@shadcn/components/ui/button";
import ProductModel from "@/models/ProductModel";
import { AspectRatio } from "@shadcn/components/ui/aspect-ratio";
import AppBody from "@/components/typography/AppBody";
Import AppLarge from "@/components/typography/AppLarge";
import { CURRENCY } from "@utils/constants";
import { useCart } from "@store/useCart";
import ProductImage from "./ProductImage";
import { toast } from "sonner";
import AppSmall from "../../typography/AppSmall";
import AppStrong from "../../typography/AppStrong";

interface ProductCardProps {
  product: ProductModel;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: 1,
      total: product.price,
    });
    toast.success(<AppSmall><AppStrong>{product.name}</AppStrong> has been added to your cart.</AppSmall>);
  };

  return (
    <Card className="overflow-hidden gap-0 py-0 h-full flex flex-col">
      <AspectRatio ratio={1 / 1}>
        <ProductImage src={product?.imageUrl} alt={product.name} />
      </AspectRatio>

      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <AppBody className="mb-0">{product.name}</AppBody>
          <div className="flex items-center justify-between">
            <AppLarge>
              {CURRENCY}
              {product.price}
            </AppLarge>
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
