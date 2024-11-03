import React from "react";
import {
  openPaymentOptionsModal,
  closePaymentOptionsModal,
} from "../modals/PaymentOptionsModal";

export default function PaymentOptions() {
  return (
    <div className="text-base xl:text-xl">
      <div
        onMouseOver={() => openPaymentOptionsModal("payment-options-modal")}
        onMouseOut={() => closePaymentOptionsModal("payment-options-modal")}
        className="cursor-pointer"
      >
        Payment Options
      </div>
    </div>
  );
}
