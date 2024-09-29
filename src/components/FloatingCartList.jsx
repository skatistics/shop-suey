import React, { useEffect, useState } from "react";
import { toggleCartList } from "./modals/CartList";
import { IoCart } from "react-icons/io5";

function FloatingCartList() {
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
        <button onClick={() => toggleCartList()}>
          <IoCart className="fixed top-10 right-4 size-[30px] hover:text-ct-light-tanly-DADED4 dark:hover:text-ct-dark-green-4D774E dark:hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]" />
        </button>
      )}
    </div>
  );
}

export default FloatingCartList;
