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
} from "../../assets/img/payment-options/payment-options.js";

export function openPaymentOptionsModal() {
  openModal("payment-options-modal");
}

function PaymentOptionsModal() {
  function closePaymentOptionsModal() {
    hideModal("payment-options-modal");
  }

  return (
    <DisabledBGModal
      id="payment-options-modal"
      className={
        "top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded p-5 bg-ct-45634F z-40"
      }
    >
      <button
        onClick={() => closePaymentOptionsModal()}
        className="absolute top-4 right-4 w-7 h-7 rounded text-2xl text-white bg-slate-600 flex justify-center items-center"
      >
        <IoClose />
      </button>
      {
        <div className="bg-ct-A6C9A7 flex justify-center items-center space-y-5">
          <div className="flex flex-wrap justify-center items-center space-x-5">
            <img src={Billease} alt="Billease" className="size-[40px]" />
            <img src={BPI} alt="BPI" className="size-[40px]" />
            <img src={Cebuana} alt="Cebuana" className="size-[40px]" />
            <img src={Gcash} alt="Gcash" className="size-[40px]" />
            <img src={GrabPay} alt="GrabPay" className="size-[40px]" />
            <img src={Lazada} alt="Lazada" className="size-[40px]" />
            <img src={Mastercard} alt="Mastercard" className="size-[40px]" />
            <img src={Palawan} alt="Palawan" className="size-[40px]" />
            <img src={Maya} alt="Maya" className="size-[40px]" />
            <img src={Paypal} alt="Paypal" className="size-[40px]" />
            <img src={SevenEleven} alt="SevenEleven" className="size-[40px]" />
            <img src={Shopee} alt="Shopee" className="size-[40px]" />
            <img src={Visa} alt="Visa" className="size-[40px]" />
          </div>
        </div>
      }
    </DisabledBGModal>
  );
}

export default PaymentOptionsModal;
