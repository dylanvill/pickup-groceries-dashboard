import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../@shadcn/components/ui/card";
import CheckoutItem from "./CheckoutItem";
import { useCart } from "../../../store/useCart";
import AppLarge from "../../../components/typography/AppLarge";
import AppStrong from "../../../components/typography/AppStrong";
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
          <AppStrong>{totalPrice}</AppStrong>
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
                <AppStrong>Total</AppStrong>
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
