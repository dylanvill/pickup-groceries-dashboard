import React from "react";
import { cn } from "@shadcn/lib/utils";

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

function Body({ children, className }: BodyProps) {
  return <p className={cn("text-sm text-dark", className)}>{children}</p>;
}

export default Body;
