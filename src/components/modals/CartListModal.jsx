import { useContext, useEffect } from "react";
import CartListItem from "../CartListItem";
import { Modal, openModal, hideModal } from "./CustomModal";
import { CartContext } from "../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContextProvider";

export function toggleCartList() {
  const cartListModal = document.getElementById("cartlist-modal");
  const hidden = cartListModal.classList.contains("hidden");
  if (hidden) {
    openModal("cartlist-modal");
    setTimeout(() => {
      animateOpen();
    }, 1);
  } else {
    animateClose();
    setTimeout(() => {
      hideModal("cartlist-modal");
    }, 500);
  }
}

function animateClose() {
  const cartListModal = document.getElementById("cartlist-modal");
  cartListModal.classList.remove("scale-x-100");
  cartListModal.classList.add("scale-x-0");
}
function animateOpen() {
  const cartListModal = document.getElementById("cartlist-modal");
  cartListModal.classList.remove("scale-x-0");
  cartListModal.classList.add("scale-x-100");
}

function CartListModal() {
  const cartList = useContext(CartContext).cartList;
  const totalAmount = useContext(CartContext).totalAmount;
  const navigate = useNavigate();
  const formatPHP = useContext(ProductContext).formatPHP;

  return (
    <div>
      <Modal
        id="cartlist-modal"
        className={
          "h-[calc(100%-80px)] w-full sm:w-72 origin-right scale-x-0 right-0 transition-all duration-500 top-[80px] flex-col rounded-tl-sm  bg-ct-F2F7F2 text-ct-0B0D0C dark:text-ct-F2F7F2 dark:bg-ct-45634F shadow-lg z-10"
        }
      >
        <div className="h-[calc(100%-64px)] overflow-hidden hover:overflow-y-auto hover:scrollbar-thin hover:scrollbar-webkit rounded-tl-md">
          {!cartList.length > 0 && (
            <div className="text-ct-191819 dark:text-ct-F2F7F2 font-medium text-center pt-8">
              Cart is Empty 😕 Buy something!
            </div>
          )}
          {cartList.map((item) => {
            return <CartListItem key={item.id} item={item} />;
          })}
        </div>
        <div className="h-16">
          <div className="bg-yellow-100 text-ct-191819 font-medium">
            Total: {formatPHP(totalAmount)}
          </div>
          <div className="w-full  bg-ct-5D985E text-center">
            <button
              onClick={() => navigate("/checkout")}
              className=" text-ct-F2F7F2 bg-ct-5D985E px-4 py-2 hover:underline"
            >
              Check Out
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CartListModal;
