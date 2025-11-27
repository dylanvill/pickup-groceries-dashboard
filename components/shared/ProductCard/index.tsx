import { Card, CardContent, CardFooter } from "@shadcn/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Button } from "@shadcn/components/ui/button";
import Product from "@models/Product";
import { AspectRatio } from "@shadcn/components/ui/aspect-ratio";
import Body from "@components/typography/Body";
import Large from "@components/typography/Large";
import { CURRENCY } from "@utils/constants";
import { useCart } from "@store/useCart";
import ProductImage from "./ProductImage";
import { toast } from "sonner";
import Small from "../../typography/Small";
import Strong from "../../typography/Strong";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: 1,
      total: product.price,
    });
    toast.success(<Small><Strong>{product.name}</Strong> has been added to your cart.</Small>);
  };

  return (
    <Card className="overflow-hidden gap-0 rounded-lg py-0 h-full flex flex-col">
      <AspectRatio ratio={1 / 1}>
        <ProductImage src={product?.imageUrl} alt={product.name} />
      </AspectRatio>

      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="space-y-2 flex-1">
          <Body className="mb-0">{product.name}</Body>
          <div className="flex items-center justify-between">
            <Large>
              {CURRENCY}
              {product.price}
            </Large>
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
