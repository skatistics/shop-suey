import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Modal, openModal, hideModal, DisabledBGModal } from "./CustomModal";
import { FaFacebook, FaGoogle } from "react-icons/fa";

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
        "top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded p-5 bg-slate-400"
      }
    >
      <button
        onClick={() => closeLoginSignupModal()}
        className="absolute top-4 right-4 w-7 h-7 rounded text-2xl text-white bg-slate-600 flex justify-center items-center"
      >
        <IoClose />
      </button>
      {modalState === "login" && (
        <div>
          <h1 className="text-2xl font-semibold mb-7 text-white"> Login </h1>
          <form className="w-[450px]">
            <div>
              <input
                className="w-full py-2 px-4 rounded bg-gray-500 text-white mb-5 focus:outline-none"
                type="email"
                placeholder="Enter user"
              />
            </div>

            <div>
              <input
                className="w-full py-2 px-4 rounded bg-gray-500 text-white mb-5 focus:outline-none"
                type="password"
                placeholder="Password"
              />
            </div>
          </form>
          <button className="w-full text-white py-2 px-4 rounded text-[15px] bg-ct-dark-green-9DC88D hover:bg-ct-dark-green-4D774E">
            Login to your account
          </button>

          <div className="mt-4">
            <p className="text-center">Login with</p>
            <div className="flex items-center justify-center pt-2">
              <a href="#">
                <FaFacebook className="size-[40px] text-[#1877F2] mr-6 hover:border-2 rounded-full" />
              </a>
              <a href="#">
                <FaGoogle className="size-[40px] text-[#DB4437] hover:border-2 rounded-full" />
              </a>
            </div>
          </div>
          <div className="text-center pt-4">Don't have an account yet?</div>
          <button
            className="w-full text-ct-dark-green-9DC88D px-4 rounded text-[15px] bg-transparent hover:underline hover:text-ct-light-olive-A3BCB6 text-bold font-bold"
            onClick={() => changeModalState("signup")}
          >
            Register
          </button>
        </div>
      )}
      {modalState === "signup" && (
        <div>
          <h1 className="text-2xl font-semibold mb-7 text-white"> Sign Up </h1>
          <form className="w-[450px]">
            <div>
              <input
                className="w-full py-2 px-4 rounded bg-gray-500 text-white mb-5 focus:outline-none"
                type="email"
                placeholder="Enter user"
              />
            </div>

            <div>
              <input
                className="w-full py-2 px-4 rounded bg-gray-500 text-white mb-5 focus:outline-none"
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
          <button className="w-full text-white py-2 px-4 rounded text-[15px] bg-ct-dark-green-9DC88D hover:bg-ct-dark-green-4D774E">
            Register your account
          </button>
          <div className="mt-4">
            <p className="text-center">Sign up with</p>
            <div className="flex items-center justify-center pt-2">
              <a href="#">
                <FaFacebook className="size-[40px] text-[#1877F2] mr-6 hover:border-2 rounded-full" />
              </a>
              <a href="#">
                <FaGoogle className="size-[40px] text-[#DB4437] hover:border-2 rounded-full" />
              </a>
            </div>
          </div>
          <button
            className="w-full text-ct-dark-green-9DC88D hover:text-ct-light-olive-A3BCB6 py-1 px-4 rounded text-[15px] bg-transparent hover:underline text-bold font-bold mt-4"
            onClick={() => changeModalState("login")}
          >
            Back to login
          </button>
        </div>
      )}
    </DisabledBGModal>
  );
}
