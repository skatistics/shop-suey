import { useContext } from "react";
import CartListItem from "../CartListItem";
import { Modal, openModal, hideModal } from "./CustomModal";
import { ShopContext } from "../../App";

export function toggleCartList() {
  const cartlistModal = document.getElementById("cartlist-modal");

  const hidden = cartlistModal.classList.contains("hidden");
  if (hidden) {
    openModal("cartlist-modal");
  } else {
    hideModal("cartlist-modal");
  }
}

function CartList() {
  const cartlist = useContext(ShopContext).cartlist;

  return (
    <Modal
      id="cartlist-modal"
      className="h-[600px] w-72 right-7 overflow-hidden hover:overflow-y-scroll transition-all hover:scrollbar-thin hover:scrollbar-webkit top-[110px] hover:w-[303px] hover:right-[13px] bg-slate-400 dark:bg-gray-600 rounded-xl"
    >
      {cartlist.map((item) => {
        return <CartListItem key={item.id} item={item} />;
      })}
    </Modal>
  );
}

export default CartList;
