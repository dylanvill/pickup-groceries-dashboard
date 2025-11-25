import React from "react";

function Large({ children }: { children: React.ReactNode }) {
  return <p className="text-xl">{children}</p>;
}

export default Large;
