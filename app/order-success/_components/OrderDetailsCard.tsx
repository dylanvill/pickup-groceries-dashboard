import {
  Card,
  CardContent,
  CardHeader,
} from "../../../@shadcn/components/ui/card";
import CheckoutItem from "../../checkout/_components/CheckoutItem";
import { formatCurrency } from "../../../utils/formatCurrency";
import OrderDetailsCardTitle from "../../../components/shared/CardTitle/OrderDetailsCardTitle";
import AppSmall from "../../../components/typography/AppSmall";
import AppLarge from "../../../components/typography/AppLarge";
import AppStrong from "../../../components/typography/AppStrong";

function OrderDetailsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <OrderDetailsCardTitle />
          <AppSmall className="text-muted-foreground font-mono">
            Order Number: 00001
          </AppSmall>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <CheckoutItem
            product={{
              id: 1,
              name: "Fresh Organic Apples",
              description:
                "Crisp and sweet organic apples, perfect for snacking or baking. Grown locally without pesticides.",
              price: 149.5,
              imageUrl:
                "https://images.unsplash.com/photo-1569870499705-504209102861?w=400&h=400&fit=crop",
              categories: ["fruits", "organic", "fresh"],
            }}
            quantity={2}
          />
        </div>

        <div className="flex justify-between items-center mt-6">
          <AppLarge>
            <AppStrong>Total:</AppStrong>
          </AppLarge>
          <AppLarge>
            <AppStrong>{formatCurrency(1000.25)}</AppStrong>
          </AppLarge>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderDetailsCard;
