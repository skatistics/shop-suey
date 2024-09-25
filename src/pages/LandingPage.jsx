import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";
import Footer from "../components/Footer";
import FeaturedBanner from "../components/products/FeaturedBanner";

function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [products]);

  return (
    <div>
      <FeaturedBanner />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default LandingPage;
