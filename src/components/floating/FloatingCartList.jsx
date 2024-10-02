import React, { useContext, useEffect, useState } from "react";
import { toggleCartList } from "../modals/CartListModal";
import { IoCart } from "react-icons/io5";
import { CartContext } from "../contexts/CartContextProvider";

function FloatingCartList() {
  const totalCount = useContext(CartContext).totalCount;
  const [floatingCartList, floatCartList] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        floatCartList(true);
      } else {
        floatCartList(false);
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="flex justify-between items-center">
      {floatingCartList && (
        <button
          onClick={() => toggleCartList()}
          className="fixed top-6 right-4 p-3 rounded-full  text-ct-1F331F bg-ct-F2F7F2 dark:text-ct-D9E8D9 dark:bg-[#00ff3770] "
        >
          <IoCart className="text-2xl" />
          <div className="text-center z-10 bg-ct-base-67A770 rounded-full top-1 text-sm right-0 size-5 absolute ">
            {totalCount}
          </div>
        </button>
      )}
    </div>
  );
}

export default FloatingCartList;
