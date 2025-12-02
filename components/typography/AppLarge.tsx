import React from "react";

function AppLarge({ children }: { children: React.ReactNode }) {
  return <p className="text-xl">{children}</p>;
}

export default AppLarge;