import React from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { useCart } from "../../../store/useCart";

function CartSheet() {
  const { items } = useCart();

  return (
    <div>
      <CartHeader />
      <div className="px-4">
      </div>
    </div>
  );
}

export default CartSheet;
