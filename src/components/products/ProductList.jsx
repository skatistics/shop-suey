import ProductItem from "./ProductItem";
import { useState } from "react";

function ProductList({ products, category = "" }) {
  const [productLimit, setProductLimit] = useState(12);
  const [loadMore, setLoadMore] = useState(true);
  let filteredProducts =
    category != ""
      ? products.filter((product) => product.category == category)
      : products;

  const filteredProductsLength = filteredProducts.length;

  function loadMoreProducts() {
    const tempLimit = productLimit + 12;
    if (tempLimit < filteredProductsLength) {
      setProductLimit(tempLimit);
    } else {
      setProductLimit(filteredProductsLength);
      setLoadMore(false);
    }
  }

  const limitedProducts = filteredProducts.filter(
    (product, index) => index < productLimit
  );

  return (
    <>
      <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
        {limitedProducts.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
      <div className="flex justify-center items-center">
        <button
          className={
            "mt-2 text-center font-medium text-ct-191A1B underline hover:text-ct-base-67A770 dark:text-ct-F2F7F2 dark:hover:text-ct-base-67A770" +
            (loadMore ? "" : " hidden")
          }
          onClick={() => loadMoreProducts()}
        >
          See More
        </button>
      </div>
    </>
  );
}

export default ProductList;
