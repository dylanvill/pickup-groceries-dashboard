"use client";

import { useState } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/@shadcn/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/@shadcn/components/ui/sheet";
import { Separator } from "@/@shadcn/components/ui/separator";
import Image from "next/image";
import CartButton from "../../components/shared/CartButton";
import CartSheet from "../../components/shared/CartSheet";

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <CartButton />
      </SheetTrigger>

      <SheetContent className="flex flex-col h-full">
        <CartSheet />
        <div className="flex-1 overflow-auto py-4">
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-12 h-12 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=100&h=100&fit=crop"
                  alt="Fresh Organic Bananas"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">Fresh Organic Bananas</h3>
                <p className="text-sm text-muted-foreground">$2.99</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center text-sm">2</span>
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-red-500">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-12 h-12 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571212515416-fbb88c3704ac?w=100&h=100&fit=crop"
                  alt="Greek Yogurt"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">Greek Yogurt</h3>
                <p className="text-sm text-muted-foreground">$5.99</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center text-sm">1</span>
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-red-500">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-12 h-12 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100&h=100&fit=crop"
                  alt="Organic Spinach"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">Organic Spinach</h3>
                <p className="text-sm text-muted-foreground">$3.49</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center text-sm">1</span>
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-red-500">
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>

        <Separator />

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
