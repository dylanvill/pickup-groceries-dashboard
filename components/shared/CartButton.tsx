"use client";

import { Button } from "@shadcn/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@shadcn/components/ui/badge";
import { useCart } from "@store/useCart";
import { forwardRef } from "react";

const CartButton = forwardRef<HTMLButtonElement>((props, ref) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Button variant="outline" className="relative" ref={ref} {...props}>
      <ShoppingCart className="h-4 w-4" />
      <Badge
        variant="destructive"
        className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs"
        suppressHydrationWarning>
        {totalItems}
      </Badge>
    </Button>
  );
});

CartButton.displayName = "CartButton";

export default CartButton;
