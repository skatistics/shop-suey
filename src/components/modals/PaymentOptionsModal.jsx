import React from "react";
import { Modal, openModal, hideModal } from "./CustomModal";
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
export function closePaymentOptionsModal() {
  hideModal("payment-options-modal");
}

function PaymentOptionsModal() {
  return (
    <div className="relative flex justify-center">
      <Modal
        id="payment-options-modal"
        className={"absolute top-0 cursor-default"}
      >
        <div className="bg-ct-A6C9A7 dark:bg-ct-2F4C2F flex justify-center items-center ">
          <div className="flex flex-wrap justify-center items-center py-2">
            <img src={Billease} alt="Billease" className="size-[40px] mx-2" />
            <img src={BPI} alt="BPI" className="size-[40px] mx-2" />
            <img src={Cebuana} alt="Cebuana" className="size-[40px] mx-2" />
            <img src={Gcash} alt="Gcash" className="size-[40px] mx-2" />
            <img src={GrabPay} alt="GrabPay" className="size-[40px] mx-2" />
            <img src={Lazada} alt="Lazada" className="size-[40px] mx-2" />
            <img
              src={Mastercard}
              alt="Mastercard"
              className="size-[40px] mx-2"
            />
            <img src={Palawan} alt="Palawan" className="size-[40px] mx-2" />
            <img src={Maya} alt="Maya" className="size-[40px] mx-2" />
            <img src={Paypal} alt="Paypal" className="size-[40px] mx-2" />
            <img
              src={SevenEleven}
              alt="SevenEleven"
              className="size-[40px] mx-2"
            />
            <img src={Shopee} alt="Shopee" className="size-[40px] mx-2" />
            <img src={Visa} alt="Visa" className="size-[40px] mx-2" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PaymentOptionsModal;
