import React from "react";
import ProductList from "../products/ProductList";
export default function ProductSection({ categories, products }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <div key={`category-${category}`}>
            <div
              className="text-center bg-ct-F2F7F2 text-ct-191819 font-medium p-2 w-[50%] mx-auto border-2  rounded-md dark:bg-ct-222824 dark:text-ct-F2F7F2 mb-4"
              id={`category-${category}`}
            >
              {category.toUpperCase()}
            </div>
            <ProductList products={products} category={category} />
          </div>
        );
      })}
    </>
  );
}
