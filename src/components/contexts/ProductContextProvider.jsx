import React from "react";
import { createContext, useState, useEffect } from "react";
export const ProductContext = createContext([]);

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  // const [to, setTo] = useState("php");

  // useEffect(() => {
  //   fetch(
  //     "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
  //   ).then((res) =>
  //     res.json().then((data) => {
  //       setTo(data[from]);
  //     })
  //   );
  // }, [from]);

  // const convertCurrency = (amount) => {
  //   return (totalAmount * to).toFixed(2);
  // };

  // const numberFormat = (value) =>
  //   new Intl.NumberFormat("en-PH", {
  //     style: "currency",
  //     currency: "PHP",
  //   }).format(value);
  /** */

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

  useEffect(() => {
    if (products.length > 0) {
      const discounts = products.filter(
        (product) => product.discount != undefined
      );
      setDiscountedProducts(discounts);
    }
  }, [products]);

  useEffect(() => {
    if (search != "") {
      const filteredProducts = products.filter((product) =>
        productSearchFunction(product, search)
      );
      setSearchedProducts(filteredProducts);
    } else {
      setSearchedProducts([]);
    }
  }, [search]);

  const productSearchFunction = (product, searchInput) => {
    //To be improved
    if (product.title.toLowerCase().includes(searchInput.toLowerCase()))
      return true;
    if (product.category.toLowerCase().includes(searchInput.toLowerCase()))
      return true;

    return false;
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        discountedProducts,
        searchedProducts,
        categories,
        search,
        setSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
