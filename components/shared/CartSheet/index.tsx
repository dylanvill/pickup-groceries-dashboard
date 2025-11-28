import React from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { useCart } from "../../../store/useCart";

function CartSheet() {
  const { items } = useCart();

  return (
    <div>
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
    </div>
  );
}

export default CartSheet;
