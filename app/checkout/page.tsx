"use client";

import { Button } from "@/@shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/@shadcn/components/ui/card";
import { Input } from "@/@shadcn/components/ui/input";
import { Label } from "@/@shadcn/components/ui/label";
import Image from "next/image";
import CheckoutItem from "./_components/CheckoutItem";
import { useCart } from "../../store/useCart";
import Large from "../../components/typography/Large";
import Strong from "../../components/typography/Strong";
import { formatCurrency } from "../../utils/formatCurrency";

function CheckoutPage() {
  const { items, getTotalPrice } = useCart();

  const totalPrice = formatCurrency(getTotalPrice());

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
                    <Large>
                      <Strong>{totalPrice}</Strong>
                    </Large>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Details */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +63
                  </span>
                  <Input
                    id="phone"
                    placeholder="9123456789"
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pickup Information */}
          <Card>
            <CardHeader>
              <CardTitle>Pickup Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Pickup Address</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Unit 2, 1234 Building, Etc Street, Makati City, Metro Manila
                </p>
              </div>
              <div>
                <Label>Business Name</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  1234 Business
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="pickupDate">Pickup Date</Label>
                  <Input id="pickupDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="pickupTime">Pickup Time</Label>
                  <Input id="pickupTime" type="time" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Note: This is an estimated pickup time. It's okay if you don't
                arrive exactly on time - this serves as a general estimate for
                planning purposes.
              </p>
              <div>
                <Label>Location Preview</Label>
                <div className="mt-2 w-full h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-sm font-medium">
                      Google Maps Preview
                    </div>
                    <div className="text-xs mt-1">
                      Map will be embedded here
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
