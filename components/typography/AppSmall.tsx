import React from "react";

interface AppSmallProps {
  children: React.ReactNode;
  className?: string;
}

function AppSmall({ children, className }: AppSmallProps) {
  return <p className={`text-sm font-regular ${className}`}>{children}</p>;
}

export default AppSmall;
