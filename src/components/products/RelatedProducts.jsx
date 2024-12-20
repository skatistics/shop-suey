import React from "react";
import ProductList from "./ProductList";

export default function RelatedProducts({ products, currentProduct }) {
  const filteredProducts = products.filter(
    (product) => product.id != currentProduct.id
  );

  return (
    <div className="sm:container mx-auto p-5">
      <div className="text-center bg-ct-F2F7F2 text-ct-191819 font-medium p-2 w-[50%] mx-auto border-2  rounded-md dark:bg-ct-222824 dark:text-ct-F2F7F2 dark:border-ct-0B0D0C mb-4">
        Related Products
      </div>
      <ProductList
        products={filteredProducts}
        category={currentProduct.category}
      />
    </div>
  );
}
