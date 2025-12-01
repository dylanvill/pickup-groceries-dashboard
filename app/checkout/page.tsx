"use client";

import { Button } from "@/@shadcn/components/ui/button";
import CustomerDetails from "./_components/CustomerDetails";
import PickupInformation from "./_components/PickupInformation";
import CheckoutItemsSummary from "./_components/CheckoutItemsSummary";

function CheckoutPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <CheckoutItemsSummary />
          <CustomerDetails />
          <PickupInformation />

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
