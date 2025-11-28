"use client";

import { useState } from "react";
import { Button } from "@/@shadcn/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/@shadcn/components/ui/sheet";
import { Separator } from "@shadcn/components/ui/separator";
import CartHeader from "./CartHeader";
import { useCart } from "../../store/useCart";
import CartItem from "./CartItem";
import Body from "../../components/typography/Body";
import Strong from "../../components/typography/Strong";
import { formatCurrency } from "../../utils/formatCurrency";
import dynamic from "next/dynamic";

// Dynamically import CartButton with SSR disabled
const CartButton = dynamic(() => import("./CartButton"), {
  ssr: false,
});

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, getTotalPrice } = useCart();

  const totalPrice = formatCurrency(getTotalPrice());

  const handleContinueShoppingClicked = () => {
    setIsOpen(false);
  };

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

        <Separator className="my-6" />

        <div className="flex justify-between px-4">
          <Body>
            <Strong>Total</Strong>
          </Body>
          <Body>
            <Strong>{totalPrice}</Strong>
          </Body>
        </div>

        <div className="px-4 mb-10 flex flex-col gap-y-2 mt-6">
          <Button className="w-full">Checkout</Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleContinueShoppingClicked}>
            Continue Shopping
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
