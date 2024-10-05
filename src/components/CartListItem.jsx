import React, { useState, useContext } from "react";
import Logo from "../assets/logo/logo.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartContext } from "./contexts/CartContextProvider";
import { Link } from "react-router-dom";
import { ProductContext } from "./contexts/ProductContextProvider";

function CartListItem({ item }) {
  const removeFromCart = useContext(CartContext).removeFromCart;
  const increaseItemCount = useContext(CartContext).increaseItemCount;
  const decreaseItemCount = useContext(CartContext).decreaseItemCount;
  const formatPHP = useContext(ProductContext).formatPHP;

  return (
    <div className="px-3   shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] group/remove">
      <Link to={`/products/${item.id}`}>
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
            {/* <h1 className="">{item.category}</h1> */}
            <p className="line-clamp-2 font-medium">{item.description}</p>
            <p className="flex font-bold p-4">{formatPHP(item.price)}</p>
          </div>
        </div>
      </Link>

      <div className="flex justify-end items-center ">
        <button
          onClick={() => removeFromCart(item.id)}
          className="absolute opacity-0 scale-y-0 left-0 bg-ct-5D985E text-ct-F2F7F2 ml-3 mb-4 px-2 py-1 font-bold rounded-xl transition-transform duration-[400ms] group-hover/remove:opacity-100 group-hover/remove:scale-y-100"
        >
          Remove
        </button>
        <div className="flex justify-center items-center pb-4 pr-2 space-x-2 font-medium">
          <button
            onClick={() => {
              decreaseItemCount(item.id);
            }}
            className={item.count < 2 ? "hidden" : ""}
          >
            <AiOutlineMinus />
          </button>
          <span>{item.count}</span>
          <button
            onClick={() => {
              increaseItemCount(item.id);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
