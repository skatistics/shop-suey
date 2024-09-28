import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";
import Footer from "../components/Footer";
import FeaturedBanner from "../components/products/FeaturedBanner";
import Categories from "../components/Categories";
import CategoryModal from "../components/modals/CategoryModal";

function LandingPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products/category")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div className="space-y-6">
      <div className="md:container xl:flex mx-auto">
        <Categories categories={categories} />
        <FeaturedBanner />
        <div id="utility-section" className="bg-blue-400 w-56">
          <div className="text-3xl">Brainded</div>
          <div className="text-3xl">Brainded</div>
          <div className="text-3xl">Brainded</div>
          <div className="text-3xl">Brainded</div>
          <div className="text-3xl">Brainded</div>
        </div>
      </div>

      <CategoryModal categories={categories} />
      <ProductList products={products} />
      <span id="tv">CATEGORY TV</span>
      <ProductList products={products} category="tv" />
      <span id="audio">CATEGORY AUDIO</span>
      <ProductList products={products} category="audio" />
      <Footer />
    </div>
  );
}

export default LandingPage;
