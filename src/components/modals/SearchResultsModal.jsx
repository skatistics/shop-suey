import { useContext, useEffect, useState, useRef } from "react";
import { Modal, hideModal, openModal } from "./CustomModal";
import { ProductContext } from "../contexts/ProductContextProvider";
import { FaShoppingBag } from "react-icons/fa";
import { SystemPreferencesContext } from "../contexts/SystemPreferencesContextProvider";
import { useNavigate } from "react-router-dom";

export function openSearchResultsModal(input) {
  openModal("search-results-modal");
}

export function closeSearchResultsModal() {
  hideModal("search-results-modal");
}

export default function SearchResultsModal() {
  const searchedProducts = useContext(ProductContext).searchedProducts;
  const isTouch = useContext(SystemPreferencesContext).isTouch;
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!isTouch) {
      sliderRef.current.addEventListener("mousemove", moveInDrag, false);
      sliderRef.current.addEventListener("mousedown", startDragging, false);
      sliderRef.current.addEventListener("mouseup", stopDragging, false);
      sliderRef.current.addEventListener("mouseleave", stopDragging, false);
    }

    return () => {
      if (!isTouch) {
        sliderRef.current.removeEventListener("mousemove", moveInDrag);
        sliderRef.current.removeEventListener("mousedown", startDragging);
        sliderRef.current.removeEventListener("mouseup", stopDragging);
        sliderRef.current.removeEventListener("mouseleave", stopDragging);
      }
    };
  }, [mouseDown]);

  return (
    <div className={searchedProducts.length > 0 ? "" : "hidden"}>
      <Modal id="search-results-modal" className={"md:w-[400px] h-[400px]"}>
        <div
          id="search-list"
          className={
            "h-full" + (isTouch ? " overflow-auto" : " overflow-hidden")
          }
          ref={sliderRef}
        >
          {searchedProducts.map((element, index) => {
            return (
              <div
                key={index}
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex my-2 space-x-2">
                  <div className="w-[20%]">
                    <img src={element.image} className="object-contain" />
                  </div>
                  <p className="line-clamp-2 w-[80%]">{element.title}</p>
                  <button onClick={() => navigate(`/products/${element.id}`)}>
                    <FaShoppingBag />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
