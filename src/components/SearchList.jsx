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
      className={"h-full" + (isTouch ? " overflow-auto" : " overflow-hidden")}
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
  );
}

export default React.forwardRef(SearchList);
