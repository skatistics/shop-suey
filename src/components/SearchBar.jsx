import { IoSearch } from "react-icons/io5";
import {
  openSearchResultsModal,
  closeSearchResultsModal,
} from "./modals/SearchResultsModal";
import { useContext } from "react";
import { ProductContext } from "./contexts/ProductContextProvider";

function SearchBar() {
  const setSearch = useContext(ProductContext).setSearch;
  return (
    <div className="grow flex justify-center">
      <div className="relative md:w-[400px] justify-between items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[100px] sm:w-[300px]  md:w-[400px] rounded-full border-2 border-ct-080D08 px-3 text-ct-080D08"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={(e) => openSearchResultsModal(e.target.value)}
        />
        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-ct-191819" />
      </div>
    </div>
  );
}

export default SearchBar;
