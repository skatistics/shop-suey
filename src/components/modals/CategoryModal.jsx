import { Modal } from "./CustomModal";

export function toggleCategoryModal() {
  const categoryModal = document.getElementById("category-modal");
  const hidden = categoryModal.classList.contains("hidden");
  if (hidden) {
    openModal("category-modal");
  } else {
    hideModal("category-modal");
  }
}

function CategoryModal() {
  return (
    <Modal className={"top[100px] left-0"} id="category-modal">
      <div>
        <a>Category</a>
        <a>Category</a>
        <a>Category</a>
        <a>Category</a>
        <a>Category</a>
        <a>Category</a>
        <a>Category</a>
        <a>Category</a>
      </div>
    </Modal>
  );
}

export default CategoryModal;
