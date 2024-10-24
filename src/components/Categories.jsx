import React from "react";

export default function Categories({ categories, className, onClick }) {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <div key={index}>
            <a
              href={`#category-${category}`}
              onClick={onClick}
              className={"" + (className ? " " + className : "")}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </a>
          </div>
        );
      })}
    </>
  );
}
