import React from "react";

function ExtraSmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-xs font-normal ${className}`}>{children}</p>;
}

export default ExtraSmall;
