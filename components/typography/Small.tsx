import React from "react";

interface SmallProps {
  children: React.ReactNode;
  className?: string;
}

function Small({ children, className }: SmallProps) {
  return <p className={`text-sm font-regular ${className}`}>{children}</p>;
}

export default Small;
