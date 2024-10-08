import { useContext, useEffect, useState, useRef } from "react";
import { Modal, hideModal, openModal } from "./CustomModal";
import { SystemPreferencesContext } from "../contexts/SystemPreferencesContextProvider";
import SearchList from "../SearchList";

export function openSearchResultsModal() {
  const full = document.getElementById("search-results-modal-full");
  openModal("search-results-modal");
  if (full) {
    openModal("search-results-modal-full");
  }
}

export function closeSearchResultsModal() {
  const full = document.getElementById("search-results-modal-full");
  hideModal("search-results-modal");
  if (full) {
    openModal("search-results-modal-full");
  }
}

export default function SearchResultsModal({ full = false }) {
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
    <div className={full ? "md:hidden" : "hidden md:block"}>
      <Modal
        id={"search-results-modal" + (full ? "-full" : "")}
        className={"h-auto top-14" + (full ? " w-full" : " w-[400px]")}
      >
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
