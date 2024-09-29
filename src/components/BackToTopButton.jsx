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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full text-ct-1F331F bg-ct-F2F7F2 dark:text-ct-D9E8D9 dark:bg-[#00ff3770] "
        >
          <IoIosArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
