import React from "react";

function AppItalic({ children }: { children: React.ReactNode }) {
  return <em className="font-italic">{children}</em>;
}

export default AppItalic;
