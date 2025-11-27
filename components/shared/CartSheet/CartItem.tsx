import { Card } from "@shadcn/components/ui/card";
import Image from "next/image";
import { Button } from "@shadcn/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Small from "@components/typography/Small";
import Strong from "@components/typography/Strong";
import ExtraSmall from "@components/typography/ExtraSmall";
import { CURRENCY } from "../../../utils/constants";

export interface CartItemProps {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

function CartItem({
  productId,
  name,
  price,
  quantity,
  imageUrl,
}: CartItemProps) {
  return (
    <Card className="p-3">
      <div className="flex flex-row items-center">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1 mx-3">
          <Small>
            <Strong>{name}</Strong>
          </Small>
          <Small>
            {CURRENCY}
            {price}
          </Small>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon-sm" className="h-6 w-6">
            <Minus className="h-2 w-2" />
          </Button>
          <div className="w-4">
            <ExtraSmall className="text-center">{quantity}</ExtraSmall>
          </div>
          <Button variant="outline" size="icon-sm" className="h-6 w-6">
            <Plus className="h-2 w-2" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-red-500 ms-3">
          <Trash2 className="h-3 w-3" />
        </Button>
      </div>
    </Card>
  );
}

export default CartItem;
