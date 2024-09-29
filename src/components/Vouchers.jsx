import React from "react";

export default function Vouchers({ className }) {
  return (
    <div
      id="vouchers"
      className={"text-base xl:text-xl" + (className ? " " + className : "")}
    >
      <div className="px-2">Vouchers</div>
      <div className="px-2">Payment Options</div>
    </div>
  );
}
