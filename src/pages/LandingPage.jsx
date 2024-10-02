import { useState, useEffect, useContext } from "react";
import ProductList from "../components/products/ProductList";
import Footer from "../components/Footer";
import FeaturedBanner from "../components/products/FeaturedBanner";
import CategoryModal from "../components/modals/CategoryModal";
import LeftSection from "../components/sections/LeftSection";
import RightSection from "../components/sections/RightSection";
import { ProductContext } from "../components/contexts/ProductContextProvider";

function LandingPage() {
  const products = useContext(ProductContext).products;
  const discountedProducts = useContext(ProductContext).discountedProducts;
  const categories = useContext(ProductContext).categories;
  return (
    <div className="space-y-6">
      <div className="flex flex-col-reverse xl:flex-row mx-auto">
        <div className="w-full xl:w-[15%] flex justify-center items-center">
          <LeftSection categories={categories} />
        </div>
        <div className="w-full xl:w-[70%] flex justify-center items-center">
          <FeaturedBanner />
        </div>
        <div className="w-full xl:w-[15%] flex justify-center items-center">
          <RightSection />
        </div>
      </div>
      <CategoryModal categories={categories} />
      <ProductList products={discountedProducts} />
      <div
        className="text-center bg-ct-F2F7F2 text-ct-191819 font-medium p-2 w-[50%] mx-auto border-2  rounded-md dark:bg-gray-600"
        id="category-tv"
      >
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
