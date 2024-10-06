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
import CartListModal from "../components/modals/CartListModal";
import FloatingCartList from "../components/floating/FloatingCartList";
import { CartContext } from "../components/contexts/CartContextProvider";

function LandingPage() {
  const products = useContext(ProductContext).products;
  const discountedProducts = useContext(ProductContext).discountedProducts;
  const categories = useContext(ProductContext).categories;
  const checkOutStatus = useContext(CartContext).checkOutStatus;
  const setCheckOutStatus = useContext(CartContext).setCheckOutStatus;
  // useEffect(() => {
  //   if (checkOutStatus == true) {
  //     setCheckOutStatus(false);
  //     setTimeout(() => window.alert("hakdog"), 500);
  //   }
  // }, []);
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
      <CartListModal />
      <FloatingCartList />
      <div
        className="text-center bg-ct-F2F7F2 text-ct-191819 font-medium p-2 w-[50%] mx-auto border-2  rounded-md dark:bg-ct-222824 dark:text-ct-F2F7F2 mb-4"
        id="discounts"
      >
        Discounted Products
      </div>
      <ProductList products={discountedProducts} />
      <ProductSection categories={categories} products={products} />
      <Footer />
    </div>
  );
}

export default LandingPage;
