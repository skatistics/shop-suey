import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";

function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [products]);
  return <ProductList products={products} />;
}

export default LandingPage;
