import React from "react";
import Vouchers from "../Vouchers";
import Google from "../../assets/logo/google-play.png";
import Apple from "../../assets/logo/apple-store.png";

export default function RightSection() {
  return (
    <div
      id="right-section"
      className={
        "bg-ct-F2F7F2 text-ct-191819 font-medium dark:bg-ct-222824 dark:text-ct-F2F7F2 space-y-2 py-2 px-2 w-full xl:mr-5 xl:ml-3 flex flex-wrap justify-center items-center xl:block xl:rounded-xl transition-all duration-300"
      }
    >
      <Vouchers className="flex flex-wrap justify-center items-center xl:block mb-6" />
      <div>
        <img src={Google} alt="" className="mb-2 mt-2" />
        <img src={Apple} alt="" />
      </div>
    </div>
  );
}
