import React from "react";
import Logo from "../assets/logo/logo.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function CartListItem() {
  return (
    <div className="px-3 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
      <div className="h-32 pt-2 flex">
        <img className="size-24" src={Logo} alt="logo" />
        <h1 className="">Item Name</h1>
      </div>
      <div className="flex justify-end items-center pb-3 pr-2">
        <AiOutlinePlus />
        1
        <AiOutlineMinus />
      </div>
    </div>
  );
}

export default CartListItem;
