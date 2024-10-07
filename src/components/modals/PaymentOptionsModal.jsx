import React from "react";
import { Modal, openModal, hideModal, DisabledBGModal } from "./CustomModal";
import { IoClose } from "react-icons/io5";
import {
  Billease,
  BPI,
  Cebuana,
  Gcash,
  GrabPay,
  Lazada,
  Mastercard,
  Palawan,
  Maya,
  Paypal,
  SevenEleven,
  Shopee,
  Visa,
} from "../assets/img/payment-options/payment-options.js";

export function openPaymentOptionsModal() {
  openModal("payment-options-modal");
}

function PaymentOptionsModal() {
  const [modalState, setModalState] = useState("payment-options");

  function changeModalState(input) {
    setModalState(input);
  }

  function closePaymentOptionsModal() {
    hideModal("payment-options-modal");
    setModalState("payment-options");
  }

  return (
    <DisabledBGModal>
      <div className="bg-ct-F2F7F2">
        <img src="Billease" alt="" />
      </div>
    </DisabledBGModal>
  );
}

export default PaymentOptionsModal;
