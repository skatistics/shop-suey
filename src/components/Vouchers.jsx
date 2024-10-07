import React from "react";
import { openPaymentOptionsModal } from "./modals/PaymentOptionsModal";

export default function Vouchers({ className }) {
  return (
    <div
      id="vouchers"
      className={"text-base xl:text-xl" + (className ? " " + className : "")}
    >
      <div className="px-2">Vouchers</div>
      <div className="px-2">
        <button onClick={() => openPaymentOptionsModal()}>
          Payment Options
        </button>
      </div>
    </div>
  );
}
