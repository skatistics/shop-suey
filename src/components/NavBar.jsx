import { Link } from "react-router-dom";
import { IoCart, IoSearch } from "react-icons/io5";
import { openLoginSignupModal } from "./login/LoginSignupModal";
import Logo from "../assets/logo/logo.png";

function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-ct-dark-green-4D774E text-ct-light-browngrey-3C403D font-bold dark:bg-ct-dark-green-164A41 dark:text-ct-light-tanly-DADED4 ">
        <div className="justify-center items-center ">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="size-[50px]" />
            <span className="hidden sm:inline px-2 hover:text-ct-light-tanly-DADED4 dark:hover:text-ct-dark-green-4D774E dark:hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
              Shopsuey
            </span>
          </Link>
        </div>
        {/* //SearchBar */}
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

        {/* Cart, Login, DarkMode */}
        <div className="flex justify-between items-center">
          <a href="#">
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
