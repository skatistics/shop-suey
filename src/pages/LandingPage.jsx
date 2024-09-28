import { useState, useEffect } from "react";
import ProductList from "../components/products/ProductList";
import Footer from "../components/Footer";
import FeaturedBanner from "../components/products/FeaturedBanner";
import Vouchers from "../components/Vouchers";
import Categories from "../components/Categories";
import CategoryModal from "../components/modals/CategoryModal";

function LandingPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products?limit=150")
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
      <div className="flex flex-col-reverse xl:flex-row mx-auto">
        <Categories categories={categories} />
        <FeaturedBanner />
        <Vouchers />
      </div>

      <CategoryModal categories={categories} />
      <ProductList products={products} />
      <div className="text-center" id="category-tv">
        TV PRODUCTS
      </div>
      <ProductList products={products} category="tv" />
      <div className="text-center" id="category-audio">
        AUDIO PRODUCTS
      </div>
      <ProductList products={products} category="audio" />
      <div className="text-center" id="category-laptop">
        LAPTOPS
      </div>
      <ProductList products={products} category="laptop" />
      <div className="text-center" id="category-mobile">
        MOBILE PHONES
      </div>
      <ProductList products={products} category="mobile" />
      <div className="text-center" id="category-gaming">
        GAMING
      </div>
      <ProductList products={products} category="gaming" />
      <div className="text-center" id="category-appliances">
        APPLIANCES
      </div>
      <ProductList products={products} category="appliances" />
      <Footer />
    </div>
  );
}

export default LandingPage;
