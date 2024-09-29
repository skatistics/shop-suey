import React from "react";

export default function Vouchers({ className }) {
  return (
    <div
      id="vouchers"
      className={
        " hidden bg-blue-400 w-56" + (className ? " " + className : "")
      }
    >
      <div className="text-3xl">Brainded</div>
      <div className="text-3xl">Brainded</div>
    </div>
  );
}
