import { IoCart, IoSearch } from "react-icons/io5";
import { openLoginSignupModal } from "./login/LoginSignupModal";
import Logo from "../assets/logo/logo.png";

function NavBar() {
  return (
    <div>
      <div className="flex justify-between items-center bg-ct-dark-green-4D774E text-ct-light-browngrey-3C403D font-bold dark:bg-ct-dark-green-164A41 dark:text-ct-light-tanly-DADED4 ">
        <div className="justify-center items-center ">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="logo" className="size-[50px]" />
            <span className="hidden sm:inline px-2 hover:text-ct-light-tanly-DADED4 dark:hover:text-ct-dark-green-4D774E dark:hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
              Shopsuey
            </span>
          </a>
        </div>
        {/* //SearchBar */}
        <div className="grow flex justify-center">
          <div className="relative md:w-[400px] justify-between items-center">
            <input
              type="text"
              placeholder="search"
              className="md:w-[400px] rounded-full px-2"
            />
            <IoSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-ct-dark-green-4D774E " />
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
