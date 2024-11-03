import React from "react";
import Categories from "./Categories";
import { useProductContext } from "../contexts/ProductContextProvider";
export default function LeftSection() {
  const { categories } = useProductContext();
  return (
    <div
      id="left-section"
      className={
        "bg-ct-F2F7F2 text-ct-191819 font-medium dark:bg-ct-222824 dark:text-ct-F2F7F2  space-y-2 py-2 px-2 w-full ml-5 mr-3 flex flex-wrap justify-center items-center xl:block xl:rounded-xl transition-all duration-300"
      }
    >
      <div className="text-2xl text-center">Categories</div>
      <div className="hidden xl:block">
        <hr className="border-ct-black-19191A dark:border-ct-white-FEFCFF" />
      </div>

      <div className="flex flex-wrap justify-center items-center xl:block">
        <Categories
          categories={categories}
          className={"px-2 hover:underline"}
        />

        <div className="py-2 hidden xl:block">
          <hr className="border-ct-black-19191A dark:border-ct-white-FEFCFF" />
        </div>

        <div className="px-2">
          <a href="#banner-section" className="hover:underline">
            Featured
          </a>
        </div>
        <div className="px-2">
          <a href="#discounts" className="hover:underline">
            Discounts
          </a>
        </div>
      </div>
    </div>
  );
}
