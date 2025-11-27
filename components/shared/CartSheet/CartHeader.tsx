import React, { useMemo } from "react";
import { SheetHeader } from "../../../@shadcn/components/ui/sheet";
import Heading from "../../typography/Heading";
import Body from "../../typography/Body";
import { useCart } from "../../../store/useCart";

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
      <Heading variant="h4">Your Cart</Heading>
      <Body>{label}</Body>
    </SheetHeader>
  );
}

export default CartHeader;
