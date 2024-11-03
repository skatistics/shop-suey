import React from "react";

export default function Vouchers({ className }) {
  return (
    <div
      id="vouchers"
      className={"text-base xl:text-xl" + (className ? " " + className : "")}
    >
      <div>Vouchers</div>
    </div>
  );
}
