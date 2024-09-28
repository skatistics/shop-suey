import React from "react";

export default function Categories({ categories }) {
  return (
    <div id="categories" className="bg-red-400 px-5 rounded-md">
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
