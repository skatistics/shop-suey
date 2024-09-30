import ProductItem from "./ProductItem";
import { useState } from "react";

function ProductList({ products, category = "" }) {
  const [productLimit, setProductLimit] = useState(12);
  const [loadMore, setLoadMore] = useState(true);
  let filteredProducts = products;
  const filteredProductsLength = products.length;

  function loadMoreProducts() {
    const tempLimit = productLimit + 12;
    if (tempLimit < filteredProductsLength) {
      setProductLimit(tempLimit);
    } else {
      setProductLimit(filteredProductsLength);
      setLoadMore(false);
    }
  }

  if (category != "") {
    filteredProducts = products.filter(
      (product) => product.category == category
    );
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
            "text-center font-bold hover:text-ct-dark-green-4D774E dark:hover:text-ct-dark-green-164A41" +
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
