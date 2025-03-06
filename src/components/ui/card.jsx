import React from "react";

export function Card({ children }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md bg-white">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}

export default Card;
