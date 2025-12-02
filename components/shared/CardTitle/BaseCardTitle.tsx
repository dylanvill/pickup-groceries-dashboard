import React from "react";
import { CardTitle } from "../../../@shadcn/components/ui/card";
import { LucideIcon } from "lucide-react";

export interface BaseCardTitleProps {
  icon: LucideIcon;
  title: string;
}

function BaseCardTitle({ icon, title }: BaseCardTitleProps) {
  const HeaderIcon = icon;

  return (
    <CardTitle className="flex items-center gap-2">
      <HeaderIcon className="w-5 h-5" />
      {title}
    </CardTitle>
  );
}

export default BaseCardTitle;
