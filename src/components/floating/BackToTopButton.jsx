import React from "react";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div>
      {backToTopButton && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0 })}
          className="fixed top-6 right-[70px] p-3 rounded-full text-ct-1F331F bg-ct-F2F7F2 dark:text-ct-D9E8D9 dark:bg-ct-222824 dark:border-ct-0B0D0C dark:border-2"
        >
          <IoIosArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
