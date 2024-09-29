import { Link } from "react-router-dom";
import { IoCart, IoSearch } from "react-icons/io5";
import { openLoginSignupModal } from "./modals/LoginSignupModal";
import Logo from "../assets/logo/logo.png";
import SearchBar from "./SearchBar";
import { toggleCartList } from "./modals/CartList";
import DarkModeToggle from "./DarkModeToggle";

function NavBar() {
  return (
    <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">
      <div className="flex justify-between items-center text-[#101814] font-medium bg-ct-F2F7F2">
        <div className="justify-center items-center ">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="size-[70px] ml-2" />
            <span className="hidden sm:inline px-2">Shopsuey</span>
          </Link>
        </div>
        {/* //SearchBar */}
        <SearchBar />

        {/* Cart, Login/Signup*/}
        <div className="flex justify-between items-center">
          <button onClick={() => toggleCartList()} className="mx-4">
            <IoCart className="size-[30px]" />
          </button>
          <button onClick={() => openLoginSignupModal()} className="mx-4">
            <div className="">
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
