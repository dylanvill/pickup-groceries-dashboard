import React from "react";

function Body({ children }: { children: React.ReactNode }) {
  return <p className="text-base text-dark">{children}</p>;
}

export default Body;
