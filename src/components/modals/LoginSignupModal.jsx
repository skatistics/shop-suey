import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Modal, openModal, hideModal, DisabledBGModal } from "./CustomModal";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export function openLoginSignupModal() {
  openModal("login-signup-modal");
}

export default function LoginSignupModal() {
  const [modalState, setModalState] = useState("login");

  function changeModalState(input) {
    setModalState(input);
  }

  function closeLoginSignupModal() {
    hideModal("login-signup-modal");
    setModalState("login");
  }

  return (
    <DisabledBGModal
      id="login-signup-modal"
      className={
        "top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded p-5 bg-ct-D9E8D9 dark:bg-ct-191819 text-ct-0B0D0C dark:text-ct-F2F7F2 z-50"
      }
    >
      <button
        onClick={() => closeLoginSignupModal()}
        className="absolute top-4 right-4 w-7 h-7 rounded text-2xl flex justify-center items-center"
      >
        <IoClose />
      </button>
      {modalState === "login" && (
        <div>
          <h1 className="text-2xl font-semibold mb-7"> Login </h1>
          <form className="w-[450px]">
            <div>
              <input
                className="w-full py-2 px-4 rounded bg-gray-200 dark:bg-gray-800 mb-5 focus:outline-none"
                type="email"
                placeholder="Enter user"
              />
            </div>

            <div>
              <input
                className="w-full py-2 px-4 rounded bg-gray-200 dark:bg-gray-800 mb-5 focus:outline-none"
                type="password"
                placeholder="Password"
                autoComplete="on"
              />
            </div>
          </form>
          <button className="w-full py-2 px-4 rounded text-[15px] bg-ct-8DB98E dark:bg-ct-45634F">
            Login to your account
          </button>

          <div className="mt-4">
            <p className="text-center">Login with</p>
            <div className="flex items-center justify-center pt-2">
              <a href="#">
                <FaFacebook className="size-[40px] text-[#1877F2] mr-6 hover:border-2 rounded-full" />
              </a>
              <a href="#">
                <FcGoogle className="size-[40px] hover:border-2 rounded-full" />
              </a>
            </div>
          </div>
          <div className="text-center pt-4 text-ct-base-67A770">
            Don't have an account yet?
          </div>
          <button
            className="w-full text-ct-base-67A770 hover:text-ct-2F4C2F dark:hover:text-ct-A6C9A7  px-4 mt-2 rounded text-[15px] bg-transparent hover:underline text-bold font-bold"
            onClick={() => changeModalState("signup")}
          >
            Register
          </button>
        </div>
      )}
      {modalState === "signup" && (
        <div>
          <h1 className="text-2xl font-semibold mb-7"> Sign Up </h1>
          <form className="w-[450px]">
            <div>
              <input
                className="w-full py-2 px-4 rounded bg-gray-200 dark:bg-gray-800 mb-5 focus:outline-none"
                type="email"
                placeholder="Enter user"
              />
            </div>

            <div>
              <input
                className="w-full py-2 px-4 rounded bg-gray-200 dark:bg-gray-800 mb-5 focus:outline-none"
                type="password"
                placeholder="Password"
              />
            </div>
          </form>
          <div className="flex items-center justify-center m-1">
            <input type="checkbox" className="mr-1" />
            <p className="text-xs">
              By creating an account, you agree to our
              <a href="#" className="text-blue-600 px-1 hover:underline">
                Terms of Use
              </a>
              and
              <a href="#" className="text-blue-600 px-1 hover:underline">
                Privacy Policy.
              </a>
            </p>
          </div>
          <button className="w-full py-2 px-4 rounded text-[15px] bg-ct-8DB98E dark:bg-ct-45634F">
            Register your account
          </button>
          <div className="mt-4">
            <p className="text-center">Sign up with</p>
            <div className="flex items-center justify-center pt-2">
              <a href="#">
                <FaFacebook className="size-[40px] text-[#1877F2] mr-6 hover:border-2 rounded-full" />
              </a>
              <a href="#">
                <FcGoogle className="size-[40px] text-[#DB4437] hover:border-2 rounded-full" />
              </a>
            </div>
          </div>
          <button
            className="w-full text-ct-base-67A770 hover:text-ct-2F4C2F dark:hover:text-ct-A6C9A7 py-1 px-4 rounded text-[15px] bg-transparent hover:underline text-bold font-bold mt-4"
            onClick={() => changeModalState("login")}
          >
            Back to login
          </button>
        </div>
      )}
    </DisabledBGModal>
  );
}
