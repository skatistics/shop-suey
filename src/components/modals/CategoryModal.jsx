import { Modal, openModal, hideModal } from "./CustomModal";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";
import Categories from "../Categories";

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
      <Modal
        className={
          "w-full sm:size-[200px] top-[80px] z-10 border-2 border-ct-080D08 sm:border-none"
        }
        id="category-modal"
      >
        <div
          id="left-section"
          className={
            "bg-ct-F2F7F2 text-ct-191819 font-medium dark:bg-ct-222824 dark:text-ct-F2F7F2 space-y-2 py-2 px-2 w-full flex flex-wrap justify-center items-center xl:block xl:rounded-xl transition-all duration-300 sm:ml-5 sm:mr-3"
          }
        >
          <div className="text-2xl text-center">Categories</div>
          <div className="hidden xl:block">
            <hr className="border-ct-black-19191A dark:border-ct-white-FEFCFF" />
          </div>
          <div className="flex flex-wrap justify-center items-center xl:block">
            <Categories
              categories={categories}
              onClick={closeCategoryModal}
              className={"px-2 hover:underline"}
            />

            <div className="py-2 hidden xl:block">
              <hr className="border-ct-black-19191A dark:border-ct-white-FEFCFF" />
            </div>

            <div className="px-2">
              <a
                href="#banner-section"
                onClick={closeCategoryModal}
                className="hover:underline"
              >
                Featured
              </a>
            </div>
            <div className="px-2">
              <a
                href="#discounts"
                onClick={closeCategoryModal}
                className="hover:underline"
              >
                Discounts
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CategoryModal;
