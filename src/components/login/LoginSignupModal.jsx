import React from "react";
import Modal from "./Modal";
import { openModal } from "./Modal";

export function openLoginSignupModal() {
  openModal("login-signup-modal");
}

export default function LoginSignupModal({ children, id }) {
  const [modalState, setModalState] = useState("login");

  return (
    <Modal id="login-signup-modal">
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
          <button className="w-full text-white py-2 px-4 rounded text-[15px] bg-blue-600">
            Login to your account
          </button>
        </div>
      )}
    </Modal>
  );
}
