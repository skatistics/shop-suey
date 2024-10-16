import { useContext, createContext, useState, useEffect, useMemo } from "react";
import { useProductContext } from "./ProductContextProvider";

const SearchContext = createContext(null);

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a useSearchContext");
  }
  return context;
}

export default function SearchContextProvider({ children }) {
  const { products } = useProductContext();
  const [search, setSearch] = useState("");
  const searchedProducts =
    search != ""
      ? products.filter((product) => productSearchFunction(product, search))
      : [];

  function productSearchFunction(product, searchInput) {
    //To be improved
    if (product.title.toLowerCase().includes(searchInput.toLowerCase()))
      return true;
    if (product.category.toLowerCase().includes(searchInput.toLowerCase()))
      return true;

    return false;
  }
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        searchedProducts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
