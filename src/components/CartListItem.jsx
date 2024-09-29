import React, { useState, useContext } from "react";
import Logo from "../assets/logo/logo.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ShopContext } from "../App";

function CartListItem({ item }) {
  const [count, setCount] = useState(1);
  const removeItem = useContext(ShopContext).removeItem;
  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }

  return (
    <div className="px-3 shadow-[0_5px_15px_rgba(0,0,0,0.3)] group/remove">
      <div className="py-4 pt-2 flex">
        <img
          className="size-24"
          src={item.image}
          onError={(e) => {
            e.target.onError = null;
            e.target.src = Logo;
          }}
          alt="logo"
        />
        <div className="px-2">
          <h1 className="">{item.category}</h1>
          <p className="line-clamp-2">{item.description}</p>
        </div>
      </div>

      <div className="flex justify-end items-center pb-6 pr-2 cursor-pointer space-x-2 ">
        {/* dito */}
        <button
          onClick={() => removeItem(item.id)}
          className="absolute ml-5 text-sm opacity-0 scale-y-0 left-0 bg-ct-dark-green-9DC88D text-white font-bold px-2 rounded-full transition-transform duration-[400ms] group-hover/remove:opacity-100 group-hover/remove:scale-y-100"
        >
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
