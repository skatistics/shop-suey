import React, { useState } from "react";
import Vouchers from "./Vouchers";
import Google from "../../assets/logo/google-play.png";
import Apple from "../../assets/logo/apple-store.png";
import SectionQR from "./SectionQR";
import PaymentOptions from "./PaymentOptions";
import PaymentOptionsModal from "../modals/PaymentOptionsModal";

export default function RightSection() {
  const [showDownloads, setShowDownloads] = useState(false);

  function toggleDownloads() {
    setShowDownloads(!showDownloads);
  }
  return (
    <div
      id="right-section"
      className={
        "bg-ct-F2F7F2 text-ct-191819 font-medium dark:bg-ct-222824 dark:text-ct-F2F7F2 space-y-2 py-2 px-2 w-full xl:mr-5 xl:ml-3 xl:rounded-xl transition-all duration-300"
      }
    >
      <div className="flex flex-wrap justify-center items-center xl:block xl:mb-2 gap-4 px-2">
        <Vouchers />
        <PaymentOptions />
        <div
          className={
            "text-base xl:text-xl xl:hidden cursor-pointer" +
            (showDownloads ? " text-ct-1F331F dark:text-ct-base-67A770" : "")
          }
          onClick={toggleDownloads}
        >
          Try Our App
        </div>
      </div>
      <PaymentOptionsModal />
      <div className={showDownloads ? "block" : "hidden xl:block"}>
        <div className="flex gap-2 justify-center items-center xl:block">
          <div className="space-y-2 xl:mb-2">
            <img src={Google} alt="" className="h-12 xl:h-auto" />
            <img src={Apple} alt="" className="h-12 xl:h-auto" />
          </div>
          <div className="max-w-[100px] xl:max-w-[240px] xl:p-2">
            <SectionQR />
          </div>
        </div>
      </div>
    </div>
  );
}
