import {
  Card,
  CardContent,
  CardFooter,
} from "../../@shadcn/components/ui/card";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "../../@shadcn/components/ui/button";
import Product from "../../models/Product";
import { AspectRatio } from "../../@shadcn/components/ui/aspect-ratio";
import Body from "../typography/Body";
import Large from "../typography/Large";
import { CURRENCY } from "../../utils/constants";
import { useCart } from "../../store/useCart";

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
  };

  return (
    <Card className="overflow-hidden gap-0 rounded-lg py-0 h-full flex flex-col">
      <AspectRatio ratio={1 / 1}>
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        )}
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
