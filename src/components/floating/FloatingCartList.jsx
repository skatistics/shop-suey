import React, { useEffect, useState } from "react";
import { toggleCartList } from "../modals/CartListModal";
import { IoCart } from "react-icons/io5";
import { useCartContext } from "../contexts/CartContextProvider";

function FloatingCartList() {
  const { totalCount } = useCartContext();
  const [floatingCartList, floatCartList] = useState(false);

  function scrollHandler() {
    if (window.scrollY > 300) {
      floatCartList(true);
    } else {
      floatCartList(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="flex justify-between items-center">
      {floatingCartList && (
        <button
          onClick={() => toggleCartList()}
          className="fixed top-6 right-4 p-3 rounded-full  text-ct-1F331F bg-ct-F2F7F2 dark:text-ct-D9E8D9 dark:bg-ct-222824 dark:border-ct-0B0D0C dark:border-2 z-10"
        >
          <IoCart className="text-2xl" />
          <div className="text-center bg-ct-base-67A770  font-medium rounded-full top-1 text-sm right-0 size-5 absolute ">
            {totalCount}
          </div>
        </button>
      )}
    </div>
  );
}

export default FloatingCartList;
