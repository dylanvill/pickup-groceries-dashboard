"use client";

import React, { useState } from "react";
import { Button } from "@/@shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/@shadcn/components/ui/card";
import { CheckCircle, User, MapPin, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "../../store/useCart";
import OrderDetailsCard from "./_components/OrderDetailsCard";

function OrderSuccessPage() {
  const router = useRouter();
  const { items, getTotalPrice } = useCart();

  // Generate a mock order number (in real app, this would come from the order submission response)
  const [orderNumber] = useState(
    () => `ORD-${Date.now().toString().slice(-8)}`
  );

  // Mock customer and pickup details (in real app, this would come from form submission or user context)
  const customerDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+63 912 345 6789",
  };

  const pickupDetails = {
    date: "December 2, 2025",
    time: "2:00 PM - 3:00 PM",
    address: "Unit 2, 1234 Building, Etc Street, Makati City, Metro Manila",
    businessName: "1234 Business",
  };

  const handleContinueShopping = () => {
    router.push("/");
  };

  const handleViewOrders = () => {
    // TODO: Implement order history page
    router.push("/orders");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Placed Successfully!
          </h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your order. We&apos;ll prepare your groceries and
            notify you when they&apos;re ready for pickup.
          </p>
        </div>

        <div className="space-y-6">
          <OrderDetailsCard />

          {/* Customer Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Customer Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-sm text-muted-foreground">
                    Name:
                  </span>
                  <p>{customerDetails.name}</p>
                </div>
                <div>
                  <span className="font-medium text-sm text-muted-foreground">
                    Phone:
                  </span>
                  <p>{customerDetails.phone}</p>
                </div>
              </div>
              <div>
                <span className="font-medium text-sm text-muted-foreground">
                  Email:
                </span>
                <p>{customerDetails.email}</p>
              </div>
            </CardContent>
          </Card>

          {/* Pickup Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Pickup Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{pickupDetails.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {pickupDetails.time}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm text-muted-foreground">
                    Business:
                  </p>
                  <p>{pickupDetails.businessName}</p>
                </div>
              </div>

              <div>
                <p className="font-medium text-sm text-muted-foreground">
                  Pickup Address:
                </p>
                <p>{pickupDetails.address}</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Please bring a valid ID for pickup
                  verification. You&apos;ll receive an email notification when
                  your order is ready.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleViewOrders}
              className="flex-1"
              variant="default">
              View My Orders
            </Button>

            <Button
              onClick={handleContinueShopping}
              className="flex-1"
              variant="outline">
              Continue Shopping
            </Button>
          </div>

          {/* Contact Info */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center text-sm text-muted-foreground">
                <p>Need help with your order?</p>
                <p className="mt-1">
                  Contact us at{" "}
                  <span className="font-medium">support@groceries.com</span> or
                  call <span className="font-medium">+63 2 1234 5678</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default OrderSuccessPage;
