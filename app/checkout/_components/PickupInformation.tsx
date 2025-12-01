import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../@shadcn/components/ui/card";
import { Label } from "../../../@shadcn/components/ui/label";
import { Input } from "../../../@shadcn/components/ui/input";

function PickupInformation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pickup Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Pickup Address</Label>
          <p className="text-sm text-muted-foreground mt-1">
            Unit 2, 1234 Building, Etc Street, Makati City, Metro Manila
          </p>
        </div>
        <div>
          <Label>Business Name</Label>
          <p className="text-sm text-muted-foreground mt-1">1234 Business</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="pickupDate">Pickup Date</Label>
            <Input id="pickupDate" type="date" />
          </div>
          <div>
            <Label htmlFor="pickupTime">Pickup Time</Label>
            <Input id="pickupTime" type="time" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Note: This is an estimated pickup time. It&apos;s okay if you
          don&apos;t arrive exactly on time - this serves as a general estimate
          for planning purposes.
        </p>
        <div>
          <Label>Location Preview</Label>
          <div className="mt-2 w-full h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-sm font-medium">Google Maps Preview</div>
              <div className="text-xs mt-1">Map will be embedded here</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PickupInformation;
