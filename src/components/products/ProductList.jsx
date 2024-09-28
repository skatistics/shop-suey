import ProductItem from "./ProductItem";

function ProductList({ products, category = "" }) {
  let filteredProducts = products;

  if (category != "") {
    filteredProducts = products.filter(
      (product) => product.category == category
    );
  }

  return (
    <div className="md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
      {filteredProducts.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
