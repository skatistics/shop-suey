import { useState, useEffect, useContext } from "react";
import ProductList from "../components/products/ProductList";
import Footer from "../components/Footer";
import FeaturedBanner from "../components/products/FeaturedBanner";
import CategoryModal from "../components/modals/CategoryModal";
import LeftSection from "../components/sections/LeftSection";
import RightSection from "../components/sections/RightSection";
import { ProductContext } from "../components/contexts/ProductContextProvider";
import ProductSection from "../components/sections/ProductSection";
import FloatingCategoryToggle from "../components/floating/FloatingCategoryToggle";

function LandingPage() {
  const products = useContext(ProductContext).products;
  const discountedProducts = useContext(ProductContext).discountedProducts;
  const categories = useContext(ProductContext).categories;
  return (
    <div className="space-y-6">
      <div
        className="flex flex-col-reverse xl:flex-row mx-auto"
        id="banner-section"
      >
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
      <FloatingCategoryToggle />
      <CategoryModal />
      <ProductList products={discountedProducts} />
      <ProductSection categories={categories} products={products} />
      <Footer />
    </div>
  );
}

export default LandingPage;
