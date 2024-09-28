import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="grow flex justify-center">
      <div className="relative md:w-[400px] justify-between items-center">
        <input
          type="text"
          placeholder="Search"
          className="md:w-[400px] rounded-full px-3 bg-ct-white-FEFCFF dark:bg-ct-black-19191A"
        />
        <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-ct-dark-green-4D774E" />
      </div>
    </div>
  );
}

export default SearchBar;
