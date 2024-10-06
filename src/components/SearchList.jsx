import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { SystemPreferencesContext } from "./contexts/SystemPreferencesContextProvider";
import { ProductContext } from "./contexts/ProductContextProvider";

function SearchList(
  { onMouseDown, onMouseMove, onMouseUp, onMouseLeave },
  ref
) {
  const searchedProducts = useContext(ProductContext).searchedProducts;
  const isTouch = useContext(SystemPreferencesContext).isTouch;
  const navigate = useNavigate();
  return (
    <div
      id="search-list"
      className={
        "max-h-[480px] px-2 bg-ct-F2F7F2 text-ct-0B0D0C dark:bg-ct-45634F dark:text-ct-F2F7F2 mt-2 shadow-lg" +
        (isTouch ? " overflow-auto" : " overflow-hidden")
      }
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {searchedProducts.map((element, index) => {
        return (
          <div
            key={index}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex my-2 space-x-2 px-1">
              <div className="size-[52px] flex items-center">
                <img src={element.image} className="object-contain" />
              </div>
              <div className="line-clamp-2 w-[calc(100%-90px)]">
                {element.title}
              </div>
              <button
                onClick={() => navigate(`/products/${element.id}`)}
                className="w-[38px] flex items-center justify-center"
              >
                <FaShoppingBag />
              </button>
            </div>
            {index < searchedProducts.length - 1 && <hr />}
          </div>
        );
      })}
    </div>
  );
}

export default React.forwardRef(SearchList);
