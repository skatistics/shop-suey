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
          className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-ct-dark-green-9DC88D text-ct-light-browngrey-3C403D dark:bg-ct-dark-green-164A41 dark:text-ct-light-tanly-DADED4"
        >
          <IoIosArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
