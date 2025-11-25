import React from "react";

function Italic({ children }: { children: React.ReactNode }) {
  return <em className="font-italic">{children}</em>;
}

export default Italic;
