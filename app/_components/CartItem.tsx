import { Card } from "@shadcn/components/ui/card";
import Image from "next/image";
import { Button } from "@shadcn/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Small from "@components/typography/Small";
import Strong from "@components/typography/Strong";
import AppExtraSmall from "@/components/typography/AppExtraSmall";
import { CURRENCY } from "../../utils/constants";
import Placeholder from "@/public/images/placeholder.png";
import { useCart } from "../../store/useCart";
import { formatCurrency } from "../../utils/formatCurrency";

export interface CartItemProps {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

function CartItem({
  productId,
  name,
  price,
  quantity,
  imageUrl,
}: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const formattedPrice = formatCurrency(price);

  const handleQuantity = (type: string, productId: number) => {
    if (type === "increase") {
      updateQuantity(productId, quantity + 1);
    } else if (type === "decrease") {
      updateQuantity(productId, quantity - 1);
    }
  };

  return (
    <Card className="p-3">
      <div className="flex flex-row items-center">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden">
          <Image
            src={imageUrl ?? Placeholder}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 mx-3">
          <Small>
            <Strong>{name}</Strong>
          </Small>
          <Small>{formattedPrice}</Small>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon-sm"
            className="h-6 w-6"
            onClick={() => handleQuantity("decrease", productId)}>
            <Minus className="h-2 w-2" />
          </Button>
          <div className="w-4">
            <AppExtraSmall className="text-center">{quantity}</AppExtraSmall>
          </div>
          <Button
            variant="outline"
            size="icon-sm"
            className="h-6 w-6"
            onClick={() => handleQuantity("increase", productId)}>
            <Plus className="h-2 w-2" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-red-500 ms-3"
          onClick={() => removeFromCart(productId)}>
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
    </Card>
  );
}

export default CartItem;
