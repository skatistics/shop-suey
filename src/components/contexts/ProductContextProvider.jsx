import React from "react";
import { createContext, useState, useEffect } from "react";
export const ProductContext = createContext([]);

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const [conversion, setConversion] = useState(0);
  const formatter = new Intl.NumberFormat("tl-PH", {
    style: "currency",
    currency: "PHP",
  });

  const formatPHP = (input) => {
    return formatter.format(input);
  };

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
    ).then((res) =>
      res.json().then((data) => {
        setConversion(data["usd"]["php"]);
      })
    );
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products?limit=150")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.products.map((product) => {
            return { ...product, price: product.price * conversion };
          })
        )
      );
  }, [conversion]);

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
        formatPHP,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
