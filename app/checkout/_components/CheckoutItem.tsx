import { Card } from "../../../@shadcn/components/ui/card";
import ProductImage from "../../../components/shared/ProductCard/ProductImage";
import { AspectRatio } from "../../../@shadcn/components/ui/aspect-ratio";
import CartItemModel from "@/models/CartItemModel";
import { useMemo } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";
import Small from "../../../components/typography/Small";
import ExtraSmall from "../../../components/typography/ExtraSmall";
import Body from "../../../components/typography/Body";
import Strong from "../../../components/typography/Strong";

export type CheckoutItemProps = Omit<CartItemModel, "total">;

function CheckoutItem({ product, quantity }: CheckoutItemProps) {
  const grandTotal = useMemo(() => {
    return formatCurrency(product.price * quantity);
  }, [product.price, quantity]);

  const formattedPrice = useMemo(() => {
    return formatCurrency(product.price);
  }, [product.price]);

  return (
    <Card className="flex flex-row items-center gap-4 p-3 border rounded-lg">
      <div className="relative w-18 h-18 shrink-0 rounded overflow-hidden">
        <AspectRatio ratio={1 / 1}>
          <ProductImage src={product.imageUrl} alt={product.name} />
        </AspectRatio>
      </div>
      <div className="flex-1">
        <Body className="font-medium">
          <Strong>{product.name}</Strong>
        </Body>
        <ExtraSmall className="text-muted-foreground">
          Quantity: {quantity}
        </ExtraSmall>
      </div>
      <div className="text-right">
        <Small>{grandTotal}</Small>
        {quantity > 1 && (
          <ExtraSmall className="text-muted-foreground">{formattedPrice} x {quantity}</ExtraSmall>
        )}
      </div>
    </Card>
  );
}

export default CheckoutItem;
