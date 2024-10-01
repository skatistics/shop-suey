import React from "react";
import Logo from "../assets/logo/logo.png";
import { GrCreditCard } from "react-icons/gr";
import Visa from "../assets/294654_visa_icon.svg";
import Mastercard from "../assets/mastercard.svg";
import Paypal from "../assets/paypal.svg";
import Maya from "../assets/Maya.svg";
import Gcash from "../assets/gcash.svg";

function CheckOutPage() {
  return (
    <>
      <div className="ml-44 mr-44 bg-orange-200">
        <div className="flex justify-center h-32 bg-yellow-50 m-1">
          <h1 className=" bg-yellow-100 font-bold text-5xl pt-10">
            CheckOutPage
          </h1>
        </div>
        <div className="flex">
          <div className="w-2/3">
            <div className=" h-16 border-2 font-bold text-xl border-black bg-blue-300 m-1">
              Billing and Shopping Address:
            </div>

            <div className="bg-slate-500 m-1 border-1 font-bold text-xl border-black">
              Payment Method:
              <div className="h-16 w-auto bg-red-300 m-3">
                <input type="radio" /> Cash on Delivery 🛒
              </div>
              <div className="h-16 w-auto bg-red-200 m-3">
                <input type="radio" /> Dragon Payment 🔥
                <div className="flex pl-48 bg-slate-200 space-x-4 items-center py-2">
                  <img src={Gcash} alt="" className="w-16 h-7" />
                  <img src={Maya} alt="" className="w-14 h-5" />
                </div>
              </div>
              <input type="radio" /> Credit or Debit Card 💳
              <div className="h-5 pl-56 flex space-x-2 bg-white justfiy-center items-center">
                <div className="border-1 border-black">
                  <img src={Visa} alt="" className="size-12 flex" />
                </div>
                <div className="border-1 border-black w-9">
                  <img src={Mastercard} alt="" className="w-[48px] h-[25px]" />
                </div>
                <div className="border-1 border-black w-9">
                  <img src={Paypal} alt="" className="size-10" />
                </div>
              </div>
              <div className="h-64 border-2 border-black text-2xl m-2">
                Notes:
              </div>
            </div>
          </div>
          <div className="w-1/3 h-auto m-1 bg-slate-500 border-2 border-black">
            <div className="border-b-2 border-black m-3">
              <div className="m-2 font-semibold text-2xl pt-2 pl-2">
                Cart total
              </div>
              <div className="m-2 font-semibold text-2xl pt-2 pl-2">
                Shipping Fee
              </div>
              <div className="m-2 font-bold text-2xl pt-2 pl-2">
                Total Price
              </div>
            </div>
            <div className="flex">
              <div className="w-2/3 m-2 font-bold text-2xl pl-2 bg-slate-400">
                Cart Item
              </div>

              <div className="w-1/3 bg-gray-600 text-right m-2 pr-3 font-semibold text-xl">
                Price:
              </div>
            </div>
            <div className="flex">
              <div className="w-2/3 m-2 font-bold text-2xl pl-2 bg-slate-400">
                Cart Item
              </div>

              <div className="w-1/3 bg-gray-600 text-right m-2 pr-3 font-semibold text-xl">
                Price:
              </div>
            </div>
            <div className="flex">
              <div className="w-2/3 m-2 font-bold text-2xl pl-2 bg-slate-400">
                Cart Item
              </div>

              <div className="w-1/3 bg-gray-600 text-right m-2 pr-3 font-semibold text-xl">
                Price:
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
