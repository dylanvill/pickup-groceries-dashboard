import React from "react";

function Small({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-regular">{children}</p>;
}

export default Small;
