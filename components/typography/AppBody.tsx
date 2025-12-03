import React from "react";
import { cn } from "@shadcn/lib/utils";

interface AppBodyProps {
  children: React.ReactNode;
  className?: string;
}

function AppBody({ children, className }: AppBodyProps) {
  return <p className={cn("text-base text-dark", className)}>{children}</p>;
}

export default AppBody;