import {
  Card,
  CardContent,
  CardFooter,
} from "../../@shadcn/components/ui/card";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Badge } from "../../@shadcn/components/ui/badge";
import { Button } from "../../@shadcn/components/ui/button";
import Product from "../../models/Product";
import CartItem from "../../models/CartItem";
import { AspectRatio } from "../../@shadcn/components/ui/aspect-ratio";
import Body from "../typography/Body";
import Large from "../typography/Large";
import { CURRENCY } from "../../utils/constants";

interface ProductCardProps {
  product: Product;
  onAddToCart: (cartItem: CartItem) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity: 1, total: product.price });
  };

  return (
    <Card className="overflow-hidden gap-0 rounded-lg py-0">
      <AspectRatio ratio={1 / 1}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </AspectRatio>

      <CardContent className="p-4">
        <div className="space-y-2">
          <Body className="mb-0">{product.name}</Body>
          <div className="flex items-center justify-between">
            <Large>
              {CURRENCY}
              {product.price}
            </Large>
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {product.categories.map((category) => (
              <Badge key={category} variant="outline" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
