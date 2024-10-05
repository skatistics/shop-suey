import { useContext, useEffect, useState, useRef } from "react";
import { Modal, hideModal, openModal } from "./CustomModal";
import { ProductContext } from "../contexts/ProductContextProvider";
import { SystemPreferencesContext } from "../contexts/SystemPreferencesContextProvider";
import SearchList from "../SearchList";

export function openSearchResultsModal(input) {
  openModal("search-results-modal");
}

export function closeSearchResultsModal() {
  hideModal("search-results-modal");
}

export default function SearchResultsModal() {
  const searchedProducts = useContext(ProductContext).searchedProducts;
  const isTouch = useContext(SystemPreferencesContext).isTouch;
  const [mouseDown, setMouseDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const sliderRef = useRef(null);

  const startDragging = (e) => {
    setStartY(e.pageY - sliderRef.current.offsetTop);
    setScrollTop(sliderRef.current.scrollTop);
    setMouseDown(true);
    console.log(mouseDown);
    console.log("dragging");
  };

  const stopDragging = (e) => {
    console.log("dragging stopped");
    setMouseDown(false);
    console.log(mouseDown);
  };

  const moveInDrag = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const y = e.pageY - sliderRef.current.offsetTop;
    const scroll = y - startY;
    sliderRef.current.scrollTop = scrollTop - scroll;
    console.log("moving");
  };

  return (
    <div className={searchedProducts.length > 0 ? "" : "hidden"}>
      <Modal id="search-results-modal" className={"md:w-[400px] h-[400px]"}>
        {isTouch ? (
          <SearchList ref={sliderRef} />
        ) : (
          <SearchList
            ref={sliderRef}
            onMouseDown={startDragging}
            onMouseMove={moveInDrag}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
          />
        )}
      </Modal>
    </div>
  );
}
