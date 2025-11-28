"use client";

import { useState } from "react";
import { Button } from "@/@shadcn/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/@shadcn/components/ui/sheet";
import { Separator } from "@/@shadcn/components/ui/separator";
import CartButton from "../../components/shared/CartButton";
import CartHeader from "./CartHeader";
import { useCart } from "../../store/useCart";
import CartItem from "./CartItem";

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <CartButton />
      </SheetTrigger>

      <SheetContent className="flex flex-col h-full overflow-y-auto">
        <CartHeader />

        <div className="px-4 flex flex-col gap-y-3">
          {items.map((item) => (
            <CartItem
              key={item.product.id}
              productId={item.product.id}
              name={item.product.name}
              price={item.product.price}
              quantity={item.quantity}
              imageUrl={item.product.imageUrl}
            />
          ))}
        </div>

        <div className="py-4 space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>$12.47</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>$2.99</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax</span>
            <span>$0.94</span>
          </div>
          <Separator />
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>$16.40</span>
          </div>

          <div className="space-y-2">
            <Button className="w-full">Checkout</Button>
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
