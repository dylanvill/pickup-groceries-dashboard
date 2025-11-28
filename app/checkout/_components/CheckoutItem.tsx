import { Card } from "../../../@shadcn/components/ui/card";
import ProductImage from "../../../components/shared/ProductCard/ProductImage";
import { AspectRatio } from "../../../@shadcn/components/ui/aspect-ratio";
import CartItemModel from "@/models/CartItemModel";
import { useMemo } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";
import Small from "../../../components/typography/Small";
import ExtraSmall from "../../../components/typography/ExtraSmall";

export type CheckoutItemProps = Omit<CartItemModel, "total">;

function CheckoutItem({ product, quantity }: CheckoutItemProps) {
  const grandTotal = useMemo(() => {
    return formatCurrency(product.price * quantity);
  }, [product.price, quantity]);

  return (
    <Card className="flex flex-row items-center gap-4 p-3 border rounded-lg">
      <div className="relative w-18 h-18 shrink-0 rounded overflow-hidden">
        <AspectRatio ratio={1 / 1}>
          <ProductImage src={product.imageUrl} alt={product.name} />
        </AspectRatio>
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{product.name}</h3>
      </div>
      <div className="text-right">
        <Small>{grandTotal}</Small>
        <ExtraSmall className="text-muted-foreground">{`${product.price} x ${quantity}`}</ExtraSmall>
      </div>
    </Card>
  );
}

export default CheckoutItem;
