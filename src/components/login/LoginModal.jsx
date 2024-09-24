import React from "react";
import Modal from "./Modal";
import { openModal } from "./Modal";

export function openLoginModal(){
    openModal("login-modal");
}

export default function LoginModal ({children, id}){
    return (
        <Modal id="login-modal">
            <h1 className="text-2xl font-semibold mb-7 text-white"> Login </h1>
            <form className="w-[450px]">
                <div>
                    <input className="w-full py-2 px-4 rounded bg-gray-500 text-white mb-5 focus:outline-none" type="email" placeholder="Enter user"/>
                </div>

                <div>
                    <input className="w-full py-2 px-4 rounded bg-gray-500 text-white mb-5 focus:outline-none" type="password" placeholder="Password"/>
                </div>
            </form>
            <button className="w-full text-white py-2 px-4 rounded text-[15px] bg-blue-600">
                Login to your account
            </button>
        </Modal>
    )
}