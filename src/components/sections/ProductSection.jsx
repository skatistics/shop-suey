import React from "react";
import ProductList from "../products/ProductList";
export default function ProductSection({ categories, products }) {
  return (
    <>
      {categories.map((category) => {
        return (
          <div key={`category-${category}`}>
            <div className="text-center" id={`category-${category}`}>
              {category.toUpperCase()}
            </div>
            <ProductList products={products} category={category} />
          </div>
        );
      })}
    </>
  );
}
