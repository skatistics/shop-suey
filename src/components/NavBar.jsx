import { Link } from "react-router-dom";
import { IoCart, IoSearch } from "react-icons/io5";
import { openLoginSignupModal } from "./modals/LoginSignupModal";
import Logo from "../assets/logo/logo.png";
import SearchBar from "./SearchBar";
import { toggleCartList } from "./modals/CartListModal";
import DarkModeToggle from "./DarkModeToggle";
import SearchResultsModal from "./modals/SearchResultsModal";
import { CartContext } from "./contexts/CartContextProvider";
import { useContext } from "react";

function NavBar({ setSearch }) {
  const totalCount = useContext(CartContext).totalCount;
  return (
    <div className="w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)] ">
      <div className="flex justify-between items-center text-ct-191819 font-medium bg-ct-F2F7F2 py-2 dark:text-ct-F2F7F2 dark:bg-ct-222824 transition-all duration-300">
        <div className="justify-center items-center ">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="size-[50px] ml-2" />
            <span className="hidden sm:inline px-2 font-ct-Teko text-2xl">
              Shopsuey
            </span>
          </Link>
        </div>
        {/* //SearchBar, SearchResult */}
        <div>
          <SearchBar setSearch={setSearch} />
          <SearchResultsModal />
        </div>

        {/* Cart, Login/Signup*/}
        <div className="flex justify-between items-center ">
          <button onClick={() => toggleCartList()} className="relative">
            <IoCart className="size-[30px] text-ct-191819 dark:text-ct-base-67A770" />
            <div className="text-center z-10 bg-ct-base-67A770 rounded-full -top-1 text-sm -right-2 size-5 absolute">
              {totalCount}
            </div>
          </button>

          <button onClick={() => openLoginSignupModal()} className="ml-4">
            <div className="hover:underline text-ct-191819 dark:text-ct-F2F7F2">
              <div>Login/</div>
              <div>Signup</div>
            </div>
          </button>
          {/* DarkMode */}
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
