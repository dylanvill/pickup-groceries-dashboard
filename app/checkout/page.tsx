"use client";

import { Button } from "@/@shadcn/components/ui/button";
import { Form } from "@/@shadcn/components/ui/form";
import CustomerDetails from "./_components/CustomerDetails";
import PickupInformation from "./_components/PickupInformation";
import CheckoutItemsSummary from "./_components/CheckoutItemsSummary";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createCheckoutSchema,
  defaultValues,
  type CheckoutFormData,
} from "./schemas/checkoutSchema";
import { useRouter } from "next/navigation";

function CheckoutPage() {
  const router = useRouter();

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(createCheckoutSchema(false)),
    defaultValues,
    mode: "onTouched", // Only validate after user touches fields
  });


  const onSubmit = async (data: CheckoutFormData) => {
    try {
      console.log("Order data:", data);
      // TODO: Implement actual order submission logic here
      // e.g., await submitOrder(data);

      // For now, just log the data and redirect to success page
      router.push("/order-success");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again.");
    }
  };

  const handleContinueShopping = () => {
    router.push("/");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CheckoutItemsSummary />
        <CustomerDetails />
        <PickupInformation />

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Placing Order..." : "Place Order"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleContinueShopping}>
            Continue Shopping
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CheckoutPage;
