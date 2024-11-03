import { IoSearch } from "react-icons/io5";
import {
  openSearchResultsModal,
  closeSearchResultsModal,
} from "../modals/SearchResultsModal";
import { useSearchContext } from "../contexts/SearchContextProvider";

function SearchBar() {
  const { setSearch } = useSearchContext();
  let timeout = null;

  function handleSearch(input) {
    clearTimeout(timeout);

    //Wait for user to stop typing before searching
    timeout = setTimeout(function () {
      setSearch(input);
      openSearchResultsModal();
      if (input == "") {
        closeSearchResultsModal();
      }
    }, 500);
  }
  return (
    <div className="grow flex justify-center">
      <div className="relative md:w-[400px] justify-between items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[100px] sm:w-[300px]  md:w-[400px] rounded-full border-2 border-ct-080D08 px-3 text-ct-080D08"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-ct-191819" />
      </div>
    </div>
  );
}

export default SearchBar;
