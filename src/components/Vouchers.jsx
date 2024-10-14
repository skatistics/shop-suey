import React from "react";
import {
  openPaymentOptionsModal,
  closePaymentOptionsModal,
} from "./modals/PaymentOptionsModal";
import PaymentOptionsModal from "./modals/PaymentOptionsModal";

export default function Vouchers({ className }) {
  return (
    <div
      id="vouchers"
      className={"text-base xl:text-xl" + (className ? " " + className : "")}
    >
      <div className="px-2">Vouchers</div>
      <div className="px-2">
        <div
          onMouseOver={() => openPaymentOptionsModal("payment-options-modal")}
          onMouseOut={() => closePaymentOptionsModal("payment-options-modal")}
        >
          Payment Options
          <PaymentOptionsModal />
        </div>
      </div>
    </div>
  );
}
