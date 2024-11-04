import { useCartContext } from "../components/contexts/CartContextProvider";
import { useProductContext } from "../components/contexts/ProductContextProvider";

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
} from "../assets/img/payment-options/payment-options.js";

function CheckOutPage() {
  const { formatPHP } = useProductContext();
  const { totalAmount, cartList, checkOut } = useCartContext();
  const totalPrice = totalAmount + 40;
  return (
    <>
      {/* xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px", */}
      <div className="w-full text-ct-0B0D0C dark:text-ct-F2F7F2 dark:bg-ct-45634F bg-ct-F2F7F p-4">
        <div className="block sm:flex">
          <div className="w-full sm:w-2/3">
            <div className=" h-16 font-bold text-xs sm:text-sm md:text-md lg:text-lg bg-ct-F2F7F2 dark:bg-ct-222824  rounded-xl my-1 mr-1 p-2">
              Billing and Shopping Address:
            </div>

            <div className="rounded-xl font-bold text-xs sm:text-sm md:text-md lg:text-lg bg-ct-F2F7F2 dark:bg-ct-222824 mr-1 p-2">
              Payment Method:
              <div className="min-h-20 w-auto border-2 rounded-xl border-slate-500 m-3 p-2">
                <input type="radio" name="paymentMethod" /> Cash on Delivery 🛒
              </div>
              <div className="min-h-20 w-auto border-2 rounded-xl border-slate-500 m-3 p-2">
                <input type="radio" name="paymentMethod" /> Dragon Payment 🔥
                <div className="flex flex-wrap justify-center items-center">
                  <img
                    src={Billease}
                    alt="Billease"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={BPI}
                    alt="BPI"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={Cebuana}
                    alt="Cebuana"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={Gcash}
                    alt="Gcash"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={GrabPay}
                    alt="GrabPay"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={Lazada}
                    alt="Lazada"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={Palawan}
                    alt="Palawan"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={Maya}
                    alt="Maya"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={Paypal}
                    alt="Paypal"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={SevenEleven}
                    alt="SevenEleven"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={Shopee}
                    alt="Shopee"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                </div>
              </div>
              <div className="min-h-20 w-auto border-2 rounded-xl border-slate-500 m-3 p-2">
                <input type="radio" name="paymentMethod" /> Credit or Debit Card
                💳
                <div className="flex flex-wrap justify-center items-center">
                  <img
                    src={Mastercard}
                    alt="Mastercard"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={BPI}
                    alt="BPI"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                  <img
                    src={Visa}
                    alt="Visa"
                    className="size-[20px] md:size-[30px] lg:size-[40px] mx-2"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-xl font-bold text-xs sm:text-sm md:text-md lg:text-lg bg-ct-F2F7F2 dark:bg-ct-222824 mr-1 p-2 h-60 mt-1">
              <div className="h-full">
                <textarea
                  placeholder="Notes:"
                  className="w-full h-full bg-ct-F2F7F2 dark:bg-ct-222824 resize-none"
                  id=""
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/3 h-auto mt-1 bg-ct-F2F7F2 dark:bg-ct-222824  relative -z-0 rounded-xl p-2">
            <div className="m-3 text-xs sm:text-sm md:text-md lg:text-lg">
              <div className="justify-between m-2 font-semibold sm:flex">
                <div>Cart total: </div>
                <div className="text-end">{formatPHP(totalAmount)}</div>
              </div>
              <div className="justify-between m-2 font-semibold sm:flex">
                <div> Shipping Fee:</div>
                <div className="text-end"> ₱40.00</div>
              </div>
              <div className="justify-between border-y-2 py-2 border-black m-2 font-bold sm:flex">
                <div>Total Price:</div>
                <div className="text-end">{formatPHP(totalPrice)}</div>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 m-6 text-xs sm:text-sm md:text-md font-bold">
              <button
                onClick={() => checkOut()}
                className={
                  "px-2 py-1 border-2 border-black  rounded-md bg-ct-base-67A770 text-ct-F2F7F2" +
                  (cartList.length > 0 ? " " : " hidden")
                }
              >
                Proceed
              </button>
            </div>
            <div className="h-[480px] overflow-hidden hover:overflow-y-auto hover:scrollbar-thin hover:scrollbar-webkit">
              {!cartList.length > 0 && (
                <div className="text-ct-191819 font-medium text-center pt-8 text-sm sm:text-md md:text-lg">
                  Cart is Empty 😕 Buy something!
                </div>
              )}
              {cartList.map((item) => {
                return (
                  <div className="px-3 shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] group/remove ">
                    <div className="py-4 pt-2 flex">
                      <img
                        className="size-16 sm:size-20 md:size-24"
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
                        <p className="flex font-bold p-2 text-sm md:md">
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
