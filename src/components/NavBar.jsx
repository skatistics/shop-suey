import { Link } from "react-router-dom";
import { IoCart, IoSearch } from "react-icons/io5";
import { openLoginSignupModal } from "./modals/LoginSignupModal";
import Logo from "../assets/logo/logo.png";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-ct-dark-green-4D774E text-ct-light-browngrey-3C403D font-bold dark:bg-ct-dark-green-164A41 dark:text-ct-light-tanly-DADED4 ">
        <div className="justify-center items-center ">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="size-[50px] ml-2" />
            <span className="hidden sm:inline px-2 hover:text-ct-light-tanly-DADED4 dark:hover:text-ct-dark-green-4D774E dark:hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
              Shopsuey
            </span>
          </Link>
        </div>
        {/* //SearchBar */}
        <SearchBar />

        {/* Cart, Login, DarkMode */}
        <div className="flex justify-between items-center">
          <a href="temp">
            <IoCart className="size-[30px] hover:text-ct-light-tanly-DADED4 dark:hover:text-ct-dark-green-4D774E dark:hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]" />
          </a>
          <button onClick={() => openLoginSignupModal()} className="p-4">
            <div className="hover:text-ct-light-tanly-DADED4 dark:hover:text-ct-dark-green-4D774E dark:hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
              <div>Login/</div>
              <div>Signup</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
