import React from "react";
import Vouchers from "../Vouchers";

export default function RightSection() {
  return (
    <div
      id="right-section"
      className={
        "bg-gray-400 dark:bg-gray-600 space-y-2 py-2 px-2 w-full xl:mr-5 xl:ml-3 flex flex-wrap justify-center items-center xl:block xl:rounded-xl"
      }
    >
      <Vouchers className="flex flex-wrap justify-center items-center xl:block" />
    </div>
  );
}
