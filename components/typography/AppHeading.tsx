import React from "react";

export interface AppHeadingProps {
  children: React.ReactNode;
  className?: string;
  variant?: AppHeadingVariant;
}

export type AppHeadingVariant = "h1" | "h2" | "h3" | "h4";

const BASE_CLASSES = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-semibold",
};

function AppHeading({ variant = "h1", children, className = "" }: AppHeadingProps) {
  const Component = variant;
  const classes = `${BASE_CLASSES[variant]} ${className}`.trim();

  return <Component className={classes}>{children}</Component>;
}

export default AppHeading;
