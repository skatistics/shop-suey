import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="grow flex justify-center">
      <div className="relative md:w-[400px] justify-between items-center">
        <input
          type="text"
          placeholder="Search"
          className="md:w-[400px] rounded-full border-2 border-ct-080D08 px-3 text-ct-080D08"
        />
        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
      </div>
    </div>
  );
}

export default SearchBar;
