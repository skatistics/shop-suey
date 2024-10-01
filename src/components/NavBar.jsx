import { Link } from "react-router-dom";
import { IoCart, IoSearch } from "react-icons/io5";
import { openLoginSignupModal } from "./modals/LoginSignupModal";
import Logo from "../assets/logo/logo.png";
import SearchBar from "./SearchBar";
import { toggleCartList } from "./modals/CartListModal";
import DarkModeToggle from "./DarkModeToggle";
import SearchResultsModal from "./modals/SearchResultsModal";

function NavBar({ setSearch }) {
  return (
    <div className="w-full drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">
      <div className="flex justify-between items-center text-ct-080D08 font-medium bg-ct-F2F7F2 py-2 dark:text-ct-F2F7F2 dark:bg-[#222824]">
        <div className="justify-center items-center ">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="size-[50px] ml-2" />
            <span className="hidden sm:inline px-2 font-ct-Teko text-2xl">
              Shopsuey
            </span>
          </Link>
        </div>
        {/* //SearchBar, SearchResult */}
        <div className="">
          <SearchBar setSearch={setSearch} />
          <SearchResultsModal />
        </div>

        {/* Cart, Login/Signup*/}
        <div className="flex justify-between items-center">
          <button onClick={() => toggleCartList()} className="mx-4">
            <IoCart className="size-[30px] dark:text-[#00ff3770]" />
          </button>
          <button onClick={() => openLoginSignupModal()} className="mx-4">
            <div className="hover:underline">
              <div>Login/</div>
              <div>Signup</div>
            </div>
          </button>
          {/* DarkMode */}
          {/* <DarkModeToggle /> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
