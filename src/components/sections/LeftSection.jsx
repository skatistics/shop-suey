import React from "react";
import Categories from "../Categories";

export default function LeftSection({ categories }) {
  return (
    <div
      id="left-section"
      className={
        "bg-gray-400 dark:bg-gray-600 space-y-2 py-2 px-2 w-full ml-5 mr-3 flex flex-wrap justify-center items-center xl:block xl:rounded-xl"
      }
    >
      <div className="text-2xl text-center">Categories</div>
      <div className="flex flex-wrap justify-center items-center xl:block">
        <Categories categories={categories} className={"px-2"} />

        <div className="py-2 hidden xl:block">
          <hr className="border-ct-black-19191A dark:border-ct-white-FEFCFF" />
        </div>

        <span className="xl:hidden px-2">-</span>
        <div className="px-2">
          <a href="#discounts">Featured</a>
        </div>
        <div className="px-2">
          <a href="#discounts">Discounts</a>
        </div>
      </div>
    </div>
  );
}
