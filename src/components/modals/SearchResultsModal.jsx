import { useContext } from "react";
import { Modal, hideModal, openModal } from "./CustomModal";
import { ProductContext } from "../contexts/ProductContextProvider";

export function openSearchResultsModal(input) {
  openModal("search-results-modal");
}

export function closeSearchResultsModal() {
  hideModal("search-results-modal");
}

export default function SearchResultsModal() {
  const searchedProducts = useContext(ProductContext).searchedProducts;
  return (
    <div className={searchedProducts.length > 0 ? "" : "hidden"}>
      <Modal
        id="search-results-modal"
        className={
          "md:w-[400px] top-12 left-1/2 transform -translate-x-1/2 rounded bg-red-300 h-[400px] overflow-auto"
        }
      >
        <div>
          {searchedProducts.map((element) => {
            return (
              <div>
                <div className="border-b-2 border-black">{element.title}</div>
                <div className="border-b-2 border-black">
                  {element.category}
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
