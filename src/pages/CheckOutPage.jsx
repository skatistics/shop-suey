import React, { useContext } from "react";

import { CartContext } from "../components/contexts/CartContextProvider";
import { ProductContext } from "../components/contexts/ProductContextProvider";

import {
  Gcash,
  Mastercard,
  Maya,
  Paypal,
  Visa,
} from "../assets/img/payment-options/payment-options";

function CheckOutPage() {
  const totalAmount = useContext(CartContext).totalAmount;
  const cartList = useContext(CartContext).cartList;
  const formatPHP = useContext(ProductContext).formatPHP;
  const totalPrice = totalAmount + 40;
  const checkOut = useContext(CartContext).checkOut;
  return (
    <>
      <div className="ml-44 mr-44 bg-orange-200">
        <div className="flex justify-center h-32 bg-yellow-50 m-1">
          <h1 className="  font-bold text-5xl pt-10">CheckOutPage</h1>
        </div>
        <div className="flex">
          <div className="w-2/3">
            <div className=" h-16 border-2 font-bold text-xl border-black bg-blue-300 m-1">
              Billing and Shopping Address:
            </div>

            <div className="bg-slate-500 m-1 border-1 font-bold text-xl border-black">
              Payment Method:
              <div className="h-16 w-auto m-3 border-2 border-black">
                <input type="radio" name="paymentMethod" /> Cash on Delivery 🛒
              </div>
              <div className="h-16 w-auto border-2 border-black m-3">
                <input type="radio" name="paymentMethod" /> Dragon Payment 🔥
                <div className="flex pl-48 space-x-4 items-center py-2">
                  <img src={Gcash} alt="" className="w-16 h-7" />
                  <img src={Maya} alt="" className="w-14 h-5" />
                </div>
              </div>
              <div className="h-16 w-auto border-2 border-black m-3">
                <input type="radio" name="paymentMethod" /> Credit or Debit Card
                💳
                <div className="h-5 pl-56 flex space-x-2 justfiy-center items-center">
                  <div className="border-1 border-black">
                    <img src={Visa} alt="" className="size-12 flex" />
                  </div>
                  <div className="border-1 border-black w-9">
                    <img
                      src={Mastercard}
                      alt=""
                      className="w-[48px] h-[25px]"
                    />
                  </div>
                  <div className="border-1 border-black w-9">
                    <img src={Paypal} alt="" className="size-10" />
                  </div>
                </div>
              </div>
              <div className="h-64 border-2 border-black text-2xl m-2">
                Notes:
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-slate-500 border-b-2 border-black"
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 h-auto mb-2 mt-1 mr-1 bg-slate-500 border-2 border-black relative -z-0">
            <div className="border-b-2 border-black m-3">
              <div className="flex">
                <div className="m-2 font-semibold text-2xl  pl-2 w-[50%]">
                  Cart total
                </div>
                <div className="w-[50%] text-right font-semibold text-2xl pt-2 pr-2">
                  {formatPHP(totalAmount)}
                </div>
              </div>
              <div className="flex">
                <div className="m-2 font-semibold text-2xl  pl-2 w-[50%]">
                  Shipping Fee
                </div>
                <div className="w-[50%] text-right font-semibold text-2xl pt-2 pr-2">
                  ₱40.00
                </div>
              </div>
              <div className="flex border-t-2 border-black">
                <div className="m-2 font-bold text-2xl pt-2 pl-2 w-[50%] ">
                  Total Price
                </div>
                <div className="w-[50%] text-right font-bold text-2xl pt-2 pr-2 ">
                  {formatPHP(totalPrice)}
                </div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 m-6 font-bold">
              <button
                onClick={() => checkOut()}
                className="px-2 py-1 border-2 border-black  rounded-md bg-ct-base-67A770 text-ct-F2F7F2"
              >
                Proceed
              </button>
            </div>
            <div className="h-96 overflow-hidden hover:overflow-y-auto hover:scrollbar-thin hover:scrollbar-webkit">
              {!cartList.length > 0 && (
                <div className="text-ct-191819 font-medium text-center pt-8">
                  Cart is Empty 😕 Buy something!
                </div>
              )}
              {cartList.map((item) => {
                return (
                  <div className="px-3 shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] group/remove">
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
                        <p className="line-clamp-2 font-medium">
                          {item.description}
                        </p>
                        <p className="flex font-bold p-4">
                          {formatPHP(item.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
