import LeftSection from "../sections/LeftSection";
import { Modal, openModal, hideModal } from "./CustomModal";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";

export function toggleCategoryModal() {
  const categoryModal = document.getElementById("category-modal");
  const hidden = categoryModal.classList.contains("hidden");

  if (hidden) {
    openModal("category-modal");
  } else {
    hideModal("category-modal");
  }
}

export function closeCategoryModal() {
  hideModal("category-modal");
}

function CategoryModal() {
  const categories = useContext(ProductContext).categories;
  return (
    <div>
      <Modal className={"size-[200px] top-[100px]"} id="category-modal">
        <LeftSection categories={categories} />
      </Modal>
    </div>
  );
}

export default CategoryModal;
