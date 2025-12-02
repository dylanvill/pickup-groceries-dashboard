import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../@shadcn/components/ui/card";
import CheckoutItem from "./CheckoutItem";
import { useCart } from "../../../store/useCart";
Import AppLarge from "../../../components/typography/AppLarge";
import Strong from "../../../components/typography/Strong";
import dynamic from "next/dynamic";
import { formatCurrency } from "../../../utils/formatCurrency";

// Create a client-only component for the total price
const TotalPrice = dynamic(
  () => {
    const Component = () => {
      const { getTotalPrice } = useCart();
      const totalPrice = formatCurrency(getTotalPrice());
      return (
        <AppLarge>
          <Strong>{totalPrice}</Strong>
        </AppLarge>
      );
    };
    return Promise.resolve(Component);
  },
  { ssr: false }
);

function CheckoutItemsSummary() {
  const { items } = useCart();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Order</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <CheckoutItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}

          {/* Order Total */}
          <div className="space-y-2 mt-10">
            <div className="flex justify-between">
              <AppLarge>
                <Strong>Total</Strong>
              </AppLarge>
              <TotalPrice />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CheckoutItemsSummary;
