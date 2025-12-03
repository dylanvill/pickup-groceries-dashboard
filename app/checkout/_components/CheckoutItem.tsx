import { Card } from "../../../@shadcn/components/ui/card";
import ProductImage from "../../../components/shared/ProductCard/ProductImage";
import { AspectRatio } from "../../../@shadcn/components/ui/aspect-ratio";
import CartItemModel from "@/models/CartItemModel";
import { useMemo } from "react";
import { formatCurrency } from "../../../utils/formatCurrency";
import AppSmall from "../../../components/typography/AppSmall";
import AppExtraSmall from "../../../components/typography/AppExtraSmall";
import AppBody from "../../../components/typography/AppBody";
import AppStrong from "../../../components/typography/AppStrong";

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
        <AppBody className="font-medium">
          <AppStrong>{product.name}</AppStrong>
        </AppBody>
        <AppExtraSmall className="text-muted-foreground">
          Quantity: {quantity}
        </AppExtraSmall>
      </div>
      <div className="text-right">
        <AppSmall>{grandTotal}</AppSmall>
        {quantity > 1 && (
          <AppExtraSmall className="text-muted-foreground">{formattedPrice} x {quantity}</AppExtraSmall>
        )}
      </div>
    </Card>
  );
}

export default CheckoutItem;
