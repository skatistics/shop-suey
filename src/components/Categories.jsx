import React from "react";

export default function Categories({ categories, className }) {
  return (
    <div
      id="categories"
      className={
        "bg-yellow-300 w-56 px-5 rounded-md hidden" +
        (className ? " " + className : "")
      }
    >
      <span className="text-3xl">Categories</span>
      <div className="px-2">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <a href={`#category-${category}`}>{category}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
