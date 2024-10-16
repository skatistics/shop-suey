import React from "react";
import { useContext, createContext, useState, useEffect, useMemo } from "react";

const ProductContext = createContext([]);

export function useProductContext() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error(
      "useProductContext must be used within a useProductContext"
    );
  }
  return context;
}

export default function ProductContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const discountedProducts = useMemo(
    () => products.filter((product) => product.discount != undefined),
    [products]
  );

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
    )
      .then((res) => res.json())
      .then((data) => {
        return data["usd"]["php"];
      })
      .then((conversion) => {
        fetch("https://fakestoreapi.in/api/products?limit=150")
          .then((res) => res.json())
          .then((data) =>
            setProducts(
              data.products.map((product) => {
                return { ...product, price: product.price * conversion };
              })
            )
          );
      });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products/category")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        discountedProducts,
        categories,
        formatPHP,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
