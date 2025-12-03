import React from "react";

function AppStrong({ children }: { children: React.ReactNode }) {
  return <strong className="font-bold">{children}</strong>;
}

export default AppStrong;
