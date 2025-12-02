import React, { useMemo } from "react";
import { SheetHeader, SheetTitle } from "../../@shadcn/components/ui/sheet";
import AppHeading from "../../components/typography/AppHeading";
import AppBody from "../../components/typography/AppBody";
import { useCart } from "../../store/useCart";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function CartHeader() {
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  const label = useMemo(() => {
    if (!totalItems) return "0 items";
    if (totalItems === 1) return "1 item";
    return `${totalItems} items`;
  }, [totalItems]);

  return (
    <SheetHeader className="gap-0">
      <VisuallyHidden>
        <SheetTitle>Your Cart</SheetTitle>
      </VisuallyHidden>
      <AppHeading variant="h4">Your Cart</AppHeading>
      <AppBody>{label}</AppBody>
    </SheetHeader>
  );
}

export default CartHeader;
