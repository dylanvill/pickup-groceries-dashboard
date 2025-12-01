"use client";

import { Button } from "@/@shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/@shadcn/components/ui/card";
import CheckoutItem from "./_components/CheckoutItem";
import { useCart } from "../../store/useCart";
import Large from "../../components/typography/Large";
import Strong from "../../components/typography/Strong";
import { formatCurrency } from "../../utils/formatCurrency";
import dynamic from "next/dynamic";
import CustomerDetails from "./_components/CustomerDetails";
import PickupInformation from "./_components/PickupInformation";

// Create a client-only component for the total price
const TotalPrice = dynamic(
  () => {
    const Component = () => {
      const { getTotalPrice } = useCart();
      const totalPrice = formatCurrency(getTotalPrice());
      return (
        <Large>
          <Strong>{totalPrice}</Strong>
        </Large>
      );
    };
    return Promise.resolve(Component);
  },
  { ssr: false }
);

function CheckoutPage() {
  const { items } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Order Summary */}
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
                    <Large>
                      <Strong>Total</Strong>
                    </Large>
                    <TotalPrice />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <CustomerDetails />
          <PickupInformation />

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full" size="lg">
              Place Order
            </Button>

            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;
