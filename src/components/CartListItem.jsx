import React, { useState } from "react";
import Logo from "../assets/logo/logo.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function CartListItem() {
  const [count, setCount] = useState(1);
  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  return (
    <div className="px-3 shadow-[0_5px_15px_rgba(0,0,0,0.3)] group/remove">
      <div className="py-4 pt-2 flex">
        <img className="size-24" src={Logo} alt="logo" />
        <div className="px-2">
          <h1 className="">Item Name</h1>
          <p className="line-clamp-2">
            description Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Possimus, voluptas?
          </p>
        </div>
      </div>

      <div className="flex justify-end items-center pb-6 pr-2 cursor-pointer space-x-2 ">
        <button className="absolute ml-5 text-sm hiddens h-0 left-0 bg-ct-dark-green-9DC88D text-white font-bold px-2 rounded-full transition-all duration-400 group-hover/remove:block group-hover/remove:h-7 ">
          Remove
        </button>
        <button disabled={count < 2}>
          <AiOutlineMinus onClick={decreaseHandler} />
        </button>
        <span>{count}</span>
        <AiOutlinePlus onClick={increaseHandler} />
      </div>
    </div>
  );
}

export default CartListItem;
