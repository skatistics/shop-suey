import React, { useEffect } from "react";
import {
  closeCategoryModal,
  toggleCategoryModal,
} from "../modals/CategoryModal";

function FloatingCategoryToggle() {
  useEffect(() => {
    const categoryToggle = document.getElementById("category-toggle");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            categoryToggle.classList.add("hidden");
            closeCategoryModal();
          } else {
            categoryToggle.classList.remove("hidden");
          }
        });
      },
      { threshold: 0 }
    );

    const bannerSection = document.getElementById("banner-section");
    if (bannerSection) {
      observer.observe(bannerSection);
    }
  }, []);

  return (
    <>
      <button
        id="category-toggle"
        className="fixed top-0 left-4 hidden rounded-full p-2 text-ct-1F331F bg-ct-F2F7F2 dark:text-ct-D9E8D9 dark:bg-[#00ff37] border-2 border-ct-base-67A770"
        onClick={() => toggleCategoryModal()}
      >
        Categories
      </button>
    </>
  );
}

export default FloatingCategoryToggle;
