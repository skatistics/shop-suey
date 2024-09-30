import { useContext } from "react";
import CartListItem from "../CartListItem";
import { Modal, openModal, hideModal } from "./CustomModal";
import { CartContext } from "../contexts/CartContextProvider";

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

  return (
    <Modal
      id="cartlist-modal"
      className={
        "h-full w-72 origin-right scale-x-0 right-0 overflow-hidden transition-all duration-500 top-[80px] bg-slate-400 dark:bg-gray-600 rounded-s-xl hover:overflow-y-auto hover:scrollbar-thin hover:scrollbar-webkit"
      }
    >
      {!cartList.length > 0 && <div>Cart List is Empty!</div>}
      {cartList.map((item) => {
        return <CartListItem key={item.id} item={item} />;
      })}
    </Modal>
  );
}

export default CartListModal;
